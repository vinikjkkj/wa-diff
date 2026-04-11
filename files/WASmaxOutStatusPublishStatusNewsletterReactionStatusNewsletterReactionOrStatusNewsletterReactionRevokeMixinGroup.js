__d(
  "WASmaxOutStatusPublishStatusNewsletterReactionStatusNewsletterReactionOrStatusNewsletterReactionRevokeMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutStatusPublishStatusNewsletterReactionMixin",
    "WASmaxOutStatusPublishStatusNewsletterReactionRevokeMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.statusNewsletterReaction)
        return o(
          "WASmaxOutStatusPublishStatusNewsletterReactionMixin",
        ).mergeStatusNewsletterReactionMixin(e, t.statusNewsletterReaction);
      if (t.isStatusNewsletterReactionRevoke)
        return o(
          "WASmaxOutStatusPublishStatusNewsletterReactionRevokeMixin",
        ).mergeStatusNewsletterReactionRevokeMixin(e);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeStatusNewsletterReactionStatusNewsletterReactionOrStatusNewsletterReactionRevokeMixinGroup =
      e;
  },
  98,
);
