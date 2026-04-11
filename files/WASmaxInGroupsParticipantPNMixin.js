__d(
  "WASmaxInGroupsParticipantPNMixin",
  ["WAResultOrError", "WASmaxParseJid"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseJid").attrUserJid(e, "participant_pn");
      return t.success
        ? o("WAResultOrError").makeResult({ participantPn: t.value })
        : t;
    }
    l.parseParticipantPNMixin = e;
  },
  98,
);
