__d(
  "WASmaxDevicesChangeNotificationRPC",
  [
    "WASmaxInDevicesChangeNotificationRequest",
    "WASmaxOutDevicesChangeNotificationResponseAck",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInDevicesChangeNotificationRequest",
      ).parseChangeNotificationRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("ChangeNotification", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makeChangeNotificationResponseAck: function () {
          return o(
            "WASmaxOutDevicesChangeNotificationResponseAck",
          ).makeChangeNotificationResponseAck(e);
        },
      };
    }
    l.receiveChangeNotificationRPC = e;
  },
  98,
);
