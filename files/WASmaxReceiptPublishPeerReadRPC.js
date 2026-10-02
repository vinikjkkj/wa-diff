__d(
  "WASmaxReceiptPublishPeerReadRPC",
  [
    "WAComms",
    "WASmaxInReceiptPublishPeerReadResponseSuccess",
    "WASmaxOutReceiptPublishPeerReadRequest",
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
              "WASmaxOutReceiptPublishPeerReadRequest",
            ).makePublishPeerReadRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInReceiptPublishPeerReadResponseSuccess",
            ).parsePublishPeerReadResponseSuccess(r, n);
          if (a.success)
            return { name: "PublishPeerReadResponseSuccess", value: a.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("PublishPeerRead", {
              Success: a,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendPublishPeerReadRPC = e;
  },
  98,
);
