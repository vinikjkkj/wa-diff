__d(
  "WASmaxGroupsAddNotificationRPC",
  [
    "WASmaxInGroupsAddNotificationRequest",
    "WASmaxOutGroupsAddNotificationResponseAck",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInGroupsAddNotificationRequest",
      ).parseAddNotificationRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("AddNotification", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makeAddNotificationResponseAck: function () {
          return o(
            "WASmaxOutGroupsAddNotificationResponseAck",
          ).makeAddNotificationResponseAck(e);
        },
      };
    }
    l.receiveAddNotificationRPC = e;
  },
  98,
);
