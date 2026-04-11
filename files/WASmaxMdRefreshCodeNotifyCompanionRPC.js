__d(
  "WASmaxMdRefreshCodeNotifyCompanionRPC",
  [
    "WASmaxInMdRefreshCodeNotifyCompanionRequest",
    "WASmaxOutMdRefreshCodeNotifyCompanionResponseAck",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMdRefreshCodeNotifyCompanionRequest",
      ).parseRefreshCodeNotifyCompanionRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing(
            "RefreshCodeNotifyCompanion",
            { Request: t },
          ),
        );
      return {
        parsedRequest: t.value,
        makeRefreshCodeNotifyCompanionResponseAck: function () {
          return o(
            "WASmaxOutMdRefreshCodeNotifyCompanionResponseAck",
          ).makeRefreshCodeNotifyCompanionResponseAck(e);
        },
      };
    }
    l.receiveRefreshCodeNotifyCompanionRPC = e;
  },
  98,
);
