__d(
  "WAWebPollsGatingUtils",
  ["WAWebABProps", "WAWebNewsletterCommonGatingUtils", "WAWebWid"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return Math.min(
        o("WAWebABProps").getABPropConfigValue("poll_name_length"),
        500,
      );
    }
    function s() {
      return 5e3;
    }
    function u() {
      return Math.min(
        o("WAWebABProps").getABPropConfigValue("poll_option_length"),
        255,
      );
    }
    function c() {
      return 2500;
    }
    function d() {
      return Math.min(
        o("WAWebABProps").getABPropConfigValue("poll_option_count"),
        20,
      );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "poll_result_details_view_enabled",
      );
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "polls_fast_follow_enabled",
      );
    }
    function _() {
      return p();
    }
    function f() {
      return p();
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "polls_single_option_control_enabled",
      );
    }
    function h(e) {
      return r("WAWebWid").isNewsletter(e) === !0
        ? o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()
        : g() ||
            o("WAWebABProps").getABPropConfigValue(
              "polls_single_option_sender_control_enabled",
            );
    }
    function y(e) {
      return (
        h(e) ||
        o("WAWebABProps").getABPropConfigValue(
          "polls_single_option_receiver_control_enabled",
        )
      );
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "polls_notification_enabled",
      );
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "poll_result_snapshot_message_receiver_enabled",
      );
    }
    function v() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "poll_creator_edit_receiving_version",
        ) > 0
      );
    }
    function S() {
      return o("WAWebABProps").getABPropConfigValue(
        "poll_end_time_receiving_enabled",
      );
    }
    function R() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "poll_hide_voters_receiving_enabled",
        ) > 0
      );
    }
    function L() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "poll_add_option_receiving_enabled",
        ) > 0
      );
    }
    function E() {
      return o("WAWebABProps").getABPropConfigValue(
        "tappable_links_in_poll_option_enabled",
      );
    }
    ((l.getMaxPollNameLength = e),
      (l.getMaxPollNameLengthForIncomingMessages = s),
      (l.getMaxPollOptionLength = u),
      (l.getMaxPollOptionLengthForIncomingMessages = c),
      (l.getMaxPollOptionCount = d),
      (l.isPollResultDetailsViewEnabled = m),
      (l.arePollsFastFollowsEnabled = p),
      (l.isPrefillPollQuestionEnabled = _),
      (l.isPollsCancellationPromptEnabled = f),
      (l.isSingleOptionPollsSendingEnabled = h),
      (l.isSingleOptionPollsReceivingEnabled = y),
      (l.arePollsNotificationsEnabled = C),
      (l.isPollResultSnapshotReceivingEnabled = b),
      (l.isPollCreatorEditReceivingEnabled = v),
      (l.isPollEndTimeReceivingEnabled = S),
      (l.isPollHideVotersReceivingEnabled = R),
      (l.isPollAddOptionReceivingEnabled = L),
      (l.isTappableLinksInPollOptionEnabled = E));
  },
  98,
);
