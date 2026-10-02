__d(
  "WASmaxInMessageDeliverAutomatedMixin",
  ["WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "automated");
      return n.success ? o("WASmaxParseUtils").voidSuccess : n;
    }
    l.parseAutomatedMixin = e;
  },
  98,
);
