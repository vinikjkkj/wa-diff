__d(
  "WASmaxOutReceiptNewsletterMixin",
  ["WASmaxJsx", "WASmaxMixins", "WASmaxOutReceiptStatusClassMixin", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.receiptTo,
        n = e.hasStatusClass,
        r = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutReceiptStatusClassMixin").mergeStatusClassMixin,
          o("WASmaxJsx").smax("receipt", { to: o("WAWap").JID(t) }),
          n,
        );
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNewsletterMixin = s;
  },
  98,
);
