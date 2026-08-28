__d(
  "AdsIntelligentComponentsTimerStartAction",
  [
    "AdsIntelligentComponentsTimerProvider",
    "AdsIntelligentComponentsTimerStartReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsIntelligentComponentsTimerStartReducerPlugin"),
            n("AdsIntelligentComponentsTimerProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsIntelligentComponents.START_TIMER",
      "laminar",
    );
    a.exports = e;
  },
  null,
);
