__d(
  "WASmaxInChatstatePausedMixin",
  ["WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "chatstate");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "paused");
      return n.success ? o("WASmaxParseUtils").voidSuccess : n;
    }
    l.parsePausedMixin = e;
  },
  98,
);
