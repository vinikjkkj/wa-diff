__d(
  "WASmaxGroupsGroupsDirtyNotificationRPC",
  [
    "WASmaxInGroupsGroupsDirtyNotificationRequest",
    "WASmaxOutGroupsGroupsDirtyNotificationResponseAck",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInGroupsGroupsDirtyNotificationRequest",
      ).parseGroupsDirtyNotificationRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing(
            "GroupsDirtyNotification",
            { Request: t },
          ),
        );
      return {
        parsedRequest: t.value,
        makeGroupsDirtyNotificationResponseAck: function () {
          return o(
            "WASmaxOutGroupsGroupsDirtyNotificationResponseAck",
          ).makeGroupsDirtyNotificationResponseAck(e);
        },
      };
    }
    l.receiveGroupsDirtyNotificationRPC = e;
  },
  98,
);
