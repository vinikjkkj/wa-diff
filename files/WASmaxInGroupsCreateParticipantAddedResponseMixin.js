__d(
  "WASmaxInGroupsCreateParticipantAddedResponseMixin",
  [
    "WAResultOrError",
    "WASmaxInGroupsCreateParticipantMixins",
    "WASmaxInGroupsEnums",
    "WASmaxInGroupsPhoneNumberMixin",
    "WASmaxInGroupsUsernameAttMixin",
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
      if (!n.success) return n;
      var r = o("WASmaxInGroupsPhoneNumberMixin").parsePhoneNumberMixin(e),
        a = o("WASmaxInGroupsUsernameAttMixin").parseUsernameAttMixin(e),
        i = o(
          "WASmaxInGroupsCreateParticipantMixins",
        ).parseCreateParticipantMixins(e);
      return i.success
        ? o("WAResultOrError").makeResult({
            jid: n.value,
            phoneNumberMixin: r.success ? r.value : null,
            usernameAttMixin: a.success ? a.value : null,
            createParticipantMixins: i.value,
          })
        : i;
    }
    l.parseCreateParticipantAddedResponseMixin = e;
  },
  98,
);
