__d(
  "WASmaxInBrPaymentPayoutBankMixin",
  [
    "WAResultOrError",
    "WASmaxInBrPaymentEnums",
    "WASmaxInBrPaymentMethodBaseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "payout");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "bank",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "account-number",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(e, "bank-name");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "code",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrStringEnum(
        e,
        "verification-status",
        o("WASmaxInBrPaymentEnums").ENUM_FAILED_PENDING_VERIFIED,
      );
      if (!l.success) return l;
      var s = o("WASmaxInBrPaymentMethodBaseMixin").parseMethodBaseMixin(e);
      return s.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                type: n.value,
                accountNumber: r.value,
                bankName: a.value,
                code: i.value,
                verificationStatus: l.value,
              },
              s.value,
            ),
          )
        : s;
    }
    l.parsePayoutBankMixin = e;
  },
  98,
);
