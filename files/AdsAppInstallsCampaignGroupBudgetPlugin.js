__d(
  "AdsAppInstallsCampaignGroupBudgetPlugin",
  [
    "AdsAPIBidStrategies",
    "AdsAPIBillingEvents",
    "AdsAPIObjectives",
    "AdsBidControlType",
    "AdsDefaultCampaignGroupBudgetPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsDefaultCampaignGroupBudgetPlugin"), {
        type: "campaign_group/budget",
        key: "app_installs",
        pivots: { objective: r("AdsAPIObjectives").APP_INSTALLS },
        getBidControlType: function () {
          return r("AdsBidControlType").ANY;
        },
        getDisabledPromotedObjectTypes: function (t) {
          return t.isAveragePricePacing
            ? [r("AdsPromotedObjectTypes").CANVAS_APP]
            : [];
        },
        getDisabledBillingEvents: function (t) {
          return t === r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP
            ? [r("AdsAPIBillingEvents").APP_INSTALLS]
            : t === r("AdsAPIBidStrategies").TARGET_COST ||
                t === r("AdsAPIBidStrategies").COST_CAP ||
                t === r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS
              ? Object.keys(r("AdsAPIBillingEvents")).filter(function (e) {
                  return e !== r("AdsAPIBillingEvents").IMPRESSIONS;
                })
              : [];
        },
      }),
      s = e;
    l.default = s;
  },
  98,
);
