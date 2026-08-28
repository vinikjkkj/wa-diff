__d(
  "AdsMgmtDrawerOpenTargetDataAction",
  [
    "AdsCreationConvergenceEditorOpenMapCampaignDrawerOpenReducerPlugin",
    "AdsCreationConvergenceEditorOpenMapProvider",
    "AdsMgmtAdgroupSelectionProvider",
    "AdsMgmtAdgroupSelectionReducerPlugins",
    "AdsMgmtCampaignGroupSelectionProvider",
    "AdsMgmtCampaignGroupSelectionReducerPlugins",
    "AdsMgmtCampaignSelectionProvider",
    "AdsMgmtCampaignSelectionReducerPlugins",
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
            n(
              "AdsCreationConvergenceEditorOpenMapCampaignDrawerOpenReducerPlugin",
            ),
            n("AdsCreationConvergenceEditorOpenMapProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsMgmtAdgroupSelectionReducerPlugins")
              .AdsMgmtDrawerOpenTargetReducerPlugin,
            n("AdsMgmtAdgroupSelectionProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsMgmtCampaignGroupSelectionReducerPlugins")
              .AdsMgmtDrawerOpenTargetReducerPlugin,
            n("AdsMgmtCampaignGroupSelectionProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsMgmtCampaignSelectionReducerPlugins")
              .AdsMgmtDrawerOpenTargetReducerPlugin,
            n("AdsMgmtCampaignSelectionProvider"),
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
      "DRAWER.OPEN_TARGET",
    );
    a.exports = e;
  },
  null,
);
