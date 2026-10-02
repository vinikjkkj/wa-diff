__d(
  "WASmaxAppdataDeliverPeerRPC",
  [
    "WASmaxInAppdataDeliverPeerRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInAppdataDeliverPeerRequest").parsePeerRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("Peer", { Request: t }),
        );
      return { parsedRequest: t.value };
    }
    l.receivePeerRPC = e;
  },
  98,
);
