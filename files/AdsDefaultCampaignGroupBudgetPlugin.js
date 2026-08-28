__d(
  "AdsDefaultCampaignGroupBudgetPlugin",
  ["AdsBidControlType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "campaign_group/budget",
        key: "default",
        pivots: {},
        getBidControlType: function () {
          return r("AdsBidControlType").AUTO_AND_MAX_BID_ONLY;
        },
        getDisabledPromotedObjectTypes: function (t) {
          return [];
        },
        getDisabledBillingEvents: function (t) {
          return [];
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
