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
    function d() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function m() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "kill_switch_ctwa_ml_entry_point_config",
        ) === !1
      );
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_entry_point_config_fetch_threshhold",
      );
    }
    function _() {
      return (
        m() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_long_term_holdout_content_enabled",
        )
      );
    }
    function f(e) {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        (e == null ? void 0 : e.hasCreatedAd) === !0 &&
        !o("WAWebBizNativeAdsGatingUtils").nativeAdsDogfoodEnabled()
      );
    }
    function g() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("ctwa_smb_data_sharing_consent")
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_smb_data_sharing_opt_in_cool_off_period",
      );
    }
    function y() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_labels_ctwa_data_sharing")
      );
    }
    function C() {
      return g();
    }
    function b() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_important_label_sends_signals",
        )
      );
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_suppress_message_with_external_ad_reply_consumer_db_level_enabled",
      );
    }
    function S() {
      return o("WAWebABProps").getABPropConfigValue(
        "per_customer_data_sharing_controls_eligible",
      );
    }
    function R() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_per_customer_data_sharing_controls_do_not_show_msg_until_chosen",
      );
    }
    function L() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_download_3pd_signals",
      );
    }
    function E() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_opt_out_counter_optimization_enabled",
      );
    }
    function k() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_title_change",
      );
    }
    function I() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_additional_logging",
      );
    }
    function T() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_cooldown_max_times_shown_for_opted_out",
      );
    }
    function D() {
      return o("WAWebABProps").getABPropConfigValue(
        "utm_tracking_expiration_hours",
      );
    }
    function x() {
      return o("WAWebABProps").getABPropConfigValue("utm_tracking_enabled");
    }
    function $() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 0;
    }
    function P() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 1;
    }
    function N() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 2;
    }
    function M() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 3;
    }
    function w() {
      return o("WAWebABProps").getABPropConfigValue("cci_compliance_ctwa");
    }
    function A() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_tos_filtering_enabled",
      );
    }
    function F() {
      return o("WAWebABProps").getABPropConfigValue(
        "cci_compliance_ctwa_learn_more_hyperlink",
      );
    }
    function O() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_ad_account_token_storage_kill_switch_web",
        ) === !1
      );
    }
    function B() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_nonce_push_wait_timeout_web",
      );
    }
    function W() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_nonce_retries_max_web",
      );
    }
    ((l.isCtwaAgmReportingEnabled = e),
      (l.isAdsAttributionEnabled = s),
      (l.isHideAdContextIfSoftDismissed = u),
      (l.shouldGenerateAGMMsgs = c),
      (l.shouldShowAdCreationIcon = d),
      (l.adEntryPointsConfigurationFetchEnabled = m),
      (l.adEntryPointsConfigurationFetchThreshold = p),
      (l.adEntryPointsConfigurationFetchM1Enabled = _),
      (l.shouldShowManageAdsDropdown = f),
      (l.smbDataSharingConsentEnabled = g),
      (l.smbDataSharingOptInCoolOffSeconds = h),
      (l.isSMBLabelsDataSharingEnabledForChats = y),
      (l.isDataSharingDisclosureOnListsHomeEnabled = C),
      (l.is3pdImportantLabelSignalsEnabled = b),
      (l.suppressMessageWithExternalAdReplyConsumerEnabled = v),
      (l.isPerCustomerDataSharingControlsEnabled = S),
      (l.shouldSuppressDataSharingSystemMessageUntilGlobalChoiceMade = R),
      (l.isDownload3PDSignalsEnabled = L),
      (l.isCTWA3pdOptOutCounterOptimizationEnabled = E),
      (l.isCTWA3pdDataSharingTitleChangeEnabled = k),
      (l.isCTWA3pdDataSharingAdditionalLoggingEnabled = I),
      (l.getCTWA3pdDataSharingMaxTimesShownForOptedOut = T),
      (l.utmTrackingExpirationInHours = D),
      (l.isUtmTrackingEnabled = x),
      (l.isUpdatedConsumerDisclosureUiRowEnabled = $),
      (l.isUpdatedConsumerDisclosureUiIndiaEnabled = P),
      (l.isUpdatedConsumerDisclosureUiBrazilEnabled = N),
      (l.isUpdatedConsumerDisclosureUiEuUkEnabled = M),
      (l.showCTWACCICompliantUI = w),
      (l.isCTWATosFilteringEnabled = A),
      (l.getCTWALearnMoreHyperLinkForCCICompliantUI = F),
      (l.adAccountTokenStoringEnabled = O),
      (l.adAccountTokenNoncePushWaitTimeoutSeconds = B),
      (l.adAccountTokenNonceMaxRetries = W));
  },
  98,
);
