__d(
  "WASmaxStreamErrorPingKickRPC",
  [
    "WAResultOrError",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = s(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("PingKick", {
            Request: t,
          }),
        );
      return { parsedRequest: t.value };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "stream:error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "ping");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStanzaId(n.value, "id");
      return r.success
        ? o("WAResultOrError").makeResult({ pingId: r.value })
        : r;
    }
    ((l.receivePingKickRPC = e), (l.parsePingKickRequest = s));
  },
  98,
);
