__d(
  "adCreativeShopAccessorsFactory",
  ["AdsAdObjectsAccessorUtils", "adCreativeShopActionMetadataAccessorsFactory"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          action_metadata: r("adCreativeShopActionMetadataAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.action_metadata;
            },
            [].concat(t, ["action_metadata"]),
          ),
          enroll_status: o(
            "AdsAdObjectsAccessorUtils",
          ).basicFieldAccessorFactory(e, t, "enroll_status"),
        },
      );
    }
    l.default = e;
  },
  98,
);
