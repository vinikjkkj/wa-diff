__d(
  "WASmaxInMessageDeliverP2MTransactionProtocolMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "psp_transaction_id");
      return n.success
        ? o("WAResultOrError").makeResult({ pspTransactionId: n.value })
        : n;
    }
    l.parseP2MTransactionProtocolMixin = e;
  },
  98,
);
