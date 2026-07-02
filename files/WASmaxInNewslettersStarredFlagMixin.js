__d(
  "WASmaxInNewslettersStarredFlagMixin",
  ["WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "flags");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "starred");
      return n.success ? o("WASmaxParseUtils").voidSuccess : n;
    }
    l.parseStarredFlagMixin = e;
  },
  98,
);
