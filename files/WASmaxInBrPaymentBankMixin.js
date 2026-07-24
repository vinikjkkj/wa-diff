__d(
  "WASmaxInBrPaymentBankMixin",
  ["WASmaxInBrPaymentUPIBankMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "bank");
      if (!t.success) return t;
      var n = o("WASmaxInBrPaymentUPIBankMixin").parseUPIBankMixin(e);
      return (n.success, n);
    }
    l.parseBankMixin = e;
  },
  98,
);
