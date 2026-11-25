__d(
  "WASmaxInReceiptKeyBundleMixin",
  [
    "WAResultOrError",
    "WASmaxInReceiptKeyBundleContentsMixin",
    "WASmaxInReceiptPaddingMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "keys");
      if (!n.success) return n;
      var r = o(
        "WASmaxInReceiptKeyBundleContentsMixin",
      ).parseKeyBundleContentsMixin(n.value);
      if (!r.success) return r;
      var a = o("WASmaxInReceiptPaddingMixin").parsePaddingMixin(e);
      return o("WAResultOrError").makeResult({
        keysKeyBundleContentsMixin: r.value,
        paddingMixin: a.success ? a.value : null,
      });
    }
    l.parseKeyBundleMixin = e;
  },
  98,
);
