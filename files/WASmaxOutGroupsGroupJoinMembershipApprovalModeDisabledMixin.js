__d(
  "WASmaxOutGroupsGroupJoinMembershipApprovalModeDisabledMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxJsx").smax("group_join", { state: "off" });
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeGroupJoinMembershipApprovalModeDisabledMixin = s;
  },
  98,
);
