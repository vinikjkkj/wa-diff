__d(
  "AdsLinkClicksAdgroupSpecPathPlugin",
  [
    "AdsAPIObjectives",
    "AdsDefaultAdgroupSpecPathPlugin",
    "AdsWebsiteAdgroupSpecPathPluginCommon",
    "AdsWebsiteLinkClicksAdgroupSpecPathPluginCommon",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultAdgroupSpecPathPlugin"),
        r("AdsWebsiteAdgroupSpecPathPluginCommon"),
        r("AdsWebsiteLinkClicksAdgroupSpecPathPluginCommon"),
        {
          type: "adgroup/spec-path",
          key: "link-clicks",
          pivots: { objective: r("AdsAPIObjectives").LINK_CLICKS },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
