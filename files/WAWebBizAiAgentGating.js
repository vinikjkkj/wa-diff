__d(
  "WAWebBizAiAgentGating",
  [
    "WAWebABProps",
    "WAWebBizAiLargeScreensGateModel",
    "WAWebBizAiSettingsSyncDeviceCapabilityCommon",
    "WAWebBizAiWebDataDownloadsGateModel",
    "WAWebBizAiWebEditingCoachingGateModel",
    "WAWebBizAiWebOnboardingDeviceCapabilityCommon",
    "WAWebBizAiWebSmartComposerAiListsGateModel",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "biz_ai_smb_agents_automatic_reply_enabled",
      );
    }
    function s() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_web_smart_composer_enabled",
        ) === !0
      );
    }
    function u() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_web_sc_failure_cache_enabled",
        ) === !0
      );
    }
    function c() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_suggested_reply_coaching_enabled",
        ) === !0
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "maiba_meta_ai_fab_nullstate_is_deprecated",
      );
    }
    function m() {
      return (
        o(
          "WAWebBizAiWebDataDownloadsGateModel",
        ).isBizAiWebDataDownloadsGateEnabled() &&
        o("WAWebABProps").getABPropConfigValue("biz_ai_enable_download")
      );
    }
    function p() {
      return r("justknobx")._("5395");
    }
    function _() {
      return r("justknobx")._("2083");
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_auto_save_enabled");
    }
    function g() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_fab_confirm_modal_enabled",
        ) &&
        o("WAWebBizAiLargeScreensGateModel").isBizAiLargeScreensGateEnabled()
      );
    }
    function h() {
      return o(
        "WAWebBizAiWebEditingCoachingGateModel",
      ).isBizAiWebEditingCoachingGateEnabled();
    }
    function y() {
      return r("justknobx")._("3531");
    }
    function C() {
      return b(
        o(
          "WAWebBizAiWebSmartComposerAiListsGateModel",
        ).isBizAiWebSmartComposerAiListsGateEnabled(),
      );
    }
    function b(e) {
      return !y() && e && v();
    }
    function v() {
      return (
        o(
          "WAWebBizAiSettingsSyncDeviceCapabilityCommon",
        ).getPrimarySupportsBizAiSettingsSync() &&
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_handoff_timing_sync_enabled",
        ) === !0
      );
    }
    function S() {
      return o("WAWebABProps").getABPropConfigValue(
        "biz_ai_priority_list_item_expire_days",
      );
    }
    var R = 0,
      L = 1,
      E = 2;
    function k() {
      return o("WAWebABProps").getABPropConfigValue(
        "biz_ai_agent_3p_store_links_enabled",
      );
    }
    function I() {
      return k() !== R;
    }
    function T() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "ai_maiba_wass_migration_sending",
        ) === !0
      );
    }
    function D() {
      return (
        o("WAWebABProps").getABPropConfigValue("biz_ai_web_gdrive_enabled") ===
        !0
      );
    }
    function x() {
      return r("justknobx")._("6984");
    }
    function $() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_web_integration_hub_enabled",
        ) === !0
      );
    }
    function P() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_web_appointments_enabled",
        ) === !0
      );
    }
    function N() {
      return (function (e) {
        return e === "EXPERIMENT"
          ? "EXPERIMENT"
          : e === "ROLLOUT"
            ? "ROLLOUT"
            : "NONE";
      })(
        o("WAWebABProps")
          .getABPropConfigValue("biz_ai_response_settings_ui_experiment")
          .toUpperCase(),
      );
    }
    function M() {
      return (
        o(
          "WAWebBizAiWebOnboardingDeviceCapabilityCommon",
        ).getPrimarySupportsBizAiWebOnboarding() && w()
      );
    }
    function w() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_web_onboarding_notification_dispatch_enabled",
        ) === !0
      );
    }
    ((l.isAiAgentAutoReplyEnabled = e),
      (l.isSmartComposerWebEnabled = s),
      (l.isSmartComposerFailureCacheEnabled = u),
      (l.isSmartComposerCoachingEnabled = c),
      (l.isBizAIHubChatNavItemEnabled = d),
      (l.isBizAIDownloadEnabled = m),
      (l.isBizAiWebAgentChatDisabled = p),
      (l.isBizAIQEClientEnabled = _),
      (l.isAiAgentAutoSaveEnabled = f),
      (l.isAiReplyFabConfirmModalEnabled = g),
      (l.isAiAgentMessageEditingEnabled = h),
      (l.isSmartComposerAiListsEmergencyDisabled = y),
      (l.isAiListsWebUIEnabled = C),
      (l.isAiListsWebUIEnabledWithJointGate = b),
      (l.isHandoffRemovalTimingSyncEnabled = v),
      (l.getHandoffListExpireDays = S),
      (l.MULTI_WEBSITE_DISABLED = R),
      (l.MULTI_WEBSITE_BRAZIL = L),
      (l.MULTI_WEBSITE_LATAM = E),
      (l.getMultiWebsiteMode = k),
      (l.isMultiWebsiteEnabled = I),
      (l.isMaibaWASSSendingEnabled = T),
      (l.isGoogleDriveEnabled = D),
      (l.isGoogleDriveReconnectDisabled = x),
      (l.isIntegrationHubEnabled = $),
      (l.isAppointmentsEnabled = P),
      (l.getResponseSettingsV2TriState = N),
      (l.isWebOnboardingSendToPhoneEnabled = M),
      (l.isWebOnboardingNotificationDispatchEnabled = w));
  },
  98,
);
