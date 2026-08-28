__d(
  "AdsODAXSalesWebsiteAndShopAdgroupSpecPathPlugin",
  [
    "AdsAPIObjectives",
    "AdsConversionsWebsiteAndShopAdgroupSpecPathPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsConversionsWebsiteAndShopAdgroupSpecPathPlugin"),
        {
          type: "adgroup/spec-path",
          key: "outcome-sales/website-and-shop",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_SALES,
            promotedObjectType: r("AdsPromotedObjectTypes").WEB_AND_SHOP,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
