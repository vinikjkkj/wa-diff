__d(
  "WASmaxInNewslettersStatusNewsletterInteractionTypeQuestionMixin",
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
        "interaction_type",
        "question",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaInteractionType: r.value })
        : r;
    }
    l.parseStatusNewsletterInteractionTypeQuestionMixin = e;
  },
  98,
);
