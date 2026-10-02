__d(
  "WASmaxInMessageDeliverLegacyAmountMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "pay");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "currency");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "amount");
      return r.success
        ? o("WAResultOrError").makeResult({
            currency: n.value,
            amount: r.value,
          })
        : r;
    }
    l.parseLegacyAmountMixin = e;
  },
  98,
);
