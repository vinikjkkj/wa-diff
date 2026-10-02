__d(
  "WASmaxOutReceiptPublishSenderBroadcastDeviceSenderTypeMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutReceiptBroadcastDeviceMixin",
    "WASmaxOutReceiptSenderTypeMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxOutReceiptSenderTypeMixin").mergeSenderTypeMixin(
        o("WASmaxOutReceiptBroadcastDeviceMixin").mergeBroadcastDeviceMixin(
          o("WASmaxJsx").smax("receipt", null),
          e,
        ),
      );
      return t;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergePublishSenderBroadcastDeviceSenderTypeMixin = s;
  },
  98,
);
