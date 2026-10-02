__d(
  "WASmaxInMessageDeliverParticipantPNMixin",
  ["WAResultOrError", "WASmaxParseJid", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "participant_pn");
      return n.success
        ? o("WAResultOrError").makeResult({ participantPn: n.value })
        : n;
    }
    l.parseParticipantPNMixin = e;
  },
  98,
);
