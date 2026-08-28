__d(
  "AdsConversionsWebsiteAndAppAdgroupSpecPathPlugin",
  [
    "AdsAPIObjectives",
    "AdsDefaultAdgroupSpecPathPlugin",
    "AdsPromotedObjectTypes",
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
          key: "conversions/website-and-app",
          pivots: {
            objective: r("AdsAPIObjectives").CONVERSIONS,
            promotedObjectType: r("AdsPromotedObjectTypes").WEB_AND_APP,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
