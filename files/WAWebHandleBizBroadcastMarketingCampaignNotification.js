__d(
  "WAWebHandleBizBroadcastMarketingCampaignNotification",
  [
    "WASmaxSmbMeteredMessagesCampaignCampaignStateChangedNotificationRPC",
    "WAWebBizBroadcastMarketingCampaignNotificationEmitter",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      matches: function (t) {
        return t.hasChild("mm_campaign");
      },
      parse: function (t, n) {
        var e = s(t.node());
        return e == null
          ? null
          : function () {
              return u(babelHelpers.extends({}, e, { ts: n }));
            };
      },
    };
    function s(e) {
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
    function u(e) {
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
    l.default = e;
  },
  98,
);
