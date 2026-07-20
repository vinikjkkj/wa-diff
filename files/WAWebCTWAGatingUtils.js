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
      return (
        m() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_3pd_data_sharing_disclosure_on_lists_home",
        )
      );
    }
    function h() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_important_label_sends_signals",
        )
      );
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue(
        "per_customer_data_sharing_controls_eligible",
      );
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_1pd_web_nbf_signals_enabled",
      );
    }
    function b() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_conversion_creation_from_delay_enabled",
        )
      );
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_download_3pd_signals",
      );
    }
    function S() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_opt_out_counter_optimization_enabled",
      );
    }
    function R() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_title_change",
      );
    }
    function L() {
      return o("WAWebABProps").getABPropConfigValue("utm_tracking_enabled");
    }
    function E() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 0;
    }
    function k() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 1;
    }
    function I() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 2;
    }
    function T() {
      return o("WAWebABProps").getABPropConfigValue("cci_compliance_ctwa");
    }
    function D() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_tos_filtering_enabled",
      );
    }
    function x() {
      return o("WAWebABProps").getABPropConfigValue(
        "cci_compliance_ctwa_learn_more_hyperlink",
      );
    }
    function $() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_ad_account_token_storage_kill_switch_web",
        ) === !1
      );
    }
    function P() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_nonce_push_wait_timeout_web",
      );
    }
    function N() {
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
      (l.isDataSharingDisclosureOnListsHomeEnabled = g),
      (l.is3pdImportantLabelSignalsEnabled = h),
      (l.isPerCustomerDataSharingControlsEnabled = y),
      (l.isCtwa1pdWebNbfSignalsEnabled = C),
      (l.isCtwaConversionCreationFromDelayEnabled = b),
      (l.isDownload3PDSignalsEnabled = v),
      (l.isCTWA3pdOptOutCounterOptimizationEnabled = S),
      (l.isCTWA3pdDataSharingTitleChangeEnabled = R),
      (l.isUtmTrackingEnabled = L),
      (l.isUpdatedConsumerDisclosureUiRowEnabled = E),
      (l.isUpdatedConsumerDisclosureUiIndiaEnabled = k),
      (l.isUpdatedConsumerDisclosureUiBrazilEnabled = I),
      (l.showCTWACCICompliantUI = T),
      (l.isCTWATosFilteringEnabled = D),
      (l.getCTWALearnMoreHyperLinkForCCICompliantUI = x),
      (l.adAccountTokenStoringEnabled = $),
      (l.adAccountTokenNoncePushWaitTimeoutSeconds = P),
      (l.adAccountTokenNonceMaxRetries = N));
  },
  98,
);
