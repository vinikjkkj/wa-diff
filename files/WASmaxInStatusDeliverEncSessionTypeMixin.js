__d(
  "WASmaxInStatusDeliverEncSessionTypeMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "session_type",
        "pq",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ sessionType: n.value })
        : n;
    }
    l.parseEncSessionTypeMixin = e;
  },
  98,
);
