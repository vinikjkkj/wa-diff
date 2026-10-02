__d(
  "WASmaxInMessageDeliverAuthMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "auth");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        r.value,
        "verification_timestamp",
        0,
        void 0,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "disable_ios_autofill",
        o("WASmaxInMessageDeliverEnums").ENUM_FALSE_TRUE,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "enable_risk_check",
        o("WASmaxInMessageDeliverEnums").ENUM_FALSE_TRUE,
      );
      return l.success
        ? o("WAResultOrError").makeResult({
            bizAuthVerificationTimestamp: a.value,
            bizAuthDisableIosAutofill: i.value,
            bizAuthEnableRiskCheck: l.value,
          })
        : l;
    }
    l.parseAuthMixin = e;
  },
  98,
);
