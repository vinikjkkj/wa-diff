__d(
  "WASmaxMultiwaydMultiwayNotificationRPC",
  [
    "WASmaxInMultiwaydMultiwayNotificationRequest",
    "WASmaxOutMultiwaydMultiwayNotificationResponseAck",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMultiwaydMultiwayNotificationRequest",
      ).parseMultiwayNotificationRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("MultiwayNotification", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makeMultiwayNotificationResponseAck: function () {
          return o(
            "WASmaxOutMultiwaydMultiwayNotificationResponseAck",
          ).makeMultiwayNotificationResponseAck(e);
        },
      };
    }
    l.receiveMultiwayNotificationRPC = e;
  },
  98,
);
