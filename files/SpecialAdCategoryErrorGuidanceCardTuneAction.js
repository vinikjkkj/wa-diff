__d(
  "SpecialAdCategoryErrorGuidanceCardTuneAction",
  [
    "Laminar",
    "SpecialAdCategoryErrorGuidanceCardTuneProvider",
    "SpecialAdCategoryErrorGuidanceCardTuneReducerPlugin",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("SpecialAdCategoryErrorGuidanceCardTuneReducerPlugin"),
            n("SpecialAdCategoryErrorGuidanceCardTuneProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "SpecialAdCategoryErrorGuidanceCardTuneActionPlugin",
    );
    a.exports = e;
  },
  null,
);
