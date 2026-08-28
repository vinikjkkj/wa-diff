__d(
  "AdsUEditorCampaignGroupToggleDayPartingAction",
  [
    "AdsCFCampaignProvider",
    "AdsCampaignGroupBudgetResetDialogUIDataProvider",
    "AdsCampaignGroupToggleDayPartingReducerPlugin",
    "AdsUEditorCampaignCBOToggleDayPartingReducerPlugin",
    "Laminar",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsCampaignGroupToggleDayPartingReducerPlugin"),
            n("AdsCampaignGroupBudgetResetDialogUIDataProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsUEditorCampaignCBOToggleDayPartingReducerPlugin"),
            n("AdsCFCampaignProvider"),
            {},
            "",
          ),
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsUEditorCampaignGroupToggleDayPartingReducerPlugin",
            function (e) {
              return n("ifRequired_FOR_LAMINAR_CODEGEN")(
                "AdsCFCampaignGroupRecordProvider",
                function (t) {
                  return n("Laminar").__createReducer(e, t, {}, "");
                },
              );
            },
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS_CAMPAIGN_GROUP_EDITOR_TOGGLE_DAY_PARTING",
    );
    a.exports = e;
  },
  null,
);
