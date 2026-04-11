__d(
  "WASmaxInGroupsCreateParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInGroupsCreateParticipantAddedResponseMixin",
    "WASmaxInGroupsNonRegisteredWaUserParticipantErrorLidResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInGroupsCreateParticipantAddedResponseMixin",
      ).parseCreateParticipantAddedResponseMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "CreateParticipantAddedResponse",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsNonRegisteredWaUserParticipantErrorLidResponseMixin",
      ).parseNonRegisteredWaUserParticipantErrorLidResponseMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "NonRegisteredWaUserParticipantErrorLidResponse",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "ParticipantAddedResponse",
              "NonRegisteredWaUserParticipantErrorLidResponse",
            ],
            [t, n],
          );
    }
    l.parseCreateParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup =
      e;
  },
  98,
);
