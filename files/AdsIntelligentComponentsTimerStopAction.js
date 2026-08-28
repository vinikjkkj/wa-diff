__d(
  "AdsIntelligentComponentsTimerStopAction",
  [
    "AdsIntelligentComponentsTimerProvider",
    "AdsIntelligentComponentsTimerStopReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsIntelligentComponentsTimerStopReducerPlugin"),
            n("AdsIntelligentComponentsTimerProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsIntelligentComponents.STOP_TIMER",
      "laminar",
    );
    a.exports = e;
  },
  null,
);
