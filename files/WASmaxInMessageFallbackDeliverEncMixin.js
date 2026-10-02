__d(
  "WASmaxInMessageFallbackDeliverEncMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").countChildrenWithTag(
        e,
        "enc",
        1,
        1 / 0,
        o("WAResultOrError").makeResult,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ countEnc: n.value })
        : n;
    }
    l.parseDeliverEncMixin = e;
  },
  98,
);
