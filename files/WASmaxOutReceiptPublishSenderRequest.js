__d(
  "WASmaxOutReceiptPublishSenderRequest",
  [
    "WASmaxJsx",
    "WASmaxOutReceiptPublishSenderGroupOrPublishSenderIndividualOrPublishSenderStatusOrPublishSenderBroadcastDeviceSenderTypeMixinGroup",
    "WASmaxOutReceiptSenderAggregatedPublishOrSingleMixinGroup",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t =
          e.publishSenderGroupOrPublishSenderIndividualOrPublishSenderStatusOrPublishSenderBroadcastDeviceSenderTypeMixinGroupArgs,
        n = e.senderAggregatedPublishOrSingleMixinGroupArgs,
        r = o(
          "WASmaxOutReceiptSenderAggregatedPublishOrSingleMixinGroup",
        ).mergeSenderAggregatedPublishOrSingleMixinGroup(
          o(
            "WASmaxOutReceiptPublishSenderGroupOrPublishSenderIndividualOrPublishSenderStatusOrPublishSenderBroadcastDeviceSenderTypeMixinGroup",
          ).mergePublishSenderGroupOrPublishSenderIndividualOrPublishSenderStatusOrPublishSenderBroadcastDeviceSenderTypeMixinGroup(
            o("WASmaxJsx").smax("receipt", null),
            t,
          ),
          n,
        );
      return r;
    }
    l.makePublishSenderRequest = e;
  },
  98,
);
