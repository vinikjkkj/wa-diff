__d(
  "AdsReviewModeDataProvider",
  [
    "AdsAdditionalOptionsSectionVisibilityDataProvider",
    "AdsReviewModeDataProviderPlugin",
    "AdsReviewViewQuickSwitchToEditFieldDataTriggerReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    a.exports = n("Laminar").__createProvider(
      n("AdsReviewModeDataProviderPlugin"),
      "AdsReviewModeDataProviderPlugin",
      function () {
        return [
          n("Laminar").__createTriggerReducer(
            n("AdsReviewViewQuickSwitchToEditFieldDataTriggerReducerPlugin"),
            "AdsReviewViewQuickSwitchToEditFieldDataTriggerReducerPlugin",
            n("AdsAdditionalOptionsSectionVisibilityDataProvider"),
          ),
        ];
      },
    );
  },
  null,
);
