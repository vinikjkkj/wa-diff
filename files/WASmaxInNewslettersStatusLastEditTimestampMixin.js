__d(
  "WASmaxInNewslettersStatusLastEditTimestampMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "status");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(
        n.value,
        "msg_edit_t",
        1577865600,
        4102473600,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaMsgEditT: r.value })
        : r;
    }
    l.parseStatusLastEditTimestampMixin = e;
  },
  98,
);
