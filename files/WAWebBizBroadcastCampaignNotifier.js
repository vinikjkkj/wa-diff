__d(
  "WAWebBizBroadcastCampaignNotifier",
  [
    "WAWebBizBroadcastCampaignCollection",
    "WAWebBizBroadcastCampaignStorageUtils",
    "WAWebBroadcastConsts",
    "WAWebCmd",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a;
          (yield o(
            "WAWebBizBroadcastCampaignStorageUtils",
          ).updateCampaignWithSync(e, t, n),
            (a = r("WAWebBizBroadcastCampaignCollection").get(e)) == null ||
              a.set(t),
            o("WAWebCmd").Cmd.trigger(
              o("WAWebBroadcastConsts").BIZ_BROADCAST_CAMPAIGN_UPDATED_EVENT,
            ));
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (yield o(
            "WAWebBizBroadcastCampaignStorageUtils",
          ).removeCampaignWithSync(e, t),
            r("WAWebBizBroadcastCampaignCollection").remove(e),
            o("WAWebCmd").Cmd.trigger(
              o("WAWebBroadcastConsts").BIZ_BROADCAST_CAMPAIGN_UPDATED_EVENT,
            ));
        })),
        c.apply(this, arguments)
      );
    }
    ((l.updateCampaignWithSyncAndNotify = e),
      (l.removeCampaignWithSyncAndNotify = u));
  },
  98,
);
