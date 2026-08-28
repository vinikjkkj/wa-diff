__d(
  "AdsInstagramShopConfig",
  ["AdsAPIObjectives", "AdsAPIOptimizationGoals", "AdsBuyingTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set([r("AdsBuyingTypes").AUCTION]),
      u = new Set([
        r("AdsAPIObjectives").PRODUCT_CATALOG_SALES,
        r("AdsAPIObjectives").CONVERSIONS,
        r("AdsAPIObjectives").LINK_CLICKS,
      ]),
      c = new Set([
        (e = r("AdsAPIOptimizationGoals")).VISIT_INSTAGRAM_PROFILE,
        e.INCREMENTAL_OFFSITE_CONVERSIONS,
        e.REPLIES,
        e.CONVERSATIONS,
      ]);
    ((l.ELIGIBLE_BUYING_TYPES = s),
      (l.ELIGIBLE_OBJECTIVES = u),
      (l.UNSUPPORTED_OPTIMIZATION_GOALS = c));
  },
  98,
);
