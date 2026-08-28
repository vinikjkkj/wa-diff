__d(
  "AdsGuidanceZeroOutcomeBudgetPostPublishAction",
  [
    "AdsGuidanceZeroOutcomeBudgetDataProvider",
    "AdsGuidanceZeroOutcomeBudgetPostPublishReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsGuidanceZeroOutcomeBudgetPostPublishReducerPlugin"),
            n("AdsGuidanceZeroOutcomeBudgetDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsGuidanceZeroOutcomeBudgetPostPublishActionPlugin",
    );
    a.exports = e;
  },
  null,
);
