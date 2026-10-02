__d(
  "WASmaxRtcE2eeCallEventNotifyCallEventNotificationRPC",
  [
    "WASmaxInRtcE2eeCallEventNotifyCallEventNotificationRequest",
    "WASmaxOutRtcE2eeCallEventNotifyCallEventNotificationResponseAck",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInRtcE2eeCallEventNotifyCallEventNotificationRequest",
      ).parseCallEventNotificationRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("CallEventNotification", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makeCallEventNotificationResponseAck: function () {
          return o(
            "WASmaxOutRtcE2eeCallEventNotifyCallEventNotificationResponseAck",
          ).makeCallEventNotificationResponseAck(e);
        },
      };
    }
    l.receiveCallEventNotificationRPC = e;
  },
  98,
);
