__d(
  "WASmaxInGroupsMembershipRequestsActionRejectParticipantMixins",
  [
    "WAResultOrError",
    "WASmaxInGroupsMembershipRequestsActionParticipantRequestNotFoundMixin",
    "WASmaxInGroupsParticipantConflictMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInGroupsMembershipRequestsActionParticipantRequestNotFoundMixin",
      ).parseMembershipRequestsActionParticipantRequestNotFoundMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "MembershipRequestsActionParticipantRequestNotFound",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsParticipantConflictMixin",
      ).parseParticipantConflictMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "ParticipantConflict",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["ParticipantRequestNotFound", "ParticipantConflict"],
            [t, n],
          );
    }
    l.parseMembershipRequestsActionRejectParticipantMixins = e;
  },
  98,
);
