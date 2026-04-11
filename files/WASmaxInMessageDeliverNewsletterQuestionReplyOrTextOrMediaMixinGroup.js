__d(
  "WASmaxInMessageDeliverNewsletterQuestionReplyOrTextOrMediaMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverNewsletterMediaMixin",
    "WASmaxInMessageDeliverNewsletterQuestionReplyMixin",
    "WASmaxInMessageDeliverNewsletterTextMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMessageDeliverNewsletterQuestionReplyMixin",
      ).parseNewsletterQuestionReplyMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterQuestionReply",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverNewsletterTextMixin",
      ).parseNewsletterTextMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterText",
          value: n.value,
        });
      var r = o(
        "WASmaxInMessageDeliverNewsletterMediaMixin",
      ).parseNewsletterMediaMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "NewsletterMedia",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["NewsletterQuestionReply", "NewsletterText", "NewsletterMedia"],
            [t, n, r],
          );
    }
    l.parseNewsletterQuestionReplyOrTextOrMediaMixinGroup = e;
  },
  98,
);
