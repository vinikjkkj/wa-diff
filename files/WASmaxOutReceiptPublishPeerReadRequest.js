__d(
  "WASmaxOutReceiptPublishPeerReadRequest",
  [
    "WASmaxJsx",
    "WASmaxOutReceiptHistorySyncTypeMixin",
    "WASmaxOutReceiptIndividualDeviceMixin",
    "WASmaxOutReceiptSingleMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxOutReceiptHistorySyncTypeMixin",
      ).mergeHistorySyncTypeMixin(
        o("WASmaxOutReceiptSingleMixin").mergeSingleMixin(
          o("WASmaxOutReceiptIndividualDeviceMixin").mergeIndividualDeviceMixin(
            o("WASmaxJsx").smax("receipt", null),
            e,
          ),
          e,
        ),
      );
      return t;
    }
    l.makePublishPeerReadRequest = e;
  },
  98,
);
