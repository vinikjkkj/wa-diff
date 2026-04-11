__d(
  "WASmaxInGroupsParticipantMixins",
  [
    "WAResultOrError",
    "WASmaxInGroupsParticipantWithJidAndDisplayNameMixin",
    "WASmaxInGroupsParticipantWithJidAndIdentityMixin",
    "WASmaxInGroupsParticipantWithJidAndLidMixin",
    "WASmaxInGroupsParticipantWithJidIdentityAndDisplayNameMixin",
    "WASmaxInGroupsParticipantWithJidLidAndDisplayNameMixin",
    "WASmaxInGroupsParticipantWithJidMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInGroupsParticipantWithJidLidAndDisplayNameMixin",
      ).parseParticipantWithJidLidAndDisplayNameMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantWithJidLidAndDisplayName",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsParticipantWithJidIdentityAndDisplayNameMixin",
      ).parseParticipantWithJidIdentityAndDisplayNameMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantWithJidIdentityAndDisplayName",
          value: n.value,
        });
      var r = o(
        "WASmaxInGroupsParticipantWithJidAndLidMixin",
      ).parseParticipantWithJidAndLidMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantWithJidAndLid",
          value: r.value,
        });
      var a = o(
        "WASmaxInGroupsParticipantWithJidAndIdentityMixin",
      ).parseParticipantWithJidAndIdentityMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantWithJidAndIdentity",
          value: a.value,
        });
      var i = o(
        "WASmaxInGroupsParticipantWithJidAndDisplayNameMixin",
      ).parseParticipantWithJidAndDisplayNameMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantWithJidAndDisplayName",
          value: i.value,
        });
      var l = o(
        "WASmaxInGroupsParticipantWithJidMixin",
      ).parseParticipantWithJidMixin(e);
      return l.success
        ? o("WAResultOrError").makeResult({
            name: "ParticipantWithJid",
            value: l.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "ParticipantWithJidLidAndDisplayName",
              "ParticipantWithJidIdentityAndDisplayName",
              "ParticipantWithJidAndLid",
              "ParticipantWithJidAndIdentity",
              "ParticipantWithJidAndDisplayName",
              "ParticipantWithJid",
            ],
            [t, n, r, a, i, l],
          );
    }
    l.parseParticipantMixins = e;
  },
  98,
);
