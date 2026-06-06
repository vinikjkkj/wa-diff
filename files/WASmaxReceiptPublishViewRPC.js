__d(
  "WASmaxReceiptPublishViewRPC",
  [
    "WAComms",
    "WASmaxInReceiptPublishViewResponseSuccess",
    "WASmaxOutReceiptPublishViewRequest",
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
              "WASmaxOutReceiptPublishViewRequest",
            ).makePublishViewRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInReceiptPublishViewResponseSuccess",
            ).parsePublishViewResponseSuccess(r, n);
          if (a.success)
            return { name: "PublishViewResponseSuccess", value: a.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("PublishView", {
              Success: a,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendPublishViewRPC = e;
  },
  98,
);
