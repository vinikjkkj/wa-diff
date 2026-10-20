__d(
  "WAWebHandleBizBroadcastProCampaignNotification",
  ["WAWebBackendApi"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      o("WAWebBackendApi").frontendFireAndForget(
        "invalidateBizBroadcastProCampaign",
        { campaignId: e },
      );
    }
    l.handleBizBroadcastProCampaignNotification = e;
  },
  98,
);
