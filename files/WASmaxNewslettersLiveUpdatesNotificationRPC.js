__d(
  "WASmaxNewslettersLiveUpdatesNotificationRPC",
  [
    "WASmaxInNewslettersLiveUpdatesNotificationRequest",
    "WASmaxOutNewslettersLiveUpdatesNotificationResponseAck",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInNewslettersLiveUpdatesNotificationRequest",
      ).parseLiveUpdatesNotificationRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing(
            "LiveUpdatesNotification",
            { Request: t },
          ),
        );
      return {
        parsedRequest: t.value,
        makeLiveUpdatesNotificationResponseAck: function () {
          return o(
            "WASmaxOutNewslettersLiveUpdatesNotificationResponseAck",
          ).makeLiveUpdatesNotificationResponseAck(e);
        },
      };
    }
    l.receiveLiveUpdatesNotificationRPC = e;
  },
  98,
);
