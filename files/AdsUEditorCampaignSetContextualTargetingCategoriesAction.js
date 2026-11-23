__d(
  "AdsUEditorCampaignSetContextualTargetingCategoriesAction",
  [
    "AdsCFCampaignProvider",
    "AdsUEditorCampaignSetContextualTargetingCategoriesReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n(
              "AdsUEditorCampaignSetContextualTargetingCategoriesReducerPlugin",
            ),
            n("AdsCFCampaignProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS_CAMPAIGN_EDITOR_SET_CONTEXTUAL_TARGETING_CATEGORIES",
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
