__d(
  "WASmaxOutReceiptRecipientMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.receiptRecipient,
        n = o("WASmaxJsx").smax("receipt", { recipient: o("WAWap").JID(t) });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeRecipientMixin = s;
  },
  98,
);
