__d(
  "AdsGuidanceAccountSpendLimitPostPublishAction",
  [
    "AdsGuidanceAccountSpendLimitDialogDataProvider",
    "AdsGuidanceAccountSpendLimitPostPublishManagerReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsGuidanceAccountSpendLimitPostPublishManagerReducerPlugin"),
            n("AdsGuidanceAccountSpendLimitDialogDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsGuidanceAccountSpendLimitPostPublishActionPlugin",
    );
    a.exports = e;
  },
  null,
);
