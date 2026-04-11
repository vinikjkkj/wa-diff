__d(
  "WASmaxInBrPaymentMethodBaseMixin",
  ["WAResultOrError", "WASmaxInBrPaymentEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").attrString(e, "credential-id");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "country",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "created",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "p2p-eligible",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "p2m-eligible",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            credentialId: t.value,
            country: n.value,
            created: r.value,
            p2pEligible: a.value,
            p2mEligible: i.value,
          })
        : i;
    }
    l.parseMethodBaseMixin = e;
  },
  98,
);
