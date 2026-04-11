__d(
  "WASmaxInNewslettersStatusNewsletterReactionsMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "reaction");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "code");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(e, "count", 1, void 0);
      return r.success
        ? o("WAResultOrError").makeResult({ code: n.value, count: r.value })
        : r;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "status");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(t, "reactions");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "reaction",
        0,
        1e3,
        e,
      );
      return a.success
        ? o("WAResultOrError").makeResult({ reactionsReaction: a.value })
        : a;
    }
    ((l.parseStatusNewsletterReactionsReactionsReaction = e),
      (l.parseStatusNewsletterReactionsMixin = s));
  },
  98,
);
