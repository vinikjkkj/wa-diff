__d(
  "AdsGuidanceActionsTabsAction",
  [
    "AdsGuidanceActionsTabsDataProvider",
    "AdsGuidanceActionsTabsReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsGuidanceActionsTabsReducerPlugin"),
            n("AdsGuidanceActionsTabsDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsGuidanceActionsTabsActionPlugin",
    );
    a.exports = e;
  },
  null,
);
