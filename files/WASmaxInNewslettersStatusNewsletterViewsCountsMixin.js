__d(
  "WASmaxInNewslettersStatusNewsletterViewsCountsMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "status");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "views_count");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "type",
        "views",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrIntRange(n.value, "count", 0, void 0);
      return a.success
        ? o("WAResultOrError").makeResult({
            viewsCountType: r.value,
            viewsCountCount: a.value,
          })
        : a;
    }
    l.parseStatusNewsletterViewsCountsMixin = e;
  },
  98,
);
