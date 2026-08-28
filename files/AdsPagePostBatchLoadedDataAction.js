__d(
  "AdsPagePostBatchLoadedDataAction",
  ["AdsPagePostBatchLoadedDataReducerPlugin", "AdsPagePostProvider", "Laminar"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsPagePostBatchLoadedDataReducerPlugin"),
            n("AdsPagePostProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "PAGE_POST.BATCH_LOADED",
    );
    a.exports = e;
  },
  null,
);
