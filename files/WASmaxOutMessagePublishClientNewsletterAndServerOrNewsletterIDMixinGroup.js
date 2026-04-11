__d(
  "WASmaxOutMessagePublishClientNewsletterAndServerOrNewsletterIDMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutMessagePublishNewsletterClientAndServerIDMixin",
    "WASmaxOutMessagePublishNewsletterClientIDMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.newsletterClientAndServerID)
        return o(
          "WASmaxOutMessagePublishNewsletterClientAndServerIDMixin",
        ).mergeNewsletterClientAndServerIDMixin(
          e,
          t.newsletterClientAndServerID,
        );
      if (t.newsletterClientID)
        return o(
          "WASmaxOutMessagePublishNewsletterClientIDMixin",
        ).mergeNewsletterClientIDMixin(e, t.newsletterClientID);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeClientNewsletterAndServerOrNewsletterIDMixinGroup = e;
  },
  98,
);
