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
        "maiba_meta_ai_fab_nullstate_is_deprecated",
      );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_enable_download");
    }
    function p() {
      return r("justknobx")._("5395");
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
      return (
        o("WAWebBizAiLargeScreensGateModel").isBizAiLargeScreensGateEnabled() &&
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_agent_ai_editing_enabled",
        )
      );
    }
    function h() {
      return (
        v() &&
        o("WAWebABProps").getABPropConfigValue("biz_ai_responding_list_enabled")
      );
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
      return !y() && e && h();
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
          "ai_maiba_wass_migration_receiving",
        ) === !0
      );
    }
    function D() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "ai_maiba_wass_migration_sending",
        ) === !0
      );
    }
    function x() {
      return (
        o("WAWebABProps").getABPropConfigValue("biz_ai_web_gdrive_enabled") ===
        !0
      );
    }
    function $() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_web_integration_hub_enabled",
        ) === !0
      );
    }
    function P() {
      var e =
        o("WAWebABProps").getABPropConfigValue("wa_web_meta_one_dev") === !0;
      return (
        e ||
        (o("WAWebABProps").getABPropConfigValue(
          "biz_ai_meta_one_integration",
        ) === !0 &&
          o("WAWebABProps").getABPropConfigValue("wa_meta_one_enabled") ===
            !0 &&
          o("WAWebABProps").getABPropConfigValue(
            "wa_meta_one_rollout_enabled",
          ) === !0)
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
      (l.isBizAIHubChatNavItemEnabled = d),
      (l.isBizAIDownloadEnabled = m),
      (l.isBizAiWebAgentChatDisabled = p),
      (l.isAiAgentAutoSaveEnabled = _),
      (l.isAiReplyFabConfirmModalEnabled = f),
      (l.isAiAgentMessageEditingEnabled = g),
      (l.isAiRespondingChipEnabled = h),
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
      (l.isMaibaWASSReceivingEnabled = T),
      (l.isMaibaWASSSendingEnabled = D),
      (l.isGoogleDriveEnabled = x),
      (l.isIntegrationHubEnabled = $),
      (l.isMetaOneIntegrationRolloutEnabled = P),
      (l.isAppointmentsEnabled = N),
      (l.getResponseSettingsV2TriState = M));
  },
  98,
);
