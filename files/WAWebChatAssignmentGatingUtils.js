__d(
  "WAWebChatAssignmentGatingUtils",
  ["WAWebABProps", "WAWebBizAiLargeScreensGateModel", "WAWebMobilePlatforms"],
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
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_md_agent_chat_assignment_notifications_enabled",
      );
    }
    function c(e) {
      return e
        ? o("WAWebABProps").getABPropConfigValue(
            "smb_md_agent_chat_assignment_chats_reorder_on_chat_unassignment_enabled",
          )
        : o("WAWebABProps").getABPropConfigValue(
            "smb_md_agent_chat_assignment_chats_reorder_on_chat_assignment_enabled",
          );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_ai_agents_web_chat_assignment_interop_enabled",
      );
    }
    function m() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("biz_ai_tools_settings") &&
        o("WAWebBizAiLargeScreensGateModel").isBizAiLargeScreensGateEnabled()
      );
    }
    function p() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "biz_ai_web_onboarding_handoff",
        ) &&
        o("WAWebBizAiLargeScreensGateModel").isBizAiLargeScreensGateEnabled()
      );
    }
    function _() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_multi_device_message_attribution_enabled",
        )
      );
    }
    ((l.chatAssignmentEnabled = e),
      (l.chatAssignmentMaxNuxImpressions = s),
      (l.chatAssignmentNotificationsEnabled = u),
      (l.shouldReorderChatOnAssignment = c),
      (l.isBizAiChatAssignmentInteropTosEnabled = d),
      (l.isBizAIToolsSettingsEnabled = m),
      (l.isBizAiWebOnboardingHandoffEnabled = p),
      (l.isMultiDeviceMessageAttributionEnabled = _));
  },
  98,
);
