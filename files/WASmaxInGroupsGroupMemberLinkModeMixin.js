__d(
  "WASmaxInGroupsGroupMemberLinkModeMixin",
  ["WAResultOrError", "WASmaxInGroupsMemberLinkModes", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "member_link_mode",
      );
      if (!t.success) return t;
      var n = o("WASmaxInGroupsMemberLinkModes").parseMemberLinkModes(t.value);
      return n.success
        ? o("WAResultOrError").makeResult({
            memberLinkModeMemberLinkModes: n.value,
          })
        : n;
    }
    l.parseGroupMemberLinkModeMixin = e;
  },
  98,
);
