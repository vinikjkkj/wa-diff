__d(
  "AdsCampaignGroupToggleBidStrategyChangeTotalBudgetAction",
  [
    "AdsCampaignGroupToggleBidStrategyChangeDialogUIReducerPlugins",
    "AdsCampaignGroupToggleBidStrategyDialogUIDataProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsCampaignGroupToggleBidStrategyChangeDialogUIReducerPlugins")
              .onBudgetChange,
            n("AdsCampaignGroupToggleBidStrategyDialogUIDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "CAMPAIGN_GROUP.TOGGLE_CAMPAIGN_BID_STRATEGY_CHANGE_TOTAL_BUDGET",
      void 0,
      void 0,
      function (e) {
        return function (n, r) {
          e(n, r);
        };
      },
    );
    a.exports = e;
  },
  null,
);
