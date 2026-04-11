__d(
  "WASmaxInGroupsAddParticipantsParticipantMixins",
  [
    "WAResultOrError",
    "WASmaxInGroupsParticipantBotAlreadyExistsMixin",
    "WASmaxInGroupsParticipantBotIncompatibleVersionMixin",
    "WASmaxInGroupsParticipantConflictMixin",
    "WASmaxInGroupsParticipantGroupJoinRequestMixin",
    "WASmaxInGroupsParticipantHasInvalidPNMixin",
    "WASmaxInGroupsParticipantInBanListMixin",
    "WASmaxInGroupsParticipantNotAcceptableMixin",
    "WASmaxInGroupsParticipantNotAddressableMixin",
    "WASmaxInGroupsParticipantNotAuthorizedMixin",
    "WASmaxInGroupsParticipantRequestCodeCanBeSentMixin",
    "WASmaxInGroupsParticipantRequestCodeCannotBeCreatedForLegalConcernsMixin",
    "WASmaxInGroupsParticipantResourceConstraintMixin",
    "WASmaxInGroupsParticipantResourceLimitMixin",
    "WASmaxInGroupsParticipantTemporarilyBlockedFromDefaultSubGroupMixin",
    "WASmaxInGroupsParticipantTemporarilyBlockedMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInGroupsParticipantGroupJoinRequestMixin",
      ).parseParticipantGroupJoinRequestMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantGroupJoinRequest",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsParticipantNotAuthorizedMixin",
      ).parseParticipantNotAuthorizedMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantNotAuthorized",
          value: n.value,
        });
      var r = o(
        "WASmaxInGroupsParticipantInBanListMixin",
      ).parseParticipantInBanListMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantInBanList",
          value: r.value,
        });
      var a = o(
        "WASmaxInGroupsParticipantRequestCodeCanBeSentMixin",
      ).parseParticipantRequestCodeCanBeSentMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantRequestCodeCanBeSent",
          value: a.value,
        });
      var i = o(
        "WASmaxInGroupsParticipantRequestCodeCannotBeCreatedForLegalConcernsMixin",
      ).parseParticipantRequestCodeCannotBeCreatedForLegalConcernsMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantRequestCodeCannotBeCreatedForLegalConcerns",
          value: i.value,
        });
      var l = o(
        "WASmaxInGroupsParticipantHasInvalidPNMixin",
      ).parseParticipantHasInvalidPNMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantHasInvalidPN",
          value: l.value,
        });
      var s = o(
        "WASmaxInGroupsParticipantTemporarilyBlockedMixin",
      ).parseParticipantTemporarilyBlockedMixin(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantTemporarilyBlocked",
          value: s.value,
        });
      var u = o(
        "WASmaxInGroupsParticipantConflictMixin",
      ).parseParticipantConflictMixin(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantConflict",
          value: u.value,
        });
      var c = o(
        "WASmaxInGroupsParticipantResourceLimitMixin",
      ).parseParticipantResourceLimitMixin(e);
      if (c.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantResourceLimit",
          value: c.value,
        });
      var d = o(
        "WASmaxInGroupsParticipantResourceConstraintMixin",
      ).parseParticipantResourceConstraintMixin(e);
      if (d.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantResourceConstraint",
          value: d.value,
        });
      var m = o(
        "WASmaxInGroupsParticipantNotAcceptableMixin",
      ).parseParticipantNotAcceptableMixin(e);
      if (m.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantNotAcceptable",
          value: m.value,
        });
      var p = o(
        "WASmaxInGroupsParticipantNotAddressableMixin",
      ).parseParticipantNotAddressableMixin(e);
      if (p.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantNotAddressable",
          value: p.value,
        });
      var _ = o(
        "WASmaxInGroupsParticipantTemporarilyBlockedFromDefaultSubGroupMixin",
      ).parseParticipantTemporarilyBlockedFromDefaultSubGroupMixin(e);
      if (_.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantTemporarilyBlockedFromDefaultSubGroup",
          value: _.value,
        });
      var f = o(
        "WASmaxInGroupsParticipantBotIncompatibleVersionMixin",
      ).parseParticipantBotIncompatibleVersionMixin(e);
      if (f.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantBotIncompatibleVersion",
          value: f.value,
        });
      var g = o(
        "WASmaxInGroupsParticipantBotAlreadyExistsMixin",
      ).parseParticipantBotAlreadyExistsMixin(e);
      return g.success
        ? o("WAResultOrError").makeResult({
            name: "ParticipantBotAlreadyExists",
            value: g.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "ParticipantGroupJoinRequest",
              "ParticipantNotAuthorized",
              "ParticipantInBanList",
              "ParticipantRequestCodeCanBeSent",
              "ParticipantRequestCodeCannotBeCreatedForLegalConcerns",
              "ParticipantHasInvalidPN",
              "ParticipantTemporarilyBlocked",
              "ParticipantConflict",
              "ParticipantResourceLimit",
              "ParticipantResourceConstraint",
              "ParticipantNotAcceptable",
              "ParticipantNotAddressable",
              "ParticipantTemporarilyBlockedFromDefaultSubGroup",
              "ParticipantBotIncompatibleVersion",
              "ParticipantBotAlreadyExists",
            ],
            [t, n, r, a, i, l, s, u, c, d, m, p, _, f, g],
          );
    }
    l.parseAddParticipantsParticipantMixins = e;
  },
  98,
);
