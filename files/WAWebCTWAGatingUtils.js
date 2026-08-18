__d(
  "WAWebCTWAGatingUtils",
  [
    "WAWebABProps",
    "WAWebBizNativeAdsGatingUtils",
    "WAWebMobilePlatforms",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return r("justknobx")._("5593");
    }
    function s() {
      return (
        o("WAWebMobilePlatforms").isSMB() ||
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_thread_ad_attribution_enabled",
        )
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_ctwa_web_hide_ad_context_if_soft_dismissed_in_primary",
      );
    }
    function c(e) {
      return e != null && e.sourceApp !== "whatsapp";
    }
    function d(e) {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        (e == null ? void 0 : e.hasCreatedAd) === !0 &&
        !o("WAWebBizNativeAdsGatingUtils").nativeAdsDogfoodEnabled()
      );
    }
    function m() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("ctwa_smb_data_sharing_consent")
      );
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_aggregated_conversion_enabled",
      );
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_on_thread_entry",
      );
    }
    function f() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_labels_ctwa_data_sharing")
      );
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_conversion_on_ae_detection",
      );
    }
    function h() {
      return (
        m() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_3pd_data_sharing_disclosure_on_lists_home",
        )
      );
    }
    function y() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "per_customer_data_sharing_controls_eligible",
      );
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_1pd_web_nbf_signals_enabled",
      );
    }
    function v() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_conversion_creation_from_delay_enabled",
        )
      );
    }
    function S() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_download_3pd_signals",
      );
    }
    function R() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_opt_out_counter_optimization_enabled",
      );
    }
    function L() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_title_change",
      );
    }
    function E() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_post_dc_depth_limit",
      );
    }
    function k() {
      return o("WAWebABProps").getABPropConfigValue("utm_tracking_enabled");
    }
    function I() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 0;
    }
    function T() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 1;
    }
    function D() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 2;
    }
    function x() {
      return o("WAWebABProps").getABPropConfigValue("cci_compliance_ctwa");
    }
    function $() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_tos_filtering_enabled",
      );
    }
    function P() {
      return o("WAWebABProps").getABPropConfigValue(
        "cci_compliance_ctwa_learn_more_hyperlink",
      );
    }
    function N() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_ad_account_token_storage_kill_switch_web",
        ) === !1
      );
    }
    function M() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_nonce_push_wait_timeout_web",
      );
    }
    function w() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_nonce_retries_max_web",
      );
    }
    ((l.isCtwaAgmReportingEnabled = e),
      (l.isAdsAttributionEnabled = s),
      (l.isHideAdContextIfSoftDismissed = u),
      (l.shouldGenerateAGMMsgs = c),
      (l.shouldShowManageAdsDropdown = d),
      (l.smbDataSharingConsentEnabled = m),
      (l.isCtwa3pdAggregatedConversionEnabled = p),
      (l.isCtwa3pdDataSharingOnThreadEntryEnabled = _),
      (l.isSMBLabelsDataSharingEnabledForChats = f),
      (l.isCtwa3pdConversionOnAeDetectionEnabled = g),
      (l.isDataSharingDisclosureOnListsHomeEnabled = h),
      (l.is3pdImportantLabelSignalsEnabled = y),
      (l.isPerCustomerDataSharingControlsEnabled = C),
      (l.isCtwa1pdWebNbfSignalsEnabled = b),
      (l.isCtwaConversionCreationFromDelayEnabled = v),
      (l.isDownload3PDSignalsEnabled = S),
      (l.isCTWA3pdOptOutCounterOptimizationEnabled = R),
      (l.isCTWA3pdDataSharingTitleChangeEnabled = L),
      (l.get3pdPostDcDepthLimit = E),
      (l.isUtmTrackingEnabled = k),
      (l.isUpdatedConsumerDisclosureUiRowEnabled = I),
      (l.isUpdatedConsumerDisclosureUiIndiaEnabled = T),
      (l.isUpdatedConsumerDisclosureUiBrazilEnabled = D),
      (l.showCTWACCICompliantUI = x),
      (l.isCTWATosFilteringEnabled = $),
      (l.getCTWALearnMoreHyperLinkForCCICompliantUI = P),
      (l.adAccountTokenStoringEnabled = N),
      (l.adAccountTokenNoncePushWaitTimeoutSeconds = M),
      (l.adAccountTokenNonceMaxRetries = w));
  },
  98,
);
