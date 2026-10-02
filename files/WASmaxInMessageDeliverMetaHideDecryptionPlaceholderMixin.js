__d(
  "WASmaxInMessageDeliverMetaHideDecryptionPlaceholderMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        t.value,
        "decrypt-fail",
        "hide",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ metaDecryptFail: n.value })
        : n;
    }
    l.parseMetaHideDecryptionPlaceholderMixin = e;
  },
  98,
);
