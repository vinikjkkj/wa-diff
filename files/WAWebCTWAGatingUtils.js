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
    function g() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_long_term_holdout_client_side_check",
        )
      );
    }
    function h(e) {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        (e == null ? void 0 : e.hasCreatedAd) === !0 &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_entrypoint_manage_ads_home_header_dropdown_enabled",
        ) &&
        !o("WAWebBizNativeAdsGatingUtils").nativeAdsDogfoodEnabled()
      );
    }
    function y() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function C() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("ctwa_smb_data_sharing_consent")
      );
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_smb_data_sharing_opt_in_cool_off_period",
      );
    }
    function v() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_labels_ctwa_data_sharing")
      );
    }
    function S() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_important_label_sends_signals",
        )
      );
    }
    function R() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_suppress_message_with_external_ad_reply_consumer_db_level_enabled",
      );
    }
    function L() {
      return o("WAWebABProps").getABPropConfigValue(
        "per_customer_data_sharing_controls_eligible",
      );
    }
    function E() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_per_customer_data_sharing_controls_do_not_show_msg_until_chosen",
      );
    }
    function k() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_download_3pd_signals",
      );
    }
    function I() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_opt_out_counter_optimization_enabled",
      );
    }
    function T() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_title_change",
      );
    }
    function D() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_additional_logging",
      );
    }
    function x() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_cooldown_max_times_shown_for_opted_out",
      );
    }
    function $() {
      return o("WAWebABProps").getABPropConfigValue(
        "utm_tracking_expiration_hours",
      );
    }
    function P() {
      return o("WAWebABProps").getABPropConfigValue("utm_tracking_enabled");
    }
    function N() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 0;
    }
    function M() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 1;
    }
    function w() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 2;
    }
    function A() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 3;
    }
    function F() {
      return o("WAWebABProps").getABPropConfigValue("cci_compliance_ctwa");
    }
    function O() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_tos_filtering_enabled",
      );
    }
    function B() {
      return o("WAWebABProps").getABPropConfigValue(
        "cci_compliance_ctwa_learn_more_hyperlink",
      );
    }
    function W() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_ad_account_token_storage_kill_switch_web",
        ) === !1
      );
    }
    function q() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_nonce_push_wait_timeout_web",
      );
    }
    function U() {
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
      (l.isInLongTermHoldoutFallbackWhenAdEntryPointsConfigurationMissing = g),
      (l.shouldShowManageAdsDropdown = h),
      (l.shouldFetchLinkedAccounts = y),
      (l.smbDataSharingConsentEnabled = C),
      (l.smbDataSharingOptInCoolOffSeconds = b),
      (l.isSMBLabelsDataSharingEnabledForChats = v),
      (l.is3pdImportantLabelSignalsEnabled = S),
      (l.suppressMessageWithExternalAdReplyConsumerEnabled = R),
      (l.isPerCustomerDataSharingControlsEnabled = L),
      (l.shouldSuppressDataSharingSystemMessageUntilGlobalChoiceMade = E),
      (l.isDownload3PDSignalsEnabled = k),
      (l.isCTWA3pdOptOutCounterOptimizationEnabled = I),
      (l.isCTWA3pdDataSharingTitleChangeEnabled = T),
      (l.isCTWA3pdDataSharingAdditionalLoggingEnabled = D),
      (l.getCTWA3pdDataSharingMaxTimesShownForOptedOut = x),
      (l.utmTrackingExpirationInHours = $),
      (l.isUtmTrackingEnabled = P),
      (l.isUpdatedConsumerDisclosureUiRowEnabled = N),
      (l.isUpdatedConsumerDisclosureUiIndiaEnabled = M),
      (l.isUpdatedConsumerDisclosureUiBrazilEnabled = w),
      (l.isUpdatedConsumerDisclosureUiEuUkEnabled = A),
      (l.showCTWACCICompliantUI = F),
      (l.isCTWATosFilteringEnabled = O),
      (l.getCTWALearnMoreHyperLinkForCCICompliantUI = B),
      (l.adAccountTokenStoringEnabled = W),
      (l.adAccountTokenNoncePushWaitTimeoutSeconds = q),
      (l.adAccountTokenNonceMaxRetries = U));
  },
  98,
);
