__d(
  "AdsSuggestedVideoConfig",
  ["AdsAPIObjectives", "AdsPreviewVideoUnificationUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o(
        "AdsPreviewVideoUnificationUtils",
      ).deprecateWatchPlacementsInAdsManager()
        ? new Set()
        : new Set([
            r("AdsAPIObjectives").BRAND_AWARENESS,
            r("AdsAPIObjectives").APP_INSTALLS,
            r("AdsAPIObjectives").MOBILE_APP_INSTALLS,
            r("AdsAPIObjectives").POST_ENGAGEMENT,
            r("AdsAPIObjectives").VIDEO_VIEWS,
            r("AdsAPIObjectives").REACH,
            r("AdsAPIObjectives").OUTCOME_AWARENESS,
            r("AdsAPIObjectives").CONVERSIONS,
            r("AdsAPIObjectives").WILDCARD_INTERNAL_ONLY,
            r("AdsAPIObjectives").LINK_CLICKS,
            r("AdsAPIObjectives").LEAD_GENERATION,
            r("AdsAPIObjectives").PRODUCT_CATALOG_SALES,
            r("AdsAPIObjectives").EVENT_RESPONSES,
            r("AdsAPIObjectives").MESSAGES,
            r("AdsAPIObjectives").PAGE_LIKES,
          ]);
    }
    function s() {
      return o(
        "AdsPreviewVideoUnificationUtils",
      ).deprecateWatchPlacementsInAdsManager()
        ? new Set()
        : new Set([
            r("AdsAPIObjectives").BRAND_AWARENESS,
            r("AdsAPIObjectives").POST_ENGAGEMENT,
            r("AdsAPIObjectives").VIDEO_VIEWS,
            r("AdsAPIObjectives").REACH,
            r("AdsAPIObjectives").OUTCOME_AWARENESS,
            r("AdsAPIObjectives").WILDCARD_INTERNAL_ONLY,
            r("AdsAPIObjectives").LINK_CLICKS,
            r("AdsAPIObjectives").PRODUCT_CATALOG_SALES,
          ]);
    }
    var u = e(),
      c = e(),
      d = s();
    ((l.ELIGIBLE_OBJECTIVES = u),
      (l.ELIGIBLE_DEFAULT_IN_OBJECTIVES = c),
      (l.WATCH_HOME_ELIGIBLE_OBJECTIVES = d));
  },
  98,
);
