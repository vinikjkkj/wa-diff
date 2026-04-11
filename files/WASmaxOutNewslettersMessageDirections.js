__d(
  "WASmaxOutNewslettersMessageDirections",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutNewslettersAfterMixinMixin",
    "WASmaxOutNewslettersBeforeMixinMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.beforeMixin)
        return o("WASmaxOutNewslettersBeforeMixinMixin").mergeBeforeMixinMixin(
          e,
          t.beforeMixin,
        );
      if (t.afterMixin)
        return o("WASmaxOutNewslettersAfterMixinMixin").mergeAfterMixinMixin(
          e,
          t.afterMixin,
        );
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeMessageDirections = e;
  },
  98,
);
