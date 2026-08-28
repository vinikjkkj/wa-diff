__d(
  "AdsDefaultCampaignOptimizationPlugin",
  [
    "AdsAPIObjectiveOptimizationGoals",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsBidControlType",
    "AdsBulkValueUtils",
    "AdsIntelligentBlueTip.react",
    "AdsOptimizationStrings",
    "AdsSplitTestVariable",
    "nullthrows",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = this.pivots.objective,
        n =
          t != null
            ? t
            : e.objective != null
              ? e.objective
              : r("AdsAPIObjectives").NONE,
        o = r("AdsAPIObjectiveOptimizationGoals")[n];
      return (r("nullthrows")(o, "Unexpected null: data"), o.DEFAULT);
    }
    var c = {
        type: "campaign/optimization",
        key: "default",
        pivots: {},
        getCanUseAveragePricePacing: function (t, n) {
          return !1;
        },
        getCanUseConversionWindow: function () {
          return !1;
        },
        getShouldDefaultToAttributionSpec: function () {
          return !1;
        },
        getCanUseSuggestedBid: function () {
          return !0;
        },
        getClickConversionWindowOptions: function () {
          return [];
        },
        getViewConversionWindowOptions: function () {
          return [];
        },
        getEngagedVideoViewWindowOptions: function () {
          return [];
        },
        getDefaultBidAmount: function () {
          return 220;
        },
        getDefaultConversionWindowLength: function (t, n) {
          return 1;
        },
        getDefaultViewConversionWindowLength: function (t, n) {
          return null;
        },
        getDefaultEngagedVideoViewWindowLength: function (t, n) {
          return null;
        },
        getDefaultOptimizationGoal: u,
        getBidControlType: function (t, n) {
          return t === r("AdsAPIOptimizationGoals").VALUE
            ? r("AdsBidControlType").AUTO_BID_ONLY
            : r("AdsBidControlType").ANY;
        },
        getCanHaveCustomEventType: function () {
          return !0;
        },
        getDefaultFrequencyControlSpecs: function (t) {
          return null;
        },
        getOptimizationGoalWarning: function () {
          return null;
        },
        getOptimizationGoalHelpText: function () {
          return null;
        },
        getRecommendedClickThroughOption: function (t, n) {
          return null;
        },
        getRecommendedViewThroughOption: function (t) {
          return null;
        },
        getRecommendedEngagedVideoViewOption: function (t) {
          return null;
        },
        shouldShowOptimizationGoalUpsell: function (t) {
          var e =
            o("AdsBulkValueUtils").getUniformValue(t) ===
            r("AdsSplitTestVariable").OPTIMIZATION;
          return !e;
        },
        supportsCustomEventTypeField: function () {
          return !1;
        },
        getConversionWindowHelpText: function () {
          return o("AdsOptimizationStrings").getConversionWindowHelpText();
        },
        getFullFunnelExplorationMode: function () {
          return null;
        },
        getTargetCostNUX: function (t, n) {
          switch (n) {
            case r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS:
              return s.jsx(r("AdsIntelligentBlueTip.react"), {
                contextNodeID: t,
                messageID: "ads_landing_page_view_target_cost_nux_tip",
                position: "below",
              });
          }
          return null;
        },
        getCanUseOmniChannelOfflineAttribution: function () {
          return !1;
        },
        getCanUseOmniChannelOnlineAttribution: function () {
          return !1;
        },
      },
      d = c;
    l.default = d;
  },
  98,
);
