import { createHash, randomUUID, timingSafeEqual } from "node:crypto";
import express from "express";
import pg from "pg";

const { Pool } = pg;
const app = express();
const port = Number(process.env.PORT || 3000);
const projectIds = [
  "mlab-best-soap",
  "agromboa-direct",
  "savoirs-en-mouvement",
  "restart-mobile",
  "agripulse-local",
  "naya-racines"
];
const successfulStatuses = new Set(["COMPLETED", "SUCCESS"]);
const finalStatuses = new Set([...successfulStatuses, "FAILED", "CANCELLED", "REFUNDED"]);
const allowedOrigins = new Set(
  (process.env.ALLOWED_ORIGINS || "https://le-el-k.github.io")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean)
);

if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is required.");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.PGSSLMODE === "disable" ? false : { rejectUnauthorized: false }
});

app.disable("x-powered-by");
app.use((request, response, next) => {
  const origin = request.headers.origin;
  if (origin && !allowedOrigins.has(origin)) {
    return response.status(403).json({ message: "Origine non autorisée." });
  }
  if (origin) {
    response.setHeader("Access-Control-Allow-Origin", origin);
    response.setHeader("Vary", "Origin");
    response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type");
  }
  if (request.method === "OPTIONS") return response.sendStatus(204);
  next();
});
app.use(express.json({ limit: "16kb" }));

class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

async function initializeDatabase() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS vote_orders (
      order_id TEXT PRIMARY KEY,
      project_id TEXT NOT NULL,
      amount BIGINT NOT NULL CHECK (amount >= 100),
      currency TEXT NOT NULL DEFAULT 'XAF',
      status TEXT NOT NULL DEFAULT 'PENDING',
      transaction_reference TEXT UNIQUE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);
}

let cachedAccessToken = "";
let tokenExpiresAt = 0;

async function getSoleasAccessToken() {
  if (cachedAccessToken && tokenExpiresAt > Date.now() + 30_000) return cachedAccessToken;
  const clientId = process.env.SP_CLIENT_ID;
  const clientSecret = process.env.SP_CLIENT_SECRET;
  if (!clientId || !clientSecret) throw new ApiError(503, "La vérification SoleasPay n'est pas configurée.");

  const response = await fetch("https://account.mysoleas.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ sp_client_id: clientId, sp_client_secret: clientSecret }),
    signal: AbortSignal.timeout(12_000)
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || !payload.access_token) {
    throw new ApiError(502, "Impossible d'obtenir le jeton de vérification SoleasPay.");
  }

  cachedAccessToken = payload.access_token;
  const documentedExpiry = Number(payload.token_expired_at) * 1000;
  tokenExpiresAt = Number.isFinite(documentedExpiry) && documentedExpiry > Date.now()
    ? documentedExpiry
    : Date.now() + 4 * 60_000;
  return cachedAccessToken;
}

async function fetchSoleasTransaction(transactionReference) {
  const accessToken = await getSoleasAccessToken();
  const response = await fetch("https://api.mysoleas.com/collection/status", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-sp-auth-token": `Bearer ${accessToken}`
    },
    body: JSON.stringify({ transaction_reference: transactionReference }),
    signal: AbortSignal.timeout(12_000)
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || payload.success === false) {
    throw new ApiError(response.status === 404 ? 404 : 502, "La transaction n'a pas pu être vérifiée auprès de SoleasPay.");
  }

  const transaction = payload?.data?.transaction || payload?.data?.data || payload?.data || payload;
  if (!transaction || typeof transaction !== "object") {
    throw new ApiError(502, "SoleasPay a renvoyé une réponse de transaction inexploitable.");
  }
  return transaction;
}

async function getProjectVoteCount(projectId) {
  const result = await pool.query(
    "SELECT FLOOR(SUM(amount)::NUMERIC / 100)::BIGINT AS count FROM vote_orders WHERE project_id = $1 AND status IN ('COMPLETED', 'SUCCESS')",
    [projectId]
  );
  return Number(result.rows[0].count || 0);
}

async function saveVerifiedTransaction(order, transaction) {
  const transactionReference = String(transaction.transaction_reference || "");
  const status = String(transaction.status || "").toUpperCase();
  if (!transactionReference || !finalStatuses.has(status)) {
    return { confirmed: false, pending: true, status: status || "PENDING", projectId: order.project_id };
  }
  if (transaction.invoice_reference !== order.order_id) {
    throw new ApiError(409, "La référence de facture ne correspond pas à cette commande.");
  }
  if (String(transaction.operation || "").toUpperCase() !== "COLLECTION") {
    throw new ApiError(409, "Cette transaction n'est pas un paiement entrant.");
  }
  if (String(transaction.currency || "").toUpperCase() !== order.currency || Number(transaction.amount) !== Number(order.amount)) {
    throw new ApiError(409, "Le montant ou la devise ne correspond pas à cette commande.");
  }

  let saved;
  try {
    saved = await pool.query(
      `UPDATE vote_orders
         SET transaction_reference = $2, status = $3, updated_at = NOW()
       WHERE order_id = $1 AND (transaction_reference IS NULL OR transaction_reference = $2)
       RETURNING project_id, status`,
      [order.order_id, transactionReference, status]
    );
  } catch (error) {
    if (error.code === "23505") throw new ApiError(409, "Cette transaction est déjà rattachée à une autre commande.");
    throw error;
  }
  if (!saved.rowCount) {
    throw new ApiError(409, "Cette transaction est déjà rattachée à une autre commande.");
  }

  return {
    confirmed: successfulStatuses.has(status),
    pending: false,
    status,
    projectId: saved.rows[0].project_id,
    count: await getProjectVoteCount(saved.rows[0].project_id)
  };
}

