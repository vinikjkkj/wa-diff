__d(
  "WASmaxInMessageDeliverPushNameMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "notify");
      return n.success
        ? o("WAResultOrError").makeResult({ notify: n.value })
        : n;
    }
    l.parsePushNameMixin = e;
  },
  98,
);
