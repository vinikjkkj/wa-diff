__d(
  "AdsConversionsAdgroupSpecPathPlugin",
  [
    "AdsAPIObjectives",
    "AdsDefaultAdgroupSpecPathPlugin",
    "AdsWebsiteAdgroupSpecPathPluginCommon",
    "AdsWebsiteConversionsAdgroupSpecPathPluginCommon",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultAdgroupSpecPathPlugin"),
        r("AdsWebsiteAdgroupSpecPathPluginCommon"),
        r("AdsWebsiteConversionsAdgroupSpecPathPluginCommon"),
        {
          type: "adgroup/spec-path",
          key: "conversions",
          pivots: { objective: r("AdsAPIObjectives").CONVERSIONS },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
