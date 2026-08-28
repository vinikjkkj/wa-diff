__d(
  "AdsODAXSalesMessengerAdgroupSpecPathPlugin",
  [
    "AdsAPIObjectives",
    "AdsConversionsMessengerAdgroupSpecPathPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsConversionsMessengerAdgroupSpecPathPlugin"),
        {
          type: "adgroup/spec-path",
          key: "outcome-sales/messenger",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_SALES,
            promotedObjectType: r("AdsPromotedObjectTypes").MESSENGER,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
