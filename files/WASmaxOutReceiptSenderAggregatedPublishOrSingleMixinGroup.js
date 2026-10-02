__d(
  "WASmaxOutReceiptSenderAggregatedPublishOrSingleMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutReceiptSenderAggregatedPublishMixin",
    "WASmaxOutReceiptSingleMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.senderAggregatedPublish)
        return o(
          "WASmaxOutReceiptSenderAggregatedPublishMixin",
        ).mergeSenderAggregatedPublishMixin(e, t.senderAggregatedPublish);
      if (t.single)
        return o("WASmaxOutReceiptSingleMixin").mergeSingleMixin(e, t.single);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeSenderAggregatedPublishOrSingleMixinGroup = e;
  },
  98,
);
