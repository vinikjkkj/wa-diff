__d(
  "WAWebMarketingMessagesUserFeedbackGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "mm_message_level_feedback_enabled",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "mm_message_level_feedback_not_interested_menu_enabled",
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "mm_opt_out_lid_migration_enabled",
      );
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue("mm_opt_out_enabled");
    }
    function d() {
      o("WAWebABProps").getABPropConfigValue("mm_user_controls_exposure");
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "mm_opt_out_fmx_stop_for_high_trust",
      );
    }
    function p() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "mm_user_controls_exception_number_prefixes",
      );
      return e === ""
        ? []
        : e.split(",").map(function (e) {
            return e.trim();
          });
    }
    function _(e) {
      if (e == null) return !1;
      var t = p();
      return t.some(function (t) {
        return e.toString().startsWith(t);
      });
    }
    ((l.isMMMessageLevelFeedbackEnabled = e),
      (l.isMMMessageLevelFeedbackNotInterestedMenuEnabled = s),
      (l.isMMOptOutAlwaysUseLidInGraphQLEnabled = u),
      (l.isMMOptOutEnabled = c),
      (l.triggerExposureMMUserControls = d),
      (l.isMMStopInFMXEnabled = m),
      (l.getMMUserControlsExceptionNumberPrefixes = p),
      (l.isMMUserControlsExceptionNumberPrefixMatch = _));
  },
  98,
);
