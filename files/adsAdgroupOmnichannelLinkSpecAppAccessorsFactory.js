__d(
  "adsAdgroupOmnichannelLinkSpecAppAccessorsFactory",
  [
    "AdsAdObjectsAccessorUtils",
    "adsAdgroupOmnichannelLinkSpecAppPlatformSpecsAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          application_id: o(
            "AdsAdObjectsAccessorUtils",
          ).basicFieldAccessorFactory(e, t, "application_id"),
          platform_specs: r(
            "adsAdgroupOmnichannelLinkSpecAppPlatformSpecsAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.platform_specs;
            },
            [].concat(t, ["platform_specs"]),
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
