__d(
  "WASmaxPreKeysNotificationLowCountRPC",
  [
    "WASmaxInPreKeysNotificationLowCountRequest",
    "WASmaxOutPreKeysNotificationLowCountResponseAck",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInPreKeysNotificationLowCountRequest",
      ).parseNotificationLowCountRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("NotificationLowCount", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makeNotificationLowCountResponseAck: function () {
          return o(
            "WASmaxOutPreKeysNotificationLowCountResponseAck",
          ).makeNotificationLowCountResponseAck(e);
        },
      };
    }
    l.receiveNotificationLowCountRPC = e;
  },
  98,
);
