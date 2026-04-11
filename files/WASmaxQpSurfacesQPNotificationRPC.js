__d(
  "WASmaxQpSurfacesQPNotificationRPC",
  [
    "WASmaxInQpSurfacesQPNotificationRequest",
    "WASmaxOutQpSurfacesQPNotificationResponseAck",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInQpSurfacesQPNotificationRequest",
      ).parseQPNotificationRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("QPNotification", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makeQPNotificationResponseAck: function () {
          return o(
            "WASmaxOutQpSurfacesQPNotificationResponseAck",
          ).makeQPNotificationResponseAck(e);
        },
      };
    }
    l.receiveQPNotificationRPC = e;
  },
  98,
);
