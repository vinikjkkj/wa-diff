__d(
  "WASmaxGroupsSubjectChangeNotificationRPC",
  [
    "WASmaxInGroupsSubjectChangeNotificationRequest",
    "WASmaxOutGroupsSubjectChangeNotificationResponseAck",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInGroupsSubjectChangeNotificationRequest",
      ).parseSubjectChangeNotificationRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing(
            "SubjectChangeNotification",
            { Request: t },
          ),
        );
      return {
        parsedRequest: t.value,
        makeSubjectChangeNotificationResponseAck: function () {
          return o(
            "WASmaxOutGroupsSubjectChangeNotificationResponseAck",
          ).makeSubjectChangeNotificationResponseAck(e);
        },
      };
    }
    l.receiveSubjectChangeNotificationRPC = e;
  },
  98,
);
