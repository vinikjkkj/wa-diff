__d(
  "WASmaxInMessageDeliverPayTransactionAnyMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverPayTransactions",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = o("WASmaxInMessageDeliverPayTransactions").parsePayTransactions(
        e,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ payTransactions: n.value })
        : n;
    }
    l.parsePayTransactionAnyMixin = e;
  },
  98,
);
