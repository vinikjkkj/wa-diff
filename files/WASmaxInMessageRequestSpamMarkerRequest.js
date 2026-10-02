__d(
  "WASmaxInMessageRequestSpamMarkerRequest",
  [
    "WAResultOrError",
    "WASmaxInMessageRequestEnums",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ib");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "spam");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "s.whatsapp.net",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "state",
        o("WASmaxInMessageRequestEnums").ENUM_COMPLETE_CONTINUE,
      );
      return a.success
        ? o("WAResultOrError").makeResult({ from: r.value, spamState: a.value })
        : a;
    }
    l.parseSpamMarkerRequest = e;
  },
  98,
);
