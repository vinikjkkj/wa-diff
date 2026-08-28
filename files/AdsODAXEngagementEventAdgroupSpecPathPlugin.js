__d(
  "AdsODAXEngagementEventAdgroupSpecPathPlugin",
  [
    "AdsAPIObjectives",
    "AdsEventResponsesAdgroupSpecPathPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsEventResponsesAdgroupSpecPathPlugin"),
        {
          type: "adgroup/spec-path",
          key: "outcome-engagement/event",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
            promotedObjectType: r("AdsPromotedObjectTypes").EVENT,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
