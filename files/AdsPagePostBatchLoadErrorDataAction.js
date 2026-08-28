__d(
  "AdsPagePostBatchLoadErrorDataAction",
  [
    "AdsPagePostBatchLoadErrorDataReducerPlugin",
    "AdsPagePostProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsPagePostBatchLoadErrorDataReducerPlugin"),
            n("AdsPagePostProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "PAGE_POST.BATCH_LOAD_ERROR",
    );
    a.exports = e;
  },
  null,
);
