__d(
  "AdsODAXEngagementInstagramAdgroupSpecPathPlugin",
  [
    "AdsAPIObjectives",
    "AdsMessagesAdgroupSpecPathPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsMessagesAdgroupSpecPathPlugin"), {
        type: "adgroup/spec-path",
        key: "outcome-engagement/instagram",
        pivots: {
          objective: r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
          promotedObjectType: r("AdsPromotedObjectTypes").INSTAGRAM,
        },
      }),
      s = e;
    l.default = s;
  },
  98,
);
