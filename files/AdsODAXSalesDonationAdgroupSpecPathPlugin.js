__d(
  "AdsODAXSalesDonationAdgroupSpecPathPlugin",
  [
    "AdsAPIObjectives",
    "AdsConversionsDonationAdGroupSpecPathPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsConversionsDonationAdGroupSpecPathPlugin"),
        {
          type: "adgroup/spec-path",
          key: "outcome-sales/donation",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_SALES,
            promotedObjectType: r("AdsPromotedObjectTypes").DONATION,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
