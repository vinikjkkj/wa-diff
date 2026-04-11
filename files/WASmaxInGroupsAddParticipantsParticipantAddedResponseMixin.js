__d(
  "WASmaxInGroupsAddParticipantsParticipantAddedResponseMixin",
  [
    "WAResultOrError",
    "WASmaxInGroupsAddParticipantsParticipantMixins",
    "WASmaxInGroupsPhoneNumberMixin",
    "WASmaxInGroupsUsernameAttMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "jid");
      if (!n.success) return n;
      var r = o("WASmaxInGroupsPhoneNumberMixin").parsePhoneNumberMixin(e),
        a = o("WASmaxInGroupsUsernameAttMixin").parseUsernameAttMixin(e),
        i = o(
          "WASmaxInGroupsAddParticipantsParticipantMixins",
        ).parseAddParticipantsParticipantMixins(e);
      return o("WAResultOrError").makeResult({
        jid: n.value,
        phoneNumberMixin: r.success ? r.value : null,
        usernameAttMixin: a.success ? a.value : null,
        addParticipantsParticipantMixins: i.success ? i.value : null,
      });
    }
    l.parseAddParticipantsParticipantAddedResponseMixin = e;
  },
  98,
);
