__d(
  "WASmaxReceiptPublishPeerDeliveryRPC",
  [
    "WAComms",
    "WASmaxInReceiptPublishPeerDeliveryResponseSuccess",
    "WASmaxOutReceiptPublishPeerDeliveryRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o(
              "WASmaxOutReceiptPublishPeerDeliveryRequest",
            ).makePublishPeerDeliveryRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInReceiptPublishPeerDeliveryResponseSuccess",
            ).parsePublishPeerDeliveryResponseSuccess(r, n);
          if (a.success)
            return {
              name: "PublishPeerDeliveryResponseSuccess",
              value: a.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("PublishPeerDelivery", {
              Success: a,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendPublishPeerDeliveryRPC = e;
  },
  98,
);
