__d(
  "WASmaxGroupsMemberAddModeChangeNotificationRPC",
  [
    "WASmaxInGroupsMemberAddModeChangeNotificationRequest",
    "WASmaxOutGroupsMemberAddModeChangeNotificationResponseAck",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInGroupsMemberAddModeChangeNotificationRequest",
      ).parseMemberAddModeChangeNotificationRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing(
            "MemberAddModeChangeNotification",
            { Request: t },
          ),
        );
      return {
        parsedRequest: t.value,
        makeMemberAddModeChangeNotificationResponseAck: function () {
          return o(
            "WASmaxOutGroupsMemberAddModeChangeNotificationResponseAck",
          ).makeMemberAddModeChangeNotificationResponseAck(e);
        },
      };
    }
    l.receiveMemberAddModeChangeNotificationRPC = e;
  },
  98,
);
