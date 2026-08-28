__d(
  "adsCreativeGenerativeAssetLogoOverlaySpecAccessorsFactory",
  ["AdsAdObjectsAccessorUtils", "ApiAdCreativeGenerativeAssetLogoFields"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          enroll_status: o(
            "AdsAdObjectsAccessorUtils",
          ).basicFieldAccessorFactory(e, t, "enroll_status"),
          logos: o(
            "AdsAdObjectsAccessorUtils",
          ).nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.logos;
            },
            [].concat(t, ["logos"]),
            Object.values(r("ApiAdCreativeGenerativeAssetLogoFields")),
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
