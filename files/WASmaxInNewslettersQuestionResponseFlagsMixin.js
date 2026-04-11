__d(
  "WASmaxInNewslettersQuestionResponseFlagsMixin",
  [
    "WAResultOrError",
    "WASmaxInNewslettersRepliedFlagMixin",
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
      );
      return o("WAResultOrError").makeResult({
        hasFlagsRepliedFlagMixin: r.success,
      });
    }
    l.parseQuestionResponseFlagsMixin = e;
  },
  98,
);
