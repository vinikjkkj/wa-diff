__d(
  "WASmaxInNewslettersNewsletterResponsesCountMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "responses_count");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(n.value, "count", 0, void 0);
      return r.success
        ? o("WAResultOrError").makeResult({ responsesCountCount: r.value })
        : r;
    }
    l.parseNewsletterResponsesCountMixin = e;
  },
  98,
);
