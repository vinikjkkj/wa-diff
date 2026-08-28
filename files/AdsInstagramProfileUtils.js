__d(
  "AdsInstagramProfileUtils",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsInsightsColumns",
    "AdsInsightsField",
    "AdsPromotedObjectTypes",
    "isUPVEnabledForIGLoginUser",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("AdsInsightsColumns").makeActionID("actions", "page_engagement"),
      s = [
        r("AdsInsightsField").RESULTS,
        r("AdsInsightsField").COST_PER_RESULT,
        e,
      ];
    function u(e, t, n) {
      return (
        !r("isUPVEnabledForIGLoginUser")() &&
        e === r("AdsAPIObjectives").LINK_CLICKS &&
        (t === r("AdsPromotedObjectTypes").INSTAGRAM_PROFILE ||
          n === r("AdCampaignDestination").INSTAGRAM_PROFILE)
      );
    }
    function c(e, t) {
      return (
        e === r("AdsAPIObjectives").LINK_CLICKS &&
        t === r("AdsPromotedObjectTypes").MOBILE_APP
      );
    }
    ((l.PAGE_ENGAGEMENT_METRIC = e),
      (l.INSTAGRAM_PROFILE_VISITS_DEFAULT_METRICS = s),
      (l.getIsInstagramProfileConversionUnderTrafficObjective = u),
      (l.getIsInstagramTrafficObjectiveAndMobileApp = c));
  },
  98,
);
