__d(
  "WAWebBizAiAgentGating",
  ["WAWebABProps", "WAWebBizAiLargeScreensGateModel"],
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
      return o("WAWebABProps").getABPropConfigValue("biz_ai_auto_save_enabled");
    }
    function m() {
      return (
        o("WAWebABProps").getABPropConfigValue("biz_ai_in_thread_unmute_v2") &&
        o("WAWebBizAiLargeScreensGateModel").isBizAiLargeScreensGateEnabled()
      );
    }
    function p() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_fab_confirm_modal_enabled",
        ) &&
        o("WAWebBizAiLargeScreensGateModel").isBizAiLargeScreensGateEnabled()
      );
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "biz_ai_responding_list_enabled",
      );
    }
    function f() {
      return _();
    }
    function g() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_handoff_timing_sync_enabled",
        ) === !0
      );
    }
    var h = 0,
      y = 1,
      C = 2;
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "biz_ai_agent_3p_store_links_enabled",
      );
    }
    function v() {
      return b() !== h;
    }
    function S() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "ai_maiba_wass_migration_receiving",
        ) === !0
      );
    }
    function R() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "ai_maiba_wass_migration_sending",
        ) === !0
      );
    }
    function L() {
      return (
        o("WAWebABProps").getABPropConfigValue("biz_ai_web_gdrive_enabled") ===
        !0
      );
    }
    function E() {
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
      (l.isAiAgentAutoSaveEnabled = d),
      (l.isAiMuteUnmuteV2Enabled = m),
      (l.isAiReplyFabConfirmModalEnabled = p),
      (l.isAiRespondingChipEnabled = _),
      (l.isHandoffRemovalTimingSettingEnabled = f),
      (l.isHandoffRemovalTimingSyncEnabled = g),
      (l.MULTI_WEBSITE_DISABLED = h),
      (l.MULTI_WEBSITE_BRAZIL = y),
      (l.MULTI_WEBSITE_LATAM = C),
      (l.getMultiWebsiteMode = b),
      (l.isMultiWebsiteEnabled = v),
      (l.isMaibaWASSReceivingEnabled = S),
      (l.isMaibaWASSSendingEnabled = R),
      (l.isGoogleDriveEnabled = L),
      (l.isIntegrationHubEnabled = E));
  },
  98,
);
