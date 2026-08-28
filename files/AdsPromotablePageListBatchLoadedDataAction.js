__d(
  "AdsPromotablePageListBatchLoadedDataAction",
  [
    "AdsPromotablePageDataProvider",
    "AdsPromotablePageListBatchLoadedReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsPromotablePageListBatchLoadedReducerPlugin"),
            n("AdsPromotablePageDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "PROMOTABLE_PAGE.LIST.BATCH_LOADED",
    );
    a.exports = e;
  },
  null,
);
