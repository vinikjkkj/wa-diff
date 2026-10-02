__d(
  "WASmaxInMessageDeliverUPIInternationalFxDetailMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "fx-detail");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "base-amount");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "currency-fx");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(e, "currency-markup");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrString(e, "base-currency");
      return i.success
        ? o("WAResultOrError").makeResult({
            baseAmount: n.value,
            currencyFx: r.value,
            currencyMarkup: a.value,
            baseCurrency: i.value,
          })
        : i;
    }
    l.parseUPIInternationalFxDetailMixin = e;
  },
  98,
);
