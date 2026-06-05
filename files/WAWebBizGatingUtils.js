__d(
  "WAWebBizGatingUtils",
  [
    "WAWebABProps",
    "WAWebBizNativeAdsGatingUtils",
    "WAWebMobilePlatforms",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue("wa_web_fmx_agm_enabled");
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_ctwa_log_user_journey_enabled",
      );
    }
    function u() {
      return r("justknobx")._("5593");
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue("wamo_agm_enabled");
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "utm_tracking_expiration_hours",
      );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue("utm_tracking_enabled");
    }
    function p() {
      return (
        o("WAWebMobilePlatforms").isSMB() ||
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_thread_ad_attribution_enabled",
        )
      );
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_ctwa_web_hide_ad_context_if_soft_dismissed_in_primary",
      );
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 0;
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 1;
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 2;
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 3;
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
        o("WAWebABProps").getABPropConfigValue(
          "kill_switch_ctwa_ml_entry_point_config",
        ) === !1
      );
    }
    function S() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_entry_point_config_fetch_threshhold",
      );
    }
    function R() {
      return (
        v() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_long_term_holdout_content_enabled",
        )
      );
    }
    function L() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_long_term_holdout_client_side_check",
        )
      );
    }
    function E(e) {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        (e == null ? void 0 : e.hasCreatedAd) === !0 &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_entrypoint_manage_ads_home_header_dropdown_enabled",
        ) &&
        !o("WAWebBizNativeAdsGatingUtils").nativeAdsDogfoodEnabled()
      );
    }
    function k() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_fetch_linked_accounts_enabled",
        )
      );
    }
    function I() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_ad_account_token_storage_kill_switch_web",
        ) === !1
      );
    }
    function T() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_nonce_push_wait_timeout_web",
      );
    }
    function D() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_nonce_retries_max_web",
      );
    }
    function x() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_labels_ctwa_data_sharing")
      );
    }
    function $() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_important_label_sends_signals",
        )
      );
    }
    function P() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_download_3pd_signals",
      );
    }
    function N(t) {
      var n = c(),
        r = e();
      return t != null && (n || (r && t.sourceApp !== "whatsapp"));
    }
    function M() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_opt_out_counter_optimization_enabled",
      );
    }
    function w() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_title_change",
      );
    }
    function A() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_additional_logging",
      );
    }
    function F() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_cooldown_max_times_shown_for_opted_out",
      );
    }
    function O() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_suppress_message_with_external_ad_reply_consumer_db_level_enabled",
      );
    }
    function B() {
      return o("WAWebABProps").getABPropConfigValue(
        "per_customer_data_sharing_controls_eligible",
      );
    }
    function W() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_per_customer_data_sharing_controls_do_not_show_msg_until_chosen",
      );
    }
    function q() {
      return o("WAWebABProps").getABPropConfigValue("cci_compliance_ctwa");
    }
    function U() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_tos_filtering_enabled",
      );
    }
    function V() {
      return o("WAWebABProps").getABPropConfigValue(
        "cci_compliance_ctwa_learn_more_hyperlink",
      );
    }
    function H() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_on_thread_entry",
      );
    }
    ((l.getFmxAgmEnabled = e),
      (l.getCtwaLogUserJourneyEnabled = s),
      (l.isCtwaAgmReportingEnabled = u),
      (l.getWamoAgmEnabled = c),
      (l.utmTrackingExpirationInHours = d),
      (l.isUtmTrackingEnabled = m),
      (l.isAdsAttributionEnabled = p),
      (l.isHideAdContextIfSoftDismissed = _),
      (l.isUpdatedConsumerDisclosureUiRowEnabled = f),
      (l.isUpdatedConsumerDisclosureUiIndiaEnabled = g),
      (l.isUpdatedConsumerDisclosureUiBrazilEnabled = h),
      (l.isUpdatedConsumerDisclosureUiEuUkEnabled = y),
      (l.smbDataSharingConsentEnabled = C),
      (l.smbDataSharingOptInCoolOffSeconds = b),
      (l.adEntryPointsConfigurationFetchEnabled = v),
      (l.adEntryPointsConfigurationFetchThreshold = S),
      (l.adEntryPointsConfigurationFetchM1Enabled = R),
      (l.isInLongTermHoldoutFallbackWhenAdEntryPointsConfigurationMissing = L),
      (l.shouldShowManageAdsDropdown = E),
      (l.shouldFetchLinkedAccounts = k),
      (l.adAccountTokenStoringEnabled = I),
      (l.adAccountTokenNoncePushWaitTimeoutSeconds = T),
      (l.adAccountTokenNonceMaxRetries = D),
      (l.isSMBLabelsDataSharingEnabledForChats = x),
      (l.is3pdImportantLabelSignalsEnabled = $),
      (l.isDownload3PDSignalsEnabled = P),
      (l.shouldGenerateAGMMsgs = N),
      (l.isCTWA3pdOptOutCounterOptimizationEnabled = M),
      (l.isCTWA3pdDataSharingTitleChangeEnabled = w),
      (l.isCTWA3pdDataSharingAdditionalLoggingEnabled = A),
      (l.getCTWA3pdDataSharingMaxTimesShownForOptedOut = F),
      (l.suppressMessageWithExternalAdReplyConsumerEnabled = O),
      (l.isPerCustomerDataSharingControlsEnabled = B),
      (l.shouldSuppressDataSharingSystemMessageUntilGlobalChoiceMade = W),
      (l.showCTWACCICompliantUI = q),
      (l.isCTWATosFilteringEnabled = U),
      (l.getCTWALearnMoreHyperLinkForCCICompliantUI = V),
      (l.showCTWA3pdDataSharingDisclosureOnThreadEntry = H));
  },
  98,
);
