__d(
  "WASmaxReceiptDeliverAppDataPeerRPC",
  [
    "WASmaxInReceiptDeliverAppDataPeerRequest",
    "WASmaxOutReceiptDeliverAppDataPeerResponseSuccess",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInReceiptDeliverAppDataPeerRequest",
      ).parseDeliverAppDataPeerRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("DeliverAppDataPeer", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makeDeliverAppDataPeerResponseSuccess: function () {
          return o(
            "WASmaxOutReceiptDeliverAppDataPeerResponseSuccess",
          ).makeDeliverAppDataPeerResponseSuccess(e);
        },
      };
    }
    l.receiveDeliverAppDataPeerRPC = e;
  },
  98,
);
