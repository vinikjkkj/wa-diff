__d(
  "AdsAIActionabilityViewChangesModalAction",
  [
    "AdsAIActionabilityViewChangesModalDataProvider",
    "AdsAIActionabilityViewChangesModalReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsAIActionabilityViewChangesModalReducerPlugin"),
            n("AdsAIActionabilityViewChangesModalDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsAIActionabilityViewChangesModalActionPlugin",
    );
    a.exports = e;
  },
  null,
);
