__d(
  "WASmaxMdPrimaryHelloNotifyCompanionRPC",
  [
    "WASmaxInMdPrimaryHelloNotifyCompanionRequest",
    "WASmaxOutMdPrimaryHelloNotifyCompanionResponseAck",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMdPrimaryHelloNotifyCompanionRequest",
      ).parsePrimaryHelloNotifyCompanionRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing(
            "PrimaryHelloNotifyCompanion",
            { Request: t },
          ),
        );
      return {
        parsedRequest: t.value,
        makePrimaryHelloNotifyCompanionResponseAck: function () {
          return o(
            "WASmaxOutMdPrimaryHelloNotifyCompanionResponseAck",
          ).makePrimaryHelloNotifyCompanionResponseAck(e);
        },
      };
    }
    l.receivePrimaryHelloNotifyCompanionRPC = e;
  },
  98,
);
