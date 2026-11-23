__d(
  "AdsShopsAdsShopLevelActivationCampaignBudgetConversionsODAXMigratedPlugin",
  [
    "AdsAPIObjectives",
    "AdsShopsAdsShopLevelActivationCampaignBudgetConversionsPlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsShopsAdsShopLevelActivationCampaignBudgetConversionsPlugin"),
        {
          type: "campaign/budget/ODAX_MIGRATED",
          key: "shops-ads-conversions/ODAX_MIGRATED",
          multiPivots: [{ objective: r("AdsAPIObjectives").OUTCOME_SALES }],
          originalKey: "shops-ads-conversions",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
