__d(
  "WASmaxMessageDeliverPeerRPC",
  [
    "WASmaxInMessageDeliverPeerRequest",
    "WASmaxOutMessageDeliverPeerResponseNegative",
    "WASmaxOutMessageDeliverPeerResponseSuccess",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInMessageDeliverPeerRequest").parsePeerRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("Peer", { Request: t }),
        );
      return {
        parsedRequest: t.value,
        makePeerResponseNegative: function () {
          return o(
            "WASmaxOutMessageDeliverPeerResponseNegative",
          ).makePeerResponseNegative(e);
        },
        makePeerResponseSuccess: function () {
          return o(
            "WASmaxOutMessageDeliverPeerResponseSuccess",
          ).makePeerResponseSuccess(e);
        },
      };
    }
    l.receivePeerRPC = e;
  },
  98,
);
