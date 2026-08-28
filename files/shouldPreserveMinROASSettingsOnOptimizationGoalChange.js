__d(
  "shouldPreserveMinROASSettingsOnOptimizationGoalChange",
  [
    "AdsAPIBidStrategies",
    "AdsAPIOptimizationGoals",
    "AdsVolumeROASUtils",
    "immutable",
    "logAdsCampaignDeliveryChangeOptimizationGoalMutationBidStrategyState",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        return (
          t === r("AdsAPIOptimizationGoals").VALUE ||
          (o("AdsVolumeROASUtils").isVolumeROASEnabled() &&
            t === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS)
        );
      },
      s = function (t) {
        if (t == null) return null;
        if (t instanceof r("immutable").Map) {
          var e = t.get("roas_average_floor");
          return typeof e == "number" ? e : null;
        }
        return typeof t.roas_average_floor == "number"
          ? t.roas_average_floor
          : null;
      };
    function u(t, n, o) {
      r("logAdsCampaignDeliveryChangeOptimizationGoalMutationBidStrategyState")(
        t.bid_strategy,
        n,
        t.optimization_goal,
        o,
      );
      var a = t.bid_strategy,
        i = s(t.bid_constraints),
        l =
          a === r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS ||
          (a == null && i != null);
      return l && e(t.optimization_goal) && e(o);
    }
    l.default = u;
  },
  98,
);
