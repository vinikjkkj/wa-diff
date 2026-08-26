__d(
  "WAWebBizAiAgentGating",
  ["WAWebABProps", "WAWebBizAiLargeScreensGateModel", "justknobx"],
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
      return o("WAWebABProps").getABPropConfigValue(
        "biz_ai_responding_list_enabled",
      );
    }
    function h() {
      return g();
    }
    function y() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_handoff_timing_sync_enabled",
        ) === !0
      );
    }
    var C = 0,
      b = 1,
      v = 2;
    function S() {
      return o("WAWebABProps").getABPropConfigValue(
        "biz_ai_agent_3p_store_links_enabled",
      );
    }
    function R() {
      return S() !== C;
    }
    function L() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "ai_maiba_wass_migration_receiving",
        ) === !0
      );
    }
    function E() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "ai_maiba_wass_migration_sending",
        ) === !0
      );
    }
    function k() {
      return (
        o("WAWebABProps").getABPropConfigValue("biz_ai_web_gdrive_enabled") ===
        !0
      );
    }
    function I() {
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
      (l.isAiRespondingChipEnabled = g),
      (l.isHandoffRemovalTimingSettingEnabled = h),
      (l.isHandoffRemovalTimingSyncEnabled = y),
      (l.MULTI_WEBSITE_DISABLED = C),
      (l.MULTI_WEBSITE_BRAZIL = b),
      (l.MULTI_WEBSITE_LATAM = v),
      (l.getMultiWebsiteMode = S),
      (l.isMultiWebsiteEnabled = R),
      (l.isMaibaWASSReceivingEnabled = L),
      (l.isMaibaWASSSendingEnabled = E),
      (l.isGoogleDriveEnabled = k),
      (l.isIntegrationHubEnabled = I));
  },
  98,
);
