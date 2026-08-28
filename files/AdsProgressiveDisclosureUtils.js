__d(
  "AdsProgressiveDisclosureUtils",
  [
    "$InternalEnum",
    "AdsAPIObjectives",
    "AdsAutomationUnificationUtils",
    "AdsAutomationUnifiedCampaign",
    "AdsLeadGenAutomationBrandingQEUtils",
    "AdsLeadGenAutomationQEUtils",
    "AdsProgressiveDisclosureQEUtils",
    "AdsProgressiveDisclosureUnifiedEngagementVariation",
    "AdsScalingPGDBundle1AwarenessExperimentUtils",
    "AdsScalingPGDBundle1TrafficExperimentUtils",
    "AdsSmartPromotion",
    "EngagementUnitificationGating",
    "adsBudgetFlexGKUtils",
    "adsTargetingPGDIsIndividualSettingCampaign",
    "filterNulls",
    "first",
    "gkx",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useMemo,
      u = new Map([
        ["APP_INSTALLS", "295549163519590"],
        ["OUTCOME_SALES", "354093180737669"],
      ]),
      c = Array.from(u.values()),
      d = n("$InternalEnum").Mirrored([
        "None",
        "Dynamic",
        "Static",
        "Mixed",
        "DynamicExtended",
        "StaticExtended",
        "Baseline",
      ]),
      m = n("$InternalEnum").Mirrored(["Dynamic", "Static"]);
    function p(e) {
      switch (e) {
        case "dynamic":
          return d.Dynamic;
        case "static":
          return d.Static;
        case "mixed":
          return d.Mixed;
        case "dynamic_extended":
          return d.DynamicExtended;
        case "static_extended":
          return d.StaticExtended;
        case "baseline":
          return d.Baseline;
        case "none":
          return d.None;
        default:
          return null;
      }
    }
    function _(e, t) {
      return p(
        o("AdsProgressiveDisclosureQEUtils").getUnifiedAppSalesVariation(e, t),
      );
    }
    function f() {
      return p(
        o(
          "AdsProgressiveDisclosureQEUtils",
        ).getUnifiedAppSalesVariationWithoutLog(),
      );
    }
    function g(e) {
      return (
        e === d.Dynamic ||
        e === d.Static ||
        e === d.Mixed ||
        e === d.DynamicExtended ||
        e === d.StaticExtended
      );
    }
    function h(e, t) {
      var n = r("first")(
        r("filterNulls")([
          t === r("AdsAPIObjectives").OUTCOME_SALES ||
          t === r("AdsAPIObjectives").APP_INSTALLS
            ? _(e, !1)
            : null,
          o("AdsLeadGenAutomationQEUtils").isLeadsObjective(t)
            ? o(
                "AdsLeadGenAutomationBrandingQEUtils",
              ).getTargetingPGDVariationForLeadGenAutomationBrandingExp(!1, !1)
            : null,
          t === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT
            ? o(
                "AdsProgressiveDisclosureUnifiedEngagementVariation",
              ).getProgressiveDisclosureUnifiedEngagementVariation(
                !1,
                e.account_id,
              )
            : null,
        ]).filter(function (e) {
          return e !== d.None;
        }),
      );
      return (
        n === d.StaticExtended ||
        n === d.DynamicExtended ||
        o("AdsScalingPGDBundle1AwarenessExperimentUtils").isEligibleAndTest(t, {
          logExposure: !1,
        }) ||
        o("AdsScalingPGDBundle1TrafficExperimentUtils").isEligibleAndTest(t, {
          logExposure: !1,
        }) ||
        (o("AdsLeadGenAutomationQEUtils").isUpperFunnelObjective(t) &&
          o(
            "adsBudgetFlexGKUtils",
          ).isEligibleForAdsUXUpperFunnelHarmonyQEWithExposureLogging())
      );
    }
    function y(e) {
      return e === d.Static || e === d.Mixed || e === d.StaticExtended;
    }
    function C(e) {
      return e != null && e !== d.None;
    }
    function b(e) {
      return o(
        "AdsAutomationUnificationUtils",
      ).isObjectiveEligibleForUnification(e)
        ? C(f())
        : !1;
    }
    function v(e, t) {
      return o(
        "AdsAutomationUnificationUtils",
      ).isObjectiveEligibleForUnification(t)
        ? C(_(e, !1))
        : !1;
    }
    function S(e, t) {
      var n = o("react-compiler-runtime").c(3),
        r;
      e: {
        if (e == null || t == null) {
          r = !1;
          break e;
        }
        var a;
        (n[0] !== e || n[1] !== t
          ? ((a = v(e, t)), (n[0] = e), (n[1] = t), (n[2] = a))
          : (a = n[2]),
          (r = a));
      }
      return r;
    }
    function R(e) {
      var t = o("react-compiler-runtime").c(1),
        n;
      e: {
        if (!o("AdsLeadGenAutomationQEUtils").isLeadsObjective(e)) {
          n = !1;
          break e;
        }
        var r;
        (t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = o(
              "AdsLeadGenAutomationBrandingQEUtils",
            ).getIsPGDVariationEligibleForLeadGenAutomationBrandingExp(
              o(
                "AdsLeadGenAutomationBrandingQEUtils",
              ).getProgressiveDisclosureLeadGenAutomationBrandingExpVariationWithoutLog(),
            )),
            (t[0] = r))
          : (r = t[0]),
          (n = r));
      }
      return n;
    }
    function L(e) {
      return C(_(e, !1));
    }
    function E(e) {
      return e === r("AdsAPIObjectives").OUTCOME_SALES
        ? r("AdsAutomationUnifiedCampaign").UNIFIED_SALES
        : e === r("AdsAPIObjectives").APP_INSTALLS
          ? r("AdsAutomationUnifiedCampaign").UNIFIED_APP
          : e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT
            ? r("AdsAutomationUnifiedCampaign").UNIFIED_ENGAGEMENT
            : e === r("AdsAPIObjectives").OUTCOME_AWARENESS
              ? r("AdsAutomationUnifiedCampaign").UNIFIED_AWARENESS
              : e === r("AdsAPIObjectives").LINK_CLICKS
                ? r("AdsAutomationUnifiedCampaign").UNIFIED_TRAFFIC
                : null;
    }
    function k(e) {
      return o("AdsLeadGenAutomationQEUtils").isLeadsObjective(e)
        ? r("AdsAutomationUnifiedCampaign").UNIFIED_LEADS
        : null;
    }
    function I(e) {
      var t = e;
      if (o("AdsLeadGenAutomationQEUtils").isLeadsObjective(t)) {
        var n = o(
          "AdsLeadGenAutomationBrandingQEUtils",
        ).getIsPGDVariationEligibleForLeadGenAutomationBrandingExp(
          o(
            "AdsLeadGenAutomationBrandingQEUtils",
          ).getProgressiveDisclosureLeadGenAutomationBrandingExpVariationWithoutLog(),
        );
        return n ? k(t) : null;
      } else {
        if (
          o(
            "AdsLeadGenAutomationQEUtils",
          ).isUpperFunnelObjectiveAndInAUUXHarmonyGK(t)
        )
          return E(t);
        var r = g(f());
        return r ||
          o("EngagementUnitificationGating").getEULaunch1AudienceExperiment(!1)
          ? E(t)
          : null;
      }
    }
    function T(e, t) {
      var n = o(
        "AdsLeadGenAutomationBrandingQEUtils",
      ).getAdvertiserSegmentAndTreatmentVariantForLeadGenAutomationBrandingExp(
        r("AdsAPIObjectives").OUTCOME_LEADS,
        e,
        t,
      );
      switch (n) {
        case "optionx_high_friction":
        case "optionx_medium_friction_v2":
          return d.Static;
        case "bau":
          return d.None;
        default:
          return null;
      }
    }
    function D(e) {
      return (
        e.automation_unified_campaign_type != null &&
        e.automation_unified_campaign_type !==
          r("AdsAutomationUnifiedCampaign").NONE
      );
    }
    function x(e, t, n) {
      var o =
          e.smart_promotion_type ===
            r("AdsSmartPromotion").AUTOMATED_SHOPPING_ADS ||
          e.smart_promotion_type === r("AdsSmartPromotion").SMART_APP_PROMOTION,
        a =
          e.automation_unified_campaign_type ===
          r("AdsAutomationUnifiedCampaign").UNIFIED_SALES_PROXY;
      return o && a && t && !n;
    }
    function $(e, t) {
      return !!(
        (o("AdsAutomationUnificationUtils").isObjectiveEligibleForUnification(
          t,
        ) ||
          o("AdsLeadGenAutomationQEUtils").isLeadsObjective(t)) &&
        L(e)
      );
    }
    function P() {
      return r("gkx")("15966");
    }
    function N(e) {
      return (
        r("adsTargetingPGDIsIndividualSettingCampaign")(e) && r("gkx")("6528")
      );
    }
    function M() {
      return (
        o("AdsProgressiveDisclosureQEUtils").isPGDPillar3ForAUEligible() &&
        C(f())
      );
    }
    function w(e) {
      return (
        b(e) ||
        o(
          "AdsLeadGenAutomationBrandingQEUtils",
        ).getIsPGDLeadGenAutomationBrandingExpVariationWithoutLog(e) ||
        o(
          "EngagementUnitificationGating",
        ).isEngagementObjectiveAndEULaunch1Enabled(e) ||
        o(
          "AdsLeadGenAutomationQEUtils",
        ).isUpperFunnelObjectiveAndInAUUXHarmonyGK(e)
      );
    }
    function A() {
      var e = C(f()),
        t = o(
          "AdsLeadGenAutomationBrandingQEUtils",
        ).getIsPGDVariationEligibleForLeadGenAutomationBrandingExp(
          o(
            "AdsLeadGenAutomationBrandingQEUtils",
          ).getProgressiveDisclosureLeadGenAutomationBrandingExpVariationWithoutLog(),
        );
      return (
        e ||
        t ||
        o("EngagementUnitificationGating").getEULaunch1AudienceExperiment(!1)
      );
    }
    ((l.progressiveDisclosureBAUPackageConfigIDByObjectiveMap = u),
      (l.progressiveDisclosureBAUPackageConfigIDs = c),
      (l.ProgressiveDisclosureVariation = d),
      (l.PlacementProgressiveDisclosureUIVariation = m),
      (l.getProgressiveDisclosureUnifiedAppSalesVariation = _),
      (l.getProgressiveDisclosureUnifiedAppSalesVariationWithoutLog = f),
      (l.getIsProgressiveDisclosureTestVariation = g),
      (l.getIsTargetingProgressiveDisclosureTestVariation = h),
      (l.getIsPlacementStaticVariation = y),
      (l.getIsPGDVariationEligibleForUnificationPackage = C),
      (l.getIsProgressiveDisclosureUnifiedAppSalesTestVariationWithoutLog = b),
      (l.getIsProgressiveDisclosureUnifiedAppSalesTestVariation = v),
      (l.useIsProgressiveDisclosureUnifiedAppSalesTestVariation = S),
      (l.useIsPGDLeadGenAutomationBrandingExpVariation = R),
      (l.getProgressiveDisclosureHasGuidance = L),
      (l.getAutomationUnifedCampaignType = E),
      (l.getLeadsAutomationUnifiedCampaignType = k),
      (l.getEligibleAutomationUnifiedCampaignType = I),
      (l.getBudgetPGDVariationForLeadGenAutomationBrandingExp = T),
      (l.getIsAutomationUnifiedCampaignType = D),
      (l.getIsAutomationUnificationProxyStatusEnabled = x),
      (l.isAUTargetingPillEligible = $),
      (l.isAccountControlAudienceUnificationGKEnabled = P),
      (l.isProgressiveDisclosureUnifiedAppSalesRollback = N),
      (l.isUnifiedAppSalesPillar3Enabled = M),
      (l.isInAnyPlacementAutomationUnification = w),
      (l.getShouldShowAUOpportunitiesHub = A));
  },
  98,
);
