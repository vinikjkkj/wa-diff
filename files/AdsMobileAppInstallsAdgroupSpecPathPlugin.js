__d(
  "AdsMobileAppInstallsAdgroupSpecPathPlugin",
  [
    "AdsAPIObjectives",
    "AdsAppAdgroupSpecPathPluginCommon",
    "AdsDefaultAdgroupSpecPathPlugin",
    "AdsMobileAppAdgroupSpecPathPluginCommon",
    "AdsMobileAppInstallsAdgroupSpecPathPluginCommon",
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
          key: "mobile-app-installs",
          pivots: { objective: r("AdsAPIObjectives").MOBILE_APP_INSTALLS },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
