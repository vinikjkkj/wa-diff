__d(
  "WASmaxOutReceiptPublishSenderGroupOrPublishSenderIndividualOrPublishSenderStatusOrPublishSenderBroadcastDeviceSenderTypeMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutReceiptPublishSenderBroadcastDeviceSenderTypeMixin",
    "WASmaxOutReceiptPublishSenderGroupDeviceSenderTypeMixin",
    "WASmaxOutReceiptPublishSenderIndividualDeviceSenderTypeMixin",
    "WASmaxOutReceiptPublishSenderStatusDeviceSenderTypeMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.publishSenderGroupDeviceSenderType)
        return o(
          "WASmaxOutReceiptPublishSenderGroupDeviceSenderTypeMixin",
        ).mergePublishSenderGroupDeviceSenderTypeMixin(
          e,
          t.publishSenderGroupDeviceSenderType,
        );
      if (t.publishSenderIndividualDeviceSenderType)
        return o(
          "WASmaxOutReceiptPublishSenderIndividualDeviceSenderTypeMixin",
        ).mergePublishSenderIndividualDeviceSenderTypeMixin(
          e,
          t.publishSenderIndividualDeviceSenderType,
        );
      if (t.publishSenderStatusDeviceSenderType)
        return o(
          "WASmaxOutReceiptPublishSenderStatusDeviceSenderTypeMixin",
        ).mergePublishSenderStatusDeviceSenderTypeMixin(
          e,
          t.publishSenderStatusDeviceSenderType,
        );
      if (t.publishSenderBroadcastDeviceSenderType)
        return o(
          "WASmaxOutReceiptPublishSenderBroadcastDeviceSenderTypeMixin",
        ).mergePublishSenderBroadcastDeviceSenderTypeMixin(
          e,
          t.publishSenderBroadcastDeviceSenderType,
        );
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergePublishSenderGroupOrPublishSenderIndividualOrPublishSenderStatusOrPublishSenderBroadcastDeviceSenderTypeMixinGroup =
      e;
  },
  98,
);
