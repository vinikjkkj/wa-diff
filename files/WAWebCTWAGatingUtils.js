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
      return (
        o("WAWebMobilePlatforms").isSMB() ||
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_thread_ad_attribution_enabled",
        )
      );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_ctwa_web_hide_ad_context_if_soft_dismissed_in_primary",
      );
    }
    function p(t) {
      var n = c(),
        r = e();
      return t != null && (n || (r && t.sourceApp !== "whatsapp"));
    }
    function _() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function f() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_entrypoint_home_header_dropdown_enabled",
        )
      );
    }
    function g() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "kill_switch_ctwa_ml_entry_point_config",
        ) === !1
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_entry_point_config_fetch_threshhold",
      );
    }
    function y() {
      return (
        g() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_long_term_holdout_content_enabled",
        )
      );
    }
    function C() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_long_term_holdout_client_side_check",
        )
      );
    }
    function b(e) {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        (e == null ? void 0 : e.hasCreatedAd) === !0 &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_entrypoint_manage_ads_home_header_dropdown_enabled",
        ) &&
        !o("WAWebBizNativeAdsGatingUtils").nativeAdsDogfoodEnabled()
      );
    }
    function v() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_fetch_linked_accounts_enabled",
        )
      );
    }
    function S() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("ctwa_smb_data_sharing_consent")
      );
    }
    function R() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_smb_data_sharing_opt_in_cool_off_period",
      );
    }
    function L() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_labels_ctwa_data_sharing")
      );
    }
    function E() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_important_label_sends_signals",
        )
      );
    }
    function k() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_suppress_message_with_external_ad_reply_consumer_db_level_enabled",
      );
    }
    function I() {
      return o("WAWebABProps").getABPropConfigValue(
        "per_customer_data_sharing_controls_eligible",
      );
    }
    function T() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_per_customer_data_sharing_controls_do_not_show_msg_until_chosen",
      );
    }
    function D() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_download_3pd_signals",
      );
    }
    function x() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_opt_out_counter_optimization_enabled",
      );
    }
    function $() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_title_change",
      );
    }
    function P() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_additional_logging",
      );
    }
    function N() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_cooldown_max_times_shown_for_opted_out",
      );
    }
    function M() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_on_thread_entry",
      );
    }
    function w() {
      return o("WAWebABProps").getABPropConfigValue(
        "utm_tracking_expiration_hours",
      );
    }
    function A() {
      return o("WAWebABProps").getABPropConfigValue("utm_tracking_enabled");
    }
    function F() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 0;
    }
    function O() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 1;
    }
    function B() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 2;
    }
    function W() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 3;
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
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_ad_account_token_storage_kill_switch_web",
        ) === !1
      );
    }
    function G() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_nonce_push_wait_timeout_web",
      );
    }
    function z() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_nonce_retries_max_web",
      );
    }
    ((l.getFmxAgmEnabled = e),
      (l.getCtwaLogUserJourneyEnabled = s),
      (l.isCtwaAgmReportingEnabled = u),
      (l.getWamoAgmEnabled = c),
      (l.isAdsAttributionEnabled = d),
      (l.isHideAdContextIfSoftDismissed = m),
      (l.shouldGenerateAGMMsgs = p),
      (l.shouldShowAdCreationIcon = _),
      (l.shouldShowAdCreationDropdown = f),
      (l.adEntryPointsConfigurationFetchEnabled = g),
      (l.adEntryPointsConfigurationFetchThreshold = h),
      (l.adEntryPointsConfigurationFetchM1Enabled = y),
      (l.isInLongTermHoldoutFallbackWhenAdEntryPointsConfigurationMissing = C),
      (l.shouldShowManageAdsDropdown = b),
      (l.shouldFetchLinkedAccounts = v),
      (l.smbDataSharingConsentEnabled = S),
      (l.smbDataSharingOptInCoolOffSeconds = R),
      (l.isSMBLabelsDataSharingEnabledForChats = L),
      (l.is3pdImportantLabelSignalsEnabled = E),
      (l.suppressMessageWithExternalAdReplyConsumerEnabled = k),
      (l.isPerCustomerDataSharingControlsEnabled = I),
      (l.shouldSuppressDataSharingSystemMessageUntilGlobalChoiceMade = T),
      (l.isDownload3PDSignalsEnabled = D),
      (l.isCTWA3pdOptOutCounterOptimizationEnabled = x),
      (l.isCTWA3pdDataSharingTitleChangeEnabled = $),
      (l.isCTWA3pdDataSharingAdditionalLoggingEnabled = P),
      (l.getCTWA3pdDataSharingMaxTimesShownForOptedOut = N),
      (l.showCTWA3pdDataSharingDisclosureOnThreadEntry = M),
      (l.utmTrackingExpirationInHours = w),
      (l.isUtmTrackingEnabled = A),
      (l.isUpdatedConsumerDisclosureUiRowEnabled = F),
      (l.isUpdatedConsumerDisclosureUiIndiaEnabled = O),
      (l.isUpdatedConsumerDisclosureUiBrazilEnabled = B),
      (l.isUpdatedConsumerDisclosureUiEuUkEnabled = W),
      (l.showCTWACCICompliantUI = q),
      (l.isCTWATosFilteringEnabled = U),
      (l.getCTWALearnMoreHyperLinkForCCICompliantUI = V),
      (l.adAccountTokenStoringEnabled = H),
      (l.adAccountTokenNoncePushWaitTimeoutSeconds = G),
      (l.adAccountTokenNonceMaxRetries = z));
  },
  98,
);
