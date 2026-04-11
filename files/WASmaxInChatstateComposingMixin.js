__d(
  "WASmaxInChatstateComposingMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "chatstate");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "composing");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        n.value,
        "media",
        "audio",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ composingMedia: r.value })
        : r;
    }
    l.parseComposingMixin = e;
  },
  98,
);
