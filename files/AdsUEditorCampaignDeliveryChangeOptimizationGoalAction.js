__d(
  "AdsUEditorCampaignDeliveryChangeOptimizationGoalAction",
  [
    "AdsAuctionFrequencyControlProvider",
    "AdsAuctionFrequencyControlReducerPlugins",
    "AdsCFCampaignProvider",
    "AdsDeliveryZeroConversionStatusNoticeCardStatusProvider",
    "AdsPreventativeGuidanceChangeOptimizationGoalChangeStatusNoticeCardStatusReducerPlugin",
    "AdsTargetFrequencyInAuctionCampaignGroupPredictionStatusProvider",
    "AdsTargetFrequencyInAuctionPredictionStatusProvider",
    "AdsUEditorCampaignDeliveryChangeOptimizationGoalReducerPlugin",
    "AdsUEditorCampaignGroupTargetFrequencyInAuctionClearPredictionStatusReducerPlugin",
    "AdsUEditorCampaignTargetFrequencyInAuctionClearPredictionStatusReducerPlugin",
    "Laminar",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsAuctionFrequencyControlReducerPlugins").selectFrequencyOption,
            n("AdsAuctionFrequencyControlProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n(
              "AdsPreventativeGuidanceChangeOptimizationGoalChangeStatusNoticeCardStatusReducerPlugin",
            ),
            n("AdsDeliveryZeroConversionStatusNoticeCardStatusProvider"),
            {},
            "",
          ),
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsUEditorAdgroupCampaignUpdateDeliveryOptimizationGoalReducerPlugin",
            function (e) {
              return n("ifRequired_FOR_LAMINAR_CODEGEN")(
                "AdsCFAdgroupDataProvider",
                function (t) {
                  return n("Laminar").__createReducer(e, t, {}, "");
                },
              );
            },
          ),
          n("Laminar").__createReducer(
            n("AdsUEditorCampaignDeliveryChangeOptimizationGoalReducerPlugin"),
            n("AdsCFCampaignProvider"),
            {},
            "",
          ),
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsUEditorCampaignGroupDisabledBudgetFlexOnOptimizationGoalChangeReducerPlugin",
            function (e) {
              return n("ifRequired_FOR_LAMINAR_CODEGEN")(
                "AdsCFCampaignGroupRecordProvider",
                function (t) {
                  return n("Laminar").__createReducer(e, t, {}, "");
                },
              );
            },
          ),
          n("Laminar").__createReducer(
            n(
              "AdsUEditorCampaignGroupTargetFrequencyInAuctionClearPredictionStatusReducerPlugin",
            ),
            n(
              "AdsTargetFrequencyInAuctionCampaignGroupPredictionStatusProvider",
            ),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n(
              "AdsUEditorCampaignTargetFrequencyInAuctionClearPredictionStatusReducerPlugin",
            ),
            n("AdsTargetFrequencyInAuctionPredictionStatusProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsUEditorCampaignDeliveryChangeOptimizationGoalActionPlugin",
    );
    a.exports = e;
  },
  null,
);
