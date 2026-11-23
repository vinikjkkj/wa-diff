__d(
  "WASmaxOutMessagePublishEncLiveLocationEncLiveLocationOrEncLiveLocationDeprecatedMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutMessagePublishEncLiveLocationDeprecatedMixin",
    "WASmaxOutMessagePublishEncLiveLocationMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.encLiveLocation)
        return o(
          "WASmaxOutMessagePublishEncLiveLocationMixin",
        ).mergeEncLiveLocationMixin(e, t.encLiveLocation);
      if (t.encLiveLocationDeprecated)
        return o(
          "WASmaxOutMessagePublishEncLiveLocationDeprecatedMixin",
        ).mergeEncLiveLocationDeprecatedMixin(e, t.encLiveLocationDeprecated);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeEncLiveLocationEncLiveLocationOrEncLiveLocationDeprecatedMixinGroup =
      e;
  },
  98,
);
