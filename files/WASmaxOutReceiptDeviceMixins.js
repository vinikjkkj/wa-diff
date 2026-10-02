__d(
  "WASmaxOutReceiptDeviceMixins",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutReceiptBroadcastDeviceMixin",
    "WASmaxOutReceiptGroupDeviceMixin",
    "WASmaxOutReceiptIndividualDeviceMixin",
    "WASmaxOutReceiptStatusDeviceMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.groupDevice)
        return o("WASmaxOutReceiptGroupDeviceMixin").mergeGroupDeviceMixin(
          e,
          t.groupDevice,
        );
      if (t.individualDevice)
        return o(
          "WASmaxOutReceiptIndividualDeviceMixin",
        ).mergeIndividualDeviceMixin(e, t.individualDevice);
      if (t.statusDevice)
        return o("WASmaxOutReceiptStatusDeviceMixin").mergeStatusDeviceMixin(
          e,
          t.statusDevice,
        );
      if (t.broadcastDevice)
        return o(
          "WASmaxOutReceiptBroadcastDeviceMixin",
        ).mergeBroadcastDeviceMixin(e, t.broadcastDevice);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeDeviceMixins = e;
  },
  98,
);
