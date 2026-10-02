__d(
  "WASmaxOutReceiptPublishPeerDeliveryRequest",
  [
    "WASmaxJsx",
    "WASmaxOutReceiptIndividualDeviceMixin",
    "WASmaxOutReceiptPeerMessageTypeMixin",
    "WASmaxOutReceiptSingleMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxOutReceiptPeerMessageTypeMixin",
      ).mergePeerMessageTypeMixin(
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
    l.makePublishPeerDeliveryRequest = e;
  },
  98,
);
