__d(
  "WASmaxInGroupsSubjectOwnerPhoneNumberMixin",
  ["WAResultOrError", "WASmaxParseJid"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseJid").attrUserJid(e, "s_o_pn");
      return t.success ? o("WAResultOrError").makeResult({ sOPn: t.value }) : t;
    }
    l.parseSubjectOwnerPhoneNumberMixin = e;
  },
  98,
);
