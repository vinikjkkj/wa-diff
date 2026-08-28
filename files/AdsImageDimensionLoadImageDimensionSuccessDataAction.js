__d(
  "AdsImageDimensionLoadImageDimensionSuccessDataAction",
  [
    "AdsImageDimensionLoadImageDimensionSuccessDataReducerPlugin",
    "AdsImageDimensionProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsImageDimensionLoadImageDimensionSuccessDataReducerPlugin"),
            n("AdsImageDimensionProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "IMAGE_DIMENSION.LOAD_IMAGE_DIMENSION_SUCCESS",
    );
    a.exports = e;
  },
  null,
);
