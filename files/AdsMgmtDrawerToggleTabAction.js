__d(
  "AdsMgmtDrawerToggleTabAction",
  [
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
      "DRAWER.TOGGLE_TAB",
    );
    a.exports = e;
  },
  null,
);
