__d(
  "WASmaxInMessageDeliverBypassedMixin",
  ["WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "bypassed");
      return n.success ? o("WASmaxParseUtils").voidSuccess : n;
    }
    l.parseBypassedMixin = e;
  },
  98,
);
