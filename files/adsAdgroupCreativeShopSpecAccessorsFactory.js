__d(
  "adsAdgroupCreativeShopSpecAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          collection_id: n.basicFieldAccessorFactory(e, t, "collection_id"),
          landing_view: n.basicFieldAccessorFactory(e, t, "landing_view"),
          shop_id: n.basicFieldAccessorFactory(e, t, "shop_id"),
        },
      );
    }
    l.default = e;
  },
  98,
);
