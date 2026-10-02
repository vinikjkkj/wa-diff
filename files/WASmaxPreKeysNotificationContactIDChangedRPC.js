__d(
  "WASmaxPreKeysNotificationContactIDChangedRPC",
  [
    "WASmaxInPreKeysNotificationContactIDChangedRequest",
    "WASmaxOutPreKeysNotificationContactIDChangedResponseAck",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInPreKeysNotificationContactIDChangedRequest",
      ).parseNotificationContactIDChangedRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing(
            "NotificationContactIDChanged",
            { Request: t },
          ),
        );
      return {
        parsedRequest: t.value,
        makeNotificationContactIDChangedResponseAck: function () {
          return o(
            "WASmaxOutPreKeysNotificationContactIDChangedResponseAck",
          ).makeNotificationContactIDChangedResponseAck(e);
        },
      };
    }
    l.receiveNotificationContactIDChangedRPC = e;
  },
  98,
);
