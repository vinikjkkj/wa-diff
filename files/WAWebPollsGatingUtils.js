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
      (l.isTappableLinksInPollOptionEnabled = h));
  },
  98,
);
