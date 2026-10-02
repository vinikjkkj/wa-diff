__d(
  "WASmaxInReceiptViewTypeMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "view",
      );
      return n.success ? o("WAResultOrError").makeResult({ type: n.value }) : n;
    }
    l.parseViewTypeMixin = e;
  },
  98,
);
