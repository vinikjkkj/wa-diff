__d(
  "WASmaxSmbMeteredMessagesCampaignCampaignStateChangedNotificationRPC",
  [
    "WASmaxInSmbMeteredMessagesCampaignCampaignStateChangedNotificationRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInSmbMeteredMessagesCampaignCampaignStateChangedNotificationRequest",
      ).parseCampaignStateChangedNotificationRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing(
            "CampaignStateChangedNotification",
            { Request: t },
          ),
        );
      return { parsedRequest: t.value };
    }
    l.receiveCampaignStateChangedNotificationRPC = e;
  },
  98,
);
