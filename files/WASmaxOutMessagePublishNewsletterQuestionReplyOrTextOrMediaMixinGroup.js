__d(
  "WASmaxOutMessagePublishNewsletterQuestionReplyOrTextOrMediaMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutMessagePublishNewsletterMediaMixin",
    "WASmaxOutMessagePublishNewsletterQuestionReplyMixin",
    "WASmaxOutMessagePublishNewsletterTextMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.newsletterQuestionReply)
        return o(
          "WASmaxOutMessagePublishNewsletterQuestionReplyMixin",
        ).mergeNewsletterQuestionReplyMixin(e, t.newsletterQuestionReply);
      if (t.newsletterText)
        return o(
          "WASmaxOutMessagePublishNewsletterTextMixin",
        ).mergeNewsletterTextMixin(e, t.newsletterText);
      if (t.newsletterMedia)
        return o(
          "WASmaxOutMessagePublishNewsletterMediaMixin",
        ).mergeNewsletterMediaMixin(e, t.newsletterMedia);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeNewsletterQuestionReplyOrTextOrMediaMixinGroup = e;
  },
  98,
);
