__d(
  "AdsUEditorCampaignPlacementResetIfAllPlacementsSelectedAction",
  [
    "AdsCFCampaignProvider",
    "AdsUEditorCampaignPlacementResetIfAllPlacementsSelectedReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n(
              "AdsUEditorCampaignPlacementResetIfAllPlacementsSelectedReducerPlugin",
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
      "ADS_CAMPAIGN_EDITOR_PLACEMENT.RESET_IF_ALL_PLACEMENTS_SELECTED",
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
