__d(
  "WAWebBizBroadcastProCampaignQueryLoader",
  ["CometRelay", "WAWebBizBroadcastProCampaignTableQuery"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 50;
    function s(t) {
      return o("CometRelay").loadQuery(
        t,
        o("WAWebBizBroadcastProCampaignTableQuery").proCampaignTableQuery,
        { after: null, first: e },
        { fetchPolicy: "network-only" },
      );
    }
    ((l.PRO_CAMPAIGN_QUERY_PAGE_SIZE = e), (l.preloadProCampaignQuery = s));
  },
  98,
);
