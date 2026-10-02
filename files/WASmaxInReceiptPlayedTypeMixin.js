__d(
  "WASmaxInReceiptPlayedTypeMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "played",
      );
      return n.success ? o("WAResultOrError").makeResult({ type: n.value }) : n;
    }
    l.parsePlayedTypeMixin = e;
  },
  98,
);
