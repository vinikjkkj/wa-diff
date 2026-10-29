__d(
  "WASmaxInGroupsParticipantWithJidMixin",
  [
    "WAResultOrError",
    "WASmaxInGroupsEnums",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrJidEnum(
        e,
        "jid",
        o("WASmaxInGroupsEnums").USERJID_USERJID,
      );
      return n.success ? o("WAResultOrError").makeResult({ jid: n.value }) : n;
    }
    l.parseParticipantWithJidMixin = e;
  },
  98,
);
