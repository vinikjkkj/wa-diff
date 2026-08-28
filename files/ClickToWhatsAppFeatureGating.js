__d(
  "ClickToWhatsAppFeatureGating",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsCampaignLiveVideoAdsUtils",
    "AdsPageUtils",
    "AdsUEditorAdgroupSuggestedPostsSectionUtils",
    "AdsUEditorMessagingDestinationUtils",
    "AdsWhatsAppUtils",
    "CTWAAdsOptimizationStoreUtils",
    "CtxAdvertiserQeHbtExposureFalcoEvent",
    "CurrentAdAccount",
    "IGFAFeatureGating",
    "LWIFeatureGating",
    "SuggestedPostsExperimentEligibilityResult",
    "gkx",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "none",
      s = "new_advertisers";
    function u(e, t) {
      var n = t == null ? void 0 : t.whatsapp_numbers_info;
      if (e != null && n != null && n.length > 0) {
        var r = n.find(function (t) {
          return t.page_whatsapp_number_id === e;
        });
        return (
          (r == null ? void 0 : r.is_business_number) &&
          (r == null ? void 0 : r.whatsapp_smb_device) === "SMBA"
        );
      }
      return (
        o("AdsPageUtils").hasWhatsAppBusinessNumber(t) &&
        (t == null ? void 0 : t.whatsapp_smb_device) === "SMBA"
      );
    }
    function c(e, t, n, o, a, i, l) {
      if (e !== r("AdCampaignDestination").WHATSAPP) return !1;
      var s = t;
      return (
        s == null && (i != null ? (s = l) : (s = g(a, o))),
        !(s == null || n === !1)
      );
    }
    function d(e) {
      return e === r("AdCampaignDestination").WHATSAPP;
    }
    function m(e, t) {
      return (
        t === void 0 && (t = !1),
        e !== r("AdCampaignDestination").WHATSAPP
          ? !1
          : t
            ? r("qex")._("2663") === !0
            : r("qex")._("2645") === !0
      );
    }
    function p(e) {
      return e !== r("AdCampaignDestination").WHATSAPP
        ? !1
        : r("gkx")("10391") === !0;
    }
    function _(e, t, n, o, a, i, l, s, u, d, m) {
      if ((u === void 0 && (u = !1), n !== r("AdCampaignDestination").WHATSAPP))
        return !1;
      var p = c(n, d, m, e, t, a, i);
      return p === !1
        ? !1
        : o === r("AdsAPIObjectives").OUTCOME_LEADS ||
            (t == null ? void 0 : t.page_first_vertical) === "Services"
          ? !0
          : f(s, l, u);
    }
    function f(e, t, n) {
      return t !== r("AdsAPIOptimizationGoals").LEAD_GENERATION ||
        !o(
          "CTWAAdsOptimizationStoreUtils",
        ).getIsCTWALeadOptimizationGoalEligible(e, !1)
        ? !1
        : n
          ? r("qex")._("2098") === !0
          : r("qex")._("3938") === !0;
    }
    function g(e, t) {
      if (e == null) return null;
      var n = null,
        r = e.whatsapp_numbers_info;
      if (t != null) {
        if (r == null || r.length <= 0) return null;
        var o = r.find(function (e) {
          return e.page_whatsapp_number_id === t;
        });
        n = o == null ? void 0 : o.waba_id;
      } else r != null && r.length <= 1 && (n = e.page_whatsapp_number_waba_id);
      return n === "0" || n === "" || n === " " ? null : n;
    }
    function h(e, t) {
      var n;
      if (e == null || e.isLoading() || t == null) return null;
      var r =
        (n = e.getValue()) == null
          ? void 0
          : n.find(function (e) {
              return e.whatsAppNumberID === t;
            });
      return r == null ? null : r.whatsAppBusinessAccountID;
    }
    function y(e, t, n, a, i, l) {
      var s,
        u = new (r("SuggestedPostsExperimentEligibilityResult"))(
          "CTX_NEW_MODEL",
          !1,
        ),
        c =
          (n === r("AdCampaignDestination").WHATSAPP &&
            o("AdsWhatsAppUtils").hasSMBNumberConnected(t)) ||
          (n !== r("AdCampaignDestination").WHATSAPP &&
            o(
              "AdsUEditorMessagingDestinationUtils",
            ).isClickToMessageAdDestination(n));
      if (e == null || t == null || n == null) return u;
      if (!u.isEligible && r("gkx")("19316")) {
        var d;
        return (
          o(
            "AdsCampaignLiveVideoAdsUtils",
          ).getIsInLiveVideoAdSuggestedPostExperiment()
            ? ((u.isEligible = !0),
              (u.suggestedPostsAudienceType = "CTX_AM_NEW_MODEL_2026"))
            : (u.isEligible = !1),
          o(
            "AdsUEditorAdgroupSuggestedPostsSectionUtils",
          ).suggestedPostsLogEvent(
            (d = e == null ? void 0 : e.account_id) != null ? d : "",
            o("AdsUEditorAdgroupSuggestedPostsSectionUtils")
              .SuggestedPostsEventNames.LVA,
            o("AdsUEditorAdgroupSuggestedPostsSectionUtils")
              .SuggestedPostsEventSources.CTX_LVA_OVERLAP,
            n,
            l != null ? l : r("AdsAPIOptimizationGoals").NONE,
            null,
            a,
          ),
          C(u, i),
          u
        );
      }
      if (!u.isEligible && c)
        if (r("gkx")("11835") === !0) u.isEligible = !0;
        else {
          var m = r("gkx")("5340") === !0;
          ((u.isEligible = m),
            r("CtxAdvertiserQeHbtExposureFalcoEvent").log(function () {
              var t;
              return {
                condition: m ? "test" : "control",
                feature_name: "ctx_suggested_post_expansion_2026h1",
                hbt_name: "bx_2026h1_hbt_wave2_ad_account_id_ctx_new_demand",
                unit_id:
                  (t = e == null ? void 0 : e.account_id) != null ? t : "",
                unit_type: "ad_account_id",
              };
            }));
        }
      if (
        !u.isEligible &&
        n !== r("AdCampaignDestination").PHONE_CALL &&
        n !== r("AdCampaignDestination").WEBSITE_AND_PHONE_CALL
      )
        if (c) {
          var p;
          o(
            "AdsUEditorAdgroupSuggestedPostsSectionUtils",
          ).suggestedPostsLogEvent(
            (p = e == null ? void 0 : e.account_id) != null ? p : "",
            o("AdsUEditorAdgroupSuggestedPostsSectionUtils")
              .SuggestedPostsEventNames.DEFAULT,
            o("AdsUEditorAdgroupSuggestedPostsSectionUtils")
              .SuggestedPostsEventSources.CTX_IGFA_OVERLAP,
            n,
            l != null ? l : r("AdsAPIOptimizationGoals").NONE,
            null,
            a,
          );
        } else {
          var _ = o("IGFAFeatureGating").isEligibleForIgfaSuggestedPosts(n, l);
          if (_.isEligible) u = _;
          else if (r("gkx")("11518")) {
            var f = v(l);
            f != null && (u = f);
          } else u = o("LWIFeatureGating").isEligibleForLWISuggestedPosts(i);
        }
      (!u.isEligible &&
        n === r("AdCampaignDestination").PHONE_CALL &&
        (u = new (r("SuggestedPostsExperimentEligibilityResult"))(
          "CALL_ADS",
          !0,
        )),
        !u.isEligible &&
          n === r("AdCampaignDestination").WEBSITE_AND_PHONE_CALL &&
          (u = new (r("SuggestedPostsExperimentEligibilityResult"))(
            "WEBSITE_AND_CALLS",
            i ? r("gkx")("17546") === !0 : r("gkx")("17547") === !0,
          )),
        u.isEligible || r("gkx")("24995"));
      var g = u.isEligible && u.suggestedPostsAudienceType === "CTX_NEW_MODEL";
      return (
        (!u.isEligible || g) &&
          !c &&
          b(i, {
            accountID: (s = e == null ? void 0 : e.account_id) != null ? s : "",
            destinationType: n,
            isEligible: u.isEligible,
            objective: a,
            optimizationGoal: l != null ? l : r("AdsAPIOptimizationGoals").NONE,
          }) &&
          (u = new (r("SuggestedPostsExperimentEligibilityResult"))(
            "CTX_AM_NEW_MODEL_2026",
            !0,
          )),
        C(u, i),
        u
      );
    }
    function C(e, t) {
      e.isEligible &&
        e.suggestedPostsAudienceType !== "IGFA" &&
        t &&
        r("gkx")("12183");
    }
    function b(e, t) {
      if (r("gkx")("22370") === !0) return !1;
      var n = e ? r("qex")._("557") === !0 : r("qex")._("1719") === !0;
      if (e && t != null) {
        var a = r("gkx")("11835") === !0;
        a &&
          o(
            "AdsUEditorAdgroupSuggestedPostsSectionUtils",
          ).suggestedPostsLogEvent(
            t.accountID,
            o("AdsUEditorAdgroupSuggestedPostsSectionUtils")
              .SuggestedPostsEventNames.DEFAULT,
            t.isEligible
              ? o("AdsUEditorAdgroupSuggestedPostsSectionUtils")
                  .SuggestedPostsEventSources.EXPANSION_ENTRY_OLDER_MODEL
              : o("AdsUEditorAdgroupSuggestedPostsSectionUtils")
                  .SuggestedPostsEventSources.EXPANSION_ENTRY_NOT_ELIGIBLE,
            t.destinationType,
            t.optimizationGoal,
            n ? "test" : "control",
            t.objective,
          );
      }
      return n;
    }
    function v(e) {
      switch (e) {
        case r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS:
          return new (r("SuggestedPostsExperimentEligibilityResult"))(
            "CTX_NEW_MODEL",
            !0,
            !0,
          );
        case r("AdsAPIOptimizationGoals").POST_ENGAGEMENT:
          return new (r("SuggestedPostsExperimentEligibilityResult"))(
            "CTWA",
            !0,
            !0,
          );
        case r("AdsAPIOptimizationGoals").THRUPLAY:
          return new (r("SuggestedPostsExperimentEligibilityResult"))(
            r("qex")._("3592") === !0 ? "CTX_NEW_MODEL" : "CTWA",
            !0,
            !0,
          );
        case r("AdsAPIOptimizationGoals").REACH:
          return new (r("SuggestedPostsExperimentEligibilityResult"))(
            r("qex")._("3593") === !0 ? "CTX_NEW_MODEL" : "CTWA",
            !0,
            !0,
          );
      }
      return null;
    }
    function S(e) {
      return (
        e === void 0 && (e = !0),
        e ? r("qex")._("806") === !0 : r("qex")._("828") === !0
      );
    }
    function R(e, t, n) {
      return (
        e === r("AdCampaignDestination").WHATSAPP &&
        (t === r("AdsAPIObjectives").LEAD_GENERATION ||
          t === r("AdsAPIObjectives").OUTCOME_LEADS) &&
        n !== r("AdsAPIOptimizationGoals").LEAD_GENERATION
      );
    }
    function L(e, t, n) {
      return (
        e === r("AdCampaignDestination").WHATSAPP &&
        (t === r("AdsAPIObjectives").LEAD_GENERATION ||
          t === r("AdsAPIObjectives").OUTCOME_LEADS ||
          t === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT) &&
        n === r("AdsAPIOptimizationGoals").LEAD_GENERATION
      );
    }
    function E(t) {
      return r("gkx")("15748") ? s : e;
    }
    function k() {
      return r("gkx")("11235");
    }
    function I(e, t) {
      return (e !== r("AdsAPIObjectives").OUTCOME_LEADS &&
        e !== r("AdsAPIObjectives").LEAD_GENERATION) ||
        t !== r("AdCampaignDestination").WHATSAPP
        ? !1
        : r("qex")._("366") === !0;
    }
    function T() {
      return r("gkx")("22397");
    }
    function D(e) {
      return (
        e === void 0 && (e = !1),
        T() ? (e ? r("qex")._("538") === !0 : r("qex")._("615") === !0) : !1
      );
    }
    function x(e) {
      return e !== null;
    }
    function $() {
      return !r("justknobx")._("5283");
    }
    function P(e) {
      return e ? r("qex")._("4528") === !0 : r("qex")._("4532") === !0;
    }
    function N(e) {
      return !1;
    }
    function M() {
      return r("justknobx")._("5550") ? r("gkx")("12991") : !1;
    }
    function w() {
      return r("justknobx")._("3612") ? r("gkx")("13131") : !1;
    }
    function A() {
      var e = M();
      if (e) return !1;
      var t = r("gkx")("22328") === !0,
        n = r("gkx")("22956");
      return t && !n ? !0 : r("gkx")("22329") === !0;
    }
    function F(e, t) {
      var n = r("gkx")("11835");
      n ||
        r("CtxAdvertiserQeHbtExposureFalcoEvent").log(function () {
          var n;
          return {
            condition: e ? "test" : "control",
            feature_name: t,
            hbt_name: "ctx_budget_hbt_wave_1_2026",
            unit_id: (n = r("CurrentAdAccount").getID()) != null ? n : "",
            unit_type: "ad_account_id",
          };
        });
    }
    function O() {
      return r("gkx")("11835") === !0 ? r("qex")._("1620") === !0 : !1;
    }
    function B() {
      return r("gkx")("11835") === !0;
    }
    function W(e, t) {
      return !(!r("justknobx")._("1582") || M());
    }
    function q(e, t) {
      return e !== r("AdCampaignDestination").WHATSAPP &&
        e !== r("AdCampaignDestination").MESSENGER
        ? !1
        : t
          ? r("qex")._("1819") === !0
          : r("qex")._("3470") === !0;
    }
    function U() {
      return r("gkx")("17804");
    }
    function V(e) {
      if ((e === void 0 && (e = !1), e)) return !1;
      var t = r("gkx")("21263");
      return t ? !0 : r("qex")._("5215") === !0;
    }
    function H(e) {
      if ((e === void 0 && (e = !1), e)) return !1;
      var t = r("gkx")("21263");
      return t ? !0 : r("qex")._("5216") === !0;
    }
    function G(e) {
      if ((e === void 0 && (e = !1), !e)) return !1;
      var t = r("gkx")("21263");
      return t ? !0 : r("qex")._("3112") === !0;
    }
    function z() {
      var e = r("gkx")("26271") === !0;
      if (!e) return !1;
      var t = r("gkx")("21263");
      return t ? !0 : r("qex")._("3168") === !0;
    }
    function j(e) {
      return !e || !T() ? !1 : r("qex")._("4760") === !0;
    }
    function K() {
      if (X()) return !0;
      if (w()) return !1;
      var e = r("gkx")("11835");
      if (e) return r("qex")._("4882") === !0;
      if (!r("justknobx")._("3673")) return !1;
      var t = r("gkx")("26271") === !0;
      if (t || r("gkx")("10063") === !0) return !1;
      var n = r("gkx")("26269") === !0;
      return (
        r("CtxAdvertiserQeHbtExposureFalcoEvent").log(function () {
          var e;
          return {
            condition: n ? "test" : "control",
            feature_name: "ctx_post_publish_prompt_cbo",
            hbt_name: "ctx_2026h1_hbt_wave4_ad_account_id_budget_guidance",
            unit_id: (e = r("CurrentAdAccount").getID()) != null ? e : "",
            unit_type: "ad_account_id",
          };
        }),
        n
      );
    }
    function Q() {
      if (X()) return !0;
      var e = r("gkx")("11835");
      if (e) return !0;
      var t = r("gkx")("26271") === !0;
      return !(t || r("gkx")("10063") === !0);
    }
    function X() {
      return r("gkx")("14911");
    }
    function Y(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("qex")._("1082") === !0 : r("qex")._("1437") === !0
      );
    }
    function J(e, t) {
      return (
        t === void 0 && (t = !1),
        o("AdsUEditorMessagingDestinationUtils").isClickToMessageAdDestination(
          e,
        ) && Y(t)
      );
    }
    function Z() {
      return r("gkx")("11835");
    }
    function ee() {
      return r("qex")._("4027") === !0;
    }
    function te() {
      return r("gkx")("24202");
    }
    ((l.CTWA_EXISTING_POST_NEW_ADVERTISER_TEST_GROUP = s),
      (l.enableCTWAFlows = c),
      (l.enableAutomatedGreetingMessageForCTWA = d),
      (l.isCTWAAutogenCatalogTreatmentEnabled = m),
      (l.shouldHidePostPreviewForCTWA = p),
      (l.shouldDefaultToWAFlows = _),
      (l.getWabaIDForPageWANumber = g),
      (l.getWabaIDForBusinessWANumber = h),
      (l.shouldShowSuggestedPosts = y),
      (l.shouldShowSuggestedPostsExpansion = b),
      (l.shouldDefaultToCTXForSalesL2 = S),
      (l.isCTWAConversationsInLeads = R),
      (l.isCTWALeadOptimizationGoal = L),
      (l.getTestGroupForExistingPostDefaultingCTWA = E),
      (l.isInWAInInstantFormMessengerCTAAllowlist = k),
      (l.isCTWALeadExistingPostCTAFixEnabled = I),
      (l.isLegacyCTWAPETargetingEligible = T),
      (l.isEligibleForLeadsCTWACatalog = D),
      (l.enablePartnerAppConnectionForCTWAInFMXFlow = x),
      (l.shouldEnableCTXBudgetCreativeCombinedWarning = $),
      (l.shouldEnableCTXZOConsolidationTest = P),
      (l.shouldEnableCTXBudgetCreativeCombinedRHRWarning = N),
      (l.genPassesCtxSegmentCheckGK = M),
      (l.genPassesMidCasSegmentCheckGK = w),
      (l.genPassesCtxBudgetHbt26Wave1Gk = A),
      (l.logToCtxBudgetHBT = F),
      (l.shouldShowCtxSabrDuGuidance = O),
      (l.shouldShowCtxZoDuGuidance = B),
      (l.shouldEnableCTXPostPublishZORecommendation = W),
      (l.isEligibleForCTXAdvantageCatalog = q),
      (l.enableCTWACategorizedFormInputs = U),
      (l.enableCTWAFlowsAutomatedResponse = V),
      (l.enableCTWAFlowsAutomatedResponseCTA = H),
      (l.disableCTWAHealthcareDefaulting = G),
      (l.disableCTWAHighSpendDefaulting = z),
      (l.enableCTWAProductExtensionsIGPlacement = j),
      (l.shouldEnableCTXCBOPostPublishZORecommendation = K),
      (l.isInCTXCBOPostPublishExperiment = Q),
      (l.isCTXCBOPostPublishDogfoodingEnabled = X),
      (l.shouldEnableCTXExistingPostHeadlineCustomization = Y),
      (l.shouldEnableCTXExistingPostTextCustomization = J),
      (l.isInCTXEditFlowZOExperiment = Z),
      (l.shouldEnableCTXEditFlowZORecommendation = ee),
      (l.isCTXEditFlowZODogfoodingEnabled = te));
  },
  98,
);
