__d(
  "WASmaxOutSpamStatusNewsletterTextOrMediaMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutSpamStatusNewsletterMediaMixin",
    "WASmaxOutSpamStatusNewsletterTextMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.statusNewsletterText)
        return o(
          "WASmaxOutSpamStatusNewsletterTextMixin",
        ).mergeStatusNewsletterTextMixin(e, t.statusNewsletterText);
      if (t.statusNewsletterMedia)
        return o(
          "WASmaxOutSpamStatusNewsletterMediaMixin",
        ).mergeStatusNewsletterMediaMixin(e, t.statusNewsletterMedia);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeStatusNewsletterTextOrMediaMixinGroup = e;
  },
  98,
);
