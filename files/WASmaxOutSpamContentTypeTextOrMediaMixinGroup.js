__d(
  "WASmaxOutSpamContentTypeTextOrMediaMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutSpamContentTypeMediaMixin",
    "WASmaxOutSpamContentTypeTextMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.isContentTypeText)
        return o("WASmaxOutSpamContentTypeTextMixin").mergeContentTypeTextMixin(
          e,
        );
      if (t.isContentTypeMedia)
        return o(
          "WASmaxOutSpamContentTypeMediaMixin",
        ).mergeContentTypeMediaMixin(e);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeContentTypeTextOrMediaMixinGroup = e;
  },
  98,
);
