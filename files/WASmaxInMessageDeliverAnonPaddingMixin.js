__d(
  "WASmaxInMessageDeliverAnonPaddingMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "ta_pad");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytesRange(t.value, 0, 1e5);
      return n.success
        ? o("WAResultOrError").makeResult({ taPadElementValue: n.value })
        : n;
    }
    l.parseAnonPaddingMixin = e;
  },
  98,
);
