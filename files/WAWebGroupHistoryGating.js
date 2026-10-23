__d(
  "WAWebGroupHistoryGating",
  ["WAWebABProps", "WAWebGroupABProps", "WAWebWidToJid", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("WAWebABProps").getABPropConfigValue("group_history_send")
        ? !0
        : e != null
          ? o("WAWebGroupABProps").getGroupABPropConfigValue(
              o("WAWebWidToJid").widToGroupJid(e),
              "group_history_send_group_level",
            )
          : !1;
    }
    function s(e) {
      return o("WAWebABProps").getABPropConfigValue(
        "group_history_settings_toggle_ui",
      )
        ? !0
        : e != null
          ? o("WAWebGroupABProps").getGroupABPropConfigValue(
              o("WAWebWidToJid").widToGroupJid(e),
              "group_history_settings_toggle_ui_group_level",
            )
          : !1;
    }
    function u(e) {
      if (o("WAWebABProps").getABPropConfigValue("rt_ghs_sender_enabled"))
        return !0;
      if (e != null)
        try {
          return o("WAWebGroupABProps").getGroupABPropConfigValue(
            o("WAWebWidToJid").widToGroupJid(e),
            "rt_ghs_sender_group_level_enabled",
          );
        } catch (e) {
          return !1;
        }
      return !1;
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue("rt_ghs_receiver_enabled");
    }
    function d(e) {
      if (
        o("WAWebABProps").getABPropConfigValue(
          "group_history_out_of_window_pin_sender",
        )
      )
        return !0;
      if (e != null)
        try {
          return o("WAWebGroupABProps").getGroupABPropConfigValue(
            o("WAWebWidToJid").widToGroupJid(e),
            "group_history_out_of_window_pin_sender_group_level",
          );
        } catch (e) {
          return !1;
        }
      return !1;
    }
    function m(e) {
      if (
        o("WAWebABProps").getABPropConfigValue("group_history_send_after_join")
      )
        return !0;
      if (e != null)
        try {
          return o("WAWebGroupABProps").getGroupABPropConfigValue(
            o("WAWebWidToJid").widToGroupJid(e),
            "group_history_send_after_join_group_level",
          );
        } catch (e) {
          return !1;
        }
      return !1;
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "group_history_messages_time_limit_secs",
      );
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue("is_internal_tester");
    }
    function f(e) {
      return m(e) || _();
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "group_history_after_join_prerequisites",
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "group_history_after_join_sender_prerequisites",
      );
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue(
        "group_history_send_once_default_on",
      );
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "group_history_send_default_on",
      );
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "group_history_sender_speed_bump_dialog_display_times",
      );
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue(
        "group_history_per_group_toggle_md_sync",
      );
    }
    function S() {
      return r("justknobx")._("5870");
    }
    ((l.isGroupHistorySenderEnabled = e),
      (l.isGroupHistorySettingsToggleUIEnabled = s),
      (l.isGroupHistorySenderReportingTokenEnabled = u),
      (l.isGroupHistoryReceiverReportingTokenEnabled = c),
      (l.isOutOfWindowPinSenderEnabled = d),
      (l.isGroupHistoryPostJoinSenderEnabled = m),
      (l.getGroupHistoryMessagesTimeLimitSecs = p),
      (l.isGroupHistoryPostJoinSenderOrInternalTesterEnabled = f),
      (l.isGroupHistoryAfterJoinPrerequisitesEnabled = g),
      (l.isGroupHistoryPostJoinSenderPrerequisitesEnabled = h),
      (l.isGroupHistorySendOnceDefaultOnEnabled = y),
      (l.isGroupHistorySendDefaultOnEnabled = C),
      (l.getGroupHistorySpeedBumpDialogDisplayTimes = b),
      (l.isGroupHistoryPerGroupToggleMdSyncEnabled = v),
      (l.shouldSkipUnsupportedMessagesFromBundle = S));
  },
  98,
);
