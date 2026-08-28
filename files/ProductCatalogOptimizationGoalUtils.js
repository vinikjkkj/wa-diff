__d(
  "ProductCatalogOptimizationGoalUtils",
  ["AdsBulkValueUtils", "CatalogCommerceUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("CatalogCommerceUtils").isContactMerchantShopCatalog(e);
    }
    function s(t) {
      return o("AdsBulkValueUtils").mapBulkValue(t, function (t) {
        return e(t);
      });
    }
    ((l.isCatalogEligibleForReplies = e),
      (l.isCatalogEligibleForRepliesBulk = s));
  },
  98,
);
