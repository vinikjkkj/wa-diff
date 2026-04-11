__d(
  "WASmaxInGroupsParentGroupDefaultMembershipApprovalModeMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "parent");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "default_membership_approval_mode",
        "request_required",
      );
      return n.success
        ? o("WAResultOrError").makeResult({
            defaultMembershipApprovalMode: n.value,
          })
        : n;
    }
    l.parseParentGroupDefaultMembershipApprovalModeMixin = e;
  },
  98,
);
