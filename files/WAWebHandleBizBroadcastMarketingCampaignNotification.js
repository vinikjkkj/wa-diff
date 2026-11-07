__d(
  "WAWebHandleBizBroadcastMarketingCampaignNotification",
  [
    "WASmaxSmbMeteredMessagesCampaignCampaignStateChangedNotificationRPC",
    "WAWebBizBroadcastMarketingCampaignNotificationEmitter",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
          "WASmaxSmbMeteredMessagesCampaignCampaignStateChangedNotificationRPC",
        ).receiveCampaignStateChangedNotificationRPC(e),
        n = t.parsedRequest;
      return n.mmCampaignAdCreativeId != null &&
        n.mmCampaignAdGroupId != null &&
        n.mmCampaignAdId != null
        ? {
            adCreativeId: n.mmCampaignAdCreativeId,
            adGroupId: n.mmCampaignAdGroupId,
            adId: n.mmCampaignAdId,
            status: n.mmCampaignStatus,
          }
        : null;
    }
    function s(e) {
      var t = e.adCreativeId,
        n = e.adGroupId,
        r = e.adId,
        a = e.status,
        i = e.ts;
      o(
        "WAWebBizBroadcastMarketingCampaignNotificationEmitter",
      ).marketingCampaignNotificationEmitter.emit({
        adCreativeId: t,
        adGroupId: n,
        adId: r,
        backgroundSendHandling: !1,
        status: a,
        timestamp: i,
      });
    }
    ((l.parseMarketingCampaignNotification = e),
      (l.handleMarketingCampaignNotification = s));
  },
  98,
);
