__d(
  "adsCreativeWebsiteDestinationAccessorsFactory",
  [
    "AdsAdObjectsAccessorUtils",
    "adsCreativeDestinationOptimizationAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          optimization: r("adsCreativeDestinationOptimizationAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.optimization;
            },
            [].concat(t, ["optimization"]),
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
