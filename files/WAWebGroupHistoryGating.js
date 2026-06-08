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
    function u() {
      return o("WAWebABProps").getABPropConfigValue("group_history_settings");
    }
    function c(e) {
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
    function d(e) {
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
    function m(e) {
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
    function p() {
      return o("WAWebABProps").getABPropConfigValue("rt_ghs_receiver_enabled");
    }
    function _(e) {
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
    function f() {
      return o("WAWebABProps").getABPropConfigValue(
        "group_history_out_of_window_pins_receiver",
      );
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "group_history_send_after_join",
      );
    }
    var h = 1209600;
    function y(e) {
      var t = o("WAWebABProps").getABPropConfigValue(
        "group_history_messages_time_limit_secs",
      );
      if (t !== h || e == null) return t;
      try {
        return o("WAWebGroupABProps").getGroupABPropConfigValue(
          o("WAWebWidToJid").widToGroupJid(e),
          "group_history_messages_time_limit_secs_group_level",
        );
      } catch (e) {
        return t;
      }
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue("is_internal_tester");
    }
    function b() {
      return g() || C();
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue(
        "group_history_receiver_dedup",
      );
    }
    ((l.isGroupHistoryReceiverEnabled = e),
      (l.isGroupHistorySenderEnabled = s),
      (l.isGroupHistorySettingsEnabled = u),
      (l.isGroupHistorySettingsToggleUIEnabled = c),
      (l.isGroupHistorySettingsDecoupleEnabled = d),
      (l.isGroupHistorySenderReportingTokenEnabled = m),
      (l.isGroupHistoryReceiverReportingTokenEnabled = p),
      (l.isOutOfWindowPinSenderEnabled = _),
      (l.isOutOfWindowPinsReceiverEnabled = f),
      (l.isGroupHistoryPostJoinSenderEnabled = g),
      (l.getGroupHistoryMessagesTimeLimitSecs = y),
      (l.isGroupHistoryPostJoinInternalTesterEnabled = C),
      (l.isGroupHistoryPostJoinSenderOrInternalTesterEnabled = b),
      (l.isGroupHistoryReceiverDedupEnabled = v));
  },
  98,
);
