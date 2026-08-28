__d(
  "AdsODAXLeadsExistingPostAdgroupSpecPathPlugin",
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
          key: "lead-generation/existing-post",
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
