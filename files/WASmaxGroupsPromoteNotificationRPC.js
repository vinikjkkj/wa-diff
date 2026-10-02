__d(
  "WASmaxGroupsPromoteNotificationRPC",
  [
    "WASmaxInGroupsPromoteNotificationRequest",
    "WASmaxOutGroupsPromoteNotificationResponseAck",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInGroupsPromoteNotificationRequest",
      ).parsePromoteNotificationRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("PromoteNotification", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makePromoteNotificationResponseAck: function () {
          return o(
            "WASmaxOutGroupsPromoteNotificationResponseAck",
          ).makePromoteNotificationResponseAck(e);
        },
      };
    }
    l.receivePromoteNotificationRPC = e;
  },
  98,
);
