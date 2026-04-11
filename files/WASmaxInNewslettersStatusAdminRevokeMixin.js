__d(
  "WASmaxInNewslettersStatusAdminRevokeMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "status");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "edit",
        "8",
      );
      return n.success ? o("WAResultOrError").makeResult({ edit: n.value }) : n;
    }
    l.parseStatusAdminRevokeMixin = e;
  },
  98,
);
