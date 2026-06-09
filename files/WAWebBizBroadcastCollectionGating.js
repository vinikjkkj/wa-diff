__d(
  "WAWebBizBroadcastCollectionGating",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_biz_broadcast_collection_based_campaigns_enabled",
      );
    }
    l.shouldReadBizBroadcastCampaignsFromCollection = e;
  },
  98,
);
