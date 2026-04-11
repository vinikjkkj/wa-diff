__d(
  "WASmaxInGroupsParticipantNotInGroupOrParticipantNotAllowedOrParticipantNotAcceptableOrRemoveParticipantsLinkedGroupsServerErrorMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInGroupsParticipantNotAcceptableMixin",
    "WASmaxInGroupsParticipantNotAllowedMixin",
    "WASmaxInGroupsParticipantNotInGroupMixin",
    "WASmaxInGroupsRemoveParticipantsLinkedGroupsServerErrorMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInGroupsParticipantNotInGroupMixin",
      ).parseParticipantNotInGroupMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantNotInGroup",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsParticipantNotAllowedMixin",
      ).parseParticipantNotAllowedMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantNotAllowed",
          value: n.value,
        });
      var r = o(
        "WASmaxInGroupsParticipantNotAcceptableMixin",
      ).parseParticipantNotAcceptableMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantNotAcceptable",
          value: r.value,
        });
      var a = o(
        "WASmaxInGroupsRemoveParticipantsLinkedGroupsServerErrorMixin",
      ).parseRemoveParticipantsLinkedGroupsServerErrorMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult({
            name: "RemoveParticipantsLinkedGroupsServerError",
            value: a.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "ParticipantNotInGroup",
              "ParticipantNotAllowed",
              "ParticipantNotAcceptable",
              "RemoveParticipantsLinkedGroupsServerError",
            ],
            [t, n, r, a],
          );
    }
    l.parseParticipantNotInGroupOrParticipantNotAllowedOrParticipantNotAcceptableOrRemoveParticipantsLinkedGroupsServerErrorMixinGroup =
      e;
  },
  98,
);
