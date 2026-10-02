__d(
  "WASmaxOutReceiptPublishAppDataPeerDeliveryRequest",
  [
    "WASmaxJsx",
    "WASmaxOutReceiptAppDataPeerCategoryMixin",
    "WASmaxOutReceiptIndividualDeviceMixin",
    "WASmaxOutReceiptSingleMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxOutReceiptAppDataPeerCategoryMixin",
      ).mergeAppDataPeerCategoryMixin(
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
    l.makePublishAppDataPeerDeliveryRequest = e;
  },
  98,
);
