__d(
  "WASmaxUsyncNotificationRPC",
  [
    "WASmaxInUsyncNotificationRequest",
    "WASmaxOutUsyncNotificationResponseAck",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInUsyncNotificationRequest").parseNotificationRequest(e);
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
            "WASmaxOutUsyncNotificationResponseAck",
          ).makeNotificationResponseAck(e);
        },
      };
    }
    l.receiveNotificationRPC = e;
  },
  98,
);
