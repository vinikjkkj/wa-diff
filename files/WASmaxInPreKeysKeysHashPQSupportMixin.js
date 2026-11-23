__d(
  "WASmaxInPreKeysKeysHashPQSupportMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "hash");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytesRange(t.value, 32, 32);
      return n.success
        ? o("WAResultOrError").makeResult({ hashElementValue: n.value })
        : n;
    }
    l.parseKeysHashPQSupportMixin = e;
  },
  98,
);
