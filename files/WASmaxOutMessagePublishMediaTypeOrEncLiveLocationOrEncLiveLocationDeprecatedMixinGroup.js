__d(
  "WASmaxOutMessagePublishMediaTypeOrEncLiveLocationOrEncLiveLocationDeprecatedMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutMessagePublishEncLiveLocationDeprecatedMixin",
    "WASmaxOutMessagePublishEncLiveLocationMixin",
    "WASmaxOutMessagePublishMediaTypeMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.mediaType)
        return o("WASmaxOutMessagePublishMediaTypeMixin").mergeMediaTypeMixin(
          e,
          t.mediaType,
        );
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
    l.mergeMediaTypeOrEncLiveLocationOrEncLiveLocationDeprecatedMixinGroup = e;
  },
  98,
);
