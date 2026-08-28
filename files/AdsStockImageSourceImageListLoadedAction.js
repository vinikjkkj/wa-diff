__d(
  "AdsStockImageSourceImageListLoadedAction",
  [
    "AdsStockImageSourceImageListLoadedReducerPlugin",
    "AdsStockImageSourceImageProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsStockImageSourceImageListLoadedReducerPlugin"),
            n("AdsStockImageSourceImageProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS_STOCK_IMAGE_LIST_LOADED",
    );
    a.exports = e;
  },
  null,
);
