__d(
  "WASmaxInReceiptAppDataPeerCategoryMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "category",
        "peer_appdata",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ category: n.value })
        : n;
    }
    l.parseAppDataPeerCategoryMixin = e;
  },
  98,
);
