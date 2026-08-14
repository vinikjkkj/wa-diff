__d(
  "WASmaxOutStatusPublishEncVersion",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutStatusPublishEncVersion2Mixin",
    "WASmaxOutStatusPublishEncVersion3Mixin",
    "WASmaxOutStatusPublishEncVersionFutureproofMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.isEncVersion2)
        return o(
          "WASmaxOutStatusPublishEncVersion2Mixin",
        ).mergeEncVersion2Mixin(e);
      if (t.isEncVersion3)
        return o(
          "WASmaxOutStatusPublishEncVersion3Mixin",
        ).mergeEncVersion3Mixin(e);
      if (t.encVersionFutureproof)
        return o(
          "WASmaxOutStatusPublishEncVersionFutureproofMixin",
        ).mergeEncVersionFutureproofMixin(e, t.encVersionFutureproof);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeEncVersion = e;
  },
  98,
);
