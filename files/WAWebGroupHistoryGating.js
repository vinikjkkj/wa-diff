__d(
  "WAWebGroupHistoryGating",
  ["WAWebABProps", "WAWebGroupABProps", "WAWebWidToJid"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebABProps").getABPropConfigValue("group_history_receive");
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "group_history_notice_receive",
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue("group_history_send");
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue("group_history_settings");
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "group_history_settings_toggle_ui",
      );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue("rt_ghs_sender_enabled");
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
    ((l.isGroupHistoryReceiverEnabled = e),
      (l.isGroupHistoryNoticeReceiverEnabled = s),
      (l.isGroupHistorySenderEnabled = u),
      (l.isGroupHistorySettingsEnabled = c),
      (l.isGroupHistorySettingsToggleUIEnabled = d),
      (l.isGroupHistorySenderReportingTokenEnabled = m),
      (l.isGroupHistoryReceiverReportingTokenEnabled = p),
      (l.isOutOfWindowPinSenderEnabled = _),
      (l.isOutOfWindowPinsReceiverEnabled = f),
      (l.isGroupHistoryPostJoinSenderEnabled = g));
  },
  98,
);
