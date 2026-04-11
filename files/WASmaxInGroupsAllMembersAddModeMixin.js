__d(
  "WASmaxInGroupsAllMembersAddModeMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "member_add_mode");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literalContent(
        o("WASmaxParseUtils").contentString,
        e,
        "all_member_add",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    l.parseAllMembersAddModeMixin = e;
  },
  98,
);
