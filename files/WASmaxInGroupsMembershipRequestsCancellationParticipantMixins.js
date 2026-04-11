__d(
  "WASmaxInGroupsMembershipRequestsCancellationParticipantMixins",
  [
    "WAResultOrError",
    "WASmaxInGroupsCancelGroupMembershipRequestsParticipantRequestNotFoundMixin",
    "WASmaxInGroupsParticipantNotAuthorizedMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInGroupsCancelGroupMembershipRequestsParticipantRequestNotFoundMixin",
      ).parseCancelGroupMembershipRequestsParticipantRequestNotFoundMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "CancelGroupMembershipRequestsParticipantRequestNotFound",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsParticipantNotAuthorizedMixin",
      ).parseParticipantNotAuthorizedMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "ParticipantNotAuthorized",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["ParticipantRequestNotFound", "ParticipantNotAuthorized"],
            [t, n],
          );
    }
    l.parseMembershipRequestsCancellationParticipantMixins = e;
  },
  98,
);
