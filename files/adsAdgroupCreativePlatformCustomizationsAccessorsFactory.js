__d(
  "adsAdgroupCreativePlatformCustomizationsAccessorsFactory",
  [
    "AdsAdObjectsAccessorUtils",
    "adsAdgroupCreativePlatformCustomizationAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          instagram: r(
            "adsAdgroupCreativePlatformCustomizationAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.instagram;
            },
            [].concat(t, ["instagram"]),
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
