__d(
  "WASmaxInGroupsGroupMemberShareGroupHistoryModeMixin",
  [
    "WAResultOrError",
    "WASmaxInGroupsMemberShareGroupHistoryModes",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "member_share_group_history_mode",
      );
      if (!t.success) return t;
      var n = o(
        "WASmaxInGroupsMemberShareGroupHistoryModes",
      ).parseMemberShareGroupHistoryModes(t.value);
      return n.success
        ? o("WAResultOrError").makeResult({
            memberShareGroupHistoryModeMemberShareGroupHistoryModes: n.value,
          })
        : n;
    }
    l.parseGroupMemberShareGroupHistoryModeMixin = e;
  },
  98,
);
