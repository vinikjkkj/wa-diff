__d(
  "WASmaxSmbMeteredMessagesCampaignBbProCampaignStatusNotificationRPC",
  [
    "WASmaxInSmbMeteredMessagesCampaignBbProCampaignStatusNotificationRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInSmbMeteredMessagesCampaignBbProCampaignStatusNotificationRequest",
      ).parseBbProCampaignStatusNotificationRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing(
            "BbProCampaignStatusNotification",
            { Request: t },
          ),
        );
      return { parsedRequest: t.value };
    }
    l.receiveBbProCampaignStatusNotificationRPC = e;
  },
  98,
);
