__d(
  "WASmaxOutGroupsMembershipApprovalModes",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutGroupsGroupJoinMembershipApprovalModeDisabledMixin",
    "WASmaxOutGroupsGroupJoinMembershipApprovalModeEnabledMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.isGroupJoinMembershipApprovalModeEnabled)
        return o(
          "WASmaxOutGroupsGroupJoinMembershipApprovalModeEnabledMixin",
        ).mergeGroupJoinMembershipApprovalModeEnabledMixin(e);
      if (t.isGroupJoinMembershipApprovalModeDisabled)
        return o(
          "WASmaxOutGroupsGroupJoinMembershipApprovalModeDisabledMixin",
        ).mergeGroupJoinMembershipApprovalModeDisabledMixin(e);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeMembershipApprovalModes = e;
  },
  98,
);
