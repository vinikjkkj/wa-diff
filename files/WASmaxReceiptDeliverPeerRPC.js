__d(
  "WASmaxReceiptDeliverPeerRPC",
  [
    "WASmaxInReceiptDeliverPeerRequest",
    "WASmaxOutReceiptDeliverPeerResponseSuccess",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInReceiptDeliverPeerRequest").parseDeliverPeerRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("DeliverPeer", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makeDeliverPeerResponseSuccess: function () {
          return o(
            "WASmaxOutReceiptDeliverPeerResponseSuccess",
          ).makeDeliverPeerResponseSuccess(e);
        },
      };
    }
    l.receiveDeliverPeerRPC = e;
  },
  98,
);
