__d(
  "WASmaxInGroupsAdminShareModeMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(
        e,
        "member_share_group_history_mode",
      );
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literalContent(
        o("WASmaxParseUtils").contentString,
        e,
        "admin_share",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    l.parseAdminShareModeMixin = e;
  },
  98,
);
