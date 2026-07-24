__d(
  "WASmaxInBrPaymentMerchantBaseMixin",
  [
    "WAResultOrError",
    "WASmaxInBrPaymentEnums",
    "WASmaxInBrPaymentMethodBaseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "merchant");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "merchant-id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "business-name",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrStringEnum(
        e,
        "can-sell",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrStringEnum(
        e,
        "can-payout",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrStringEnum(
        e,
        "can-add-payout",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "support-phone-number",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "provider-type",
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "pix-onboarding-state",
        o("WASmaxInBrPaymentEnums").ENUM_0_1_2,
      );
      if (!c.success) return c;
      var d = o("WASmaxInBrPaymentMethodBaseMixin").parseMethodBaseMixin(e);
      return d.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                merchantId: n.value,
                businessName: r.value,
                canSell: a.value,
                canPayout: i.value,
                canAddPayout: l.value,
                supportPhoneNumber: s.value,
                providerType: u.value,
                pixOnboardingState: c.value,
              },
              d.value,
            ),
          )
        : d;
    }
    l.parseMerchantBaseMixin = e;
  },
  98,
);
