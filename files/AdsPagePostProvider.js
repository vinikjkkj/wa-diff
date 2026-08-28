__d(
  "AdsPagePostProvider",
  [
    "AdsAssetFeedSpecForFBPostProvider",
    "AdsAssetFeedSpecForIGPostProvider",
    "AdsPagePostProviderPlugin",
    "AdsPlacementCustomizationClearFBAssetFeedStoreOnPostChangeTriggerReducerPlugin",
    "AdsPlacementCustomizationClearIGAssetFeedStoreOnPostChangeTriggerReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    a.exports = n("Laminar").__createProvider(
      n("AdsPagePostProviderPlugin"),
      "AdsPagePostProviderPlugin",
      function () {
        return [
          n("Laminar").__createTriggerReducer(
            n(
              "AdsPlacementCustomizationClearFBAssetFeedStoreOnPostChangeTriggerReducerPlugin",
            ),
            "AdsPlacementCustomizationClearFBAssetFeedStoreOnPostChangeTriggerReducerPlugin",
            n("AdsAssetFeedSpecForFBPostProvider"),
          ),
          n("Laminar").__createTriggerReducer(
            n(
              "AdsPlacementCustomizationClearIGAssetFeedStoreOnPostChangeTriggerReducerPlugin",
            ),
            "AdsPlacementCustomizationClearIGAssetFeedStoreOnPostChangeTriggerReducerPlugin",
            n("AdsAssetFeedSpecForIGPostProvider"),
          ),
        ];
      },
    );
  },
  null,
);
