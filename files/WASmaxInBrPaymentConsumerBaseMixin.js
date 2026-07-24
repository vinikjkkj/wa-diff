__d(
  "WASmaxInBrPaymentConsumerBaseMixin",
  [
    "WAResultOrError",
    "WASmaxInBrPaymentEnums",
    "WASmaxInBrPaymentMethodBaseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").attrStringEnum(
        e,
        "default-credit",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "default-debit",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "default-credit-p2p",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "default-credit-p2m",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "default-debit-p2p",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "default-debit-p2m",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!l.success) return l;
      var s = o("WASmaxInBrPaymentMethodBaseMixin").parseMethodBaseMixin(e);
      return s.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                defaultCredit: t.value,
                defaultDebit: n.value,
                defaultCreditP2p: r.value,
                defaultCreditP2m: a.value,
                defaultDebitP2p: i.value,
                defaultDebitP2m: l.value,
              },
              s.value,
            ),
          )
        : s;
    }
    l.parseConsumerBaseMixin = e;
  },
  98,
);
