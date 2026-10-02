__d(
  "WASmaxInReceiptPeerCategoryMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "category",
        "peer",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ category: n.value })
        : n;
    }
    l.parsePeerCategoryMixin = e;
  },
  98,
);
