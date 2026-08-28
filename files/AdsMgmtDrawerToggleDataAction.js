__d(
  "AdsMgmtDrawerToggleDataAction",
  [
    "AdsCampaignStructureActionMenuUIProvider",
    "AdsCampaignStructureExitActionMenuUIReducerPlugin",
    "AdsPEEditorPaneSyncStateUIProvider",
    "AdsPEEditorPaneSyncStateUIResetReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsCampaignStructureExitActionMenuUIReducerPlugin"),
            n("AdsCampaignStructureActionMenuUIProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsPEEditorPaneSyncStateUIResetReducerPlugin"),
            n("AdsPEEditorPaneSyncStateUIProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "CF.DRAWER_TOGGLE",
    );
    a.exports = e;
  },
  null,
);
