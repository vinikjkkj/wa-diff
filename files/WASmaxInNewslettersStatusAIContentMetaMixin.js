__d(
  "WASmaxInNewslettersStatusAIContentMetaMixin",
  ["WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "status");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        n.value,
        "ai_content",
      );
      return r.success ? o("WASmaxParseUtils").voidSuccess : r;
    }
    l.parseStatusAIContentMetaMixin = e;
  },
  98,
);
