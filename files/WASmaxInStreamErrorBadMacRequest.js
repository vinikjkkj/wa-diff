__d(
  "WASmaxInStreamErrorBadMacRequest",
  ["WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "stream:error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "bad-mac");
      return n.success ? o("WASmaxParseUtils").voidSuccess : n;
    }
    l.parseBadMacRequest = e;
  },
  98,
);
