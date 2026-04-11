__d(
  "WAWebBizAiAgentGating",
  ["WAWebABProps"],
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
      return o("WAWebABProps").getABPropConfigValue(
        "biz_ai_in_thread_unmute_v2",
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_coaching_enabled");
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "biz_ai_agent_thread_status_history_sync_enabled",
      );
    }
    ((l.isAiAgentAutoReplyEnabled = e),
      (l.isAiHubTapCtaShowAlertEnabled = s),
      (l.isAiAgentAutoSaveEnabled = u),
      (l.isAiMuteUnmuteV2Enabled = c),
      (l.isAiCoachingEnabled = d),
      (l.isAiAgentThreadStatusHistorySyncEnabled = m));
  },
  98,
);
