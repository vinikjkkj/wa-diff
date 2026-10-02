__d(
  "WASmaxGroupsRemoveNotificationRPC",
  [
    "WASmaxInGroupsRemoveNotificationRequest",
    "WASmaxOutGroupsRemoveNotificationResponseAck",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInGroupsRemoveNotificationRequest",
      ).parseRemoveNotificationRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("RemoveNotification", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makeRemoveNotificationResponseAck: function () {
          return o(
            "WASmaxOutGroupsRemoveNotificationResponseAck",
          ).makeRemoveNotificationResponseAck(e);
        },
      };
    }
    l.receiveRemoveNotificationRPC = e;
  },
  98,
);
