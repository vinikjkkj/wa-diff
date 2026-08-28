__d(
  "AdsTargetingLookalikeAsASignalUtils",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsTargetingAsSignalUtils",
    "adsTargetingRelaxationRolloutSelectors",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        (e = r("AdsAPIOptimizationGoals")).VALUE,
        e.OFFSITE_CONVERSIONS,
        e.APP_INSTALLS,
        e.CONVERSATIONS,
      ],
      u = [
        e.LINK_CLICKS,
        e.LANDING_PAGE_VIEWS,
        e.LEAD_GENERATION,
        e.QUALITY_LEAD,
        e.QUALITY_CALL,
      ];
    function c(e) {
      var t,
        n = [
          (t = r("AdsAPIObjectives")).OUTCOME_SALES,
          t.CONVERSIONS,
          t.PRODUCT_CATALOG_SALES,
          t.MESSAGES,
          t.APP_INSTALLS,
        ];
      return n.includes(e);
    }
    function d(e) {
      return u.includes(e);
    }
    function m(e, t) {
      return o("AdsTargetingAsSignalUtils").isCampaignGroupRegulated(t)
        ? !1
        : o("AdsTargetingAsSignalUtils").isTargetingAsSignalBitSetForType(e, 1);
    }
    function p(e, t) {
      return m(e.targeting_as_signal, t);
    }
    function _(e, t, n) {
      if (
        o(
          "adsTargetingRelaxationRolloutSelectors",
        ).containsAccountExclusionRuleSelector() ||
        o("AdsTargetingAsSignalUtils").isCampaignGroupRegulated(t)
      )
        return !1;
      var r = s.includes(n);
      if (c(e) && r) return !0;
      if (!f()) return !1;
      var a = d(n);
      return r || a;
    }
    function f() {
      return (r("gkx")("9187"), r("gkx")("16003"));
    }
    function g() {
      return r("gkx")("7980");
    }
    ((l.isOptimizationGoalEligibleForLALaaSMidFunnel = d),
      (l.isCampaignTargetingSignalLALaaS = m),
      (l.isCampaignLALaaS = p),
      (l.isCampaignLALaaSForTargetingSignalAction = _),
      (l.isMidFunnelLaLaaSGKEnabled = f),
      (l.isMidFunnelLaLaaSOptOutGKEnabled = g));
  },
  98,
);
