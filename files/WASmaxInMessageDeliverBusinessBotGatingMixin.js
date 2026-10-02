__d(
  "WASmaxInMessageDeliverBusinessBotGatingMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "gating");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "bot");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrStringEnum(
        a.value,
        "state",
        o("WASmaxInMessageDeliverEnums").ENUM_ALLOW_BYPASS_DENY_ERROR,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        a.value,
        "v",
        1,
        void 0,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        a.value,
        "limitation",
        o("WASmaxInMessageDeliverEnums").ENUM_NONE_SERVICEPROVIDER,
      );
      return s.success
        ? o("WAResultOrError").makeResult({
            bizGatingBotState: i.value,
            bizGatingBotV: l.value,
            bizGatingBotLimitation: s.value,
          })
        : s;
    }
    l.parseBusinessBotGatingMixin = e;
  },
  98,
);
