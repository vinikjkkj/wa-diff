__d(
  "WASmaxOutMessagePublishNewsletterTextOrMediaMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutMessagePublishNewsletterMediaMixin",
    "WASmaxOutMessagePublishNewsletterTextMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
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
    l.mergeNewsletterTextOrMediaMixinGroup = e;
  },
  98,
);
