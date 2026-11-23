__d(
  "WASmaxOutMessagePublishEncVersion",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutMessagePublishEncVersion2Mixin",
    "WASmaxOutMessagePublishEncVersion3Mixin",
    "WASmaxOutMessagePublishEncVersionFutureproofMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.isEncVersion2)
        return o(
          "WASmaxOutMessagePublishEncVersion2Mixin",
        ).mergeEncVersion2Mixin(e);
      if (t.isEncVersion3)
        return o(
          "WASmaxOutMessagePublishEncVersion3Mixin",
        ).mergeEncVersion3Mixin(e);
      if (t.encVersionFutureproof)
        return o(
          "WASmaxOutMessagePublishEncVersionFutureproofMixin",
        ).mergeEncVersionFutureproofMixin(e, t.encVersionFutureproof);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeEncVersion = e;
  },
  98,
);
