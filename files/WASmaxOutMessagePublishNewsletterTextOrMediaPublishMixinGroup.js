__d(
  "WASmaxOutMessagePublishNewsletterTextOrMediaPublishMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutMessagePublishNewsletterMediaPublishMixin",
    "WASmaxOutMessagePublishNewsletterTextMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.newsletterText)
        return o(
          "WASmaxOutMessagePublishNewsletterTextMixin",
        ).mergeNewsletterTextMixin(e, t.newsletterText);
      if (t.newsletterMediaPublish)
        return o(
          "WASmaxOutMessagePublishNewsletterMediaPublishMixin",
        ).mergeNewsletterMediaPublishMixin(e, t.newsletterMediaPublish);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeNewsletterTextOrMediaPublishMixinGroup = e;
  },
  98,
);
