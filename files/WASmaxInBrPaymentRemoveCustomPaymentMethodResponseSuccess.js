__d(
  "WASmaxInBrPaymentRemoveCustomPaymentMethodResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInBrPaymentIQResultResponseMixin",
    "WASmaxInBrPaymentPaymentMethodsMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "account");
      if (!r.success) return r;
      var a = o(
        "WASmaxInBrPaymentPaymentMethodsMixin",
      ).parsePaymentMethodsMixin(r.value, t);
      if (!a.success) return a;
      var i = o(
        "WASmaxInBrPaymentIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { accountPaymentMethodsMixin: a.value },
              i.value,
            ),
          )
        : i;
    }
    l.parseRemoveCustomPaymentMethodResponseSuccess = e;
  },
  98,
);
