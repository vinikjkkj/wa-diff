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
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_smb_data_sharing_opt_in_cool_off_period",
      );
    }
    function g() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_labels_ctwa_data_sharing")
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
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_important_label_sends_signals",
        )
      );
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_suppress_message_with_external_ad_reply_consumer_db_level_enabled",
      );
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "per_customer_data_sharing_controls_eligible",
      );
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_per_customer_data_sharing_controls_do_not_show_msg_until_chosen",
      );
    }
    function S() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_conversion_creation_from_delay_enabled",
        )
      );
    }
    function R() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_download_3pd_signals",
      );
    }
    function L() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_opt_out_counter_optimization_enabled",
      );
    }
    function E() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_title_change",
      );
    }
    function k() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_additional_logging",
      );
    }
    function I() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_cooldown_max_times_shown_for_opted_out",
      );
    }
    function T() {
      return o("WAWebABProps").getABPropConfigValue(
        "utm_tracking_expiration_hours",
      );
    }
    function D() {
      return o("WAWebABProps").getABPropConfigValue("utm_tracking_enabled");
    }
    function x() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 0;
    }
    function $() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 1;
    }
    function P() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 2;
    }
    function N() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 3;
    }
    function M() {
      return o("WAWebABProps").getABPropConfigValue("cci_compliance_ctwa");
    }
    function w() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_tos_filtering_enabled",
      );
    }
    function A() {
      return o("WAWebABProps").getABPropConfigValue(
        "cci_compliance_ctwa_learn_more_hyperlink",
      );
    }
    function F() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_ad_account_token_storage_kill_switch_web",
        ) === !1
      );
    }
    function O() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_nonce_push_wait_timeout_web",
      );
    }
    function B() {
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
      (l.smbDataSharingOptInCoolOffSeconds = f),
      (l.isSMBLabelsDataSharingEnabledForChats = g),
      (l.isDataSharingDisclosureOnListsHomeEnabled = h),
      (l.is3pdImportantLabelSignalsEnabled = y),
      (l.suppressMessageWithExternalAdReplyConsumerEnabled = C),
      (l.isPerCustomerDataSharingControlsEnabled = b),
      (l.shouldSuppressDataSharingSystemMessageUntilGlobalChoiceMade = v),
      (l.isCtwaConversionCreationFromDelayEnabled = S),
      (l.isDownload3PDSignalsEnabled = R),
      (l.isCTWA3pdOptOutCounterOptimizationEnabled = L),
      (l.isCTWA3pdDataSharingTitleChangeEnabled = E),
      (l.isCTWA3pdDataSharingAdditionalLoggingEnabled = k),
      (l.getCTWA3pdDataSharingMaxTimesShownForOptedOut = I),
      (l.utmTrackingExpirationInHours = T),
      (l.isUtmTrackingEnabled = D),
      (l.isUpdatedConsumerDisclosureUiRowEnabled = x),
      (l.isUpdatedConsumerDisclosureUiIndiaEnabled = $),
      (l.isUpdatedConsumerDisclosureUiBrazilEnabled = P),
      (l.isUpdatedConsumerDisclosureUiEuUkEnabled = N),
      (l.showCTWACCICompliantUI = M),
      (l.isCTWATosFilteringEnabled = w),
      (l.getCTWALearnMoreHyperLinkForCCICompliantUI = A),
      (l.adAccountTokenStoringEnabled = F),
      (l.adAccountTokenNoncePushWaitTimeoutSeconds = O),
      (l.adAccountTokenNonceMaxRetries = B));
  },
  98,
);
