__d(
  "WASmaxInMessageDeliverParticipantLIDMixin",
  ["WAResultOrError", "WASmaxParseJid", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrLidUserJid(e, "participant_lid");
      return n.success
        ? o("WAResultOrError").makeResult({ participantLid: n.value })
        : n;
    }
    l.parseParticipantLIDMixin = e;
  },
  98,
);
