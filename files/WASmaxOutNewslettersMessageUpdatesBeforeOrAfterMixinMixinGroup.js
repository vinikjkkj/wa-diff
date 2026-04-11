__d(
  "WASmaxOutNewslettersMessageUpdatesBeforeOrAfterMixinMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutNewslettersMessageUpdatesAfterMixinMixin",
    "WASmaxOutNewslettersMessageUpdatesBeforeMixinMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.messageUpdatesBeforeMixin)
        return o(
          "WASmaxOutNewslettersMessageUpdatesBeforeMixinMixin",
        ).mergeMessageUpdatesBeforeMixinMixin(e, t.messageUpdatesBeforeMixin);
      if (t.messageUpdatesAfterMixin)
        return o(
          "WASmaxOutNewslettersMessageUpdatesAfterMixinMixin",
        ).mergeMessageUpdatesAfterMixinMixin(e, t.messageUpdatesAfterMixin);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeMessageUpdatesBeforeOrAfterMixinMixinGroup = e;
  },
  98,
);
