__d(
  "AdsODAXEngagementPageAdgroupSpecPathPlugin",
  [
    "AdsAPIObjectives",
    "AdsPageLikesAdgroupSpecPathPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPageLikesAdgroupSpecPathPlugin"), {
        type: "adgroup/spec-path",
        key: "outcome-engagement/page",
        pivots: {
          objective: r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
          promotedObjectType: r("AdsPromotedObjectTypes").PAGE,
        },
      }),
      s = e;
    l.default = s;
  },
  98,
);
