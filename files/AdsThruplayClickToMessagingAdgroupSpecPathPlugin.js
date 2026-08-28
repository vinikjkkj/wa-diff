__d(
  "AdsThruplayClickToMessagingAdgroupSpecPathPlugin",
  [
    "AdsAPIObjectives",
    "AdsMessengerAdgroupSpecPathPluginCommon",
    "AdsPromotedObjectTypes",
    "AdsVideoViewsAdgroupSpecPathPlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsVideoViewsAdgroupSpecPathPlugin"),
        r("AdsMessengerAdgroupSpecPathPluginCommon"),
        {
          type: "adgroup/spec-path",
          key: "video-views/click-to-messaging",
          pivots: {
            objective: r("AdsAPIObjectives").VIDEO_VIEWS,
            promotedObjectType: r("AdsPromotedObjectTypes").MESSENGER,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
