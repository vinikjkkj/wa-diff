__d(
  "WASmaxInGroupsParticipantRequestCodeCanBeSentOrRequestCodeCannotBeCreatedForLegalConcernsOrHasInvalidPNMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInGroupsParticipantHasInvalidPNMixin",
    "WASmaxInGroupsParticipantRequestCodeCanBeSentMixin",
    "WASmaxInGroupsParticipantRequestCodeCannotBeCreatedForLegalConcernsMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInGroupsParticipantRequestCodeCanBeSentMixin",
      ).parseParticipantRequestCodeCanBeSentMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantRequestCodeCanBeSent",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsParticipantRequestCodeCannotBeCreatedForLegalConcernsMixin",
      ).parseParticipantRequestCodeCannotBeCreatedForLegalConcernsMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantRequestCodeCannotBeCreatedForLegalConcerns",
          value: n.value,
        });
      var r = o(
        "WASmaxInGroupsParticipantHasInvalidPNMixin",
      ).parseParticipantHasInvalidPNMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "ParticipantHasInvalidPN",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "ParticipantRequestCodeCanBeSent",
              "ParticipantRequestCodeCannotBeCreatedForLegalConcerns",
              "ParticipantHasInvalidPN",
            ],
            [t, n, r],
          );
    }
    l.parseParticipantRequestCodeCanBeSentOrRequestCodeCannotBeCreatedForLegalConcernsOrHasInvalidPNMixinGroup =
      e;
  },
  98,
);
