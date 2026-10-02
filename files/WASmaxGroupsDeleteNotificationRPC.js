__d(
  "WASmaxGroupsDeleteNotificationRPC",
  [
    "WASmaxInGroupsDeleteNotificationRequest",
    "WASmaxOutGroupsDeleteNotificationResponseAck",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInGroupsDeleteNotificationRequest",
      ).parseDeleteNotificationRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("DeleteNotification", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makeDeleteNotificationResponseAck: function () {
          return o(
            "WASmaxOutGroupsDeleteNotificationResponseAck",
          ).makeDeleteNotificationResponseAck(e);
        },
      };
    }
    l.receiveDeleteNotificationRPC = e;
  },
  98,
);
