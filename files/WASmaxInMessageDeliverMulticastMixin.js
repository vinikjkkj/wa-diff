__d(
  "WASmaxInMessageDeliverMulticastMixin",
  ["WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "multicast");
      return n.success ? o("WASmaxParseUtils").voidSuccess : n;
    }
    l.parseMulticastMixin = e;
  },
  98,
);
