__d(
  "WASmaxOutReceiptBroadcastDeviceMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.receiptTo,
        n = e.receiptParticipant,
        r = o("WASmaxJsx").smax("receipt", {
          to: o("WAWap").BROADCAST_JID(t),
          participant: o("WAWap").DEVICE_JID(n),
        });
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeBroadcastDeviceMixin = s;
  },
  98,
);
