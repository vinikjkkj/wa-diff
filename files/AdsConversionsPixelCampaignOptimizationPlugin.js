__d(
  "AdsConversionsPixelCampaignOptimizationPlugin",
  [
    "AdsAPIBidStrategies",
    "AdsAPIObjectiveOptimizationGoals",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAccountUtils",
    "AdsConversionsCampaignOptimizationPlugin",
    "AdsLandingPageViewsUtils",
    "AdsOptimizationGoalUtils",
    "AdsPromotedObjectTypes",
    "AdsValueOptimizationUtils",
    "adsEVCDefaultingExperimentUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
      {},
      r("AdsConversionsCampaignOptimizationPlugin"),
      {
        type: "campaign/optimization",
        key: "conversions/pixel",
        pivots: {
          objective: r("AdsAPIObjectives").CONVERSIONS,
          promotedObjectType: r("AdsPromotedObjectTypes").PIXEL,
        },
        getViewConversionWindowOptions: function (t) {
          return r(
            "AdsConversionsCampaignOptimizationPlugin",
          ).getViewConversionWindowOptions(t);
        },
        getSupportedOptimizationGoals: function (t) {
          var e = t.hasOffer,
            n = t.hasPostConversionOptimization,
            a = t.haveIncrementalConversionOptimization,
            i = t.isASACampaign,
            l = t.objective,
            s = t.promotedObjectType,
            u = t.valueOptimizationOptionUIState;
          if (a === !0)
            return [
              r("AdsAPIOptimizationGoals").INCREMENTAL_OFFSITE_CONVERSIONS,
            ];
          if (n === !0)
            return [r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS];
          var c = o("AdsValueOptimizationUtils").showVOBasedOnVOUIState(u),
            d = o("AdsLandingPageViewsUtils").canSeeOptimizationGoalInDropdown(
              !!e,
              s,
              l,
            );
          return i === !0
            ? [r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS].concat(
                c ? [r("AdsAPIOptimizationGoals").VALUE] : [],
              )
            : [r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS].concat(
                c ? [r("AdsAPIOptimizationGoals").VALUE] : [],
                d ? [r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS] : [],
                [
                  r("AdsAPIOptimizationGoals").LINK_CLICKS,
                  r("AdsAPIOptimizationGoals").IMPRESSIONS,
                  r("AdsAPIOptimizationGoals").REACH,
                ],
              );
        },
        getDefaultOptimizationGoal: function (t) {
          var e = t.account,
            n = t.campaign,
            a = t.campaignGroup,
            i = t.canUseVOForWebsiteConversion,
            l = t.hasPostConversionOptimization,
            s = t.haveIncrementalConversionOptimization,
            u = t.pixelConversionEvent,
            c = a ? a.bid_strategy : null;
          if (c === r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS)
            return r("AdsAPIOptimizationGoals").VALUE;
          if (
            s === !0 ||
            (n == null ? void 0 : n.optimization_goal) ===
              r("AdsAPIOptimizationGoals").INCREMENTAL_OFFSITE_CONVERSIONS
          )
            return r("AdsAPIOptimizationGoals").INCREMENTAL_OFFSITE_CONVERSIONS;
          if (l === !0) return r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS;
          var d =
              u === "PURCHASE" &&
              o(
                "AdsOptimizationGoalUtils",
              ).bidStrategySupportsValueOptimization(c),
            m =
              i === !0 &&
              (r("AdsAccountUtils").hasCapability(
                e,
                "ADS_CF_VALUE_OPTIMIZATION_GOAL_DEFAULT",
              ) ||
                r("AdsAccountUtils").hasCapability(
                  e,
                  "CAN_DEFAULT_ROAS_CF_MIN_ROAS",
                ));
          if (d && m) return r("AdsAPIOptimizationGoals").VALUE;
          var p = r("AdsAPIObjectiveOptimizationGoals")[
            r("AdsAPIObjectives").CONVERSIONS
          ];
          return p.DEFAULT;
        },
        getDefaultViewConversionWindowLength: function (t, n, a) {
          return a === r("AdsAPIObjectives").OUTCOME_SALES &&
            t === r("AdsAPIOptimizationGoals").VALUE &&
            o("AdsValueOptimizationUtils").isViewThroughDefaultEnabledForVOQE()
            ? 1
            : r(
                "AdsConversionsCampaignOptimizationPlugin",
              ).getDefaultViewConversionWindowLength(t, n);
        },
        getDefaultEngagedVideoViewWindowLength: function (t, n, o, a) {
          var e = s(t, o);
          return e
            ? 1
            : r(
                "AdsConversionsCampaignOptimizationPlugin",
              ).getDefaultEngagedVideoViewWindowLength(t, n);
        },
      },
    );
    function s(e, t) {
      return e !== r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS
        ? !1
        : t === r("AdsAPIObjectives").OUTCOME_LEADS
          ? o("adsEVCDefaultingExperimentUtils").isLeadsEVCDefaultingEnabled()
          : o("adsEVCDefaultingExperimentUtils").isEVCDefaultingEnabled();
    }
    var u = e;
    l.default = u;
  },
  98,
);
