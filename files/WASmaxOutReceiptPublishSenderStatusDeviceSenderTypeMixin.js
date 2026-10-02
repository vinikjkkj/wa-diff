__d(
  "WASmaxOutReceiptPublishSenderStatusDeviceSenderTypeMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutReceiptSenderTypeMixin",
    "WASmaxOutReceiptStatusDeviceMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxOutReceiptSenderTypeMixin").mergeSenderTypeMixin(
        o("WASmaxOutReceiptStatusDeviceMixin").mergeStatusDeviceMixin(
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
    l.mergePublishSenderStatusDeviceSenderTypeMixin = s;
  },
  98,
);
