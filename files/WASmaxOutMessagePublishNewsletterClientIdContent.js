__d(
  "WASmaxOutMessagePublishNewsletterClientIdContent",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutMessagePublishNewsletterEditMixin",
    "WASmaxOutMessagePublishNewsletterMediaPublishMixin",
    "WASmaxOutMessagePublishNewsletterPollCreationMixin",
    "WASmaxOutMessagePublishNewsletterPollResultSnapshotMixin",
    "WASmaxOutMessagePublishNewsletterQuestionPublishMixin",
    "WASmaxOutMessagePublishNewsletterQuestionReplyPublishMixin",
    "WASmaxOutMessagePublishNewsletterQuizCreationMixin",
    "WASmaxOutMessagePublishNewsletterRevokeMixin",
    "WASmaxOutMessagePublishNewsletterTextMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.newsletterEdit)
        return o(
          "WASmaxOutMessagePublishNewsletterEditMixin",
        ).mergeNewsletterEditMixin(e, t.newsletterEdit);
      if (t.newsletterQuestionPublish)
        return o(
          "WASmaxOutMessagePublishNewsletterQuestionPublishMixin",
        ).mergeNewsletterQuestionPublishMixin(e, t.newsletterQuestionPublish);
      if (t.newsletterQuestionReplyPublish)
        return o(
          "WASmaxOutMessagePublishNewsletterQuestionReplyPublishMixin",
        ).mergeNewsletterQuestionReplyPublishMixin(
          e,
          t.newsletterQuestionReplyPublish,
        );
      if (t.newsletterText)
        return o(
          "WASmaxOutMessagePublishNewsletterTextMixin",
        ).mergeNewsletterTextMixin(e, t.newsletterText);
      if (t.newsletterMediaPublish)
        return o(
          "WASmaxOutMessagePublishNewsletterMediaPublishMixin",
        ).mergeNewsletterMediaPublishMixin(e, t.newsletterMediaPublish);
      if (t.newsletterRevoke)
        return o(
          "WASmaxOutMessagePublishNewsletterRevokeMixin",
        ).mergeNewsletterRevokeMixin(e, t.newsletterRevoke);
      if (t.newsletterPollCreation)
        return o(
          "WASmaxOutMessagePublishNewsletterPollCreationMixin",
        ).mergeNewsletterPollCreationMixin(e, t.newsletterPollCreation);
      if (t.newsletterPollResultSnapshot)
        return o(
          "WASmaxOutMessagePublishNewsletterPollResultSnapshotMixin",
        ).mergeNewsletterPollResultSnapshotMixin(
          e,
          t.newsletterPollResultSnapshot,
        );
      if (t.newsletterQuizCreation)
        return o(
          "WASmaxOutMessagePublishNewsletterQuizCreationMixin",
        ).mergeNewsletterQuizCreationMixin(e, t.newsletterQuizCreation);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeNewsletterClientIdContent = e;
  },
  98,
);
