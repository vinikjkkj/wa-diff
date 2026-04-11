__d(
  "WASmaxInGroupsAddParticipantCountRateLimitMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "rate_limit");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(
        e,
        "participant_limit",
        1,
        19999,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ participantLimit: n.value })
        : n;
    }
    l.parseAddParticipantCountRateLimitMixin = e;
  },
  98,
);
