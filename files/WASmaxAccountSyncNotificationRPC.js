__d(
  "WASmaxAccountSyncNotificationRPC",
  [
    "WASmaxInAccountSyncNotificationRequest",
    "WASmaxOutAccountSyncNotificationResponseAck",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInAccountSyncNotificationRequest",
      ).parseNotificationRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("Notification", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makeNotificationResponseAck: function () {
          return o(
            "WASmaxOutAccountSyncNotificationResponseAck",
          ).makeNotificationResponseAck(e);
        },
      };
    }
    l.receiveNotificationRPC = e;
  },
  98,
);
