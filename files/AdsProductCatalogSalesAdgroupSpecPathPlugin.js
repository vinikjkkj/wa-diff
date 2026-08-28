__d(
  "AdsProductCatalogSalesAdgroupSpecPathPlugin",
  [
    "AdsAPIObjectives",
    "AdsDefaultAdgroupSpecPathPlugin",
    "AdsDynamicAdgroupSpecPathPluginCommon",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultAdgroupSpecPathPlugin"),
        r("AdsDynamicAdgroupSpecPathPluginCommon"),
        {
          type: "adgroup/spec-path",
          key: "product-catalog-sales",
          pivots: { objective: r("AdsAPIObjectives").PRODUCT_CATALOG_SALES },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
