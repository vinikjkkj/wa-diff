__d(
  "adsCreativeFeatureCustomizationsCreativeStickersAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          generated_sticker_ids: o(
            "AdsAdObjectsAccessorUtils",
          ).basicListFieldAccessorFactory(e, t, "generated_sticker_ids"),
          uploaded_sticker_ids: o(
            "AdsAdObjectsAccessorUtils",
          ).basicListFieldAccessorFactory(e, t, "uploaded_sticker_ids"),
        },
      );
    }
    l.default = e;
  },
  98,
);
