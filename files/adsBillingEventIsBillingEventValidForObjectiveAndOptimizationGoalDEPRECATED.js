__d(
  "adsBillingEventIsBillingEventValidForObjectiveAndOptimizationGoalDEPRECATED",
  [
    "AdsAPIBillingEvents",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoalBillingEventsStatic",
    "AdsAPIOptimizationGoals",
    "AdsPromotedObjectTypes",
    "adsBillingEventShouldUsePostEngagementImpressionBilling",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o, a, i, l) {
      if (
        (o === null && t === r("AdsAPIBillingEvents").APP_INSTALLS) ||
        (n === r("AdsAPIOptimizationGoals").APP_INSTALLS &&
          t === r("AdsAPIBillingEvents").APP_INSTALLS)
      )
        return !1;
      if (r("adsBillingEventShouldUsePostEngagementImpressionBilling")(n))
        return (
          (a === r("AdsAPIBillingEvents").POST_ENGAGEMENT &&
            t === r("AdsAPIBillingEvents").POST_ENGAGEMENT) ||
          t === r("AdsAPIBillingEvents").IMPRESSIONS
        );
      if (n === r("AdsAPIOptimizationGoals").CONVERSATIONS)
        return t === r("AdsAPIBillingEvents").IMPRESSIONS;
      var s = Object.prototype.hasOwnProperty.call(
          r("AdsAPIOptimizationGoalBillingEventsStatic"),
          n,
        ),
        u = r("AdsAPIOptimizationGoalBillingEventsStatic")[n],
        c = s && !!u[t];
      switch (e) {
        case r("AdsAPIObjectives").MOBILE_APP_INSTALLS:
        case r("AdsAPIObjectives").APP_INSTALLS:
        case r("AdsAPIObjectives").PRODUCT_CATALOG_SALES:
          if (
            n === r("AdsAPIOptimizationGoals").VALUE ||
            n === r("AdsAPIOptimizationGoals").DERIVED_EVENTS
          )
            return t === r("AdsAPIBillingEvents").IMPRESSIONS;
          break;
        case r("AdsAPIObjectives").MOBILE_APP_ENGAGEMENT:
          return n === r("AdsAPIOptimizationGoals").CLICKS
            ? t === r("AdsAPIBillingEvents").LINK_CLICKS
            : c;
        case r("AdsAPIObjectives").LEAD_GENERATION:
          return n === r("AdsAPIOptimizationGoals").LINK_CLICKS
            ? (t === r("AdsAPIBillingEvents").LINK_CLICKS &&
                l !== r("AdsPromotedObjectTypes").PHONE_CALL) ||
                t === r("AdsAPIBillingEvents").IMPRESSIONS
            : c;
        case r("AdsAPIObjectives").CONVERSIONS:
        case r("AdsAPIObjectives").OUTCOME_SALES:
        case r("AdsAPIObjectives").OUTCOME_LEADS:
          return n === r("AdsAPIOptimizationGoals").VALUE
            ? t === r("AdsAPIBillingEvents").IMPRESSIONS
            : c;
        case r("AdsAPIObjectives").EVENT_RESPONSES:
          return n === r("AdsAPIOptimizationGoals").POST_ENGAGEMENT
            ? t === r("AdsAPIBillingEvents").POST_ENGAGEMENT
            : c;
        case r("AdsAPIObjectives").LINK_CLICKS:
        case r("AdsAPIObjectives").OUTCOME_ENGAGEMENT:
          return n === r("AdsAPIOptimizationGoals").PROFILE_AND_PAGE_ENGAGEMENT
            ? t === r("AdsAPIBillingEvents").IMPRESSIONS
            : c;
      }
      return c;
    }
    l.default = e;
  },
  98,
);
