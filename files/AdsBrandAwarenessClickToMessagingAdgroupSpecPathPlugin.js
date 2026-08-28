__d(
  "AdsBrandAwarenessClickToMessagingAdgroupSpecPathPlugin",
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
          key: "brand-awareness/click-to-messaging",
          pivots: {
            objective: r("AdsAPIObjectives").BRAND_AWARENESS,
            promotedObjectType: r("AdsPromotedObjectTypes").MESSENGER,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
