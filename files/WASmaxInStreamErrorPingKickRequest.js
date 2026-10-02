__d(
  "WASmaxInStreamErrorPingKickRequest",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "stream:error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "ping");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStanzaId(n.value, "id");
      return r.success
        ? o("WAResultOrError").makeResult({ pingId: r.value })
        : r;
    }
    l.parsePingKickRequest = e;
  },
  98,
);
