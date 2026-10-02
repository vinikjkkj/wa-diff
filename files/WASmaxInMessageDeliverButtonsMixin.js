__d(
  "WASmaxInMessageDeliverButtonsMixin",
  ["WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "buttons");
      return r.success ? o("WASmaxParseUtils").voidSuccess : r;
    }
    l.parseButtonsMixin = e;
  },
  98,
);
