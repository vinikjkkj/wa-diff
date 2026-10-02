__d(
  "WASmaxInMessageDeliverParticipantUsernameMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "participant_username");
      return n.success
        ? o("WAResultOrError").makeResult({ participantUsername: n.value })
        : n;
    }
    l.parseParticipantUsernameMixin = e;
  },
  98,
);
