__d(
  "WASmaxInGroupsGroupJoinMembershipApprovalModeEnabledOrDisabledMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInGroupsGroupJoinMembershipApprovalModeDisabledMixin",
    "WASmaxInGroupsGroupJoinMembershipApprovalModeEnabledMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInGroupsGroupJoinMembershipApprovalModeEnabledMixin",
      ).parseGroupJoinMembershipApprovalModeEnabledMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "GroupJoinMembershipApprovalModeEnabled",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsGroupJoinMembershipApprovalModeDisabledMixin",
      ).parseGroupJoinMembershipApprovalModeDisabledMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "GroupJoinMembershipApprovalModeDisabled",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "GroupJoinMembershipApprovalModeEnabled",
              "GroupJoinMembershipApprovalModeDisabled",
            ],
            [t, n],
          );
    }
    l.parseGroupJoinMembershipApprovalModeEnabledOrDisabledMixinGroup = e;
  },
  98,
);
