__d(
  "AdsODAXSalesProductSetAdgroupSpecPathPlugin",
  [
    "AdsAPIObjectives",
    "AdsConversionsDynamicAdgroupSpecPathPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsConversionsDynamicAdgroupSpecPathPlugin"),
        {
          type: "adgroup/spec-path",
          key: "outcome-sales/product_set",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_SALES,
            promotedObjectType: r("AdsPromotedObjectTypes").PRODUCT_SET,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
