__d(
  "WASmaxInMessageDeliverNewsletterQuestionReplyMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverNewsletterTextOrMediaMixinGroup",
    "WASmaxInMessageDeliverQuestionTypeReplyMixin",
    "WASmaxInMessageDeliverWAMOSubMixin",
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
      var r = o("WASmaxInMessageDeliverWAMOSubMixin").parseWAMOSubMixin(e),
        a = o(
          "WASmaxInMessageDeliverNewsletterTextOrMediaMixinGroup",
        ).parseNewsletterTextOrMediaMixinGroup(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, {
              wAMOSubMixin: r.success ? r.value : null,
              newsletterTextOrMediaMixinGroup: a.value,
            }),
          )
        : a;
    }
    l.parseNewsletterQuestionReplyMixin = e;
  },
  98,
);
