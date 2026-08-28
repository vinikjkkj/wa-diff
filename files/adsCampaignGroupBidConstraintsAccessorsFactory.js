__d(
  "adsCampaignGroupBidConstraintsAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          roas_average_floor: o(
            "AdsAdObjectsAccessorUtils",
          ).basicFieldAccessorFactory(e, t, "roas_average_floor"),
          cpa_average_target: o(
            "AdsAdObjectsAccessorUtils",
          ).basicFieldAccessorFactory(e, t, "cpa_average_target"),
        },
      );
    }
    l.default = e;
  },
  98,
);
