__d(
  "WASmaxInGroupsMembershipRequestsActionAcceptParticipantMixins",
  [
    "WAResultOrError",
    "WASmaxInGroupsMembershipRequestsActionParticipantRequestNotFoundMixin",
    "WASmaxInGroupsParticipantConflictMixin",
    "WASmaxInGroupsParticipantForbiddenMixin",
    "WASmaxInGroupsParticipantNotAuthorizedMixin",
    "WASmaxInGroupsParticipantNotFoundMixin",
    "WASmaxInGroupsParticipantParentLinkedGroupsResourceConstraintMixin",
    "WASmaxInGroupsParticipantResourceConstraintMixin",
    "WASmaxInGroupsParticipantTemporarilyBlockedMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInGroupsParticipantNotFoundMixin",
      ).parseParticipantNotFoundMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantNotFound",
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
        "WASmaxInGroupsParticipantForbiddenMixin",
      ).parseParticipantForbiddenMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantForbidden",
          value: r.value,
        });
      var a = o(
        "WASmaxInGroupsMembershipRequestsActionParticipantRequestNotFoundMixin",
      ).parseMembershipRequestsActionParticipantRequestNotFoundMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "MembershipRequestsActionParticipantRequestNotFound",
          value: a.value,
        });
      var i = o(
        "WASmaxInGroupsParticipantTemporarilyBlockedMixin",
      ).parseParticipantTemporarilyBlockedMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantTemporarilyBlocked",
          value: i.value,
        });
      var l = o(
        "WASmaxInGroupsParticipantConflictMixin",
      ).parseParticipantConflictMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantConflict",
          value: l.value,
        });
      var s = o(
        "WASmaxInGroupsParticipantResourceConstraintMixin",
      ).parseParticipantResourceConstraintMixin(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantResourceConstraint",
          value: s.value,
        });
      var u = o(
        "WASmaxInGroupsParticipantParentLinkedGroupsResourceConstraintMixin",
      ).parseParticipantParentLinkedGroupsResourceConstraintMixin(e);
      return u.success
        ? o("WAResultOrError").makeResult({
            name: "ParticipantParentLinkedGroupsResourceConstraint",
            value: u.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "ParticipantNotFound",
              "ParticipantNotAuthorized",
              "ParticipantForbidden",
              "ParticipantRequestNotFound",
              "ParticipantTemporarilyBlocked",
              "ParticipantConflict",
              "ParticipantResourceConstraint",
              "ParticipantParentLinkedGroupsResourceConstraint",
            ],
            [t, n, r, a, i, l, s, u],
          );
    }
    l.parseMembershipRequestsActionAcceptParticipantMixins = e;
  },
  98,
);
