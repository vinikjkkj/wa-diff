__d(
  "AdsMessagesAdgroupSpecPathPlugin",
  [
    "AdsAPIObjectives",
    "AdsDefaultAdgroupSpecPathPlugin",
    "AdsMessengerAdgroupSpecPathPluginCommon",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultAdgroupSpecPathPlugin"),
        r("AdsMessengerAdgroupSpecPathPluginCommon"),
        {
          type: "adgroup/spec-path",
          key: "messages",
          pivots: { objective: r("AdsAPIObjectives").MESSAGES },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
