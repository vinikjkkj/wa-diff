__d(
  "AdsLeadGenAutomationQEUtils",
  [
    "AdsAPIObjectives",
    "AdsDFCALALAdoptionQEUtils",
    "adsBudgetFlexGKUtils",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e === r("AdsAPIObjectives").OUTCOME_LEADS ||
        e === r("AdsAPIObjectives").LEAD_GENERATION
      );
    }
    function s(e) {
      return (
        e === r("AdsAPIObjectives").OUTCOME_AWARENESS ||
        e === r("AdsAPIObjectives").LINK_CLICKS
      );
    }
    function u(e) {
      return (
        s(e) &&
        o(
          "adsBudgetFlexGKUtils",
        ).isEligibleForAdsUXUpperFunnelHarmonyQEWithExposureLogging()
      );
    }
    function c(t) {
      return r("justknobx")._("4741") ? e(t) : !1;
    }
    function d(t, n) {
      return t.every(function (t) {
        var r,
          o = (r = n.get(t.id)) == null ? void 0 : r.objective;
        return e(o);
      });
    }
    function m(t, n) {
      return t.every(function (t) {
        if (!e(n)) return !1;
        var r = o(
          "AdsDFCALALAdoptionQEUtils",
        ).getDFCALaLaaSSupportedOptimizationGoals();
        return r.has(t.optimization_goal);
      });
    }
    ((l.isLeadsObjective = e),
      (l.isUpperFunnelObjective = s),
      (l.isUpperFunnelObjectiveAndInAUUXHarmonyGK = u),
      (l.isLeadsObjectiveAndHasLGAEnabledKS = c),
      (l.isEveryCampaignGroupLeadsObjective = d),
      (l.isEveryCampaignSupportedForLeadsObjective = m));
  },
  98,
);
