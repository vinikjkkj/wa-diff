__d(
  "adsBudgetFlexGKUtils",
  [
    "AMUsabilityHBTCatchAllUtils",
    "ARXUsabilityHoldoutUtils",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPIObjectives",
    "AdsBuyingTypes",
    "AdsCampaignLiveVideoAdsUtils",
    "AdsFrequencyControlGKUtils",
    "gkx",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("AdsAPICampaignGroupRecordUtils").isNewCampaignGroup(e),
        a = e.buying_type === r("AdsBuyingTypes").AUCTION,
        i = e.daily_budget == null && e.lifetime_budget == null,
        l = t.every(function (e) {
          var t = e.lifetime_budget;
          return Number(t) === 0 || t == null;
        });
      return (
        n &&
        a &&
        i &&
        l &&
        !o("AdsCampaignLiveVideoAdsUtils").getIsInstagramLiveVideoEnabled() &&
        !o("AdsCampaignLiveVideoAdsUtils").getIsLVAAdAccountL28d() &&
        b(e.objective)
      );
    }
    function s(e) {
      return e === !0
        ? r("gkx")("10592") && !r("gkx")("23739")
        : r("gkx")("8623") && !r("gkx")("9414");
    }
    function u(e) {
      if (e === r("AdsAPIObjectives").OUTCOME_AWARENESS) {
        var t,
          n = r("gkx")("23739"),
          o = (t = r("qex")._("2201")) != null ? t : !1;
        return o ? !1 : n;
      }
      return c(e);
    }
    function c(e) {
      return e === r("AdsAPIObjectives").OUTCOME_AWARENESS;
    }
    function d() {
      var e = r("gkx")("19431");
      if (e) return !0;
      var t = r("qex")._("4122");
      return t != null ? t : !1;
    }
    function m() {
      return r("gkx")("8474");
    }
    function p() {
      return !1;
    }
    function _(e) {
      return (
        e === r("AdsAPIObjectives").OUTCOME_SALES ||
        e === r("AdsAPIObjectives").APP_INSTALLS ||
        e === r("AdsAPIObjectives").OUTCOME_LEADS
      );
    }
    function f(e) {
      return e === r("AdsAPIObjectives").LINK_CLICKS;
    }
    function g(e) {
      return e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT;
    }
    function h() {
      var e;
      return (e = r("qex")._("4778")) != null ? e : !1;
    }
    function y() {
      var e;
      return (e = r("qex")._("4779")) != null ? e : !1;
    }
    function C() {
      var e,
        t = r("gkx")("17632"),
        n = (e = r("qex")._("4123")) != null ? e : !1;
      return t || n;
    }
    function b(e) {
      if (e == null) return !1;
      var t =
          e === r("AdsAPIObjectives").OUTCOME_AWARENESS && !r("gkx")("22504"),
        n = !1;
      if (t) {
        var a = !r("gkx")("23739"),
          i = r("qex")._("2201") === !0;
        n =
          (a || i) &&
          !o(
            "AdsFrequencyControlGKUtils",
          ).isAccountEligibleForTargetFrequencyAuctionDefaulting();
      }
      return !!(
        e === r("AdsAPIObjectives").LINK_CLICKS ||
        e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT ||
        n
      );
    }
    function v() {
      return r("gkx")("11086")
        ? !0
        : o(
              "ARXUsabilityHoldoutUtils",
            ).isAccountIn2026H1UsabilityHBTHoldout() &&
            !r("justknobx")._("4522")
          ? (S(),
            o(
              "AMUsabilityHBTCatchAllUtils",
            ).isAccountInUsabilityH1HBTCatchAllTest())
          : r("gkx")("8956");
    }
    function S() {
      r("gkx")("7597");
    }
    ((l.isEligibleForDefaultFlex = e),
      (l.isInFlexDU1Treatment = s),
      (l.isUsingUnsupportedBudgetFlexObjectiveForLegacyBudgetCard = u),
      (l.isUsingUnsupportedBudgetFlexObjective = c),
      (l.isEligibleForCampaignBudgetLearningPhaseGuidanceWithoutLogging = d),
      (l.isEligibleToSeeBudgetFlexGAM1Content = m),
      (l.isReachEstimateEnabledForBudgetFlex = p),
      (l.isAUFlexObjective = _),
      (l.isTrafficObjective = f),
      (l.isEngagementObjective = g),
      (l.isRelativeFlexEnabled = h),
      (l.isRelativeFlexEnabledWithExposureLogging = y),
      (l.isEligibleForAdsUXUpperFunnelHarmonyQEWithExposureLogging = C),
      (l.isObjectiveEligibleForGAL2FlexDefaulting = b),
      (l.isBrevityBudgetSharingEnabled = v));
  },
  98,
);
