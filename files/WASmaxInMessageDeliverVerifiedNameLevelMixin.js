__d(
  "WASmaxInMessageDeliverVerifiedNameLevelMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "verified_level",
        o("WASmaxInMessageDeliverEnums").ENUM_HIGH_LOW_UNKNOWN,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ verifiedLevel: n.value })
        : n;
    }
    l.parseVerifiedNameLevelMixin = e;
  },
  98,
);
