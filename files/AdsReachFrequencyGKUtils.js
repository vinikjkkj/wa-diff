__d(
  "AdsReachFrequencyGKUtils",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsReachImpressionPEHBTUtils",
    "gkx",
    "igAccessAdsManagerUtils",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("3035");
    }
    function s() {
      return r("gkx")("10947");
    }
    function u(e, t, n) {
      return (
        e === o("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
        t === r("AdCampaignDestination").ON_POST &&
        n === r("AdsAPIOptimizationGoals").IMPRESSIONS &&
        E()
      );
    }
    function c(e, t, n) {
      return (
        e === o("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
        t === r("AdCampaignDestination").ON_POST &&
        n === r("AdsAPIOptimizationGoals").REACH &&
        E()
      );
    }
    function d() {
      return !o("igAccessAdsManagerUtils").isIGAccessParityEnabled();
    }
    function m(e) {
      return (e === void 0 && (e = !1), !1);
    }
    function p() {
      return r("gkx")("16329");
    }
    function _() {
      return r("gkx")("1790");
    }
    function f(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("gkx")("2289") : r("gkx")("16938")
      );
    }
    function g(e) {
      return (
        e === void 0 && (e = !1),
        r("gkx")("23491")
          ? e
            ? r("qex")._("2396") === !0
            : r("qex")._("2397") === !0
          : !1
      );
    }
    function h() {
      return r("gkx")("11889");
    }
    function y() {
      return r("gkx")("15433");
    }
    function C() {
      return r("gkx")("18098");
    }
    function b() {
      return r("gkx")("18108");
    }
    function v() {
      return r("gkx")("18109");
    }
    function S() {
      return r("gkx")("21640");
    }
    function R() {
      return r("gkx")("17534");
    }
    function L() {
      return r("gkx")("17549");
    }
    function E() {
      var e = o("AdsReachImpressionPEHBTUtils").getReachImpressionPEHBTResult();
      return e != null ? e : r("gkx")("21410");
    }
    function k() {
      return r("gkx")("2655");
    }
    function I() {
      var e;
      return (e = r("qex")._("5135")) != null ? e : !1;
    }
    function T() {
      return r("gkx")("23831");
    }
    function D() {
      return r("gkx")("11740");
    }
    ((l.isAccountEligibleForAuctionBundledDeprecations = e),
      (l.isAccountEligibleFor6sVVReservation = s),
      (l.isAccountEligibleForImpressionsDeprecationOnPost = u),
      (l.isAccountEligibleForReachDeprecationOnPost = c),
      (l.isAccountEligibleForProfileAndPageEngagement = d),
      (l.isAccountEligibleForPostEngagementEnhancements2025 = m),
      (l.isAccountEligibleForIncreasedCampaignReachLimit = p),
      (l.isBusinessEligibleForIncreasedCampaignReachLimit = _),
      (l.isAccountEligibleForPostInteractionOptimization = f),
      (l.isAccountEligibleForPostInteractionV3 = g),
      (l.isAccountEligibleForRTATentpoleTargetEditing = h),
      (l.isAccountEligibleForRTATentpoleScheduleChange = y),
      (l.isAccountEligibleForRTADMATargeting = C),
      (l.isAccountEligibleForRTAAgeBreakdown = b),
      (l.isAccountEligibleForRTAOSTargeting = v),
      (l.isRTATentpoleNewUIEnabled = S),
      (l.isAccountEligibleForRTAHomeParentingTopics = R),
      (l.isAccountEligibleForRTASpanishTopic = L),
      (l.isReachImpressionDisabledUnderPostEngagement = E),
      (l.isPostEngagementDefaultCTAUpdateEnabled = k),
      (l.isAccountEligibleForPageLikesDeprecation = I),
      (l.isAccountEligibleForExtendedTentpoleDates = T),
      (l.isAccountEligibleForRTACustomAudienceExclusion = D));
  },
  98,
);
