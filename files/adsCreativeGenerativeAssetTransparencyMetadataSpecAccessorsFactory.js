__d(
  "adsCreativeGenerativeAssetTransparencyMetadataSpecAccessorsFactory",
  [
    "AdsAdObjectsAccessorUtils",
    "adsCreativeGenerativeAssetTransparencyMetadataSelfDisclosureSpecAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          self_disclosure: r(
            "adsCreativeGenerativeAssetTransparencyMetadataSelfDisclosureSpecAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.self_disclosure;
            },
            [].concat(t, ["self_disclosure"]),
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
