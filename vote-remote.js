(() => {
  // ====================================================================
  // CONFIGURATION — à remplir (voir les étapes dans le README ou le chat)
  // --------------------------------------------------------------------
  // Collez ici l'URL de votre base Firebase Realtime Database.
  // Exemple : "https://elanova-votes-default-rtdb.firebaseio.com"
  // Tant que cette valeur reste vide, le site retombe sur le comptage
  // local (par appareil), exactement comme avant.
  const REMOTE_BASE_URL = "https://elanova-vote-default-rtdb.europe-west1.firebasedatabase.app";
  // ====================================================================

  const ROOT_PATH = "elanova-votes";
  const REQUEST_TIMEOUT = 8000;

  function isConfigured() {
    return typeof REMOTE_BASE_URL === "string" && /^https:\/\/.+/i.test(REMOTE_BASE_URL);
  }

  function baseUrl() {
    return REMOTE_BASE_URL.replace(/\/+$/, "");
  }

  // Les clés Firebase ne peuvent pas contenir . # $ [ ] / — on nettoie
  // la référence de transaction tout en gardant l'originale dans l'objet.
  function safeKey(reference) {
    return String(reference).replace(/[.#$/\[\]]/g, "_").slice(0, 200) || "ref";
  }

  async function fetchJson(url, options) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);
    try {
      const response = await fetch(url, { ...options, signal: controller.signal });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const text = await response.text();
      return text ? JSON.parse(text) : null;
    } finally {
      clearTimeout(timer);
    }
  }

  // Calcule les voix par projet à partir du dictionnaire de transactions.
  // Même règle que le stockage local : montant >= 100 FCFA, 1 voix / 100 FCFA.
  function scoresFromTransactions(transactions, projectIds) {
    const totals = Object.fromEntries(projectIds.map((id) => [id, 0]));
    Object.values(transactions || {}).forEach((transaction) => {
      if (!transaction || !Object.prototype.hasOwnProperty.call(totals, transaction.projectId)) return;
      const amount = Number(transaction.amount);
      if (Number.isSafeInteger(amount) && amount >= 100) totals[transaction.projectId] += amount;
    });
    return Object.fromEntries(Object.entries(totals).map(([id, amount]) => [id, Math.floor(amount / 100)]));
  }

  // Lecture : total partagé de toutes les voix, tous visiteurs confondus.
  async function getScores(projectIds) {
    if (!isConfigured()) return null;
    const transactions = await fetchJson(`${baseUrl()}/${ROOT_PATH}/transactions.json`, { method: "GET" });
    return scoresFromTransactions(transactions, projectIds);
  }

  // Écriture idempotente : enregistrer deux fois la même référence de
  // transaction écrit exactement la même donnée → jamais de double comptage.
  async function recordPayment({ transactionReference, projectId, amount, status }) {
    if (!isConfigured()) return { recorded: false, reason: "remote_not_configured" };
    if (!transactionReference || !projectId) {
      return { recorded: false, reason: "missing_reference" };
    }
    const key = safeKey(transactionReference);
    const payload = {
      projectId,
      amount: Number(amount),
      reference: String(transactionReference),
      status: String(status || "SUCCESS").toUpperCase(),
      recordedAt: Date.now()
    };
    await fetchJson(`${baseUrl()}/${ROOT_PATH}/transactions/${encodeURIComponent(key)}.json`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    return { recorded: true, projectId, amount: payload.amount };
  }

  window.ELANOVA_VOTE_REMOTE = { isConfigured, getScores, recordPayment };
})();
