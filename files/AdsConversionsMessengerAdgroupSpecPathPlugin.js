__d(
  "AdsConversionsMessengerAdgroupSpecPathPlugin",
  [
    "AdsAPIObjectives",
    "AdsDefaultAdgroupSpecPathPlugin",
    "AdsMessengerAdgroupSpecPathPluginCommon",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultAdgroupSpecPathPlugin"),
        r("AdsMessengerAdgroupSpecPathPluginCommon"),
        {
          type: "adgroup/spec-path",
          key: "conversions/messenger",
          pivots: {
            objective: r("AdsAPIObjectives").CONVERSIONS,
            promotedObjectType: r("AdsPromotedObjectTypes").MESSENGER,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
