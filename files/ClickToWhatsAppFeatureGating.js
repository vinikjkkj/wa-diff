__d(
  "ClickToWhatsAppFeatureGating",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsCampaignLiveVideoAdsUtils",
    "AdsPageUtils",
    "AdsUEditorAdgroupSuggestedPostsSectionUtils",
    "AdsWhatsAppUtils",
    "CTWAAdsOptimizationStoreUtils",
    "CTXAdvantageCatalogEligibilityUtils",
    "ClickToMessageAdDestinationUtils",
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
        ).getIsCTWALeadOptimizationGoalEligibleWithExistingSignals(e, !1)
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
            o("ClickToMessageAdDestinationUtils").isClickToMessageAdDestination(
              n,
            ));
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
          b(u, i),
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
            var f = S(l);
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
            !0,
          )),
        u.isEligible || r("gkx")("24995"));
      var g = u.isEligible && u.suggestedPostsAudienceType === "CTX_NEW_MODEL";
      return (
        (!u.isEligible || g) &&
          !c &&
          v(i, {
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
        b(u, i),
        u
      );
    }
    function C(e) {
      return (
        e !== "CTX_NEW_MODEL" &&
        e !== "CTX_AM_NEW_MODEL_2026" &&
        e !== "IGFA" &&
        e !== "CALL_ADS" &&
        e !== "WEBSITE_AND_CALLS"
      );
    }
    function b(e, t) {
      e.isEligible && C(e.suggestedPostsAudienceType) && t && r("gkx")("12183");
    }
    function v(e, t) {
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
    function S(e) {
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
    function R(e) {
      return (
        e === void 0 && (e = !0),
        e ? r("qex")._("806") === !0 : r("qex")._("828") === !0
      );
    }
    function L(e, t, n) {
      return (
        e === r("AdCampaignDestination").WHATSAPP &&
        (t === r("AdsAPIObjectives").LEAD_GENERATION ||
          t === r("AdsAPIObjectives").OUTCOME_LEADS) &&
        n !== r("AdsAPIOptimizationGoals").LEAD_GENERATION
      );
    }
    function E(e, t, n) {
      return (
        e === r("AdCampaignDestination").WHATSAPP &&
        (t === r("AdsAPIObjectives").LEAD_GENERATION ||
          t === r("AdsAPIObjectives").OUTCOME_LEADS ||
          t === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT) &&
        n === r("AdsAPIOptimizationGoals").LEAD_GENERATION
      );
    }
    function k(t) {
      return r("gkx")("15748") ? s : e;
    }
    function I() {
      return r("gkx")("11235");
    }
    function T(e, t) {
      return (e !== r("AdsAPIObjectives").OUTCOME_LEADS &&
        e !== r("AdsAPIObjectives").LEAD_GENERATION) ||
        t !== r("AdCampaignDestination").WHATSAPP
        ? !1
        : r("qex")._("366") === !0;
    }
    function D() {
      return r("gkx")("22397");
    }
    function x(e) {
      return (
        e === void 0 && (e = !1),
        D() ? (e ? r("qex")._("538") === !0 : r("qex")._("615") === !0) : !1
      );
    }
    function $(e) {
      return e !== null;
    }
    function P() {
      return !r("justknobx")._("5283");
    }
    function N() {
      return r("qex")._("4528") === !0;
    }
    function M() {
      return !1;
    }
    function w() {
      return r("justknobx")._("5550") ? r("gkx")("12991") : !1;
    }
    function A() {
      return r("justknobx")._("3612") ? r("gkx")("13131") : !1;
    }
    function F() {
      return r("gkx")("11299")
        ? !0
        : r("gkx")("11835") === !0
          ? r("qex")._("1620") === !0
          : !1;
    }
    function O() {
      return r("gkx")("11835") === !0;
    }
    function B(e, t) {
      return !(!r("justknobx")._("1582") || w());
    }
    function W() {
      return r("gkx")("17804");
    }
    function q(e, t) {
      if ((e === void 0 && (e = !1), t === void 0 && (t = !1), e)) return !1;
      var n = r("gkx")("21263");
      return n ? !0 : t ? r("qex")._("5215") === !0 : r("qex")._("5990") === !0;
    }
    function U(e) {
      if ((e === void 0 && (e = !1), e)) return !1;
      var t = r("gkx")("21263");
      return t ? !0 : r("qex")._("5216") === !0;
    }
    function V(e) {
      if ((e === void 0 && (e = !1), !e)) return !1;
      var t = r("gkx")("21263");
      return t ? !0 : r("qex")._("3112") === !0;
    }
    function H(e) {
      return !e || !D() ? !1 : r("qex")._("4760") === !0;
    }
    function G() {
      if (j()) return !0;
      var e = r("gkx")("25262");
      if (A()) return e;
      var t = r("gkx")("11835");
      if (t) {
        var n = r("qex")._("4882") === !0;
        return e || n;
      }
      if (e) return !0;
      if (!r("justknobx")._("3673")) return !1;
      var o = r("gkx")("26271") === !0;
      if (o || r("gkx")("10063") === !0) return !1;
      var a = r("gkx")("26269") === !0;
      return (
        r("CtxAdvertiserQeHbtExposureFalcoEvent").log(function () {
          var e;
          return {
            condition: a ? "test" : "control",
            feature_name: "ctx_post_publish_prompt_cbo",
            hbt_name: "ctx_2026h1_hbt_wave4_ad_account_id_budget_guidance",
            unit_id: (e = r("CurrentAdAccount").getID()) != null ? e : "",
            unit_type: "ad_account_id",
          };
        }),
        a
      );
    }
    function z() {
      if (j()) return !0;
      var e = r("gkx")("25587");
      return e;
    }
    function j() {
      return r("gkx")("14911");
    }
    function K(e) {
      if ((e === void 0 && (e = !1), e)) {
        if (r("gkx")("11102")) {
          if (!r("gkx")("28768")) return !1;
          var t = r("gkx")("663");
          return (r("gkx")("20497"), t);
        }
        return r("qex")._("1082") === !0;
      }
      return r("gkx")("8288")
        ? r("gkx")("28768")
          ? r("gkx")("1851")
          : !1
        : r("qex")._("1437") === !0;
    }
    function Q(e, t) {
      return (
        t === void 0 && (t = !1),
        o("ClickToMessageAdDestinationUtils").isClickToMessageAdDestination(
          e,
        ) && K(t)
      );
    }
    function X() {
      return r("justknobx")._("7206") ? r("gkx")("11835") : !1;
    }
    function Y() {
      return r("qex")._("4027") === !0;
    }
    function J() {
      return r("gkx")("24202");
    }
    ((l.isEligibleForCTXAdvantageCatalog = o(
      "CTXAdvantageCatalogEligibilityUtils",
    ).isEligibleForCTXAdvantageCatalog),
      (l.enableCTWAFlows = c),
      (l.enableAutomatedGreetingMessageForCTWA = d),
      (l.isCTWAAutogenCatalogTreatmentEnabled = m),
      (l.shouldHidePostPreviewForCTWA = p),
      (l.shouldDefaultToWAFlows = _),
      (l.getWabaIDForPageWANumber = g),
      (l.getWabaIDForBusinessWANumber = h),
      (l.shouldShowSuggestedPosts = y),
      (l.shouldShowSuggestedPostsExpansion = v),
      (l.shouldDefaultToCTXForSalesL2 = R),
      (l.isCTWAConversationsInLeads = L),
      (l.isCTWALeadOptimizationGoal = E),
      (l.getTestGroupForExistingPostDefaultingCTWA = k),
      (l.isInWAInInstantFormMessengerCTAAllowlist = I),
      (l.isCTWALeadExistingPostCTAFixEnabled = T),
      (l.isLegacyCTWAPETargetingEligible = D),
      (l.isEligibleForLeadsCTWACatalog = x),
      (l.enablePartnerAppConnectionForCTWAInFMXFlow = $),
      (l.shouldEnableCTXBudgetCreativeCombinedWarning = P),
      (l.shouldEnableCTXZOConsolidationTest = N),
      (l.shouldEnableCTXBudgetCreativeCombinedRHRWarning = M),
      (l.shouldShowCtxSabrDuGuidance = F),
      (l.shouldShowCtxZoDuGuidance = O),
      (l.shouldEnableCTXPostPublishZORecommendation = B),
      (l.enableCTWACategorizedFormInputs = W),
      (l.enableCTWAFlowsAutomatedResponse = q),
      (l.enableCTWAFlowsAutomatedResponseCTA = U),
      (l.disableCTWAHealthcareDefaulting = V),
      (l.enableCTWAProductExtensionsIGPlacement = H),
      (l.shouldEnableCTXCBOPostPublishZORecommendation = G),
      (l.isInCTXCBOPostPublishExperiment = z),
      (l.shouldEnableCTXExistingPostHeadlineCustomization = K),
      (l.shouldEnableCTXExistingPostTextCustomization = Q),
      (l.isInCTXEditFlowZOExperiment = X),
      (l.shouldEnableCTXEditFlowZORecommendation = Y),
      (l.isCTXEditFlowZODogfoodingEnabled = J));
  },
  98,
);
