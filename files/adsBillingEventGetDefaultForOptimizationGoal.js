__d(
  "adsBillingEventGetDefaultForOptimizationGoal",
  [
    "AdsAPIBillingEvents",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAccountUtils",
    "AdsODAXUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i = r("AdsAccountUtils").hasCapability(
          a,
          "CAN_USE_LINK_CLICK_BILLING_EVENT",
        ),
        l = o("AdsODAXUtils").maybeTranslateObjective(e, n, t);
      switch (t) {
        case r("AdsAPIOptimizationGoals").LINK_CLICKS:
          return i
            ? l === r("AdsAPIObjectives").MOBILE_APP_ENGAGEMENT ||
              l === r("AdsAPIObjectives").LINK_CLICKS ||
              l === r("AdsAPIObjectives").CONVERSIONS ||
              l === r("AdsAPIObjectives").APP_INSTALLS ||
              (l === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES &&
                ((a == null ? void 0 : a.is_tier_0) === !0 ||
                  (a == null ? void 0 : a.is_tier_1) === !0)) ||
              (l === r("AdsAPIObjectives").MESSAGES &&
                ((a == null ? void 0 : a.is_tier_0) === !0 ||
                  (a == null ? void 0 : a.is_tier_1) === !0))
              ? r("AdsAPIBillingEvents").IMPRESSIONS
              : r("AdsAPIBillingEvents").LINK_CLICKS
            : r("AdsAPIBillingEvents").IMPRESSIONS;
        case r("AdsAPIOptimizationGoals").CLICKS:
          return i && l === r("AdsAPIObjectives").MOBILE_APP_ENGAGEMENT
            ? r("AdsAPIBillingEvents").LINK_CLICKS
            : r("AdsAPIBillingEvents").IMPRESSIONS;
        case r("AdsAPIOptimizationGoals").VIDEO_VIEWS:
        case r("AdsAPIOptimizationGoals").POST_ENGAGEMENT:
          return r("AdsAPIBillingEvents").IMPRESSIONS;
      }
      return r("AdsAPIBillingEvents").IMPRESSIONS;
    }
    l.default = e;
  },
  98,
);
