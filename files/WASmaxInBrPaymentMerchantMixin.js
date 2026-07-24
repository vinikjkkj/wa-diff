__d(
  "WASmaxInBrPaymentMerchantMixin",
  ["WASmaxInBrPaymentBRMerchantMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "merchant");
      if (!t.success) return t;
      var n = o("WASmaxInBrPaymentBRMerchantMixin").parseBRMerchantMixin(e);
      return (n.success, n);
    }
    l.parseMerchantMixin = e;
  },
  98,
);
