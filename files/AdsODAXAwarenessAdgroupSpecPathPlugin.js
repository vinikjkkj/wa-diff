__d(
  "AdsODAXAwarenessAdgroupSpecPathPlugin",
  [
    "AdsAPIObjectives",
    "AdsDefaultAdgroupSpecPathPlugin",
    "AdsReachAdgroupSpecPathPlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultAdgroupSpecPathPlugin"),
        r("AdsReachAdgroupSpecPathPlugin"),
        {
          type: "adgroup/spec-path",
          key: "outcome-awareness",
          pivots: { objective: r("AdsAPIObjectives").OUTCOME_AWARENESS },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
