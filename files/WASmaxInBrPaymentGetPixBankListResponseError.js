__d(
  "WASmaxInBrPaymentGetPixBankListResponseError",
  ["WASmaxInBrPaymentIQErrorGenericResponseMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o(
        "WASmaxInBrPaymentIQErrorGenericResponseMixin",
      ).parseIQErrorGenericResponseMixin(e, t);
      return (r.success, r);
    }
    l.parseGetPixBankListResponseError = e;
  },
  98,
);
