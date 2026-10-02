__d(
  "WASmaxOutReceiptPublishSenderGroupDeviceSenderTypeMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutReceiptGroupDeviceMixin",
    "WASmaxOutReceiptSenderTypeMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxOutReceiptSenderTypeMixin").mergeSenderTypeMixin(
        o("WASmaxOutReceiptGroupDeviceMixin").mergeGroupDeviceMixin(
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
    l.mergePublishSenderGroupDeviceSenderTypeMixin = s;
  },
  98,
);
