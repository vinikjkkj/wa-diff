__d(
  "AdsBusinessConstraintsAccountControlInfoDataProvider",
  [
    "AdsBusinessConstraintsAccountControlInfoDataProviderPlugin",
    "AdsCampaignApplyL4PlacementExclusionsTriggerReducerPlugin",
    "AdsCampaignDraftFragmentsDataProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    a.exports = n("Laminar").__createProvider(
      n("AdsBusinessConstraintsAccountControlInfoDataProviderPlugin"),
      "AdsBusinessConstraintsAccountControlInfoDataProviderPlugin",
      function () {
        return [
          n("Laminar").__createTriggerReducer(
            n("AdsCampaignApplyL4PlacementExclusionsTriggerReducerPlugin"),
            "AdsCampaignApplyL4PlacementExclusionsTriggerReducerPlugin",
            n("AdsCampaignDraftFragmentsDataProvider"),
          ),
        ];
      },
    );
  },
  null,
);
