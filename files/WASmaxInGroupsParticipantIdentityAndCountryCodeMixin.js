__d(
  "WASmaxInGroupsParticipantIdentityAndCountryCodeMixin",
  [
    "WAResultOrError",
    "WASmaxInGroupsParticipantPNMixin",
    "WASmaxInGroupsParticipantUsernameWithCountryCodeMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInGroupsParticipantPNMixin").parseParticipantPNMixin(e),
        n = o(
          "WASmaxInGroupsParticipantUsernameWithCountryCodeMixin",
        ).parseParticipantUsernameWithCountryCodeMixin(e);
      return o("WAResultOrError").makeResult({
        participantPNMixin: t.success ? t.value : null,
        participantUsernameWithCountryCodeMixin: n.success ? n.value : null,
      });
    }
    l.parseParticipantIdentityAndCountryCodeMixin = e;
  },
  98,
);
