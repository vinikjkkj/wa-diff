__d(
  "WAWebGroupHistoryGating",
  ["WAWebABProps", "WAWebGroupABProps", "WAWebWidToJid"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebABProps").getABPropConfigValue("group_history_receive");
    }
    function s(e) {
      return o("WAWebABProps").getABPropConfigValue("group_history_send")
        ? !0
        : e != null
          ? o("WAWebGroupABProps").getGroupABPropConfigValue(
              o("WAWebWidToJid").widToGroupJid(e),
              "group_history_send_group_level",
            )
          : !1;
    }
    function u(e) {
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
    function c(e) {
      return o("WAWebABProps").getABPropConfigValue(
        "group_history_setting_decouple_enabled",
      )
        ? !0
        : e != null
          ? o("WAWebGroupABProps").getGroupABPropConfigValue(
              o("WAWebWidToJid").widToGroupJid(e),
              "group_history_setting_decouple_enabled_group_level",
            )
          : !1;
    }
    function d(e) {
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
    function m() {
      return o("WAWebABProps").getABPropConfigValue("rt_ghs_receiver_enabled");
    }
    function p(e) {
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
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "group_history_out_of_window_pins_receiver",
      );
    }
    function f(e) {
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
    var g = 1209600;
    function h(e) {
      var t = o("WAWebABProps").getABPropConfigValue(
        "group_history_messages_time_limit_secs",
      );
      if (t !== g || e == null) return t;
      try {
        return o("WAWebGroupABProps").getGroupABPropConfigValue(
          o("WAWebWidToJid").widToGroupJid(e),
          "group_history_messages_time_limit_secs_group_level",
        );
      } catch (e) {
        return t;
      }
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue("is_internal_tester");
    }
    function C(e) {
      return f(e) || y();
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "group_history_receiver_dedup",
      );
    }
    ((l.isGroupHistoryReceiverEnabled = e),
      (l.isGroupHistorySenderEnabled = s),
      (l.isGroupHistorySettingsToggleUIEnabled = u),
      (l.isGroupHistorySettingsDecoupleEnabled = c),
      (l.isGroupHistorySenderReportingTokenEnabled = d),
      (l.isGroupHistoryReceiverReportingTokenEnabled = m),
      (l.isOutOfWindowPinSenderEnabled = p),
      (l.isOutOfWindowPinsReceiverEnabled = _),
      (l.isGroupHistoryPostJoinSenderEnabled = f),
      (l.getGroupHistoryMessagesTimeLimitSecs = h),
      (l.isGroupHistoryPostJoinInternalTesterEnabled = y),
      (l.isGroupHistoryPostJoinSenderOrInternalTesterEnabled = C),
      (l.isGroupHistoryReceiverDedupEnabled = b));
  },
  98,
);
