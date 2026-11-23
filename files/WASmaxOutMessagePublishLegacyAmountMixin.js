__d(
  "WASmaxOutMessagePublishLegacyAmountMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.payCurrency,
        n = e.payAmount,
        r = o("WASmaxJsx").smax("pay", {
          currency: o("WAWap").CUSTOM_STRING(t),
          amount: o("WAWap").CUSTOM_STRING(n),
        });
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeLegacyAmountMixin = s;
  },
  98,
);
