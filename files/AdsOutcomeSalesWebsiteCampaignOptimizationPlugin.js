__d(
  "AdsOutcomeSalesWebsiteCampaignOptimizationPlugin",
  [
    "AdsAMNoPixelDefaultStoreUtils",
    "AdsAMShellPixelDefaultStoreUtils",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsOutcomeWebsiteCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
    "AdsValueOptimizationUtils",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsOutcomeWebsiteCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "outcome_sales_website",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_SALES,
            promotedObjectType: r("AdsPromotedObjectTypes").PIXEL,
          },
          getViewConversionWindowOptions: function (t) {
            return t === r("AdsAPIOptimizationGoals").VALUE
              ? [1]
              : r(
                  "AdsOutcomeWebsiteCampaignOptimizationPlugin",
                ).getViewConversionWindowOptions(t);
          },
          getDefaultOptimizationGoal: function (t) {
            var e,
              n,
              a,
              i =
                !r("justknobx")._("1436") &&
                o("AdsValueOptimizationUtils").shouldDefaultVOOptimizationGoal(
                  t.campaign,
                  t.account,
                  t.campaignGroup,
                  !0,
                  "web_pfr_laser_based",
                  !1,
                ),
              l = (e = t.account) == null ? void 0 : e.account_id,
              s = (n = t.campaignGroup) == null ? void 0 : n.objective,
              u =
                ((a = t.campaignGroup) == null ||
                (a = a.promoted_object) == null
                  ? void 0
                  : a.product_catalog_id) != null;
            return o(
              "AdsAMShellPixelDefaultStoreUtils",
            ).isShellPixelLPVDefaultEligible(l, s, u) ||
              o("AdsAMNoPixelDefaultStoreUtils").isNoPixelLPVDefaultEligible(
                l,
                s,
                u,
              )
              ? r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS
              : i
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
