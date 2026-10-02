__d(
  "WASmaxOutKeyTransparencyADVOrDeviceKeyMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutKeyTransparencyADVKeyMixin",
    "WASmaxOutKeyTransparencyDeviceKeyMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.aDVKey)
        return o("WASmaxOutKeyTransparencyADVKeyMixin").mergeADVKeyMixin(
          e,
          t.aDVKey,
        );
      if (t.deviceKey)
        return o("WASmaxOutKeyTransparencyDeviceKeyMixin").mergeDeviceKeyMixin(
          e,
          t.deviceKey,
        );
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeADVOrDeviceKeyMixinGroup = e;
  },
  98,
);
