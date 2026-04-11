__d(
  "WASmaxInBrPaymentCreateCustomPaymentMethodResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInBrPaymentCustomPaymentMethodMixin",
    "WASmaxInBrPaymentIQResultResponseMixin",
    "WASmaxParseReference",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "account");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(
        r.value,
        "custom_payment_method",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseReference").attrStringFromReference(t, [
        "account",
        "action",
      ]);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "action",
        i.value,
      );
      if (!l.success) return l;
      var s = o(
        "WASmaxInBrPaymentCustomPaymentMethodMixin",
      ).parseCustomPaymentMethodMixin(a.value);
      if (!s.success) return s;
      var u = o(
        "WASmaxInBrPaymentIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return u.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { accountCustomPaymentMethodCustomPaymentMethodMixin: s.value },
              u.value,
            ),
          )
        : u;
    }
    l.parseCreateCustomPaymentMethodResponseSuccess = e;
  },
  98,
);
