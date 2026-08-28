__d(
  "AdsODAXEngagementAdgroupSpecPathPlugin",
  ["AdsAPIObjectives", "AdsVideoViewsAdgroupSpecPathPlugin"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsVideoViewsAdgroupSpecPathPlugin"), {
        type: "adgroup/spec-path",
        key: "outcome-engagement",
        pivots: { objective: r("AdsAPIObjectives").OUTCOME_ENGAGEMENT },
      }),
      s = e;
    l.default = s;
  },
  98,
);
