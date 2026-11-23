__d(
  "WASmaxOutReceiptGroupStatusDeviceMixin",
  ["WASmaxJsx", "WASmaxMixins", "WASmaxOutReceiptStatusClassMixin", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.receiptTo,
        n = e.receiptParticipant,
        r = o("WASmaxOutReceiptStatusClassMixin").mergeStatusClassMixin(
          o("WASmaxJsx").smax("receipt", {
            to: o("WAWap").GROUP_JID(t),
            participant: o("WAWap").DEVICE_JID(n),
          }),
        );
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeGroupStatusDeviceMixin = s;
  },
  98,
);
