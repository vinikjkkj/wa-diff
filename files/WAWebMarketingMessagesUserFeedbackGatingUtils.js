__d(
  "WAWebMarketingMessagesUserFeedbackGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "mm_message_level_feedback_not_interested_menu_enabled",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "mm_opt_out_lid_migration_enabled",
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue("mm_opt_out_enabled");
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "mm_user_controls_unified_stop_enabled",
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "mm_user_controls_unified_logging_symmetry_enabled",
      );
    }
    function m() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "mm_user_controls_exception_number_prefixes",
      );
      return e === ""
        ? []
        : e.split(",").map(function (e) {
            return e.trim();
          });
    }
    function p(e) {
      if (e == null) return !1;
      var t = m();
      return t.some(function (t) {
        return e.toString().startsWith(t);
      });
    }
    function _(e) {
      return f(e) && c();
    }
    function f(e) {
      return (
        (e.isMarketingMessageThread || e.isEverOptedOutOfMarketingMessages) &&
        u() &&
        !p(e.id)
      );
    }
    ((l.isMMMessageLevelFeedbackNotInterestedMenuEnabled = e),
      (l.isMMOptOutAlwaysUseLidInGraphQLEnabled = s),
      (l.isMMOptOutEnabled = u),
      (l.isMMUserControlsUnifiedStopEnabled = c),
      (l.isMMUserControlsLoggingSymmetryEnabled = d),
      (l.getMMUserControlsExceptionNumberPrefixes = m),
      (l.isMMUserControlsExceptionNumberPrefixMatch = p),
      (l.shouldShowUnifiedMMControls = _),
      (l.isMMUserControlsEligible = f));
  },
  98,
);
