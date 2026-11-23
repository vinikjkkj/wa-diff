__d(
  "AdsBulkEditCloseDialogDataAction",
  [
    "AdsBulkEditCampaignStructureProvider",
    "AdsBulkEditCampaignStructureReducerPlugins",
    "AdsCampaignGroupToggleBidStrategyChangeDialogUIReducerPlugins",
    "AdsCampaignGroupToggleBidStrategyDialogUIDataProvider",
    "Laminar",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsBulkEditCampaignStructureReducerPlugins")
              .closeBulkEditDialogReducer,
            n("AdsBulkEditCampaignStructureProvider"),
            {},
            "",
          ),
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsBulkEditSelectedPlacementGroupReducerPlugins",
            function (e) {
              return n("ifRequired_FOR_LAMINAR_CODEGEN")(
                "AdsBulkEditSelectedPlacementGroupProvider",
                function (t) {
                  return n("Laminar").__createReducer(
                    e.onCloseBulkEditDialog,
                    t,
                    {},
                    "",
                  );
                },
              );
            },
          ),
          n("Laminar").__createReducer(
            n("AdsCampaignGroupToggleBidStrategyChangeDialogUIReducerPlugins")
              .onResetUIChange,
            n("AdsCampaignGroupToggleBidStrategyDialogUIDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsDraftCampaignGroupBudgetBidStrategyChangeDataLoggerPlugins",
            function (e) {
              return n("Laminar").__createLogger(
                "AdsDraftCampaignGroupBudgetBidStrategyChangeDataLoggerPlugins.cancelRequiredBidAmountBidStrategyChange",
                e.cancelRequiredBidAmountBidStrategyChange,
                {},
                ["AdsMgmtRegistry"],
              );
            },
          ),
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsTargetFrequencyBulkEditPredictionIdStoreCleanupLoggerPlugin",
            function (e) {
              return n("Laminar").__createLogger(
                "AdsTargetFrequencyBulkEditPredictionIdStoreCleanupLoggerPlugin",
                e,
                {},
                ["AdsMgmtRegistry"],
              );
            },
          ),
        ];
      },
      "BULK_EDIT.CLOSE_DIALOG",
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
