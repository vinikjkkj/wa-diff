__d(
  "WAWebHandleBizBroadcastProCampaignNotification",
  [
    "WASmaxParseUtils",
    "WASmaxSmbMeteredMessagesCampaignBbProCampaignStatusNotificationRPC",
    "WAWebBackendApi",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 50,
      s = {
        priority: e,
        matches: function (t) {
          return o("WASmaxParseUtils").flattenedChildWithTag(
            t.node(),
            "bb_pro_campaign",
          ).success;
        },
        parse: function (t) {
          var e = o(
              "WASmaxSmbMeteredMessagesCampaignBbProCampaignStatusNotificationRPC",
            ).receiveBbProCampaignStatusNotificationRPC(t.node()),
            n = e.parsedRequest.bbProCampaignCampaignId;
          return function () {
            return o("WAWebBackendApi").frontendFireAndForget(
              "invalidateBizBroadcastProCampaign",
              { campaignId: n },
            );
          };
        },
      };
    l.default = s;
  },
  98,
);
