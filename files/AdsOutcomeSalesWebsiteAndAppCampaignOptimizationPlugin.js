__d(
  "AdsOutcomeSalesWebsiteAndAppCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsConversionsWebsiteAndAppCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
    "AdsValueOptimizationUtils",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsConversionsWebsiteAndAppCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "outcome_sales_website_and_app",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_SALES,
            promotedObjectType: r("AdsPromotedObjectTypes").WEB_AND_APP,
          },
          getViewConversionWindowOptions: function (t) {
            return t === r("AdsAPIOptimizationGoals").VALUE
              ? [1]
              : r(
                  "AdsConversionsWebsiteAndAppCampaignOptimizationPlugin",
                ).getViewConversionWindowOptions(t);
          },
          getDefaultViewConversionWindowLength: function (t, n, a) {
            return a === r("AdsAPIObjectives").OUTCOME_SALES &&
              t === r("AdsAPIOptimizationGoals").VALUE &&
              o(
                "AdsValueOptimizationUtils",
              ).isViewThroughDefaultEnabledForVOQE()
              ? 1
              : r(
                  "AdsConversionsWebsiteAndAppCampaignOptimizationPlugin",
                ).getDefaultViewConversionWindowLength(t, n);
          },
          getDefaultOptimizationGoal: function (t) {
            return !r("justknobx")._("1436") &&
              o("AdsValueOptimizationUtils").shouldDefaultVOOptimizationGoal(
                t.campaign,
                t.account,
                t.campaignGroup,
                !0,
                "web_app_pfr_laser_based",
                !1,
              )
              ? r("AdsAPIOptimizationGoals").VALUE
              : r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS;
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
