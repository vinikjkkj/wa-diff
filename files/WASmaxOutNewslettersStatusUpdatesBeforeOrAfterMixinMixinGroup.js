__d(
  "WASmaxOutNewslettersStatusUpdatesBeforeOrAfterMixinMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutNewslettersStatusUpdatesAfterMixinMixin",
    "WASmaxOutNewslettersStatusUpdatesBeforeMixinMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.statusUpdatesBeforeMixin)
        return o(
          "WASmaxOutNewslettersStatusUpdatesBeforeMixinMixin",
        ).mergeStatusUpdatesBeforeMixinMixin(e, t.statusUpdatesBeforeMixin);
      if (t.statusUpdatesAfterMixin)
        return o(
          "WASmaxOutNewslettersStatusUpdatesAfterMixinMixin",
        ).mergeStatusUpdatesAfterMixinMixin(e, t.statusUpdatesAfterMixin);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeStatusUpdatesBeforeOrAfterMixinMixinGroup = e;
  },
  98,
);
