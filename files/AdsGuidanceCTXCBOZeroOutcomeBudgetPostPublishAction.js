__d(
  "AdsGuidanceCTXCBOZeroOutcomeBudgetPostPublishAction",
  [
    "AdsGuidanceCTXCBOZeroOutcomeBudgetDataProvider",
    "AdsGuidanceCTXCBOZeroOutcomeBudgetPostPublishReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsGuidanceCTXCBOZeroOutcomeBudgetPostPublishReducerPlugin"),
            n("AdsGuidanceCTXCBOZeroOutcomeBudgetDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsGuidanceCTXCBOZeroOutcomeBudgetPostPublishActionPlugin",
    );
    a.exports = e;
  },
  null,
);
