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
      (l.shouldSuppressDataSharingSystemMessageUntilGlobalChoiceMade = T));
  },
  98,
);
