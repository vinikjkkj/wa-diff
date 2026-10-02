__d(
  "WASmaxInMessageDeliverGroupEphemeralMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(
        e,
        "expiration",
        0,
        2147483647,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ expiration: n.value })
        : n;
    }
    l.parseGroupEphemeralMixin = e;
  },
  98,
);
