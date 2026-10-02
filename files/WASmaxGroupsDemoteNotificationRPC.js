__d(
  "WASmaxGroupsDemoteNotificationRPC",
  [
    "WASmaxInGroupsDemoteNotificationRequest",
    "WASmaxOutGroupsDemoteNotificationResponseAck",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInGroupsDemoteNotificationRequest",
      ).parseDemoteNotificationRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("DemoteNotification", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makeDemoteNotificationResponseAck: function () {
          return o(
            "WASmaxOutGroupsDemoteNotificationResponseAck",
          ).makeDemoteNotificationResponseAck(e);
        },
      };
    }
    l.receiveDemoteNotificationRPC = e;
  },
  98,
);
