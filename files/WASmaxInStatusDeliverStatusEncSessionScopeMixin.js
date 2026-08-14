__d(
  "WASmaxInStatusDeliverStatusEncSessionScopeMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "status");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "session_scope",
        "status",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaSessionScope: r.value })
        : r;
    }
    l.parseStatusEncSessionScopeMixin = e;
  },
  98,
);
