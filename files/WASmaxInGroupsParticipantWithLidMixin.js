__d(
  "WASmaxInGroupsParticipantWithLidMixin",
  ["WAResultOrError", "WASmaxParseJid", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrLidUserJid(e, "lid");
      return n.success ? o("WAResultOrError").makeResult({ lid: n.value }) : n;
    }
    l.parseParticipantWithLidMixin = e;
  },
  98,
);
