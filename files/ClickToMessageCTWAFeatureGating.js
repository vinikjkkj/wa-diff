__d(
  "ClickToMessageCTWAFeatureGating",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsCallToActionTypes",
    "ClickToMessageAIGenEligibilityUtils",
    "ClickToMessageCTMAdoptionFeatureGating",
    "CtxAdvertiserQeHbtExposureFalcoEvent",
    "CurrentAdAccount",
    "ODS",
    "QE2Logger",
    "WebToXAdsUnifiedFalcoEvent",
    "XFBCASSegmentEnumUtils.facebook",
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
              "ClickToMessageAIGenEligibilityUtils",
            ).isAdCaptionEligibleForAIGen(n) &&
            r("qex")._("5098") === !0
      );
    }
    function _(t, n, a) {
      if (
        ((e || (e = o("ODS"))).bumpEntityKey(
          4090,
          "obc.www.all",
          "ctwa_ai_gen_prefill.should_enable_called",
        ),
        a === r("AdsAPIObjectives").LEAD_GENERATION ||
          a === r("AdsAPIObjectives").OUTCOME_LEADS ||
          a === r("AdsAPIObjectives").REACH)
      )
        return (
          (e || (e = o("ODS"))).bumpEntityKey(
            4090,
            "obc.www.all",
            "ctwa_ai_gen_prefill.excluded_by_leads",
          ),
          !1
        );
      if (
        t !== r("AdCampaignDestination").WHATSAPP ||
        !o("ClickToMessageAIGenEligibilityUtils").isAdCaptionEligibleForAIGen(n)
      )
        return !1;
      var i = r("gkx")("11835") === !0;
      if (i) return !0;
      var l = r("gkx")("6902") === !0;
      return (
        r("CtxAdvertiserQeHbtExposureFalcoEvent").log(function () {
          var e;
          return {
            condition: l ? "test" : "control",
            feature_name: "ctwa_genai_prefill",
            hbt_name: "bmxm_advertiser_liquidity_hbt_launch_gk",
            unit_id: (e = r("CurrentAdAccount").getID()) != null ? e : "",
            unit_type: "ad_account_id",
          };
        }),
        l
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
              "ClickToMessageAIGenEligibilityUtils",
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
              "ClickToMessageAIGenEligibilityUtils",
            ).isAdCaptionEligibleForAIGen(n)
      );
    }
    function h(e, t, n, o, a) {
      if (
        (o === void 0 && (o = !1),
        e !== r("AdCampaignDestination").INSTAGRAM_PROFILE)
      )
        return !1;
      if (!t)
        switch (n) {
          case r("AdsAPIObjectives").LINK_CLICKS: {
            var i = r("gkx")("9194"),
              l = r("gkx")("12254") === !0;
            return (
              a != null &&
                !l &&
                r("CtxAdvertiserQeHbtExposureFalcoEvent").log(function () {
                  return {
                    condition: i ? "test" : "control",
                    feature_name: "ptwa_linking_traffic_objective",
                    hbt_name: "h126_wave4_ptwa_hbt_h2_rerun",
                    unit_id: a,
                    unit_type: "ad_account_id",
                  };
                }),
              i
            );
          }
          default:
            return !1;
        }
      switch (n) {
        case r("AdsAPIObjectives").LINK_CLICKS:
        case r("AdsAPIObjectives").OUTCOME_ENGAGEMENT:
          return r("gkx")("913");
        default:
          return !1;
      }
    }
    function y(e, t) {
      if (!e) return !1;
      switch (t) {
        case r("AdsAPIObjectives").LINK_CLICKS:
          return r("qex")._("2656") === !0;
        default:
          return !1;
      }
    }
    function C(e, t, n, a, i, l, s, u) {
      if (
        n !== r("AdsAPIObjectives").LINK_CLICKS ||
        e !== r("AdCampaignDestination").INSTAGRAM_PROFILE ||
        !t
      )
        return !1;
      var c = r("gkx")("2114") === !0;
      if (
        !c &&
        (!s || o("XFBCASSegmentEnumUtils.facebook").toJSEnum(u) !== "Basic")
      )
        return !1;
      var d = r("gkx")("3111") === !0;
      if (d) return !0;
      var m = r("gkx")("18078") === !0;
      return (
        r("CtxAdvertiserQeHbtExposureFalcoEvent").log(function () {
          return {
            condition: m ? "test" : "control",
            feature_name: "ptwa_am_ml_defaulting",
            hbt_name: "h2_26_train_1_bundle_7_ad_acct_hbt",
            unit_id: i != null ? i : "",
            unit_type: "ad_account_id",
          };
        }),
        m &&
          r("WebToXAdsUnifiedFalcoEvent").log(function () {
            return {
              event: "ptwa_defaulted_am",
              ad_group_id: a,
              ad_account_id: i,
              ad_page_id: l != null ? l : "",
              objective: n,
              event_info: "ads_manager_ml_80_defaulted",
            };
          }),
        m
      );
    }
    function b(e) {
      return (
        e === void 0 && (e = !0),
        e === !0 ? r("qex")._("319") === !0 : r("qex")._("1444") === !0
      );
    }
    function v(e) {
      return (
        e === void 0 && (e = !0),
        e === !0 ? r("qex")._("3686") === !0 : r("qex")._("3693") === !0
      );
    }
    function S(e) {
      e === void 0 && (e = !0);
      var t = e === !0 ? r("qex")._("1708") === !0 : r("qex")._("2430") === !0,
        n = e === !0 ? r("gkx")("23659") : r("gkx")("23660");
      return t || n;
    }
    function R(e, t) {
      return E(e, t) || L(e, t);
    }
    function L(e, t) {
      var n =
        e === r("AdsAPIObjectives").OUTCOME_SALES ||
        e === r("AdsAPIObjectives").LINK_CLICKS;
      return (
        n &&
        o("ClickToMessageCTMAdoptionFeatureGating").isCTXOptimizationGoal(t)
      );
    }
    function E(e, t) {
      var n = e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT;
      return (
        n &&
        o("ClickToMessageCTMAdoptionFeatureGating").isCTXOptimizationGoal(t)
      );
    }
    var k = new Set(["retail", "ecommerce", "consumer packaged goods"]);
    function I(e) {
      return e != null && k.has(e.toLowerCase());
    }
    function T(e, t, n, o) {
      if (
        t !== r("AdCampaignDestination").WHATSAPP ||
        (n != null &&
          !r("AdsCallToActionTypes").TYPES.SHOP_NOW.objectives.includes(n)) ||
        o === r("AdsAPIOptimizationGoals").LEAD_GENERATION
      )
        return !1;
      var a = r("gkx")("17285") === !0;
      return !(!a && (e == null || !k.has(e.toLowerCase())));
    }
    function D(e, t, n, o) {
      return T(e, t, n, o) ? r("qex")._("4553") === !0 : !1;
    }
    function x(e) {
      o("QE2Logger").logExposureForAdAccountIDImmediately(
        "ctwa_assisted_shopping_shop_now_cta",
        e != null ? e : "",
      );
    }
    function $(e, t, n, o) {
      return e !== r("AdCampaignDestination").WHATSAPP || T(t, e, n, o)
        ? !1
        : r("qex")._("3259") === !0;
    }
    function P(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("qex")._("301") : r("qex")._("463")
      );
    }
    function N() {
      return r("gkx")("6577") === !0;
    }
    function M() {
      return r("gkx")("8306") === !0;
    }
    function w(e) {
      return (
        e === void 0 && (e = !1),
        e === !0 ? r("qex")._("2157") === !0 : r("qex")._("2159") === !0
      );
    }
    function A() {
      return r("qex")._("5233") === !0;
    }
    function F() {
      return r("gkx")("22497");
    }
    function O() {
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
      (l.shouldEnablePTWAonAM = h),
      (l.shouldEnablePTWABusinessWABAOnAM = y),
      (l.enablePTWADefaulting = C),
      (l.isPageCloudAPIPendingNumbersEnabled = b),
      (l.isImprovedCloudAPIDefaultingEnabled = v),
      (l.isCTWABanErrorEnabled = S),
      (l.isEligibleForCTXOptimizationGoal = R),
      (l.isEligibleForCTXOptimizationGoalTrafficAndSales = L),
      (l.isEligibleForCTXOptimizationGoalEngagement = E),
      (l.isAssistedShoppingVertical = I),
      (l.isEligibleForAssistedShoppingCTA = T),
      (l.shouldUseShopNowCTAForAssistedShopping = D),
      (l.logAssistedShoppingShopNowCTAExposure = x),
      (l.shouldDisableCTAForCTWAOverride = $),
      (l.getCrossBusinessPhoneNumbersQEValue = P),
      (l.isCTWA3pdSharingBizLinkedImprovementsEnabled = N),
      (l.isCTWAWabaAdsDataSharingToggleEnabled = M),
      (l.isAGMCTADefaultingEnabled = w),
      (l.isBSPContextInWANumberDropdownEnabled = A),
      (l.isCTWAAndromedaMigrationEnabled = F),
      (l.shouldShowWAUsernamesSMBNotice = O));
  },
  98,
);
