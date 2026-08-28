__d(
  "URIInitDataUtil",
  [
    "AdsAPIObjectives",
    "AdsCanvasConstants",
    "FBLogger",
    "getQueryParamFromURI",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("getQueryParamFromURI")("fbid");
    }
    function s() {
      return r("getQueryParamFromURI")("campaign");
    }
    function u() {
      return r("getQueryParamFromURI")("desturl");
    }
    function c() {
      return r("getQueryParamFromURI")("associated_fbid");
    }
    function d() {
      return r("getQueryParamFromURI")("destination");
    }
    function m() {
      var e = r("getQueryParamFromURI")("objective");
      return !e && r("getQueryParamFromURI")("storyid")
        ? r("AdsAPIObjectives").POST_ENGAGEMENT
        : e === "WEBSITE_CLICKS"
          ? r("AdsAPIObjectives").LINK_CLICKS
          : (e &&
              !r("AdsAPIObjectives")[e] &&
              r("FBLogger")("ads").warn(
                "Objective in URL is not a valid objective: %s",
                e,
              ),
            e);
    }
    function p() {
      return r("getQueryParamFromURI")("optimization_goal");
    }
    function _() {
      return r("getQueryParamFromURI")("buying_type");
    }
    function f() {
      return !!r("getQueryParamFromURI")("disable_client_side_validators");
    }
    function g() {
      return r("getQueryParamFromURI")("rf_prediction_id");
    }
    function h() {
      return r("getQueryParamFromURI")("showlog");
    }
    function y() {
      return r("getQueryParamFromURI")("showlogcategory");
    }
    function C() {
      return r("getQueryParamFromURI")("app_id");
    }
    function b() {
      return r("getQueryParamFromURI")("object_store_url");
    }
    function v() {
      return r("getQueryParamFromURI")("smart_promotion_type");
    }
    function S() {
      return r("getQueryParamFromURI")("environment");
    }
    function R() {
      return r("getQueryParamFromURI")("daily_budget");
    }
    function L() {
      return r("getQueryParamFromURI")("saved_audience");
    }
    function E() {
      var e = r("getQueryParamFromURI")("regulated_categories");
      if (e != null) return JSON.parse(e);
    }
    function k() {
      var e = r("getQueryParamFromURI")("targeting_spec");
      if (e != null) return JSON.parse(e);
    }
    function I() {
      var e = r("getQueryParamFromURI")("targeting_spec");
      if (e != null) {
        var t = JSON.parse(e);
        return t.custom_audiences;
      }
    }
    function T() {
      return r("getQueryParamFromURI")("catalog_id");
    }
    function D() {
      return r("getQueryParamFromURI")("product_set_id");
    }
    function x() {
      return r("getQueryParamFromURI")("redirect_context");
    }
    function $() {
      return r("getQueryParamFromURI")("act");
    }
    function P() {
      return r("getQueryParamFromURI")("business_id");
    }
    function N() {
      return r("getQueryParamFromURI")("inject_tip");
    }
    function M() {
      return r("getQueryParamFromURI")("catalog_id");
    }
    function w() {
      return r("getQueryParamFromURI")("app_referrer");
    }
    function A() {
      return r("getQueryParamFromURI")("redirect_context");
    }
    function F() {
      return r("getQueryParamFromURI")("show_tip_id");
    }
    function O() {
      var e = r("getQueryParamFromURI")("enable_stages");
      return e && e.split(",");
    }
    function B() {
      var e,
        t = r("getQueryParamFromURI")("selected_campaign_ids");
      return (e = t && t.split(",")) != null ? e : [];
    }
    function W() {
      var e,
        t = r("getQueryParamFromURI")("selected_adset_ids");
      return (e = t && t.split(",")) != null ? e : [];
    }
    function q() {
      var e,
        t = r("getQueryParamFromURI")("selected_ad_ids");
      return (e = t && t.split(",")) != null ? e : [];
    }
    function U() {
      return r("getQueryParamFromURI")("entry_point");
    }
    function V() {
      return r("getQueryParamFromURI")("nav_source");
    }
    function H() {
      return r("getQueryParamFromURI")("objective");
    }
    function G() {
      return r("getQueryParamFromURI")("object_story_id");
    }
    function z() {
      return r("getQueryParamFromURI")("ref");
    }
    function j() {
      var e = w(),
        t = M(),
        n = m();
      return (
        e === o("AdsCanvasConstants").APP_REFERRER.CATALOG_MANAGER &&
        t != null &&
        n === r("AdsAPIObjectives").LINK_CLICKS
      );
    }
    function K() {
      return r("getQueryParamFromURI")("use_insights") === "true";
    }
    function Q() {
      return r("getQueryParamFromURI")("show_ads_bi_2fac_dialog") === "true";
    }
    function X() {
      return r("getQueryParamFromURI")("redirected_from_xfac") === "true";
    }
    function Y() {
      return r("getQueryParamFromURI")("custom_event_type");
    }
    function J() {
      return r("getQueryParamFromURI")("recommendation_type");
    }
    function Z() {
      return (
        r("getQueryParamFromURI")("is_incremental_attribution_enabled") ===
        "true"
      );
    }
    function ee() {
      return r("getQueryParamFromURI")("cpas_merchant_business_id");
    }
    ((l.getDefaultDestinationID = e),
      (l.getDefaultCampaignGroupID = s),
      (l.getDefaultDestinationURL = u),
      (l.getDefaultAssociatedID = c),
      (l.getDefaultDestination = d),
      (l.getDefaultObjective = m),
      (l.getDefaultPrefillOptimizationGoal = p),
      (l.getDefaultBuyingType = _),
      (l.getDisableClientSideValidators = f),
      (l.getPredictionID = g),
      (l.getShowLog = h),
      (l.getShowLogCategory = y),
      (l.getApplicationID = C),
      (l.getObjectStoreURL = b),
      (l.getSmartPromotionType = v),
      (l.getEnvironment = S),
      (l.getDailyBudget = R),
      (l.getDefaultSavedAudience = L),
      (l.getDefaultRegulatedCategories = E),
      (l.getDefaultTargeting = k),
      (l.getDefaultCustomAudiences = I),
      (l.getDefaultCatalogID = T),
      (l.getDefaultProductSetID = D),
      (l.getDefaultReDirectContext = x),
      (l.getAccountID = $),
      (l.getBusinessID = P),
      (l.getDefaultInjectTip = N),
      (l.getCatalogID = M),
      (l.getAppReferrer = w),
      (l.getRedirectContext = A),
      (l.getShowTipID = F),
      (l.getDefaultEnableStages = O),
      (l.getSelectedCampaignGroupIDs = B),
      (l.getSelectedCampaignIDs = W),
      (l.getSelectedAdgroupIDs = q),
      (l.getEntryPoint = U),
      (l.getNavSource = V),
      (l.getObjective = H),
      (l.getObjectStoryId = G),
      (l.getRefFromURI = z),
      (l.isFromCatalogCollectionFlow = j),
      (l.shouldUseInsightsFromURI = K),
      (l.shouldShowAdsBITwoFacDialogOnStartup = Q),
      (l.isRedirectedFromXFAC = X),
      (l.getCustomEventType = Y),
      (l.getRecommendationType = J),
      (l.getIsIncrementalAttributionEnabled = Z),
      (l.getCPASMerchantBusinessID = ee));
  },
  98,
);