app.get("/api/health", async (_request, response, next) => {
  try {
    await pool.query("SELECT 1");
    response.json({ ok: true });
  } catch (error) {
    next(error);
  }
});

app.get("/api/votes/counts", async (_request, response, next) => {
  try {
    const result = await pool.query(
      "SELECT project_id, FLOOR(SUM(amount)::NUMERIC / 100)::BIGINT AS count FROM vote_orders WHERE status IN ('COMPLETED', 'SUCCESS') GROUP BY project_id"
    );
    const counts = Object.fromEntries(projectIds.map((projectId) => [projectId, 0]));
    for (const row of result.rows) counts[row.project_id] = row.count;
    response.setHeader("Cache-Control", "no-store");
    response.json({ counts });
  } catch (error) {
    next(error);
  }
});

app.post("/api/votes/checkout", async (request, response, next) => {
  try {
    if (!process.env.SP_CLIENT_ID || !process.env.SP_CLIENT_SECRET || !process.env.SOLEASPAY_WEBHOOK_TOKEN) {
      throw new ApiError(503, "La vérification des transactions n'est pas encore configurée.");
    }
    const projectId = String(request.body?.projectId || "");
    const amount = Number(request.body?.amount);
    if (!projectIds.includes(projectId)) throw new ApiError(400, "Projet invalide.");
    if (!Number.isSafeInteger(amount) || amount < 100) throw new ApiError(400, "Le montant minimum est de 100 FCFA.");

    const orderId = `ELA-${randomUUID()}`;
    await pool.query(
      "INSERT INTO vote_orders (order_id, project_id, amount) VALUES ($1, $2, $3)",
      [orderId, projectId, amount]
    );
    response.status(201).json({ orderId });
  } catch (error) {
    next(error);
  }
});

app.post("/api/votes/confirm", async (request, response, next) => {
  try {
    const orderId = String(request.body?.orderId || "");
    const transactionReference = String(request.body?.transactionReference || "");
    if (!orderId || !transactionReference || orderId.length > 100 || transactionReference.length > 150) {
      throw new ApiError(400, "Références de paiement manquantes ou invalides.");
    }

    const orderResult = await pool.query("SELECT * FROM vote_orders WHERE order_id = $1", [orderId]);
    const order = orderResult.rows[0];
    if (!order) throw new ApiError(404, "Commande de vote introuvable.");

    const transaction = await fetchSoleasTransaction(transactionReference);
    if (String(transaction.transaction_reference || "") !== transactionReference) {
      throw new ApiError(409, "La référence vérifiée ne correspond pas à la transaction reçue.");
    }
    const result = await saveVerifiedTransaction(order, transaction);
    if (result.pending) return response.status(202).json(result);
    response.setHeader("Cache-Control", "no-store");
    response.json(result);
  } catch (error) {
    next(error);
  }
});

app.post("/api/webhooks/soleaspay", async (request, response, next) => {
  try {
    const webhookToken = process.env.SOLEASPAY_WEBHOOK_TOKEN;
    const suppliedHash = String(request.get("x-private-key") || "").toLowerCase();
    if (!webhookToken) throw new ApiError(503, "La vérification du webhook n'est pas configurée.");
    const expectedHash = createHash("sha256").update(webhookToken).digest();
    const receivedHash = /^[a-f0-9]{64}$/.test(suppliedHash) ? Buffer.from(suppliedHash, "hex") : Buffer.alloc(0);
    if (receivedHash.length !== expectedHash.length || !timingSafeEqual(receivedHash, expectedHash)) {
      throw new ApiError(401, "Signature webhook invalide.");
    }

    const transactionReference = String(request.body?.transaction_reference || request.body?.data?.transaction_reference || "");
    if (!transactionReference || transactionReference.length > 150) {
      throw new ApiError(400, "Référence de transaction manquante.");
    }
    const transaction = await fetchSoleasTransaction(transactionReference);
    const orderId = String(transaction.invoice_reference || "");
    if (!orderId) return response.status(200).json({ received: true });
    const orderResult = await pool.query("SELECT * FROM vote_orders WHERE order_id = $1", [orderId]);
    if (!orderResult.rows[0]) return response.status(200).json({ received: true });
    await saveVerifiedTransaction(orderResult.rows[0], transaction);
    response.status(200).json({ received: true });
  } catch (error) {
    next(error);
  }
});

app.use((error, _request, response, _next) => {
  const status = Number(error.status) || 500;
  if (status >= 500) console.error("API request failed:", error.message);
  response.status(status).json({
    message: status >= 500 ? "Le service de vote est momentanément indisponible." : error.message
  });
});

await initializeDatabase();
app.listen(port, "0.0.0.0", () => console.log(`ÉLANOVA vote API listening on port ${port}`));
