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
        "ctwa_smb_data_sharing_opt_in_cool_off_period",
      );
    }
    function _() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_labels_ctwa_data_sharing")
      );
    }
    function f() {
      return m();
    }
    function g() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_important_label_sends_signals",
        )
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_suppress_message_with_external_ad_reply_consumer_db_level_enabled",
      );
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue(
        "per_customer_data_sharing_controls_eligible",
      );
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_per_customer_data_sharing_controls_do_not_show_msg_until_chosen",
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
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_additional_logging",
      );
    }
    function E() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_cooldown_max_times_shown_for_opted_out",
      );
    }
    function k() {
      return o("WAWebABProps").getABPropConfigValue(
        "utm_tracking_expiration_hours",
      );
    }
    function I() {
      return o("WAWebABProps").getABPropConfigValue("utm_tracking_enabled");
    }
    function T() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 0;
    }
    function D() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 1;
    }
    function x() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 2;
    }
    function $() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 3;
    }
    function P() {
      return o("WAWebABProps").getABPropConfigValue("cci_compliance_ctwa");
    }
    function N() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_tos_filtering_enabled",
      );
    }
    function M() {
      return o("WAWebABProps").getABPropConfigValue(
        "cci_compliance_ctwa_learn_more_hyperlink",
      );
    }
    function w() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_ad_account_token_storage_kill_switch_web",
        ) === !1
      );
    }
    function A() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_nonce_push_wait_timeout_web",
      );
    }
    function F() {
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
      (l.smbDataSharingOptInCoolOffSeconds = p),
      (l.isSMBLabelsDataSharingEnabledForChats = _),
      (l.isDataSharingDisclosureOnListsHomeEnabled = f),
      (l.is3pdImportantLabelSignalsEnabled = g),
      (l.suppressMessageWithExternalAdReplyConsumerEnabled = h),
      (l.isPerCustomerDataSharingControlsEnabled = y),
      (l.shouldSuppressDataSharingSystemMessageUntilGlobalChoiceMade = C),
      (l.isCtwaConversionCreationFromDelayEnabled = b),
      (l.isDownload3PDSignalsEnabled = v),
      (l.isCTWA3pdOptOutCounterOptimizationEnabled = S),
      (l.isCTWA3pdDataSharingTitleChangeEnabled = R),
      (l.isCTWA3pdDataSharingAdditionalLoggingEnabled = L),
      (l.getCTWA3pdDataSharingMaxTimesShownForOptedOut = E),
      (l.utmTrackingExpirationInHours = k),
      (l.isUtmTrackingEnabled = I),
      (l.isUpdatedConsumerDisclosureUiRowEnabled = T),
      (l.isUpdatedConsumerDisclosureUiIndiaEnabled = D),
      (l.isUpdatedConsumerDisclosureUiBrazilEnabled = x),
      (l.isUpdatedConsumerDisclosureUiEuUkEnabled = $),
      (l.showCTWACCICompliantUI = P),
      (l.isCTWATosFilteringEnabled = N),
      (l.getCTWALearnMoreHyperLinkForCCICompliantUI = M),
      (l.adAccountTokenStoringEnabled = w),
      (l.adAccountTokenNoncePushWaitTimeoutSeconds = A),
      (l.adAccountTokenNonceMaxRetries = F));
  },
  98,
);
