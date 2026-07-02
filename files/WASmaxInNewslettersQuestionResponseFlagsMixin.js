__d(
  "WASmaxInNewslettersQuestionResponseFlagsMixin",
  [
    "WAResultOrError",
    "WASmaxInNewslettersRepliedFlagMixin",
    "WASmaxInNewslettersStarredFlagMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "question_response");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "flags");
      if (!n.success) return n;
      var r = o("WASmaxInNewslettersRepliedFlagMixin").parseRepliedFlagMixin(
          n.value,
        ),
        a = o("WASmaxInNewslettersStarredFlagMixin").parseStarredFlagMixin(
          n.value,
        );
      return o("WAResultOrError").makeResult({
        hasFlagsRepliedFlagMixin: r.success,
        hasFlagsStarredFlagMixin: a.success,
      });
    }
    l.parseQuestionResponseFlagsMixin = e;
  },
  98,
);
