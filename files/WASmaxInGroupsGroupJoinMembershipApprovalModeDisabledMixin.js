__d(
  "WASmaxInGroupsGroupJoinMembershipApprovalModeDisabledMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "group_join");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "state",
        "off",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ state: n.value })
        : n;
    }
    l.parseGroupJoinMembershipApprovalModeDisabledMixin = e;
  },
  98,
);
