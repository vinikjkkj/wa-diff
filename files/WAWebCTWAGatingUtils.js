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
          "wa_ctwa_web_entrypoint_home_header_dropdown_enabled",
        )
      );
    }
    function p() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "kill_switch_ctwa_ml_entry_point_config",
        ) === !1
      );
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_entry_point_config_fetch_threshhold",
      );
    }
    function f() {
      return (
        p() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_long_term_holdout_content_enabled",
        )
      );
    }
    function g(e) {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        (e == null ? void 0 : e.hasCreatedAd) === !0 &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_entrypoint_manage_ads_home_header_dropdown_enabled",
        ) &&
        !o("WAWebBizNativeAdsGatingUtils").nativeAdsDogfoodEnabled()
      );
    }
    function h() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function y() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("ctwa_smb_data_sharing_consent")
      );
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_smb_data_sharing_opt_in_cool_off_period",
      );
    }
    function b() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_labels_ctwa_data_sharing")
      );
    }
    function v() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_important_label_sends_signals",
        )
      );
    }
    function S() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_suppress_message_with_external_ad_reply_consumer_db_level_enabled",
      );
    }
    function R() {
      return o("WAWebABProps").getABPropConfigValue(
        "per_customer_data_sharing_controls_eligible",
      );
    }
    function L() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_per_customer_data_sharing_controls_do_not_show_msg_until_chosen",
      );
    }
    function E() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_download_3pd_signals",
      );
    }
    function k() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_opt_out_counter_optimization_enabled",
      );
    }
    function I() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_title_change",
      );
    }
    function T() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_additional_logging",
      );
    }
    function D() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_cooldown_max_times_shown_for_opted_out",
      );
    }
    function x() {
      return o("WAWebABProps").getABPropConfigValue(
        "utm_tracking_expiration_hours",
      );
    }
    function $() {
      return o("WAWebABProps").getABPropConfigValue("utm_tracking_enabled");
    }
    function P() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 0;
    }
    function N() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 1;
    }
    function M() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 2;
    }
    function w() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 3;
    }
    function A() {
      return o("WAWebABProps").getABPropConfigValue("cci_compliance_ctwa");
    }
    function F() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_tos_filtering_enabled",
      );
    }
    function O() {
      return o("WAWebABProps").getABPropConfigValue(
        "cci_compliance_ctwa_learn_more_hyperlink",
      );
    }
    function B() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_ad_account_token_storage_kill_switch_web",
        ) === !1
      );
    }
    function W() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_nonce_push_wait_timeout_web",
      );
    }
    function q() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_nonce_retries_max_web",
      );
    }
    ((l.isCtwaAgmReportingEnabled = e),
      (l.isAdsAttributionEnabled = s),
      (l.isHideAdContextIfSoftDismissed = u),
      (l.shouldGenerateAGMMsgs = c),
      (l.shouldShowAdCreationIcon = d),
      (l.shouldShowAdCreationDropdown = m),
      (l.adEntryPointsConfigurationFetchEnabled = p),
      (l.adEntryPointsConfigurationFetchThreshold = _),
      (l.adEntryPointsConfigurationFetchM1Enabled = f),
      (l.shouldShowManageAdsDropdown = g),
      (l.shouldFetchLinkedAccounts = h),
      (l.smbDataSharingConsentEnabled = y),
      (l.smbDataSharingOptInCoolOffSeconds = C),
      (l.isSMBLabelsDataSharingEnabledForChats = b),
      (l.is3pdImportantLabelSignalsEnabled = v),
      (l.suppressMessageWithExternalAdReplyConsumerEnabled = S),
      (l.isPerCustomerDataSharingControlsEnabled = R),
      (l.shouldSuppressDataSharingSystemMessageUntilGlobalChoiceMade = L),
      (l.isDownload3PDSignalsEnabled = E),
      (l.isCTWA3pdOptOutCounterOptimizationEnabled = k),
      (l.isCTWA3pdDataSharingTitleChangeEnabled = I),
      (l.isCTWA3pdDataSharingAdditionalLoggingEnabled = T),
      (l.getCTWA3pdDataSharingMaxTimesShownForOptedOut = D),
      (l.utmTrackingExpirationInHours = x),
      (l.isUtmTrackingEnabled = $),
      (l.isUpdatedConsumerDisclosureUiRowEnabled = P),
      (l.isUpdatedConsumerDisclosureUiIndiaEnabled = N),
      (l.isUpdatedConsumerDisclosureUiBrazilEnabled = M),
      (l.isUpdatedConsumerDisclosureUiEuUkEnabled = w),
      (l.showCTWACCICompliantUI = A),
      (l.isCTWATosFilteringEnabled = F),
      (l.getCTWALearnMoreHyperLinkForCCICompliantUI = O),
      (l.adAccountTokenStoringEnabled = B),
      (l.adAccountTokenNoncePushWaitTimeoutSeconds = W),
      (l.adAccountTokenNonceMaxRetries = q));
  },
  98,
);
