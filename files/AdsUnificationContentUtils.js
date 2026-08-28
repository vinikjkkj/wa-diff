__d(
  "AdsUnificationContentUtils",
  [
    "AdsAPIObjectives",
    "AdsLeadGenAutomationBrandingQEUtils",
    "AdsLeadGenAutomationQEUtils",
    "AdsOSAUExperimentUtils",
    "AdsProgressiveDisclosureUnifiedEngagementVariation",
    "AdsProgressiveDisclosureUtils",
    "AdsScalingPGDBundle1AwarenessExperimentUtils",
    "AdsScalingPGDBundle1TrafficExperimentUtils",
    "AdvantageAudienceUtil",
    "adsBudgetFlexGKUtils",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = !r("justknobx")._("3978");
      if (t) return !1;
      var n = o("AdsOSAUExperimentUtils").isAUTest({
          logExposure: !1,
          checkLGAEnabled: o(
            "AdsLeadGenAutomationQEUtils",
          ).isLeadsObjectiveAndHasLGAEnabledKS(e),
        }),
        a =
          o("AdsScalingPGDBundle1AwarenessExperimentUtils").isEligibleAndTest(
            e,
            { logExposure: !1 },
          ) ||
          o("AdsScalingPGDBundle1TrafficExperimentUtils").isEligibleAndTest(e, {
            logExposure: !1,
          });
      return n || a;
    }
    function s(t, n, r, a, i) {
      return e(t)
        ? o("AdvantageAudienceUtil").getAdvantageAudienceUpdatedStatDescription(
            t,
            n,
            n,
            r,
            r,
            a,
            i,
          )
        : i;
    }
    function u(t, n, r, a, i) {
      return e(t)
        ? o("AdvantageAudienceUtil").getAdvantageAudienceUpdatedStatNumber(
            t,
            n,
            r,
            a,
            i,
          )
        : i;
    }
    function c(e, t) {
      return e;
    }
    function d() {
      return !o(
        "AdsProgressiveDisclosureUtils",
      ).getIsPGDVariationEligibleForUnificationPackage(
        o(
          "AdsProgressiveDisclosureUtils",
        ).getProgressiveDisclosureUnifiedAppSalesVariationWithoutLog(),
      );
    }
    function m(e, t, n) {
      return !o(
        "AdsProgressiveDisclosureUtils",
      ).getIsProgressiveDisclosureUnifiedAppSalesTestVariationWithoutLog(n) &&
        !o(
          "AdsProgressiveDisclosureUnifiedEngagementVariation",
        ).getIsPGDEngagementUnificationTestVariation(n) &&
        !o("AdsScalingPGDBundle1AwarenessExperimentUtils").isEligibleAndTest(
          n,
          { logExposure: !1 },
        ) &&
        !o("AdsScalingPGDBundle1TrafficExperimentUtils").isEligibleAndTest(n, {
          logExposure: !1,
        }) &&
        !(
          o("AdsLeadGenAutomationQEUtils").isUpperFunnelObjective(n) &&
          o(
            "adsBudgetFlexGKUtils",
          ).isEligibleForAdsUXUpperFunnelHarmonyQEWithExposureLogging()
        )
        ? t
        : e;
    }
    function p(e, t) {
      return o(
        "AdsLeadGenAutomationBrandingQEUtils",
      ).isBAUForLeadGenAutomationBrandingExperiment(
        r("AdsAPIObjectives").OUTCOME_LEADS,
      )
        ? t
        : e;
    }
    function _(e, t, n) {
      switch (n) {
        case r("AdsAPIObjectives").OUTCOME_SALES:
        case r("AdsAPIObjectives").APP_INSTALLS:
        case r("AdsAPIObjectives").LINK_CLICKS:
        case r("AdsAPIObjectives").OUTCOME_AWARENESS:
        case r("AdsAPIObjectives").OUTCOME_ENGAGEMENT:
          return m(e, t, n);
        case r("AdsAPIObjectives").OUTCOME_LEADS:
        case r("AdsAPIObjectives").LEAD_GENERATION:
          return p(e, t);
        default:
          return t;
      }
    }
    function f(e, t, n) {
      var r = g(n);
      return r ? e : t;
    }
    function g(e) {
      var t = !r("justknobx")._("3979"),
        n = o("AdsOSAUExperimentUtils").isOSAndAUTest({
          logExposure: !1,
          checkLGAEnabled: o(
            "AdsLeadGenAutomationQEUtils",
          ).isLeadsObjectiveAndHasLGAEnabledKS(e),
        });
      return !t && n;
    }
    ((l.getAppSalesOrLeadsAUOSStatsUpdate = s),
      (l.getAppSalesOrLeadsAUOSStatsUpdateNumber = u),
      (l.getStringOrDefault = c),
      (l.showUnificationEducationalContent = d),
      (l.getAppSalesAutomationUnificationQEStringOrDefault = m),
      (l.getLeadGenAutomationBrandingQEStringOrDefault = p),
      (l.getAutomationUnificationQEStringOrDefault = _),
      (l.getAUOSUpdateACBNewNameOrDefault = f),
      (l.getShouldShowAUOSUpdateACBNewName = g));
  },
  98,
);
