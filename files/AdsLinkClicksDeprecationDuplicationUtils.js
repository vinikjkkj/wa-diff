__d(
  "AdsLinkClicksDeprecationDuplicationUtils",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "ClickToMessageDestinationTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e === r("AdCampaignDestination").APP || t != null;
    }
    function s(e) {
      return (
        e != null &&
        o("ClickToMessageDestinationTypes").MESSAGING_APP_DESTINATION_TYPES.has(
          e,
        )
      );
    }
    function u(e) {
      return e.isApp || e.isAdvantagePlusOn;
    }
    function c(e) {
      return u(e)
        ? r("AdsAPIOptimizationGoals").LINK_CLICKS
        : e.isMessaging
          ? r("AdsAPIOptimizationGoals").CONVERSATIONS
          : r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS;
    }
    function d(e, t) {
      return (
        (e === r("AdsAPIObjectives").OUTCOME_TRAFFIC ||
          e === r("AdsAPIObjectives").LINK_CLICKS) &&
        s(t)
      );
    }
    function m(e, t) {
      return d(e, t) ? r("AdsAPIOptimizationGoals").CONVERSATIONS : null;
    }
    var p = new Set([
      r("AdsAPIOptimizationGoals").REACH,
      r("AdsAPIOptimizationGoals").IMPRESSIONS,
      r("AdsAPIOptimizationGoals").CONVERSATIONS,
    ]);
    function _(e, t, n) {
      return (e === r("AdsAPIObjectives").OUTCOME_TRAFFIC ||
        e === r("AdsAPIObjectives").LINK_CLICKS) &&
        t === r("AdCampaignDestination").WEBSITE &&
        n != null &&
        p.has(n)
        ? r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS
        : null;
    }
    function f(e) {
      return (
        e.isNewCampaign &&
        e.isDuplication &&
        (e.objective === r("AdsAPIObjectives").OUTCOME_TRAFFIC ||
          e.objective === r("AdsAPIObjectives").LINK_CLICKS) &&
        e.optimizationGoal === r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS
      );
    }
    ((l.isAppConversionLocation = e),
      (l.isMessagingDestination = s),
      (l.shouldKeepLinkClicksForDuplication = u),
      (l.getDuplicatedLinkClicksGoal = c),
      (l.isTrafficMessagingDestination = d),
      (l.getDuplicatedTrafficMessagingGoal = m),
      (l.getDuplicatedTrafficWebsiteGoal = _),
      (l.isPerformanceGoalLockedForTrafficVisitsDuplication = f));
  },
  98,
);
