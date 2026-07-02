__d(
  "WASmaxInMessageDeliverNewsletterQuestionEmptyMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypeTextOrMediaMixinGroup",
    "WASmaxInMessageDeliverQuestionTypeQuestionMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o(
        "WASmaxInMessageDeliverQuestionTypeQuestionMixin",
      ).parseQuestionTypeQuestionMixin(e);
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
    l.parseNewsletterQuestionEmptyMixin = e;
  },
  98,
);
