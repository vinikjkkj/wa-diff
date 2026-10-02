__d(
  "WASmaxInReceiptSingleMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStanzaId(e, "id");
      return n.success ? o("WAResultOrError").makeResult({ id: n.value }) : n;
    }
    l.parseSingleMixin = e;
  },
  98,
);
