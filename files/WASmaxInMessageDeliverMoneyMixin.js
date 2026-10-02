__d(
  "WASmaxInMessageDeliverMoneyMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "money");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(t.value, "value");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(t.value, "offset");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(t.value, "currency");
      return a.success
        ? o("WAResultOrError").makeResult({
            moneyValue: n.value,
            moneyOffset: r.value,
            moneyCurrency: a.value,
          })
        : a;
    }
    l.parseMoneyMixin = e;
  },
  98,
);
