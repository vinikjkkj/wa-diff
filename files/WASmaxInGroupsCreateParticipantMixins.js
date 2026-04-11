__d(
  "WASmaxInGroupsCreateParticipantMixins",
  [
    "WAResultOrError",
    "WASmaxInGroupsCreateParticipantAddedMixin",
    "WASmaxInGroupsParticipantBotAlreadyExistsMixin",
    "WASmaxInGroupsParticipantBotIncompatibleVersionMixin",
    "WASmaxInGroupsParticipantHasInvalidPNMixin",
    "WASmaxInGroupsParticipantNotAcceptableMixin",
    "WASmaxInGroupsParticipantNotAuthorizedMixin",
    "WASmaxInGroupsParticipantRequestCodeCanBeSentMixin",
    "WASmaxInGroupsParticipantRequestCodeCannotBeCreatedForLegalConcernsMixin",
    "WASmaxInGroupsParticipantResourceConstraintMixin",
    "WASmaxInGroupsParticipantResourceLimitMixin",
    "WASmaxInGroupsParticipantTemporarilyBlockedFromDefaultSubGroupMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInGroupsParticipantTemporarilyBlockedFromDefaultSubGroupMixin",
      ).parseParticipantTemporarilyBlockedFromDefaultSubGroupMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantTemporarilyBlockedFromDefaultSubGroup",
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
        "WASmaxInGroupsParticipantRequestCodeCanBeSentMixin",
      ).parseParticipantRequestCodeCanBeSentMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantRequestCodeCanBeSent",
          value: r.value,
        });
      var a = o(
        "WASmaxInGroupsParticipantRequestCodeCannotBeCreatedForLegalConcernsMixin",
      ).parseParticipantRequestCodeCannotBeCreatedForLegalConcernsMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantRequestCodeCannotBeCreatedForLegalConcerns",
          value: a.value,
        });
      var i = o(
        "WASmaxInGroupsParticipantHasInvalidPNMixin",
      ).parseParticipantHasInvalidPNMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantHasInvalidPN",
          value: i.value,
        });
      var l = o(
        "WASmaxInGroupsParticipantResourceConstraintMixin",
      ).parseParticipantResourceConstraintMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantResourceConstraint",
          value: l.value,
        });
      var s = o(
        "WASmaxInGroupsParticipantNotAcceptableMixin",
      ).parseParticipantNotAcceptableMixin(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantNotAcceptable",
          value: s.value,
        });
      var u = o(
        "WASmaxInGroupsParticipantResourceLimitMixin",
      ).parseParticipantResourceLimitMixin(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantResourceLimit",
          value: u.value,
        });
      var c = o(
        "WASmaxInGroupsParticipantBotIncompatibleVersionMixin",
      ).parseParticipantBotIncompatibleVersionMixin(e);
      if (c.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantBotIncompatibleVersion",
          value: c.value,
        });
      var d = o(
        "WASmaxInGroupsParticipantBotAlreadyExistsMixin",
      ).parseParticipantBotAlreadyExistsMixin(e);
      if (d.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantBotAlreadyExists",
          value: d.value,
        });
      var m = o(
        "WASmaxInGroupsCreateParticipantAddedMixin",
      ).parseCreateParticipantAddedMixin(e);
      return m.success
        ? o("WAResultOrError").makeResult({
            name: "CreateParticipantAdded",
            value: m.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "ParticipantTemporarilyBlockedFromDefaultSubGroup",
              "ParticipantNotAuthorized",
              "ParticipantRequestCodeCanBeSent",
              "ParticipantRequestCodeCannotBeCreatedForLegalConcerns",
              "ParticipantHasInvalidPN",
              "ParticipantResourceConstraint",
              "ParticipantNotAcceptable",
              "ParticipantResourceLimit",
              "ParticipantBotIncompatibleVersion",
              "ParticipantBotAlreadyExists",
              "ParticipantAdded",
            ],
            [t, n, r, a, i, l, s, u, c, d, m],
          );
    }
    l.parseCreateParticipantMixins = e;
  },
  98,
);
