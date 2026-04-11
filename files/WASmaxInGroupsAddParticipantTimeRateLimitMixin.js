__d(
  "WASmaxInGroupsAddParticipantTimeRateLimitMixin",
  ["WAResultOrError", "WASmaxInGroupsEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "rate_limit");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "backoff", 0, void 0);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        e,
        "type",
        o("WASmaxInGroupsEnums").ENUM_GROUP_USER,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ backoff: n.value, type: r.value })
        : r;
    }
    l.parseAddParticipantTimeRateLimitMixin = e;
  },
  98,
);
