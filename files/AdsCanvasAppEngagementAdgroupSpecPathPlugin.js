__d(
  "AdsCanvasAppEngagementAdgroupSpecPathPlugin",
  [
    "AdsAPIObjectives",
    "AdsAppAdgroupSpecPathPluginCommon",
    "AdsCanvasAppAdgroupSpecPathPluginCommon",
    "AdsDefaultAdgroupSpecPathPlugin",
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
          key: "canvas-app-engagement",
          pivots: { objective: r("AdsAPIObjectives").CANVAS_APP_ENGAGEMENT },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
