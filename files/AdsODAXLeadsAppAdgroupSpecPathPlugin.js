__d(
  "AdsODAXLeadsAppAdgroupSpecPathPlugin",
  [
    "AdsAPIObjectives",
    "AdsConversionsAppAdgroupSpecPathPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsConversionsAppAdgroupSpecPathPlugin"),
        {
          type: "adgroup/spec-path",
          key: "outcome-leads/app",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_LEADS,
            promotedObjectType: r("AdsPromotedObjectTypes").MOBILE_APP,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
