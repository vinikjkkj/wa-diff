__d(
  "WASmaxInReceiptPQPreKeyDeprecatedMixin",
  ["WASmaxInReceiptPQPreKeyContentsMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "pq");
      if (!t.success) return t;
      var n = o(
        "WASmaxInReceiptPQPreKeyContentsMixin",
      ).parsePQPreKeyContentsMixin(t.value);
      return (n.success, n);
    }
    l.parsePQPreKeyDeprecatedMixin = e;
  },
  98,
);
