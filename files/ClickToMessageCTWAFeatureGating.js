__d(
  "ClickToMessageCTWAFeatureGating",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsCallToActionTypes",
    "ClickToMessageAdCaptionEligibilityUtils",
    "ClickToMessageCTMAdoptionFeatureGating",
    "ODS",
    "QE2Logger",
    "gkx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return (
        e === void 0 && (e = !0),
        e === !0 ? r("qex")._("220") === !0 : r("qex")._("239") === !0
      );
    }
    function u(e, t) {
      return (
        t === void 0 && (t = !0),
        e
          ? t === !0
            ? r("qex")._("3997") === !0
            : r("qex")._("4002") === !0
          : !1
      );
    }
    function c(e) {
      return (
        e === void 0 && (e = !0),
        e === !0 ? r("qex")._("2166") === !0 : r("qex")._("2323") === !0
      );
    }
    function d() {
      return r("gkx")("447") === !0;
    }
    function m() {
      var e = r("qex")._("1967") === !0,
        t = r("qex")._("2379") === !0;
      return e || t;
    }
    function p(t, n, a) {
      return (
        (e || (e = o("ODS"))).bumpEntityKey(
          4090,
          "obc.www.all",
          "ctwa_ai_gen_icebreakers.should_enable_called",
        ),
        a === r("AdsAPIObjectives").LEAD_GENERATION ||
        a === r("AdsAPIObjectives").OUTCOME_LEADS ||
        a === r("AdsAPIObjectives").REACH
          ? ((e || (e = o("ODS"))).bumpEntityKey(
              4090,
              "obc.www.all",
              "ctwa_ai_gen_icebreakers.excluded_by_leads",
            ),
            !1)
          : t === r("AdCampaignDestination").WHATSAPP &&
            o(
              "ClickToMessageAdCaptionEligibilityUtils",
            ).isAdCaptionEligibleForAIGen(n) &&
            r("qex")._("5098") === !0
      );
    }
    function _(t, n, a) {
      return (
        (e || (e = o("ODS"))).bumpEntityKey(
          4090,
          "obc.www.all",
          "ctwa_ai_gen_prefill.should_enable_called",
        ),
        a === r("AdsAPIObjectives").LEAD_GENERATION ||
        a === r("AdsAPIObjectives").OUTCOME_LEADS ||
        a === r("AdsAPIObjectives").REACH
          ? ((e || (e = o("ODS"))).bumpEntityKey(
              4090,
              "obc.www.all",
              "ctwa_ai_gen_prefill.excluded_by_leads",
            ),
            !1)
          : t !== r("AdCampaignDestination").WHATSAPP ||
              !o(
                "ClickToMessageAdCaptionEligibilityUtils",
              ).isAdCaptionEligibleForAIGen(n)
            ? !1
            : r("gkx")("8897") !== !0
      );
    }
    function f(t, n, a) {
      return (
        (e || (e = o("ODS"))).bumpEntityKey(
          4090,
          "obc.www.all",
          "ctwa_ai_gen_prefill_population.is_in_population_called",
        ),
        a === r("AdsAPIObjectives").LEAD_GENERATION ||
        a === r("AdsAPIObjectives").OUTCOME_LEADS ||
        a === r("AdsAPIObjectives").REACH
          ? ((e || (e = o("ODS"))).bumpEntityKey(
              4090,
              "obc.www.all",
              "ctwa_ai_gen_prefill_population.excluded_by_leads",
            ),
            !1)
          : t === r("AdCampaignDestination").WHATSAPP &&
            o(
              "ClickToMessageAdCaptionEligibilityUtils",
            ).isAdCaptionEligibleForAIGen(n)
      );
    }
    function g(t, n, a) {
      return (
        (e || (e = o("ODS"))).bumpEntityKey(
          4090,
          "obc.www.all",
          "ctwa_ai_gen_icebreakers_population.is_in_population_called",
        ),
        a === r("AdsAPIObjectives").LEAD_GENERATION ||
        a === r("AdsAPIObjectives").OUTCOME_LEADS ||
        a === r("AdsAPIObjectives").REACH
          ? ((e || (e = o("ODS"))).bumpEntityKey(
              4090,
              "obc.www.all",
              "ctwa_ai_gen_icebreakers_population.excluded_by_leads",
            ),
            !1)
          : t === r("AdCampaignDestination").WHATSAPP &&
            o(
              "ClickToMessageAdCaptionEligibilityUtils",
            ).isAdCaptionEligibleForAIGen(n)
      );
    }
    function h(e) {
      return (
        e === void 0 && (e = !0),
        e === !0 ? r("qex")._("319") === !0 : r("qex")._("1444") === !0
      );
    }
    function y() {
      return r("qex")._("3686") === !0;
    }
    function C(e) {
      e === void 0 && (e = !0);
      var t = e === !0 ? r("qex")._("1708") === !0 : r("qex")._("2430") === !0,
        n = e === !0 ? r("gkx")("23659") : r("gkx")("23660");
      return t || n;
    }
    function b(e, t) {
      return S(e, t) || v(e, t);
    }
    function v(e, t) {
      var n =
        e === r("AdsAPIObjectives").OUTCOME_SALES ||
        e === r("AdsAPIObjectives").LINK_CLICKS;
      return (
        n &&
        o("ClickToMessageCTMAdoptionFeatureGating").isCTXOptimizationGoal(t)
      );
    }
    function S(e, t) {
      var n = e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT;
      return (
        n &&
        o("ClickToMessageCTMAdoptionFeatureGating").isCTXOptimizationGoal(t)
      );
    }
    var R = new Set(["retail", "ecommerce", "consumer packaged goods"]);
    function L(e) {
      return e != null && R.has(e.toLowerCase());
    }
    function E(e, t, n, o) {
      if (
        t !== r("AdCampaignDestination").WHATSAPP ||
        (n != null &&
          !r("AdsCallToActionTypes").TYPES.SHOP_NOW.objectives.includes(n)) ||
        o === r("AdsAPIOptimizationGoals").LEAD_GENERATION
      )
        return !1;
      var a = r("gkx")("17285") === !0;
      return !(!a && (e == null || !R.has(e.toLowerCase())));
    }
    function k(e, t, n, o) {
      return E(e, t, n, o) ? r("qex")._("4553") === !0 : !1;
    }
    function I(e) {
      o("QE2Logger").logExposureForAdAccountIDImmediately(
        "ctwa_assisted_shopping_shop_now_cta",
        e != null ? e : "",
      );
    }
    function T(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("qex")._("5902") : r("qex")._("5903")
      );
    }
    function D() {
      return r("gkx")("8306") === !0;
    }
    function x(e) {
      return (
        e === void 0 && (e = !1),
        e === !0 ? r("qex")._("2157") === !0 : r("qex")._("2159") === !0
      );
    }
    function $() {
      return r("qex")._("5233") === !0;
    }
    function P() {
      return r("gkx")("22497");
    }
    function N() {
      return r("gkx")("23834") === !0;
    }
    ((l.isWAPendingNumbersLabelingEnabled = s),
      (l.isCTWAForIGLoginEnabled = u),
      (l.shouldUpdateDefaultCTWAFlowsWelcomeMessageAndCTA = c),
      (l.shouldUseNullDefaultCTWAFlowId = d),
      (l.isInCTWAFlowsDefaultingExperiments = m),
      (l.shouldEnableCTWAAIGenIcebreakers = p),
      (l.shouldEnableCTWAAIGenPrefill = _),
      (l.isInCTWAAIGenPrefillPopulation = f),
      (l.isInCTWAAIGenIcebreakersPopulation = g),
      (l.isPageCloudAPIPendingNumbersEnabled = h),
      (l.isImprovedCloudAPIDefaultingEnabled = y),
      (l.isCTWABanErrorEnabled = C),
      (l.isEligibleForCTXOptimizationGoal = b),
      (l.isEligibleForCTXOptimizationGoalTrafficAndSales = v),
      (l.isEligibleForCTXOptimizationGoalEngagement = S),
      (l.isAssistedShoppingVertical = L),
      (l.isEligibleForAssistedShoppingCTA = E),
      (l.shouldUseShopNowCTAForAssistedShopping = k),
      (l.logAssistedShoppingShopNowCTAExposure = I),
      (l.getCrossBusinessPhoneNumbersQEValue = T),
      (l.isCTWAWabaAdsDataSharingToggleEnabled = D),
      (l.isAGMCTADefaultingEnabled = x),
      (l.isBSPContextInWANumberDropdownEnabled = $),
      (l.isCTWAAndromedaMigrationEnabled = P),
      (l.shouldShowWAUsernamesSMBNotice = N));
  },
  98,
);
