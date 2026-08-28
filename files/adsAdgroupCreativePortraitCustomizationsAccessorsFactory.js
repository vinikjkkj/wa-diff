__d(
  "adsAdgroupCreativePortraitCustomizationsAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          specifications: o(
            "AdsAdObjectsAccessorUtils",
          ).basicListFieldAccessorFactory(e, t, "specifications"),
          carousel_delivery_mode: o(
            "AdsAdObjectsAccessorUtils",
          ).basicFieldAccessorFactory(e, t, "carousel_delivery_mode"),
        },
      );
    }
    l.default = e;
  },
  98,
);
