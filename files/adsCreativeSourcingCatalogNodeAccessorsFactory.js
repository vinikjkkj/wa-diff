__d(
  "adsCreativeSourcingCatalogNodeAccessorsFactory",
  [
    "AdsAdObjectsAccessorUtils",
    "adsCreativeSourcingActionMetadataAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          enroll_status: o(
            "AdsAdObjectsAccessorUtils",
          ).basicFieldAccessorFactory(e, t, "enroll_status"),
          action_metadata: r(
            "adsCreativeSourcingActionMetadataAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.action_metadata;
            },
            [].concat(t, ["action_metadata"]),
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
