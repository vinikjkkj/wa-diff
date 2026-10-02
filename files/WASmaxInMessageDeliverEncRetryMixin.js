__d(
  "WASmaxInMessageDeliverEncRetryMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "count", 1, 4);
      return n.success
        ? o("WAResultOrError").makeResult({ count: n.value })
        : n;
    }
    l.parseEncRetryMixin = e;
  },
  98,
);
