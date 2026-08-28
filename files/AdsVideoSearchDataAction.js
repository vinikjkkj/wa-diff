__d(
  "AdsVideoSearchDataAction",
  ["AdsVideoApiParamDataProvider", "AdsVideoSearchReducerPlugin", "Laminar"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsVideoSearchReducerPlugin"),
            n("AdsVideoApiParamDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsVideoAction.VIDEOS_SEARCH",
    );
    a.exports = e;
  },
  null,
);
