__d(
  "WASmaxInMessageDeliverMXTransactionProtocolMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "bank-transaction-id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "spei-transaction-id");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrIntRange(e, "spei-ref-num", 0, void 0);
      return a.success
        ? o("WAResultOrError").makeResult({
            bankTransactionId: n.value,
            speiTransactionId: r.value,
            speiRefNum: a.value,
          })
        : a;
    }
    l.parseMXTransactionProtocolMixin = e;
  },
  98,
);
