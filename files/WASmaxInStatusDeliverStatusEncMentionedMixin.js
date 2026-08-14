__d(
  "WASmaxInStatusDeliverStatusEncMentionedMixin",
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
        "status_mentioned",
        "true",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaStatusMentioned: r.value })
        : r;
    }
    l.parseStatusEncMentionedMixin = e;
  },
  98,
);
