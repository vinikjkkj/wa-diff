__d(
  "AdsVideoFilterDataAction",
  ["AdsVideoApiParamDataProvider", "AdsVideoFilterReducerPlugin", "Laminar"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsVideoFilterReducerPlugin"),
            n("AdsVideoApiParamDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsVideoAction.VIDEOS_FILTER",
    );
    a.exports = e;
  },
  null,
);
