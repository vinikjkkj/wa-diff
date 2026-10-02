__d(
  "WASmaxStreamErrorPingKickRPC",
  [
    "WASmaxInStreamErrorPingKickRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInStreamErrorPingKickRequest").parsePingKickRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("PingKick", {
            Request: t,
          }),
        );
      return { parsedRequest: t.value };
    }
    l.receivePingKickRPC = e;
  },
  98,
);
