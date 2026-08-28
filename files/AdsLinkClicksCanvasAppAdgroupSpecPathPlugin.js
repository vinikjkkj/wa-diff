__d(
  "AdsLinkClicksCanvasAppAdgroupSpecPathPlugin",
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
          key: "link_clicks/canvas-app",
          pivots: {
            objective: r("AdsAPIObjectives").LINK_CLICKS,
            promotedObjectType: r("AdsPromotedObjectTypes").CANVAS_APP,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
