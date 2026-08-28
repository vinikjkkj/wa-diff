__d(
  "adsCreativeGenerativeAssetImageSpecAccessorsFactory",
  [
    "AdsAdObjectsAccessorUtils",
    "ApiAdCreativeGenerativeAssetImageVariationFields",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          enroll_status: n.basicFieldAccessorFactory(e, t, "enroll_status"),
          hero_image: n.basicFieldAccessorFactory(e, t, "hero_image"),
          variations: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.variations;
            },
            [].concat(t, ["variations"]),
            Object.values(
              r("ApiAdCreativeGenerativeAssetImageVariationFields"),
            ),
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
