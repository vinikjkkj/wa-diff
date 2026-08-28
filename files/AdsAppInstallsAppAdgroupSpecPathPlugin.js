__d(
  "AdsAppInstallsAppAdgroupSpecPathPlugin",
  [
    "AdsAPIObjectives",
    "AdsAppAdgroupSpecPathPluginCommon",
    "AdsDefaultAdgroupSpecPathPlugin",
    "AdsMobileAppAdgroupSpecPathPluginCommon",
    "AdsMobileAppInstallsAdgroupSpecPathPluginCommon",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultAdgroupSpecPathPlugin"),
        r("AdsAppAdgroupSpecPathPluginCommon"),
        r("AdsMobileAppAdgroupSpecPathPluginCommon"),
        r("AdsMobileAppInstallsAdgroupSpecPathPluginCommon"),
        {
          type: "adgroup/spec-path",
          key: "app-installs/mobile",
          pivots: {
            objective: r("AdsAPIObjectives").APP_INSTALLS,
            promotedObjectType: r("AdsPromotedObjectTypes").MOBILE_APP,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
