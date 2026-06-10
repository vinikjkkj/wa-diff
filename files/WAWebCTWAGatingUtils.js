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
      return o("WAWebABProps").getABPropConfigValue(
        "wa_ctwa_log_user_journey_enabled",
      );
    }
    function s() {
      return r("justknobx")._("5593");
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue("wamo_agm_enabled");
    }
    function c() {
      return (
        o("WAWebMobilePlatforms").isSMB() ||
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_thread_ad_attribution_enabled",
        )
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_ctwa_web_hide_ad_context_if_soft_dismissed_in_primary",
      );
    }
    function m(e) {
      return e != null && (u() || e.sourceApp !== "whatsapp");
    }
    function p() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function _() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_entrypoint_home_header_dropdown_enabled",
        )
      );
    }
    function f() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "kill_switch_ctwa_ml_entry_point_config",
        ) === !1
      );
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_entry_point_config_fetch_threshhold",
      );
    }
    function h() {
      return (
        f() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_long_term_holdout_content_enabled",
        )
      );
    }
    function y() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_long_term_holdout_client_side_check",
        )
      );
    }
    function C(e) {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        (e == null ? void 0 : e.hasCreatedAd) === !0 &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_entrypoint_manage_ads_home_header_dropdown_enabled",
        ) &&
        !o("WAWebBizNativeAdsGatingUtils").nativeAdsDogfoodEnabled()
      );
    }
    function b() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_fetch_linked_accounts_enabled",
        )
      );
    }
    function v() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("ctwa_smb_data_sharing_consent")
      );
    }
    function S() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_smb_data_sharing_opt_in_cool_off_period",
      );
    }
    function R() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_labels_ctwa_data_sharing")
      );
    }
    function L() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_important_label_sends_signals",
        )
      );
    }
    function E() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_suppress_message_with_external_ad_reply_consumer_db_level_enabled",
      );
    }
    function k() {
      return o("WAWebABProps").getABPropConfigValue(
        "per_customer_data_sharing_controls_eligible",
      );
    }
    function I() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_per_customer_data_sharing_controls_do_not_show_msg_until_chosen",
      );
    }
    function T() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_download_3pd_signals",
      );
    }
    function D() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_opt_out_counter_optimization_enabled",
      );
    }
    function x() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_title_change",
      );
    }
    function $() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_additional_logging",
      );
    }
    function P() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_cooldown_max_times_shown_for_opted_out",
      );
    }
    function N() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_on_thread_entry",
      );
    }
    function M() {
      return o("WAWebABProps").getABPropConfigValue(
        "utm_tracking_expiration_hours",
      );
    }
    function w() {
      return o("WAWebABProps").getABPropConfigValue("utm_tracking_enabled");
    }
    function A() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 0;
    }
    function F() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 1;
    }
    function O() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 2;
    }
    function B() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 3;
    }
    function W() {
      return o("WAWebABProps").getABPropConfigValue("cci_compliance_ctwa");
    }
    function q() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_tos_filtering_enabled",
      );
    }
    function U() {
      return o("WAWebABProps").getABPropConfigValue(
        "cci_compliance_ctwa_learn_more_hyperlink",
      );
    }
    function V() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_ad_account_token_storage_kill_switch_web",
        ) === !1
      );
    }
    function H() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_nonce_push_wait_timeout_web",
      );
    }
    function G() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_nonce_retries_max_web",
      );
    }
    ((l.getCtwaLogUserJourneyEnabled = e),
      (l.isCtwaAgmReportingEnabled = s),
      (l.getWamoAgmEnabled = u),
      (l.isAdsAttributionEnabled = c),
      (l.isHideAdContextIfSoftDismissed = d),
      (l.shouldGenerateAGMMsgs = m),
      (l.shouldShowAdCreationIcon = p),
      (l.shouldShowAdCreationDropdown = _),
      (l.adEntryPointsConfigurationFetchEnabled = f),
      (l.adEntryPointsConfigurationFetchThreshold = g),
      (l.adEntryPointsConfigurationFetchM1Enabled = h),
      (l.isInLongTermHoldoutFallbackWhenAdEntryPointsConfigurationMissing = y),
      (l.shouldShowManageAdsDropdown = C),
      (l.shouldFetchLinkedAccounts = b),
      (l.smbDataSharingConsentEnabled = v),
      (l.smbDataSharingOptInCoolOffSeconds = S),
      (l.isSMBLabelsDataSharingEnabledForChats = R),
      (l.is3pdImportantLabelSignalsEnabled = L),
      (l.suppressMessageWithExternalAdReplyConsumerEnabled = E),
      (l.isPerCustomerDataSharingControlsEnabled = k),
      (l.shouldSuppressDataSharingSystemMessageUntilGlobalChoiceMade = I),
      (l.isDownload3PDSignalsEnabled = T),
      (l.isCTWA3pdOptOutCounterOptimizationEnabled = D),
      (l.isCTWA3pdDataSharingTitleChangeEnabled = x),
      (l.isCTWA3pdDataSharingAdditionalLoggingEnabled = $),
      (l.getCTWA3pdDataSharingMaxTimesShownForOptedOut = P),
      (l.showCTWA3pdDataSharingDisclosureOnThreadEntry = N),
      (l.utmTrackingExpirationInHours = M),
      (l.isUtmTrackingEnabled = w),
      (l.isUpdatedConsumerDisclosureUiRowEnabled = A),
      (l.isUpdatedConsumerDisclosureUiIndiaEnabled = F),
      (l.isUpdatedConsumerDisclosureUiBrazilEnabled = O),
      (l.isUpdatedConsumerDisclosureUiEuUkEnabled = B),
      (l.showCTWACCICompliantUI = W),
      (l.isCTWATosFilteringEnabled = q),
      (l.getCTWALearnMoreHyperLinkForCCICompliantUI = U),
      (l.adAccountTokenStoringEnabled = V),
      (l.adAccountTokenNoncePushWaitTimeoutSeconds = H),
      (l.adAccountTokenNonceMaxRetries = G));
  },
  98,
);
