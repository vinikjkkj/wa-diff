__d(
  "WAWebBizAiAgentGating",
  [
    "WAWebABProps",
    "WAWebBizAiLargeScreensGateModel",
    "WAWebBizAiSettingsSyncDeviceCapabilityCommon",
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
      return o("WAWebABProps").getABPropConfigValue(
        "biz_ai_web_ai_hub_tap_cta_show_alert",
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
        y() &&
        o("WAWebABProps").getABPropConfigValue("biz_ai_responding_list_enabled")
      );
    }
    function y() {
      return (
        o(
          "WAWebBizAiSettingsSyncDeviceCapabilityCommon",
        ).getPrimarySupportsBizAiSettingsSync() &&
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_handoff_timing_sync_enabled",
        ) === !0
      );
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "biz_ai_priority_list_item_expire_days",
      );
    }
    var b = 0,
      v = 1,
      S = 2;
    function R() {
      return o("WAWebABProps").getABPropConfigValue(
        "biz_ai_agent_3p_store_links_enabled",
      );
    }
    function L() {
      return R() !== b;
    }
    function E() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "ai_maiba_wass_migration_receiving",
        ) === !0
      );
    }
    function k() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "ai_maiba_wass_migration_sending",
        ) === !0
      );
    }
    function I() {
      return (
        o("WAWebABProps").getABPropConfigValue("biz_ai_web_gdrive_enabled") ===
        !0
      );
    }
    function T() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_web_integration_hub_enabled",
        ) === !0
      );
    }
    ((l.isAiAgentAutoReplyEnabled = e),
      (l.isAiBulkThreadControlEnabled = s),
      (l.isSmartComposerWebEnabled = u),
      (l.isAiHubTapCtaShowAlertEnabled = c),
      (l.isBizAIHubChatNavItemEnabled = d),
      (l.isBizAIDownloadEnabled = m),
      (l.isBizAiWebAgentChatDisabled = p),
      (l.isAiAgentAutoSaveEnabled = _),
      (l.isAiReplyFabConfirmModalEnabled = f),
      (l.isAiAgentMessageEditingEnabled = g),
      (l.isAiRespondingChipEnabled = h),
      (l.isHandoffRemovalTimingSyncEnabled = y),
      (l.getHandoffListExpireDays = C),
      (l.MULTI_WEBSITE_DISABLED = b),
      (l.MULTI_WEBSITE_BRAZIL = v),
      (l.MULTI_WEBSITE_LATAM = S),
      (l.getMultiWebsiteMode = R),
      (l.isMultiWebsiteEnabled = L),
      (l.isMaibaWASSReceivingEnabled = E),
      (l.isMaibaWASSSendingEnabled = k),
      (l.isGoogleDriveEnabled = I),
      (l.isIntegrationHubEnabled = T));
  },
  98,
);
