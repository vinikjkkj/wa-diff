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
          "biz_ai_suggested_reply_coaching_enabled",
        ) === !0
      );
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "maiba_meta_ai_fab_nullstate_is_deprecated",
      );
    }
    function d() {
      return (
        o(
          "WAWebBizAiWebDataDownloadsGateModel",
        ).isBizAiWebDataDownloadsGateEnabled() &&
        o("WAWebABProps").getABPropConfigValue("biz_ai_enable_download")
      );
    }
    function m() {
      return r("justknobx")._("5395");
    }
    function p() {
      return r("justknobx")._("2083");
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_auto_save_enabled");
    }
    function f() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_fab_confirm_modal_enabled",
        ) &&
        o("WAWebBizAiLargeScreensGateModel").isBizAiLargeScreensGateEnabled()
      );
    }
    function g() {
      return o(
        "WAWebBizAiWebEditingCoachingGateModel",
      ).isBizAiWebEditingCoachingGateEnabled();
    }
    function h() {
      return r("justknobx")._("3531");
    }
    function y() {
      return C(
        o(
          "WAWebBizAiWebSmartComposerAiListsGateModel",
        ).isBizAiWebSmartComposerAiListsGateEnabled(),
      );
    }
    function C(e) {
      return !h() && e && b();
    }
    function b() {
      return (
        o(
          "WAWebBizAiSettingsSyncDeviceCapabilityCommon",
        ).getPrimarySupportsBizAiSettingsSync() &&
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_handoff_timing_sync_enabled",
        ) === !0
      );
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue(
        "biz_ai_priority_list_item_expire_days",
      );
    }
    var S = 0,
      R = 1,
      L = 2;
    function E() {
      return o("WAWebABProps").getABPropConfigValue(
        "biz_ai_agent_3p_store_links_enabled",
      );
    }
    function k() {
      return E() !== S;
    }
    function I() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "ai_maiba_wass_migration_sending",
        ) === !0
      );
    }
    function T() {
      return (
        o("WAWebABProps").getABPropConfigValue("biz_ai_web_gdrive_enabled") ===
        !0
      );
    }
    function D() {
      return r("justknobx")._("6984");
    }
    function x() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_web_integration_hub_enabled",
        ) === !0
      );
    }
    function $() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_web_appointments_enabled",
        ) === !0
      );
    }
    function P() {
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
    function N() {
      return (
        o(
          "WAWebBizAiWebOnboardingDeviceCapabilityCommon",
        ).getPrimarySupportsBizAiWebOnboarding() && M()
      );
    }
    function M() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_web_onboarding_notification_dispatch_enabled",
        ) === !0
      );
    }
    ((l.isAiAgentAutoReplyEnabled = e),
      (l.isSmartComposerWebEnabled = s),
      (l.isSmartComposerCoachingEnabled = u),
      (l.isBizAIHubChatNavItemEnabled = c),
      (l.isBizAIDownloadEnabled = d),
      (l.isBizAiWebAgentChatDisabled = m),
      (l.isBizAIQEClientEnabled = p),
      (l.isAiAgentAutoSaveEnabled = _),
      (l.isAiReplyFabConfirmModalEnabled = f),
      (l.isAiAgentMessageEditingEnabled = g),
      (l.isSmartComposerAiListsEmergencyDisabled = h),
      (l.isAiListsWebUIEnabled = y),
      (l.isAiListsWebUIEnabledWithJointGate = C),
      (l.isHandoffRemovalTimingSyncEnabled = b),
      (l.getHandoffListExpireDays = v),
      (l.MULTI_WEBSITE_DISABLED = S),
      (l.MULTI_WEBSITE_BRAZIL = R),
      (l.MULTI_WEBSITE_LATAM = L),
      (l.getMultiWebsiteMode = E),
      (l.isMultiWebsiteEnabled = k),
      (l.isMaibaWASSSendingEnabled = I),
      (l.isGoogleDriveEnabled = T),
      (l.isGoogleDriveReconnectDisabled = D),
      (l.isIntegrationHubEnabled = x),
      (l.isAppointmentsEnabled = $),
      (l.getResponseSettingsV2TriState = P),
      (l.isWebOnboardingSendToPhoneEnabled = N),
      (l.isWebOnboardingNotificationDispatchEnabled = M));
  },
  98,
);
