__d(
  "AdsODAXEngagementPostAdgroupSpecPathPlugin",
  [
    "AdsAPIObjectives",
    "AdsPostEngagementAdgroupSpecPathPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsPostEngagementAdgroupSpecPathPlugin"),
        {
          type: "adgroup/spec-path",
          key: "outcome-engagement/post",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
            promotedObjectType: r("AdsPromotedObjectTypes").POST,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
