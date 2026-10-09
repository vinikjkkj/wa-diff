__d(
  "WAWebGroupHistoryGating",
  ["WAWebABProps", "WAWebGroupABProps", "WAWebWidToJid", "justknobx"],
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
    function d() {
      return o("WAWebABProps").getABPropConfigValue("rt_ghs_receiver_enabled");
    }
    function m(e) {
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
    function p(e) {
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
    var _ = 1209600;
    function f(e) {
      var t = o("WAWebABProps").getABPropConfigValue(
        "group_history_messages_time_limit_secs",
      );
      if (t !== _ || e == null) return t;
      try {
        return o("WAWebGroupABProps").getGroupABPropConfigValue(
          o("WAWebWidToJid").widToGroupJid(e),
          "group_history_messages_time_limit_secs_group_level",
        );
      } catch (e) {
        return t;
      }
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue("is_internal_tester");
    }
    function h(e) {
      return p(e) || g();
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue(
        "group_history_after_join_prerequisites",
      );
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "group_history_after_join_sender_prerequisites",
      );
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "group_history_receiver_dedup",
      );
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue(
        "group_history_send_once_default_on",
      );
    }
    function S() {
      return o("WAWebABProps").getABPropConfigValue(
        "group_history_send_default_on",
      );
    }
    function R() {
      return o("WAWebABProps").getABPropConfigValue(
        "group_history_per_group_toggle_md_sync",
      );
    }
    function L() {
      return r("justknobx")._("5870");
    }
    function E() {
      return r("justknobx")._("5932");
    }
    ((l.isGroupHistoryReceiverEnabled = e),
      (l.isGroupHistorySenderEnabled = s),
      (l.isGroupHistorySettingsToggleUIEnabled = u),
      (l.isGroupHistorySenderReportingTokenEnabled = c),
      (l.isGroupHistoryReceiverReportingTokenEnabled = d),
      (l.isOutOfWindowPinSenderEnabled = m),
      (l.isGroupHistoryPostJoinSenderEnabled = p),
      (l.getGroupHistoryMessagesTimeLimitSecs = f),
      (l.isGroupHistoryPostJoinSenderOrInternalTesterEnabled = h),
      (l.isGroupHistoryAfterJoinPrerequisitesEnabled = y),
      (l.isGroupHistoryPostJoinSenderPrerequisitesEnabled = C),
      (l.isGroupHistoryReceiverDedupEnabled = b),
      (l.isGroupHistorySendOnceDefaultOnEnabled = v),
      (l.isGroupHistorySendDefaultOnEnabled = S),
      (l.isGroupHistoryPerGroupToggleMdSyncEnabled = R),
      (l.shouldSkipUnsupportedMessagesFromBundle = L),
      (l.isSystemMessageDotClarificationEnabled = E));
  },
  98,
);
