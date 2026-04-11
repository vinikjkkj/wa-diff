__d(
  "WASmaxOutReceiptPublishViewRequest",
  [
    "WASmaxJsx",
    "WASmaxOutReceiptNewsletterMixin",
    "WASmaxOutReceiptSenderAggregatedViewPublishMixin",
    "WASmaxOutReceiptViewTypeMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxOutReceiptSenderAggregatedViewPublishMixin",
      ).mergeSenderAggregatedViewPublishMixin(
        o("WASmaxOutReceiptViewTypeMixin").mergeViewTypeMixin(
          o("WASmaxOutReceiptNewsletterMixin").mergeNewsletterMixin(
            o("WASmaxJsx").smax("receipt", null),
            e,
          ),
        ),
        e,
      );
      return t;
    }
    l.makePublishViewRequest = e;
  },
  98,
);
