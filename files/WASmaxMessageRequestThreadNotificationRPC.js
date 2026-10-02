__d(
  "WASmaxMessageRequestThreadNotificationRPC",
  [
    "WASmaxInMessageRequestThreadNotificationRequest",
    "WASmaxOutMessageRequestThreadNotificationResponseAck",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMessageRequestThreadNotificationRequest",
      ).parseThreadNotificationRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("ThreadNotification", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makeThreadNotificationResponseAck: function () {
          return o(
            "WASmaxOutMessageRequestThreadNotificationResponseAck",
          ).makeThreadNotificationResponseAck(e);
        },
      };
    }
    l.receiveThreadNotificationRPC = e;
  },
  98,
);
