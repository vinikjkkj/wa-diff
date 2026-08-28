__d(
  "adsCreativeFeatureCustomizationsTextTranslationLanguageAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          opt_out_languages: o(
            "AdsAdObjectsAccessorUtils",
          ).basicListFieldAccessorFactory(e, t, "opt_out_languages"),
        },
      );
    }
    l.default = e;
  },
  98,
);
