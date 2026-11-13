(() => {
  const storageKey = "elanova-local-votes-v1";
  const emptyStore = () => ({ pending: {}, transactions: {} });

  function readStore() {
    const stored = localStorage.getItem(storageKey);
    if (!stored) return emptyStore();
    const parsed = JSON.parse(stored);
    return {
      pending: parsed?.pending && typeof parsed.pending === "object" ? parsed.pending : {},
      transactions: parsed?.transactions && typeof parsed.transactions === "object" ? parsed.transactions : {}
    };
  }

  function writeStore(store) {
    localStorage.setItem(storageKey, JSON.stringify(store));
  }

  function removeExpiredOrders(store) {
    const expiration = Date.now() - 7 * 24 * 60 * 60 * 1000;
    Object.entries(store.pending).forEach(([orderId, order]) => {
      if (!order || Number(order.createdAt) < expiration) delete store.pending[orderId];
    });
  }

  function getScores(projectIds) {
    const store = readStore();
    const totals = Object.fromEntries(projectIds.map((projectId) => [projectId, 0]));
    Object.values(store.transactions).forEach((transaction) => {
      if (!transaction || !Object.hasOwn(totals, transaction.projectId)) return;
      const amount = Number(transaction.amount);
      if (Number.isSafeInteger(amount) && amount >= 100) totals[transaction.projectId] += amount;
    });
    return Object.fromEntries(Object.entries(totals).map(([projectId, amount]) => [projectId, Math.floor(amount / 100)]));
  }

  function prepareOrder({ orderId, projectId, amount }) {
    const store = readStore();
    removeExpiredOrders(store);
    store.pending[orderId] = { projectId, amount: Number(amount), createdAt: Date.now() };
    writeStore(store);
  }

  function discardOrder(orderId) {
    if (!orderId) return;
    const store = readStore();
    delete store.pending[orderId];
    writeStore(store);
  }

  function recordPayment(payment, projectIds) {
    const status = String(payment?.status || "").toUpperCase();
    const orderId = String(payment?.invoice_reference || "");
    const transactionReference = String(payment?.transaction_reference || payment?.reference || "");
    if (!["SUCCESS", "COMPLETED"].includes(status)) return { recorded: false, status };
    if (!orderId || !transactionReference) return { recorded: false, reason: "Référence de commande ou de transaction manquante." };

    const store = readStore();
    const order = store.pending[orderId];
    if (!order || !projectIds.includes(order.projectId)) {
      return { recorded: false, reason: "Cette commande ne figure pas dans le stockage local de ce navigateur." };
    }

    const amount = Number(payment.amount);
    if (String(payment.currency || "").toUpperCase() !== "XAF" || amount !== Number(order.amount)) {
      return { recorded: false, reason: "Le montant ou la devise du retour ne correspond pas à la commande locale." };
    }

    const prior = store.transactions[transactionReference];
    if (prior) {
      delete store.pending[orderId];
      writeStore(store);
      if (prior.projectId !== order.projectId || Number(prior.amount) !== amount) {
        return { recorded: false, reason: "Cette référence est déjà associée à une autre commande locale." };
      }
      return {
        recorded: true,
        duplicate: true,
        projectId: prior.projectId,
        amount: Number(prior.amount),
        votes: getScores(projectIds)[prior.projectId]
      };
    }

    store.transactions[transactionReference] = { projectId: order.projectId, amount, status, recordedAt: Date.now() };
    delete store.pending[orderId];
    writeStore(store);
    return {
      recorded: true,
      duplicate: false,
      projectId: order.projectId,
      amount,
      votes: getScores(projectIds)[order.projectId]
    };
  }

  window.ELANOVA_VOTE_STORAGE = { getScores, prepareOrder, discardOrder, recordPayment };
})();
