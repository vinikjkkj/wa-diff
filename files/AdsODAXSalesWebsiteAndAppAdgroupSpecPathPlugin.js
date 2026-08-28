__d(
  "AdsODAXSalesWebsiteAndAppAdgroupSpecPathPlugin",
  [
    "AdsAPIObjectives",
    "AdsConversionsWebsiteAndAppAdgroupSpecPathPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsConversionsWebsiteAndAppAdgroupSpecPathPlugin"),
        {
          type: "adgroup/spec-path",
          key: "outcome-sales/website-and-app",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_SALES,
            promotedObjectType: r("AdsPromotedObjectTypes").WEB_AND_APP,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
