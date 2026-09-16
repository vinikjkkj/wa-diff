__d(
  "WAWebBizAiAgentGating",
  [
    "WAWebABProps",
    "WAWebBizAiLargeScreensGateModel",
    "WAWebBizAiSettingsSyncDeviceCapabilityCommon",
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
      return o("WAWebABProps").getABPropConfigValue(
        "biz_ai_web_bulk_thread_control_enabled",
      );
    }
    function u() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_web_smart_composer_enabled",
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
        "biz_ai_web_ai_hub_tap_cta_show_alert",
      );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "maiba_meta_ai_fab_nullstate_is_deprecated",
      );
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_enable_download");
    }
    function _() {
      return r("justknobx")._("5395");
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
      return (
        o("WAWebBizAiLargeScreensGateModel").isBizAiLargeScreensGateEnabled() &&
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_agent_ai_editing_enabled",
        )
      );
    }
    function y() {
      return (
        S() &&
        o("WAWebABProps").getABPropConfigValue("biz_ai_responding_list_enabled")
      );
    }
    function C() {
      return r("justknobx")._("3531");
    }
    function b() {
      return v(
        o(
          "WAWebBizAiWebSmartComposerAiListsGateModel",
        ).isBizAiWebSmartComposerAiListsGateEnabled(),
      );
    }
    function v(e) {
      return !C() && e && y();
    }
    function S() {
      return (
        o(
          "WAWebBizAiSettingsSyncDeviceCapabilityCommon",
        ).getPrimarySupportsBizAiSettingsSync() &&
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_handoff_timing_sync_enabled",
        ) === !0
      );
    }
    function R() {
      return o("WAWebABProps").getABPropConfigValue(
        "biz_ai_priority_list_item_expire_days",
      );
    }
    var L = 0,
      E = 1,
      k = 2;
    function I() {
      return o("WAWebABProps").getABPropConfigValue(
        "biz_ai_agent_3p_store_links_enabled",
      );
    }
    function T() {
      return I() !== L;
    }
    function D() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "ai_maiba_wass_migration_receiving",
        ) === !0
      );
    }
    function x() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "ai_maiba_wass_migration_sending",
        ) === !0
      );
    }
    function $() {
      return (
        o("WAWebABProps").getABPropConfigValue("biz_ai_web_gdrive_enabled") ===
        !0
      );
    }
    function P() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_web_integration_hub_enabled",
        ) === !0
      );
    }
    function N() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_web_appointments_enabled",
        ) === !0
      );
    }
    function M() {
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
    ((l.isAiAgentAutoReplyEnabled = e),
      (l.isAiBulkThreadControlEnabled = s),
      (l.isSmartComposerWebEnabled = u),
      (l.isSmartComposerCoachingEnabled = c),
      (l.isAiHubTapCtaShowAlertEnabled = d),
      (l.isBizAIHubChatNavItemEnabled = m),
      (l.isBizAIDownloadEnabled = p),
      (l.isBizAiWebAgentChatDisabled = _),
      (l.isAiAgentAutoSaveEnabled = f),
      (l.isAiReplyFabConfirmModalEnabled = g),
      (l.isAiAgentMessageEditingEnabled = h),
      (l.isAiRespondingChipEnabled = y),
      (l.isSmartComposerAiListsEmergencyDisabled = C),
      (l.isAiListsWebUIEnabled = b),
      (l.isAiListsWebUIEnabledWithJointGate = v),
      (l.isHandoffRemovalTimingSyncEnabled = S),
      (l.getHandoffListExpireDays = R),
      (l.MULTI_WEBSITE_DISABLED = L),
      (l.MULTI_WEBSITE_BRAZIL = E),
      (l.MULTI_WEBSITE_LATAM = k),
      (l.getMultiWebsiteMode = I),
      (l.isMultiWebsiteEnabled = T),
      (l.isMaibaWASSReceivingEnabled = D),
      (l.isMaibaWASSSendingEnabled = x),
      (l.isGoogleDriveEnabled = $),
      (l.isIntegrationHubEnabled = P),
      (l.isAppointmentsEnabled = N),
      (l.getResponseSettingsV2TriState = M));
  },
  98,
);
