__d(
  "WASmaxOutStatusPublishClientPostNewsletterStatusAndServerOrPostNewsletterStatusIDMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutStatusPublishPostNewsletterStatusClientAndServerIDMixin",
    "WASmaxOutStatusPublishPostNewsletterStatusClientIDMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.postNewsletterStatusClientAndServerID)
        return o(
          "WASmaxOutStatusPublishPostNewsletterStatusClientAndServerIDMixin",
        ).mergePostNewsletterStatusClientAndServerIDMixin(
          e,
          t.postNewsletterStatusClientAndServerID,
        );
      if (t.postNewsletterStatusClientID)
        return o(
          "WASmaxOutStatusPublishPostNewsletterStatusClientIDMixin",
        ).mergePostNewsletterStatusClientIDMixin(
          e,
          t.postNewsletterStatusClientID,
        );
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeClientPostNewsletterStatusAndServerOrPostNewsletterStatusIDMixinGroup =
      e;
  },
  98,
);
