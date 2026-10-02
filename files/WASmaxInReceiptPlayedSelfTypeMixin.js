__d(
  "WASmaxInReceiptPlayedSelfTypeMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "played-self",
      );
      return n.success ? o("WAResultOrError").makeResult({ type: n.value }) : n;
    }
    l.parsePlayedSelfTypeMixin = e;
  },
  98,
);
