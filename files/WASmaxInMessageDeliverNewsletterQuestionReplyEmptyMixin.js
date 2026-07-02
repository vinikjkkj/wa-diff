__d(
  "WASmaxInMessageDeliverNewsletterQuestionReplyEmptyMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypeTextOrMediaMixinGroup",
    "WASmaxInMessageDeliverQuestionTypeReplyMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o(
        "WASmaxInMessageDeliverQuestionTypeReplyMixin",
      ).parseQuestionTypeReplyMixin(e);
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverContentTypeTextOrMediaMixinGroup",
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
