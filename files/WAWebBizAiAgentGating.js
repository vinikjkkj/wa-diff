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
      return o("WAWebABProps").getABPropConfigValue(
        "biz_ai_web_ai_hub_tap_cta_show_alert",
      );
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_auto_save_enabled");
    }
    function d() {
      return (
        o("WAWebABProps").getABPropConfigValue("biz_ai_in_thread_unmute_v2") &&
        o("WAWebBizAiLargeScreensGateModel").isBizAiLargeScreensGateEnabled()
      );
    }
    function m() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_fab_confirm_modal_enabled",
        ) &&
        o("WAWebBizAiLargeScreensGateModel").isBizAiLargeScreensGateEnabled()
      );
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "biz_ai_responding_list_enabled",
      );
    }
    function _() {
      return p();
    }
    var f = 0,
      g = 1,
      h = 2;
    function y() {
      return o("WAWebABProps").getABPropConfigValue(
        "biz_ai_agent_3p_store_links_enabled",
      );
    }
    function C() {
      return y() !== f;
    }
    function b() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "ai_maiba_wass_migration_receiving",
        ) === !0
      );
    }
    function v() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "ai_maiba_wass_migration_sending",
        ) === !0
      );
    }
    function S() {
      return (
        o("WAWebABProps").getABPropConfigValue("biz_ai_web_gdrive_enabled") ===
        !0
      );
    }
    ((l.isAiAgentAutoReplyEnabled = e),
      (l.isAiBulkThreadControlEnabled = s),
      (l.isAiHubTapCtaShowAlertEnabled = u),
      (l.isAiAgentAutoSaveEnabled = c),
      (l.isAiMuteUnmuteV2Enabled = d),
      (l.isAiReplyFabConfirmModalEnabled = m),
      (l.isAiRespondingChipEnabled = p),
      (l.isHandoffRemovalTimingSettingEnabled = _),
      (l.MULTI_WEBSITE_DISABLED = f),
      (l.MULTI_WEBSITE_BRAZIL = g),
      (l.MULTI_WEBSITE_LATAM = h),
      (l.getMultiWebsiteMode = y),
      (l.isMultiWebsiteEnabled = C),
      (l.isMaibaWASSReceivingEnabled = b),
      (l.isMaibaWASSSendingEnabled = v),
      (l.isGoogleDriveKnowledgeUiEnabled = S));
  },
  98,
);
