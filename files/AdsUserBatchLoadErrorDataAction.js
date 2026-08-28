__d(
  "AdsUserBatchLoadErrorDataAction",
  ["AdsUserBatchLoadErrorDataReducerPlugin", "AdsUserProvider", "Laminar"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsUserBatchLoadErrorDataReducerPlugin"),
            n("AdsUserProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "USER.BATCH_LOAD_ERROR",
    );
    a.exports = e;
  },
  null,
);
