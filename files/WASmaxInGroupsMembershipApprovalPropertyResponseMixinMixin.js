__d(
  "WASmaxInGroupsMembershipApprovalPropertyResponseMixinMixin",
  [
    "WAResultOrError",
    "WASmaxInGroupsGroupJoinMembershipApprovalModeEnabledOrDisabledMixinGroup",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "membership_approval_mode");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "group_join");
      if (!n.success) return n;
      var r = o(
        "WASmaxInGroupsGroupJoinMembershipApprovalModeEnabledOrDisabledMixinGroup",
      ).parseGroupJoinMembershipApprovalModeEnabledOrDisabledMixinGroup(
        n.value,
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            groupJoinGroupJoinMembershipApprovalModeEnabledOrDisabledMixinGroup:
              r.value,
          })
        : r;
    }
    l.parseMembershipApprovalPropertyResponseMixinMixin = e;
  },
  98,
);
