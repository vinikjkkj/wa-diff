__d(
  "WASmaxInNewslettersMediaMetaMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        n.value,
        "contenttype",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaContenttype: r.value })
        : r;
    }
    l.parseMediaMetaMixin = e;
  },
  98,
);
