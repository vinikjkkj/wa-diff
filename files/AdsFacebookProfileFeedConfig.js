__d(
  "AdsFacebookProfileFeedConfig",
  ["AdsAPIObjectives", "AdsAPIOptimizationGoals"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set([
        (e = r("AdsAPIObjectives")).CONVERSIONS,
        e.WEBSITE_CONVERSIONS,
        e.LINK_CLICKS,
        e.POST_ENGAGEMENT,
        e.MESSAGES,
        e.LEAD_GENERATION,
        e.APP_INSTALLS,
        e.PRODUCT_CATALOG_SALES,
        e.BRAND_AWARENESS,
        e.VIDEO_VIEWS,
        e.REACH,
        e.PAGE_LIKES,
        e.EVENT_RESPONSES,
      ]),
      u = new Set([
        r("AdsAPIOptimizationGoals").TWO_SECOND_CONTINUOUS_VIDEO_VIEWS,
        r("AdsAPIOptimizationGoals").QUALITY_CALL,
      ]);
    ((l.ELIGIBLE_OBJECTIVES = s), (l.UNSUPPORTED_OPTIMIZATION_GOALS = u));
  },
  98,
);
