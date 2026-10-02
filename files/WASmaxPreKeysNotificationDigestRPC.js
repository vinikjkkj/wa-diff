__d(
  "WASmaxPreKeysNotificationDigestRPC",
  [
    "WASmaxInPreKeysNotificationDigestRequest",
    "WASmaxOutPreKeysNotificationDigestResponseAck",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInPreKeysNotificationDigestRequest",
      ).parseNotificationDigestRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("NotificationDigest", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makeNotificationDigestResponseAck: function () {
          return o(
            "WASmaxOutPreKeysNotificationDigestResponseAck",
          ).makeNotificationDigestResponseAck(e);
        },
      };
    }
    l.receiveNotificationDigestRPC = e;
  },
  98,
);
