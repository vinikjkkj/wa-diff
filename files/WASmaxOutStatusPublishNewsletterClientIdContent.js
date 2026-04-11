__d(
  "WASmaxOutStatusPublishNewsletterClientIdContent",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutStatusPublishStatusNewsletterMediaPublishMixin",
    "WASmaxOutStatusPublishStatusNewsletterRevokeMixin",
    "WASmaxOutStatusPublishStatusNewsletterTextMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.isStatusNewsletterRevoke)
        return o(
          "WASmaxOutStatusPublishStatusNewsletterRevokeMixin",
        ).mergeStatusNewsletterRevokeMixin(e);
      if (t.statusNewsletterText)
        return o(
          "WASmaxOutStatusPublishStatusNewsletterTextMixin",
        ).mergeStatusNewsletterTextMixin(e, t.statusNewsletterText);
      if (t.statusNewsletterMediaPublish)
        return o(
          "WASmaxOutStatusPublishStatusNewsletterMediaPublishMixin",
        ).mergeStatusNewsletterMediaPublishMixin(
          e,
          t.statusNewsletterMediaPublish,
        );
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeNewsletterClientIdContent = e;
  },
  98,
);
