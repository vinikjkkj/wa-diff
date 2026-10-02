__d(
  "WASmaxGroupsJoinNotificationRPC",
  [
    "WASmaxInGroupsJoinNotificationRequest",
    "WASmaxOutGroupsJoinNotificationResponseAck",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInGroupsJoinNotificationRequest",
      ).parseJoinNotificationRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("JoinNotification", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makeJoinNotificationResponseAck: function () {
          return o(
            "WASmaxOutGroupsJoinNotificationResponseAck",
          ).makeJoinNotificationResponseAck(e);
        },
      };
    }
    l.receiveJoinNotificationRPC = e;
  },
  98,
);
