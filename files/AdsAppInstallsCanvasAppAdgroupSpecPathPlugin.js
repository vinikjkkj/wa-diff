__d(
  "AdsAppInstallsCanvasAppAdgroupSpecPathPlugin",
  [
    "AdsAPIObjectives",
    "AdsAppAdgroupSpecPathPluginCommon",
    "AdsCanvasAppAdgroupSpecPathPluginCommon",
    "AdsDefaultAdgroupSpecPathPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultAdgroupSpecPathPlugin"),
        r("AdsAppAdgroupSpecPathPluginCommon"),
        r("AdsCanvasAppAdgroupSpecPathPluginCommon"),
        {
          type: "adgroup/spec-path",
          key: "app-installs/canvas",
          pivots: {
            objective: r("AdsAPIObjectives").APP_INSTALLS,
            promotedObjectType: r("AdsPromotedObjectTypes").CANVAS_APP,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
