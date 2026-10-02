__d(
  "WASmaxOutReceiptSingleMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.receiptId,
        n = o("WASmaxJsx").smax("receipt", { id: o("WAWap").STANZA_ID(t) });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeSingleMixin = s;
  },
  98,
);
