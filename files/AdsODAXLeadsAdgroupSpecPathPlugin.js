__d(
  "AdsODAXLeadsAdgroupSpecPathPlugin",
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
          key: "outcome-leads",
          pivots: { objective: r("AdsAPIObjectives").OUTCOME_LEADS },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
