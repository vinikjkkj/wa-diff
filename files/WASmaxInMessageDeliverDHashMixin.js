__d(
  "WASmaxInMessageDeliverDHashMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "dhash");
      return n.success
        ? o("WAResultOrError").makeResult({ dhash: n.value })
        : n;
    }
    l.parseDHashMixin = e;
  },
  98,
);
