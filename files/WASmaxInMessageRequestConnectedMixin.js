__d(
  "WASmaxInMessageRequestConnectedMixin",
  ["WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "thread_actions");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "connected");
      return n.success ? o("WASmaxParseUtils").voidSuccess : n;
    }
    l.parseConnectedMixin = e;
  },
  98,
);
