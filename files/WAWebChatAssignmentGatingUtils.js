__d(
  "WAWebChatAssignmentGatingUtils",
  ["WAWebABProps", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_md_agent_chat_assignment_enabled",
        )
      );
    }
    function s() {
      return e()
        ? o("WAWebABProps").getABPropConfigValue(
            "smb_md_agent_chat_assignment_nux_impressions",
          )
        : 0;
    }
    function u(e) {
      return e
        ? o("WAWebABProps").getABPropConfigValue(
            "smb_md_agent_chat_assignment_chats_reorder_on_chat_unassignment_enabled",
          )
        : o("WAWebABProps").getABPropConfigValue(
            "smb_md_agent_chat_assignment_chats_reorder_on_chat_assignment_enabled",
          );
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_ai_agents_web_chat_assignment_interop_enabled",
      );
    }
    function d() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("biz_ai_tools_settings")
      );
    }
    function m() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_multi_device_message_attribution_enabled",
        )
      );
    }
    ((l.chatAssignmentEnabled = e),
      (l.chatAssignmentMaxNuxImpressions = s),
      (l.shouldReorderChatOnAssignment = u),
      (l.isBizAiChatAssignmentInteropTosEnabled = c),
      (l.isBizAIToolsSettingsEnabled = d),
      (l.isMultiDeviceMessageAttributionEnabled = m));
  },
  98,
);
