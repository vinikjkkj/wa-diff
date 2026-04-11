__d(
  "WASmaxInPreKeysResponsePaddingMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "padding");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").contentBytesRange(n.value, 0, 524288);
      return r.success
        ? o("WAResultOrError").makeResult({ paddingElementValue: r.value })
        : r;
    }
    l.parseResponsePaddingMixin = e;
  },
  98,
);
