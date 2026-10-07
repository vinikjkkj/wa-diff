__d(
  "WAWebBizAiAgentGating",
  [
    "WAWebABProps",
    "WAWebBizAiLargeScreensGateModel",
    "WAWebBizAiSettingsSyncDeviceCapabilityCommon",
    "WAWebBizAiWebEditingCoachingGateModel",
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
      return o("WAWebABProps").getABPropConfigValue("biz_ai_enable_download");
    }
    function m() {
      return r("justknobx")._("5395");
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_auto_save_enabled");
    }
    function _() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_fab_confirm_modal_enabled",
        ) &&
        o("WAWebBizAiLargeScreensGateModel").isBizAiLargeScreensGateEnabled()
      );
    }
    function f() {
      return (
        o("WAWebBizAiLargeScreensGateModel").isBizAiLargeScreensGateEnabled() &&
        o(
          "WAWebBizAiWebEditingCoachingGateModel",
        ).isBizAiWebEditingCoachingGateEnabled() &&
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_agent_ai_editing_enabled",
        )
      );
    }
    function g() {
      return (
        b() &&
        o("WAWebABProps").getABPropConfigValue("biz_ai_responding_list_enabled")
      );
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
      return !h() && e && g();
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
          "ai_maiba_wass_migration_receiving",
        ) === !0
      );
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
      (l.isAiAgentAutoSaveEnabled = p),
      (l.isAiReplyFabConfirmModalEnabled = _),
      (l.isAiAgentMessageEditingEnabled = f),
      (l.isAiRespondingChipEnabled = g),
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
      (l.isMaibaWASSReceivingEnabled = I),
      (l.isMaibaWASSSendingEnabled = T),
      (l.isGoogleDriveEnabled = D),
      (l.isIntegrationHubEnabled = x),
      (l.isAppointmentsEnabled = $),
      (l.getResponseSettingsV2TriState = P),
      (l.isWebOnboardingNotificationDispatchEnabled = N));
  },
  98,
);
