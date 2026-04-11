__d(
  "WASmaxOutNewslettersStatusDirections",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutNewslettersStatusAfterMixinMixin",
    "WASmaxOutNewslettersStatusBeforeMixinMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.statusBeforeMixin)
        return o(
          "WASmaxOutNewslettersStatusBeforeMixinMixin",
        ).mergeStatusBeforeMixinMixin(e, t.statusBeforeMixin);
      if (t.statusAfterMixin)
        return o(
          "WASmaxOutNewslettersStatusAfterMixinMixin",
        ).mergeStatusAfterMixinMixin(e, t.statusAfterMixin);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeStatusDirections = e;
  },
  98,
);
