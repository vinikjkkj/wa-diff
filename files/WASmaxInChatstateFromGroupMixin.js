__d(
  "WASmaxInChatstateFromGroupMixin",
  [
    "WAResultOrError",
    "WASmaxInChatstateEnums",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "chatstate");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrGroupJid(e, "from");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrJidEnum(
        e,
        "participant",
        o("WASmaxInChatstateEnums").USERJID_USERJID_USERJID,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "participant_pn",
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            from: n.value,
            participant: r.value,
            participantPn: a.value,
          })
        : a;
    }
    l.parseFromGroupMixin = e;
  },
  98,
);
