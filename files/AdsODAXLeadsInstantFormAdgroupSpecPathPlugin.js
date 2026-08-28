__d(
  "AdsODAXLeadsInstantFormAdgroupSpecPathPlugin",
  [
    "AdsAPIObjectives",
    "AdsLeadGenerationAdgroupSpecPathPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsLeadGenerationAdgroupSpecPathPlugin"),
        {
          type: "adgroup/spec-path",
          key: "outcome-leads/instant-form",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_LEADS,
            promotedObjectType: r("AdsPromotedObjectTypes").ON_AD,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
