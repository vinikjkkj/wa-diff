__d(
  "WASmaxInReceiptKeyTypeMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "type");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytesRange(t.value, 1, 1);
      return n.success
        ? o("WAResultOrError").makeResult({ typeElementValue: n.value })
        : n;
    }
    l.parseKeyTypeMixin = e;
  },
  98,
);
