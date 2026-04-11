__d(
  "WASmaxInGroupsParticipantUsernameMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").attrString(e, "participant_username");
      return t.success
        ? o("WAResultOrError").makeResult({ participantUsername: t.value })
        : t;
    }
    l.parseParticipantUsernameMixin = e;
  },
  98,
);
