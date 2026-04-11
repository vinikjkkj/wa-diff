__d(
  "WASmaxInNewslettersNewsletterViewsCountViewsMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "views_count");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "views",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(e, "count", 0, void 0);
      return r.success
        ? o("WAResultOrError").makeResult({ type: n.value, count: r.value })
        : r;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "message");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").mapChildrenWithTag(
        t,
        "views_count",
        1,
        2,
        e,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ viewsCount: r.value })
        : r;
    }
    ((l.parseNewsletterViewsCountViewsViewsCount = e),
      (l.parseNewsletterViewsCountViewsMixin = s));
  },
  98,
);
