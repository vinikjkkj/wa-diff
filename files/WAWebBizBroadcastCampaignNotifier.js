__d(
  "WAWebBizBroadcastCampaignNotifier",
  [
    "WAWebBizBroadcastCampaignCollection",
    "WAWebBizBroadcastCampaignStorageUtils",
    "WAWebBroadcastConsts",
    "WAWebCmd",
    "WAWebRemoveCampaignWithSync",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      var a;
      (await o("WAWebBizBroadcastCampaignStorageUtils").updateCampaignWithSync(
        e,
        t,
        n,
      ),
        (a = r("WAWebBizBroadcastCampaignCollection").get(e)) == null ||
          a.set(t),
        o("WAWebCmd").Cmd.trigger(
          o("WAWebBroadcastConsts").BIZ_BROADCAST_CAMPAIGN_UPDATED_EVENT,
        ));
    }
    async function s(e, t) {
      (await o("WAWebRemoveCampaignWithSync").removeCampaignWithSync(e, t),
        r("WAWebBizBroadcastCampaignCollection").remove(e),
        o("WAWebCmd").Cmd.trigger(
          o("WAWebBroadcastConsts").BIZ_BROADCAST_CAMPAIGN_UPDATED_EVENT,
        ));
    }
    ((l.updateCampaignWithSyncAndNotify = e),
      (l.removeCampaignWithSyncAndNotify = s));
  },
  98,
);
