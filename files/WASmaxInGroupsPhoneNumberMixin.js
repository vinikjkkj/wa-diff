__d(
  "WASmaxInGroupsPhoneNumberMixin",
  ["WAResultOrError", "WASmaxParseJid"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseJid").attrUserJid(e, "phone_number");
      return t.success
        ? o("WAResultOrError").makeResult({ phoneNumber: t.value })
        : t;
    }
    l.parsePhoneNumberMixin = e;
  },
  98,
);
