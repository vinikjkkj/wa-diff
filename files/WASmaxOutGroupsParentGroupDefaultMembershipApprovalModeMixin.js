__d(
  "WASmaxOutGroupsParentGroupDefaultMembershipApprovalModeMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxJsx").smax("parent", {
        default_membership_approval_mode: "request_required",
      });
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeParentGroupDefaultMembershipApprovalModeMixin = s;
  },
  98,
);
