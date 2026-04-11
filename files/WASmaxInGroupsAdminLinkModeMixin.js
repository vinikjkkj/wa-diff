__d(
  "WASmaxInGroupsAdminLinkModeMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "member_link_mode");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literalContent(
        o("WASmaxParseUtils").contentString,
        e,
        "admin_link",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    l.parseAdminLinkModeMixin = e;
  },
  98,
);
