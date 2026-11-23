__d(
  "AdsPEPriorityViewSetEnabledAction",
  [
    "AdsPEGroupProvider",
    "AdsPEGroupReducerPlugins",
    "AdsPEPrioritizedHighlightsProvider",
    "AdsPEPrioritizedHighlightsReducerPlugins",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsPEGroupReducerPlugins")
              .clearGroupDimensionOnPriorityViewEnabled,
            n("AdsPEGroupProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsPEPrioritizedHighlightsReducerPlugins")
              .setPriorityViewEnabled,
            n("AdsPEPrioritizedHighlightsProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "PowerEditor.PRIORITY_VIEW.SET_ENABLED",
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
