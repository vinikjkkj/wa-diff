__d(
  "AdsConversionsDynamicAdgroupSpecPathPlugin",
  [
    "AdsAPIObjectives",
    "AdsDefaultAdgroupSpecPathPlugin",
    "AdsDynamicAdgroupSpecPathPluginCommon",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultAdgroupSpecPathPlugin"),
        r("AdsDynamicAdgroupSpecPathPluginCommon"),
        {
          type: "adgroup/spec-path",
          key: "conversions/dynamic",
          pivots: {
            objective: r("AdsAPIObjectives").CONVERSIONS,
            promotedObjectType: r("AdsPromotedObjectTypes").PRODUCT_SET,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
