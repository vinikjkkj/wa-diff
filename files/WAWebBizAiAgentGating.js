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
      return o("WAWebABProps").getABPropConfigValue("biz_ai_coaching_enabled");
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "biz_ai_agent_thread_status_history_sync_enabled",
      );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "biz_ai_priority_list_enabled",
      );
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "biz_ai_responding_list_enabled",
      );
    }
    var _ = 1,
      f = 2,
      g = 3;
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "biz_ai_agent_3p_store_links_enabled",
      );
    }
    ((l.isAiAgentAutoReplyEnabled = e),
      (l.isAiHubTapCtaShowAlertEnabled = s),
      (l.isAiAgentAutoSaveEnabled = u),
      (l.isAiCoachingEnabled = c),
      (l.isAiAgentThreadStatusHistorySyncEnabled = d),
      (l.isAiHandoffListEnabled = m),
      (l.isAiRespondingChipEnabled = p),
      (l.MULTI_WEBSITE_BRAZIL = _),
      (l.MULTI_WEBSITE_LATAM = f),
      (l.MULTI_WEBSITE_DYNAMIC = g),
      (l.getMultiWebsiteMode = h));
  },
  98,
);
