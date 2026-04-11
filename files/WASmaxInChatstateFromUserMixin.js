__d(
  "WASmaxInChatstateFromUserMixin",
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
      var n = o("WASmaxParseJid").attrJidEnum(
        e,
        "from",
        o("WASmaxInChatstateEnums").USERJID_USERJID_USERJID_USERJID,
      );
      return n.success ? o("WAResultOrError").makeResult({ from: n.value }) : n;
    }
    l.parseFromUserMixin = e;
  },
  98,
);
