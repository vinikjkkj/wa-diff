__d(
  "AdsCopyCopyDataAction",
  [
    "AdsCopyDataProvider",
    "AdsCopyReducerPlugins",
    "AdsCopySourceTrackerDataProvider",
    "AdsCopySourceTrackerReducerPlugins",
    "AdsDuplicationUpgradeBudgetStrategyBundleConfirmationLoggerPlugin",
    "AdsDuplicationUpgradeBudgetStrategyBundleSelectionProvider",
    "AdsMarketingMessageDuplicationUpsellLoggerPlugins",
    "AdsSuggestedAdsImportStatusTrackerDataProvider",
    "AdsSuggestedAdsImportStatusTrackerReducerPlugins",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsCopyReducerPlugins").copy,
            n("AdsCopyDataProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsCopySourceTrackerReducerPlugins").copy,
            n("AdsCopySourceTrackerDataProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsSuggestedAdsImportStatusTrackerReducerPlugins").copy,
            n("AdsSuggestedAdsImportStatusTrackerDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [
          n("Laminar").__createLogger(
            "AdsDuplicationUpgradeBudgetStrategyBundleConfirmationLoggerPlugin",
            n(
              "AdsDuplicationUpgradeBudgetStrategyBundleConfirmationLoggerPlugin",
            ),
            {
              bundleSelection: n(
                "AdsDuplicationUpgradeBudgetStrategyBundleSelectionProvider",
              ),
            },
          ),
          n("Laminar").__createLogger(
            "AdsMarketingMessageDuplicationUpsellLoggerPlugins.AdsMarketingMessageL3DuplicationLoggerPlugin",
            n("AdsMarketingMessageDuplicationUpsellLoggerPlugins")
              .AdsMarketingMessageL3DuplicationLoggerPlugin,
            {},
          ),
        ];
      },
      "AdsCopy.COPY",
    );
    a.exports = e;
  },
  null,
);
