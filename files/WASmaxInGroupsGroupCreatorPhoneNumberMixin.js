__d(
  "WASmaxInGroupsGroupCreatorPhoneNumberMixin",
  ["WAResultOrError", "WASmaxParseJid"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseJid").attrUserJid(e, "creator_pn");
      return t.success
        ? o("WAResultOrError").makeResult({ creatorPn: t.value })
        : t;
    }
    l.parseGroupCreatorPhoneNumberMixin = e;
  },
  98,
);
