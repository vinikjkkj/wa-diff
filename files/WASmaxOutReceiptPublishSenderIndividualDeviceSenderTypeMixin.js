__d(
  "WASmaxOutReceiptPublishSenderIndividualDeviceSenderTypeMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutReceiptIndividualDeviceMixin",
    "WASmaxOutReceiptRecipientMixin",
    "WASmaxOutReceiptSenderTypeMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxOutReceiptRecipientMixin").mergeRecipientMixin(
        o("WASmaxOutReceiptSenderTypeMixin").mergeSenderTypeMixin(
          o("WASmaxOutReceiptIndividualDeviceMixin").mergeIndividualDeviceMixin(
            o("WASmaxJsx").smax("receipt", null),
            e,
          ),
        ),
        e,
      );
      return t;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergePublishSenderIndividualDeviceSenderTypeMixin = s;
  },
  98,
);
