__d(
  "WASmaxInMessageDeliverTransactionErrorMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "error-code", 1, 1e7);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "error-text");
      return r.success
        ? o("WAResultOrError").makeResult({
            errorCode: n.value,
            errorText: r.value,
          })
        : r;
    }
    l.parseTransactionErrorMixin = e;
  },
  98,
);
