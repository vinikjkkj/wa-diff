__d(
  "adsCreativeFeatureHeroAssetCustomizationsAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          selected_adgroup_ids: o(
            "AdsAdObjectsAccessorUtils",
          ).basicListFieldAccessorFactory(e, t, "selected_adgroup_ids"),
        },
      );
    }
    l.default = e;
  },
  98,
);
