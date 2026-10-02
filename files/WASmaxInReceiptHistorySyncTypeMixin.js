__d(
  "WASmaxInReceiptHistorySyncTypeMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "hist_sync",
      );
      return n.success ? o("WAResultOrError").makeResult({ type: n.value }) : n;
    }
    l.parseHistorySyncTypeMixin = e;
  },
  98,
);
