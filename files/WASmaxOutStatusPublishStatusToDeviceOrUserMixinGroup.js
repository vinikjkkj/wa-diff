__d(
  "WASmaxOutStatusPublishStatusToDeviceOrUserMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutStatusPublishStatusToDeviceMixin",
    "WASmaxOutStatusPublishStatusToUserMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.statusToDevice)
        return o(
          "WASmaxOutStatusPublishStatusToDeviceMixin",
        ).mergeStatusToDeviceMixin(e, t.statusToDevice);
      if (t.statusToUser)
        return o(
          "WASmaxOutStatusPublishStatusToUserMixin",
        ).mergeStatusToUserMixin(e, t.statusToUser);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeStatusToDeviceOrUserMixinGroup = e;
  },
  98,
);
