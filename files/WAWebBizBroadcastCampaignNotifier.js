__d(
  "WAWebBizBroadcastCampaignNotifier",
  ["WAWebBizBroadcastCampaignStorageUtils", "WAWebBroadcastConsts", "WAWebCmd"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      (await o("WAWebBizBroadcastCampaignStorageUtils").updateCampaignWithSync(
        e,
        t,
        n,
      ),
        o("WAWebCmd").Cmd.trigger(
          o("WAWebBroadcastConsts").BIZ_BROADCAST_CAMPAIGN_UPDATED_EVENT,
        ));
    }
    async function s(e, t) {
      (await o("WAWebBizBroadcastCampaignStorageUtils").removeCampaignWithSync(
        e,
        t,
      ),
        o("WAWebCmd").Cmd.trigger(
          o("WAWebBroadcastConsts").BIZ_BROADCAST_CAMPAIGN_UPDATED_EVENT,
        ));
    }
    ((l.updateCampaignWithSyncAndNotify = e),
      (l.removeCampaignWithSyncAndNotify = s));
  },
  98,
);
