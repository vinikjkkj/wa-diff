__d(
  "AdsWildcardAdgroupSpecPathPlugin",
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
          key: "wildcard",
          pivots: { objective: r("AdsAPIObjectives").WILDCARD_INTERNAL_ONLY },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
