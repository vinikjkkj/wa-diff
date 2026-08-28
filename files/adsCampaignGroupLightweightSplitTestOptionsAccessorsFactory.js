__d(
  "adsCampaignGroupLightweightSplitTestOptionsAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          upgrade_solution_ids: o(
            "AdsAdObjectsAccessorUtils",
          ).basicListFieldAccessorFactory(e, t, "upgrade_solution_ids"),
        },
      );
    }
    l.default = e;
  },
  98,
);
