__d(
  "WASmaxOutReceiptDeviceMixin",
  ["WASmaxJsx", "WASmaxMixins", "WASmaxOutReceiptDeviceMixins"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.deviceMixinsArgs,
        n = o("WASmaxOutReceiptDeviceMixins").mergeDeviceMixins(
          o("WASmaxJsx").smax("receipt", null),
          t,
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeDeviceMixin = s;
  },
  98,
);
