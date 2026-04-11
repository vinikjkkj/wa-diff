__d(
  "WASmaxInGroupsParticipantIdentityMixin",
  [
    "WAResultOrError",
    "WASmaxInGroupsParticipantPNMixin",
    "WASmaxInGroupsParticipantUsernameMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInGroupsParticipantPNMixin").parseParticipantPNMixin(e),
        n = o(
          "WASmaxInGroupsParticipantUsernameMixin",
        ).parseParticipantUsernameMixin(e);
      return o("WAResultOrError").makeResult({
        participantPNMixin: t.success ? t.value : null,
        participantUsernameMixin: n.success ? n.value : null,
      });
    }
    l.parseParticipantIdentityMixin = e;
  },
  98,
);
