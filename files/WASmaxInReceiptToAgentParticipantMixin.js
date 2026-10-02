__d(
  "WASmaxInReceiptToAgentParticipantMixin",
  ["WAResultOrError", "WASmaxParseJid", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "participant");
      return n.success
        ? o("WAResultOrError").makeResult({ participant: n.value })
        : n;
    }
    l.parseToAgentParticipantMixin = e;
  },
  98,
);
