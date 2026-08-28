__d(
  "AdsODAXSalesAdgroupSpecPathPlugin",
  [
    "AdsAPIObjectives",
    "AdsDefaultAdgroupSpecPathPlugin",
    "AdsWebsiteAdgroupSpecPathPluginCommon",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultAdgroupSpecPathPlugin"),
        r("AdsWebsiteAdgroupSpecPathPluginCommon"),
        {
          type: "adgroup/spec-path",
          key: "outcome-sales",
          pivots: { objective: r("AdsAPIObjectives").OUTCOME_SALES },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
