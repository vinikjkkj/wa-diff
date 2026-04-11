__d(
  "WASmaxInBrPaymentCustomPaymentMethodMixin",
  [
    "WAResultOrError",
    "WASmaxInBrPaymentCustomPaymentMethodMetaDataInfoMixin",
    "WASmaxInBrPaymentEnums",
    "WASmaxInBrPaymentMethodBaseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "custom_payment_method");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "type",
        o("WASmaxInBrPaymentEnums").ENUM_PAYONDELIVERY_PIXKEY,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "country",
        "BR",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "created",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "flow",
        o("WASmaxInBrPaymentEnums").ENUM_P2M_P2P,
      );
      if (!i.success) return i;
      var l = o("WASmaxInBrPaymentMethodBaseMixin").parseMethodBaseMixin(e);
      if (!l.success) return l;
      var s = o(
        "WASmaxInBrPaymentCustomPaymentMethodMetaDataInfoMixin",
      ).parseCustomPaymentMethodMetaDataInfoMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends(
          { type: n.value, country: r.value, created: a.value, flow: i.value },
          l.value,
          { customPaymentMethodMetaDataInfoMixin: s.success ? s.value : null },
        ),
      );
    }
    l.parseCustomPaymentMethodMixin = e;
  },
  98,
);
