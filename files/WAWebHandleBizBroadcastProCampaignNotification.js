__d(
  "WAWebHandleBizBroadcastProCampaignNotification",
  [
    "WASmaxSmbMeteredMessagesCampaignBbProCampaignStatusNotificationRPC",
    "WAWebBackendApi",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxSmbMeteredMessagesCampaignBbProCampaignStatusNotificationRPC",
      ).receiveBbProCampaignStatusNotificationRPC(e);
      return t.parsedRequest.bbProCampaignCampaignId;
    }
    function s(e) {
      o("WAWebBackendApi").frontendFireAndForget(
        "invalidateBizBroadcastProCampaign",
        { campaignId: e },
      );
    }
    ((l.parseBizBroadcastProCampaignId = e),
      (l.handleBizBroadcastProCampaignNotification = s));
  },
  98,
);
