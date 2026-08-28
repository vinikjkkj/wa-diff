__d(
  "AdsInstagramReelsConfig",
  ["AdsAPIObjectives", "AdsAPIOptimizationGoals"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set([
        (e = r("AdsAPIObjectives")).CONVERSIONS,
        e.REACH,
        e.LINK_CLICKS,
        e.VIDEO_VIEWS,
        e.BRAND_AWARENESS,
        e.APP_INSTALLS,
        e.MESSAGES,
        e.LEAD_GENERATION,
        e.WILDCARD_INTERNAL_ONLY,
        e.PRODUCT_CATALOG_SALES,
      ]),
      u = new Set([
        r("AdsAPIOptimizationGoals").TWO_SECOND_CONTINUOUS_VIDEO_VIEWS,
        r("AdsAPIOptimizationGoals").INCREMENTAL_OFFSITE_CONVERSIONS,
      ]);
    ((l.ELIGIBLE_OBJECTIVES = s), (l.UNSUPPORTED_OPTIMIZATION_GOALS = u));
  },
  98,
);
