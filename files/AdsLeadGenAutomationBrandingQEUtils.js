__d(
  "AdsLeadGenAutomationBrandingQEUtils",
  [
    "AdsAPIObjectives",
    "AdsLeadGenAutomationQEUtils",
    "AdsOSLGACommonExperimentUtils",
    "AdsProgressiveDisclosureQEUtils",
    "AdsProgressiveDisclosureUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (
        e == null ||
        (e !== r("AdsAPIObjectives").OUTCOME_LEADS &&
          e !== r("AdsAPIObjectives").LEAD_GENERATION)
      )
        return null;
      var a = null,
        i = o("AdsProgressiveDisclosureQEUtils").getOSAUVariation(t, a, !0, n);
      return o("AdsOSLGACommonExperimentUtils").getLGAOptionXVariation(a, i);
    }
    function s(t) {
      var n = e(t, !1, !1);
      return n == null || n === "bau";
    }
    function u(e) {
      return (
        e != null &&
        e !==
          o("AdsProgressiveDisclosureUtils").ProgressiveDisclosureVariation.None
      );
    }
    function c() {
      var t = e(r("AdsAPIObjectives").OUTCOME_LEADS, !1, !1);
      switch (t) {
        case "optionx_high_friction":
        case "optionx_medium_friction_v2":
          return o("AdsProgressiveDisclosureUtils")
            .ProgressiveDisclosureVariation.StaticExtended;
        case "bau":
          return o("AdsProgressiveDisclosureUtils")
            .ProgressiveDisclosureVariation.None;
        default:
          return null;
      }
    }
    function d(e) {
      return o("AdsLeadGenAutomationQEUtils").isLeadsObjective(e) ? u(c()) : !1;
    }
    function m(e) {
      return e != null && e !== "bau";
    }
    function p(t, n) {
      var r = e(t, !1, !1),
        o = r === "bau";
      return r != null && !o ? [] : n;
    }
    function _(t, n) {
      var a = e(r("AdsAPIObjectives").OUTCOME_LEADS, t, n);
      switch (a) {
        case "optionx_high_friction":
        case "optionx_medium_friction_v2":
          return o("AdsProgressiveDisclosureUtils")
            .ProgressiveDisclosureVariation.Static;
        case "bau":
          return o("AdsProgressiveDisclosureUtils")
            .ProgressiveDisclosureVariation.None;
        default:
          return null;
      }
    }
    function f(t, n) {
      var a = e(r("AdsAPIObjectives").OUTCOME_LEADS, t, n);
      switch (a) {
        case "optionx_high_friction":
        case "optionx_medium_friction_v2":
          return o("AdsProgressiveDisclosureUtils")
            .ProgressiveDisclosureVariation.StaticExtended;
        case "bau":
          return o("AdsProgressiveDisclosureUtils")
            .ProgressiveDisclosureVariation.None;
        default:
          return null;
      }
    }
    ((l.getAdvertiserSegmentAndTreatmentVariantForLeadGenAutomationBrandingExp =
      e),
      (l.isBAUForLeadGenAutomationBrandingExperiment = s),
      (l.getIsPGDVariationEligibleForLeadGenAutomationBrandingExp = u),
      (l.getProgressiveDisclosureLeadGenAutomationBrandingExpVariationWithoutLog =
        c),
      (l.getIsPGDLeadGenAutomationBrandingExpVariationWithoutLog = d),
      (l.getIsLeadGenAutomationBrandingExpTestVariation = m),
      (l.getEligibleCreationPackagesForLeadGenAutomationExperiments = p),
      (l.getPlacementPGDVariationForLeadGenAutomationBrandingExperiment = _),
      (l.getTargetingPGDVariationForLeadGenAutomationBrandingExp = f));
  },
  98,
);
