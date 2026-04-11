__d(
  "WASmaxOutMessagePublishNewsletterQuestionResponsePublishOrReactionOrReactionRevokeOrPollVoteMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutMessagePublishNewsletterPollVoteMixin",
    "WASmaxOutMessagePublishNewsletterQuestionResponsePublishMixin",
    "WASmaxOutMessagePublishNewsletterReactionMixin",
    "WASmaxOutMessagePublishNewsletterReactionRevokeMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.newsletterQuestionResponsePublish)
        return o(
          "WASmaxOutMessagePublishNewsletterQuestionResponsePublishMixin",
        ).mergeNewsletterQuestionResponsePublishMixin(
          e,
          t.newsletterQuestionResponsePublish,
        );
      if (t.newsletterReaction)
        return o(
          "WASmaxOutMessagePublishNewsletterReactionMixin",
        ).mergeNewsletterReactionMixin(e, t.newsletterReaction);
      if (t.isNewsletterReactionRevoke)
        return o(
          "WASmaxOutMessagePublishNewsletterReactionRevokeMixin",
        ).mergeNewsletterReactionRevokeMixin(e);
      if (t.newsletterPollVote)
        return o(
          "WASmaxOutMessagePublishNewsletterPollVoteMixin",
        ).mergeNewsletterPollVoteMixin(e, t.newsletterPollVote);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeNewsletterQuestionResponsePublishOrReactionOrReactionRevokeOrPollVoteMixinGroup =
      e;
  },
  98,
);
