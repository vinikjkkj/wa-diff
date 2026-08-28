__d(
  "AdsReachClickToMessagingAdgroupSpecPathPlugin",
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
          key: "reach/click-to-messaging",
          pivots: {
            objective: r("AdsAPIObjectives").REACH,
            promotedObjectType: r("AdsPromotedObjectTypes").MESSENGER,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
