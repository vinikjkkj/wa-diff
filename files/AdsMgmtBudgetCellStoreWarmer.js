__d(
  "AdsMgmtBudgetCellStoreWarmer",
  [
    "AdsPECampaignGroupSelectors",
    "AdsPECampaignSelectors",
    "FBLogger",
    "getErrorSafe",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 50;
    function s() {
      return r("qex")._("4698") === !0;
    }
    function u(t) {
      if (s()) {
        var n = t.campaignGroupIDs.slice(0, e);
        if (n.length > 0)
          try {
            o("AdsPECampaignGroupSelectors").getAllByFieldsSelector()(
              n,
              {
                boosted_component_product: null,
                boosted_page_id: null,
                budget_strategy: null,
                buying_type: null,
                daily_budget: null,
                id: null,
                lifetime_budget: null,
                lifetime_spent: null,
                objective: null,
                time_suggestion: null,
              },
              "AdsMgmtBudgetCellStoreWarmer",
            );
          } catch (e) {
            r("FBLogger")("ads")
              .catching(r("getErrorSafe")(e))
              .warn("Failed to warm budget cell campaign group store");
          }
        var a = t.campaignIDs.slice(0, e);
        if (a.length > 0)
          try {
            o("AdsPECampaignSelectors").getAllByFieldsSelector()(
              a,
              {
                budget_pool_membership: null,
                campaign_id: null,
                daily_budget: null,
                daily_min_spend_target: null,
                effective_status: null,
                id: null,
                lifetime_budget: null,
                lifetime_min_spend_target: null,
                lifetime_spent: null,
                min_budget_spend_percentage: null,
                optimization_goal: null,
                optimization_sub_event: null,
                promoted_object: null,
                start_time: null,
                time_suggestion: null,
              },
              "AdsMgmtBudgetCellStoreWarmer",
            );
          } catch (e) {
            r("FBLogger")("ads")
              .catching(r("getErrorSafe")(e))
              .warn("Failed to warm budget cell campaign store");
          }
      }
    }
    l.warmBudgetCellStores = u;
  },
  98,
);
