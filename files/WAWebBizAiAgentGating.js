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
        "biz_ai_web_ai_hub_tap_cta_show_alert",
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_auto_save_enabled");
    }
    function c() {
      return (
        o("WAWebABProps").getABPropConfigValue("biz_ai_in_thread_unmute_v2") &&
        o("WAWebBizAiLargeScreensGateModel").isBizAiLargeScreensGateEnabled()
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "biz_ai_priority_list_enabled",
      );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "biz_ai_responding_list_enabled",
      );
    }
    var p = 1,
      _ = 2,
      f = 3;
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "biz_ai_agent_3p_store_links_enabled",
      );
    }
    function h() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "ai_maiba_wass_migration_receiving",
        ) === !0
      );
    }
    function y() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "ai_maiba_wass_migration_sending",
        ) === !0
      );
    }
    ((l.isAiAgentAutoReplyEnabled = e),
      (l.isAiHubTapCtaShowAlertEnabled = s),
      (l.isAiAgentAutoSaveEnabled = u),
      (l.isAiMuteUnmuteV2Enabled = c),
      (l.isAiHandoffListEnabled = d),
      (l.isAiRespondingChipEnabled = m),
      (l.MULTI_WEBSITE_BRAZIL = p),
      (l.MULTI_WEBSITE_LATAM = _),
      (l.MULTI_WEBSITE_DYNAMIC = f),
      (l.getMultiWebsiteMode = g),
      (l.isMaibaWASSReceivingEnabled = h),
      (l.isMaibaWASSSendingEnabled = y));
  },
  98,
);
