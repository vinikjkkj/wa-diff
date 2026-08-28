__d(
  "adsAdgroupCreativeRecommenderSettingsAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          preferred_events: o(
            "AdsAdObjectsAccessorUtils",
          ).basicListFieldAccessorFactory(e, t, "preferred_events"),
          product_sales_channel: o(
            "AdsAdObjectsAccessorUtils",
          ).basicFieldAccessorFactory(e, t, "product_sales_channel"),
        },
      );
    }
    l.default = e;
  },
  98,
);
