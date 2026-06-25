__d(
  "WAWebPollsGatingUtils",
  [
    "WAWebABProps",
    "WAWebGroupABProps",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebWid",
    "WAWebWidToJid",
  ],
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
    function m(e) {
      return (
        r("WAWebWid").isNewsletter(e) !== !0 ||
        o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()
      );
    }
    function p() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "poll_creator_edit_receiving_version",
        ) > 0
      );
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "poll_end_time_receiving_enabled",
      );
    }
    function f() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "poll_hide_voters_receiving_enabled",
        ) > 0
      );
    }
    function g() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "poll_add_option_receiving_enabled",
        ) > 0
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "tappable_links_in_poll_option_enabled",
      );
    }
    function y(e) {
      if (o("WAWebABProps").getABPropConfigValue("poll_end_time_enabled"))
        return !0;
      if (e != null)
        try {
          return o("WAWebGroupABProps").getGroupABPropConfigValue(
            o("WAWebWidToJid").widToGroupJid(e),
            "poll_end_time_enabled_group_level",
          );
        } catch (e) {
          return !1;
        }
      return !1;
    }
    function C(e) {
      if (o("WAWebABProps").getABPropConfigValue("poll_hide_voters_enabled"))
        return !0;
      if (e != null)
        try {
          return o("WAWebGroupABProps").getGroupABPropConfigValue(
            o("WAWebWidToJid").widToGroupJid(e),
            "poll_hide_voters_enabled_group_level",
          );
        } catch (e) {
          return !1;
        }
      return !1;
    }
    function b(e) {
      if (o("WAWebABProps").getABPropConfigValue("poll_creator_edit_enabled"))
        return !0;
      if (e != null)
        try {
          return o("WAWebGroupABProps").getGroupABPropConfigValue(
            o("WAWebWidToJid").widToGroupJid(e),
            "poll_creator_edit_enabled_group_level",
          );
        } catch (e) {
          return !1;
        }
      return !1;
    }
    ((l.getMaxPollNameLength = e),
      (l.getMaxPollNameLengthForIncomingMessages = s),
      (l.getMaxPollOptionLength = u),
      (l.getMaxPollOptionLengthForIncomingMessages = c),
      (l.getMaxPollOptionCount = d),
      (l.isSingleOptionPollsSendingEnabled = m),
      (l.isPollCreatorEditReceivingEnabled = p),
      (l.isPollEndTimeReceivingEnabled = _),
      (l.isPollHideVotersReceivingEnabled = f),
      (l.isPollAddOptionReceivingEnabled = g),
      (l.isTappableLinksInPollOptionEnabled = h),
      (l.isPollEndTimeSendingEnabled = y),
      (l.isPollHideVotersSendingEnabled = C),
      (l.isPollCreatorEditSendingEnabled = b));
  },
  98,
);
