__d(
  "WASmaxOutGroupsMembershipApprovalGroupJoinModeMixin",
  ["WASmaxJsx", "WASmaxMixins", "WASmaxOutGroupsMembershipApprovalModes"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.membershipApprovalModesArgs,
        n = o("WASmaxJsx").smax(
          "membership_approval_mode",
          null,
          o(
            "WASmaxOutGroupsMembershipApprovalModes",
          ).mergeMembershipApprovalModes(
            o("WASmaxJsx").smax("group_join", null),
            t,
          ),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeMembershipApprovalGroupJoinModeMixin = s;
  },
  98,
);
