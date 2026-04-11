__d(
  "WASmaxInPreKeysKeyIDMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "id");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytesRange(e, 3, 3);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    l.parseKeyIDMixin = e;
  },
  98,
);
