__d(
  "WASmaxOutMessagePublishMoneyMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.moneyValue,
        n = e.moneyOffset,
        r = e.moneyCurrency,
        a = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxJsx").smax("money", {
            value: o("WAWap").CUSTOM_STRING(t),
            offset: o("WAWap").CUSTOM_STRING(n),
            currency: o("WAWap").CUSTOM_STRING(r),
          }),
        );
      return a;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeMoneyMixin = s;
  },
  98,
);
