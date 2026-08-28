__d(
  "AdsDefaultPageLoadedDataAction",
  [
    "AdsDefaultPageDataLoadedReducerPlugin",
    "AdsDefaultPageDataProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsDefaultPageDataLoadedReducerPlugin"),
            n("AdsDefaultPageDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS.DEFAULT_PAGE.LOADED",
    );
    a.exports = e;
  },
  null,
);
