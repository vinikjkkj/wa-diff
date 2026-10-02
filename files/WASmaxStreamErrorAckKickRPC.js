__d(
  "WASmaxStreamErrorAckKickRPC",
  [
    "WASmaxInStreamErrorAckKickRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInStreamErrorAckKickRequest").parseAckKickRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("AckKick", { Request: t }),
        );
      return { parsedRequest: t.value };
    }
    l.receiveAckKickRPC = e;
  },
  98,
);
