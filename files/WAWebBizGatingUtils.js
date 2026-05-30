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
      return o("WAWebMobilePlatforms").isSMB();
    }
    function S() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function R() {
      return (
        v() &&
        o("WAWebABProps").getABPropConfigValue(
          "in_app_comms_manage_ads_web_banner_campaign_enabled",
        )
      );
    }
    function L() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_entrypoint_home_header_enabled",
        )
      );
    }
    function E() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_entrypoint_home_header_dropdown_enabled",
        )
      );
    }
    function k() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "kill_switch_ctwa_ml_entry_point_config",
        ) === !1
      );
    }
    function I() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_entry_point_config_fetch_threshhold",
      );
    }
    function T() {
      return (
        k() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_long_term_holdout_content_enabled",
        )
      );
    }
    function D() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_long_term_holdout_client_side_check",
        )
      );
    }
    function x(e) {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        (e == null ? void 0 : e.hasCreatedAd) === !0 &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_entrypoint_manage_ads_home_header_dropdown_enabled",
        ) &&
        !o("WAWebBizNativeAdsGatingUtils").nativeAdsDogfoodEnabled()
      );
    }
    function $() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_fetch_linked_accounts_enabled",
        )
      );
    }
    function P() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_ad_account_token_storage_kill_switch_web",
        ) === !1
      );
    }
    function N() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_nonce_push_wait_timeout_web",
      );
    }
    function M() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_nonce_retries_max_web",
      );
    }
    function w() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_labels_ctwa_data_sharing")
      );
    }
    function A() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_smb_data_sharing_settings_killswitch",
        ) === !1
      );
    }
    function F() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_enable_biz_data_sharing_after_nux_dismiss",
      );
    }
    function O() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_important_label_sends_signals",
        )
      );
    }
    function B() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_download_3pd_signals",
      );
    }
    function W(t) {
      var n = c(),
        r = e();
      return t != null && (n || (r && t.sourceApp !== "whatsapp"));
    }
    function q() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_opt_out_counter_optimization_enabled",
      );
    }
    function U() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_title_change",
      );
    }
    function V() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_additional_logging",
      );
    }
    function H() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_cooldown_max_times_shown_for_opted_out",
      );
    }
    function G() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_suppress_message_with_external_ad_reply_consumer_db_level_enabled",
      );
    }
    function z() {
      return o("WAWebABProps").getABPropConfigValue(
        "per_customer_data_sharing_controls_eligible",
      );
    }
    function j() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_per_customer_data_sharing_controls_do_not_show_msg_until_chosen",
      );
    }
    function K() {
      return o("WAWebABProps").getABPropConfigValue("cci_compliance_ctwa");
    }
    function Q() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_tos_filtering_enabled",
      );
    }
    function X() {
      return o("WAWebABProps").getABPropConfigValue(
        "cci_compliance_ctwa_learn_more_hyperlink",
      );
    }
    function Y() {
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
      (l.adsActionBannersEnabled = v),
      (l.adsActionBannersLoggingEnabled = S),
      (l.adsActionBannersEnabledOnStartup = o("WAWebMobilePlatforms").isSMB),
      (l.adsActionManageAdsBannerEnabled = R),
      (l.shouldShowAdCreationIcon = L),
      (l.shouldShowAdCreationDropdown = E),
      (l.adEntryPointsConfigurationFetchEnabled = k),
      (l.adEntryPointsConfigurationFetchThreshold = I),
      (l.adEntryPointsConfigurationFetchM1Enabled = T),
      (l.isInLongTermHoldoutFallbackWhenAdEntryPointsConfigurationMissing = D),
      (l.shouldShowManageAdsDropdown = x),
      (l.shouldFetchLinkedAccounts = $),
      (l.adAccountTokenStoringEnabled = P),
      (l.adAccountTokenNoncePushWaitTimeoutSeconds = N),
      (l.adAccountTokenNonceMaxRetries = M),
      (l.isSMBLabelsDataSharingEnabledForChats = w),
      (l.shouldShowSMBDataSharingSettings = A),
      (l.showDataSharingInSettingsAfterNuxDismiss = F),
      (l.is3pdImportantLabelSignalsEnabled = O),
      (l.isDownload3PDSignalsEnabled = B),
      (l.shouldGenerateAGMMsgs = W),
      (l.isCTWA3pdOptOutCounterOptimizationEnabled = q),
      (l.isCTWA3pdDataSharingTitleChangeEnabled = U),
      (l.isCTWA3pdDataSharingAdditionalLoggingEnabled = V),
      (l.getCTWA3pdDataSharingMaxTimesShownForOptedOut = H),
      (l.suppressMessageWithExternalAdReplyConsumerEnabled = G),
      (l.isPerCustomerDataSharingControlsEnabled = z),
      (l.shouldSuppressDataSharingSystemMessageUntilGlobalChoiceMade = j),
      (l.showCTWACCICompliantUI = K),
      (l.isCTWATosFilteringEnabled = Q),
      (l.getCTWALearnMoreHyperLinkForCCICompliantUI = X),
      (l.showCTWA3pdDataSharingDisclosureOnThreadEntry = Y));
  },
  98,
);
