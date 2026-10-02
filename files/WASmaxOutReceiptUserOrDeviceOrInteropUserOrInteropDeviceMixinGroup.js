__d(
  "WASmaxOutReceiptUserOrDeviceOrInteropUserOrInteropDeviceMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutReceiptDeviceMixin",
    "WASmaxOutReceiptInteropDeviceMixin",
    "WASmaxOutReceiptInteropUserMixin",
    "WASmaxOutReceiptUserMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.user)
        return o("WASmaxOutReceiptUserMixin").mergeUserMixin(e, t.user);
      if (t.device)
        return o("WASmaxOutReceiptDeviceMixin").mergeDeviceMixin(e, t.device);
      if (t.interopUser)
        return o("WASmaxOutReceiptInteropUserMixin").mergeInteropUserMixin(
          e,
          t.interopUser,
        );
      if (t.interopDevice)
        return o("WASmaxOutReceiptInteropDeviceMixin").mergeInteropDeviceMixin(
          e,
          t.interopDevice,
        );
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeUserOrDeviceOrInteropUserOrInteropDeviceMixinGroup = e;
  },
  98,
);
