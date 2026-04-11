__d(
  "WASmaxInNewslettersNewsletterForwardsCountMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "forwards_count");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(n.value, "count", 0, void 0);
      return r.success
        ? o("WAResultOrError").makeResult({ forwardsCountCount: r.value })
        : r;
    }
    l.parseNewsletterForwardsCountMixin = e;
  },
  98,
);
