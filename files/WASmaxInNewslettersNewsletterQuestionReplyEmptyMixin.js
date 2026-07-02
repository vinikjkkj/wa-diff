__d(
  "WASmaxInNewslettersNewsletterQuestionReplyEmptyMixin",
  [
    "WAResultOrError",
    "WASmaxInNewslettersContentTypeTextOrMediaMixinGroup",
    "WASmaxInNewslettersQuestionTypeReplyMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o(
        "WASmaxInNewslettersQuestionTypeReplyMixin",
      ).parseQuestionTypeReplyMixin(e);
      if (!n.success) return n;
      var r = o(
        "WASmaxInNewslettersContentTypeTextOrMediaMixinGroup",
      ).parseContentTypeTextOrMediaMixinGroup(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, {
              contentTypeTextOrMediaMixinGroup: r.value,
            }),
          )
        : r;
    }
    l.parseNewsletterQuestionReplyEmptyMixin = e;
  },
  98,
);
