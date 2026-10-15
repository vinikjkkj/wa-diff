__d(
  "WAWebBizBroadcastProCampaignStatusRefreshQuery",
  [
    "CometRelay",
    "WAWebBizBroadcastProCampaignStatusRefreshQuery.graphql",
    "WAWebBizBroadcastProCampaignStatusRefreshQuery_campaign.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n(
              "WAWebBizBroadcastProCampaignStatusRefreshQuery_campaign.graphql",
            )),
      c =
        s !== void 0
          ? s
          : (s = n("WAWebBizBroadcastProCampaignStatusRefreshQuery.graphql"));
    function d(e) {
      var t,
        n = o("CometRelay").readInlineData(u, e);
      return {
        canStop: n.bb_pro_can_stop,
        deliveryStatus:
          (t = n.delivery_status_info) == null ? void 0 : t.status,
        displayStatus: n.bb_pro_display_status,
      };
    }
    ((l.proCampaignStatusRefreshQuery = c), (l.readProCampaignStatus = d));
  },
  98,
);
