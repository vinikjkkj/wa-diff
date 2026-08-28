__d(
  "AdsApplicationUtils",
  ["AdsApplicationIDs", "ApiClient", "URI", "WebApiApplication", "vulture"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      var e = o("WebApiApplication").getClientID();
      return e === r("AdsApplicationIDs").ADS_POWER_EDITOR;
    }
    function u() {
      return (
        o("WebApiApplication").getClientID() ===
        r("AdsApplicationIDs").ADS_EVENTS_MANAGER
      );
    }
    function c() {
      return s() && d();
    }
    function d() {
      var t = new (e || (e = r("URI")))(window.location.href),
        n = t.getPath();
      return n.includes("adsmanager/reporting") || n.includes("adsreporting");
    }
    function m() {
      var t = new (e || (e = r("URI")))(window.location.href),
        n = t.getPath();
      return n.includes("/adsmanager/marketing/messagecampaigns");
    }
    function p() {
      var e = o("WebApiApplication").getClientID();
      return e === r("AdsApplicationIDs").COMMERCE_MANAGER;
    }
    function _() {
      var e = o("WebApiApplication").getClientID();
      return e === r("AdsApplicationIDs").ADS_CAMPAIGN_MANAGER;
    }
    function f() {
      var e = o("WebApiApplication").getClientID();
      return e === r("AdsApplicationIDs").ADS_CREATIVE_STUDIO;
    }
    function g() {
      var e = o("WebApiApplication").getClientID();
      return e === "1520381111604620";
    }
    function h() {
      var e = o("WebApiApplication").getClientID();
      return e === r("AdsApplicationIDs").FBADDINS_EXCEL;
    }
    function y() {
      var e = r("ApiClient").getClientID();
      return e === r("AdsApplicationIDs").ADS_AD_BUILDER;
    }
    function C() {
      var e = o("WebApiApplication").getClientID();
      return e === r("AdsApplicationIDs").LIFT_STUDY_CREATION;
    }
    function b() {
      var e = r("ApiClient").getClientID();
      return e === r("AdsApplicationIDs").BUSINESS_ACCOUNTS;
    }
    function v() {
      r("vulture")("zNOTKXEaXm1u2cE78iAexS94mao=");
      var t = new (e || (e = r("URI")))(window.location.href),
        n = t.getPath();
      return n.includes("adsviewreport");
    }
    function S() {
      var t = new (e || (e = r("URI")))(window.location.href),
        n = t.getPath();
      return n.includes("/business/m/signalsgateway");
    }
    function R() {
      var t = new (e || (e = r("URI")))(window.location.href),
        n = t.getPath();
      return n.includes("/gateway_onboarding");
    }
    function L() {
      return (window.location.pathname + "/").includes("adsmanager");
    }
    function E() {
      return window.location.hostname.includes("instagram.com");
    }
    function k() {
      return window.location.pathname.includes("/adsmanager/manage/campaigns");
    }
    function I() {
      return window.location.pathname.includes("/adsmanager/manage/adsets");
    }
    function T() {
      return window.location.pathname.includes("/adsmanager/manage/ads");
    }
    function D() {
      return k() || I() || T();
    }
    function x() {
      var t = new (e || (e = r("URI")))(window.location.href),
        n = t.getPath();
      return n.includes("/adsmanager/manage/accounts");
    }
    ((l.isPowerEditor = s),
      (l.isEventsManager = u),
      (l.isAdsReporting = c),
      (l.isAdsReportingPath = d),
      (l.isMarketingMessageTab = m),
      (l.isCommerceManager = p),
      (l.isCampaignManager = _),
      (l.isCreativeStudio = f),
      (l.isDynamicInstantAds = g),
      (l.isFAME = h),
      (l.isAdBuilder = y),
      (l.isLiftStudyCreation = C),
      (l.isFBS = b),
      (l.isAdsReportViewingPath = v),
      (l.isSignalsGateway = S),
      (l.isCAPIGOrSGWFullPageOnboarding = R),
      (l.isOnAdsManager = L),
      (l.isOnInstagramWeb = E),
      (l.isOnAdsManagerCampaignGroups = k),
      (l.isOnAdsManagerCampaigns = I),
      (l.isOnAdsManagerAdgroups = T),
      (l.isOnAdsManagerManagePage = D),
      (l.isStartYourDayPath = x));
  },
  98,
);
