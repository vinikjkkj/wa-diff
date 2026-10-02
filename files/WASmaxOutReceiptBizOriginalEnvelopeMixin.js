__d(
  "WASmaxOutReceiptBizOriginalEnvelopeMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.originalEnvelopeElementValue,
        n = o("WASmaxJsx").smax(
          "biz",
          null,
          o("WASmaxJsx").smax("original_envelope", null, t),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeBizOriginalEnvelopeMixin = s;
  },
  98,
);
