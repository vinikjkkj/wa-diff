__d(
  "WAWebBizBroadcastCampaignNotifier",
  [
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
          (yield o(
            "WAWebBizBroadcastCampaignStorageUtils",
          ).updateCampaignWithSync(e, t, n),
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
