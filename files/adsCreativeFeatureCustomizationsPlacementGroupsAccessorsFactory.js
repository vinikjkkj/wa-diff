__d(
  "adsCreativeFeatureCustomizationsPlacementGroupsAccessorsFactory",
  [
    "AdsAdObjectsAccessorUtils",
    "adsCreativeFeatureCustomizationsEnrollStatusAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          square: r(
            "adsCreativeFeatureCustomizationsEnrollStatusAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.square;
            },
            [].concat(t, ["square"]),
          ),
          vertical: r(
            "adsCreativeFeatureCustomizationsEnrollStatusAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.vertical;
            },
            [].concat(t, ["vertical"]),
          ),
          horizontal: r(
            "adsCreativeFeatureCustomizationsEnrollStatusAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.horizontal;
            },
            [].concat(t, ["horizontal"]),
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
