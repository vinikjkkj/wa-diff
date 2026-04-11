__d(
  "WASmaxInGroupsGroupMemberAddModeMixin",
  ["WAResultOrError", "WASmaxInGroupsMemberAddModes", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "member_add_mode");
      if (!t.success) return t;
      var n = o("WASmaxInGroupsMemberAddModes").parseMemberAddModes(t.value);
      return n.success
        ? o("WAResultOrError").makeResult({
            memberAddModeMemberAddModes: n.value,
          })
        : n;
    }
    l.parseGroupMemberAddModeMixin = e;
  },
  98,
);
