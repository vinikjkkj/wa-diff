__d(
  "logAdsCampaignDeliveryChangeOptimizationGoalMutationBidStrategyState",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      r("FBLogger")(
        "ads_market_dynamics_solutions",
        "adsCampaignDeliveryChangeOptimizationGoalMutation",
      ).debug(
        "optimization_goal_change_bid_strategy_state: old_bid_strategy=%s campaign_bid_strategy=%s campaign_group_bid_strategy=%s using_campaign_group_budget=%s using_campaign_budget_flex=%s old_optimization_goal=%s new_optimization_goal=%s",
        String(e),
        String(t),
        String(n),
        String(o),
      );
    }
    l.default = e;
  },
  98,
);
