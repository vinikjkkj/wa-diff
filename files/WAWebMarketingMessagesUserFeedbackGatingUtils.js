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
      var e = o("WAWebABProps").getABPropConfigValue(
        "mm_user_controls_exception_number_prefixes",
      );
      return e === ""
        ? []
        : e.split(",").map(function (e) {
            return e.trim();
          });
    }
    function m(e) {
      if (e == null) return !1;
      var t = d();
      return t.some(function (t) {
        return e.toString().startsWith(t);
      });
    }
    function p(e) {
      return _(e) && c();
    }
    function _(e) {
      return (
        (e.isMarketingMessageThread || e.isEverOptedOutOfMarketingMessages) &&
        u() &&
        !m(e.id)
      );
    }
    ((l.isMMMessageLevelFeedbackNotInterestedMenuEnabled = e),
      (l.isMMOptOutAlwaysUseLidInGraphQLEnabled = s),
      (l.isMMOptOutEnabled = u),
      (l.isMMUserControlsUnifiedStopEnabled = c),
      (l.getMMUserControlsExceptionNumberPrefixes = d),
      (l.isMMUserControlsExceptionNumberPrefixMatch = m),
      (l.shouldShowUnifiedMMControls = p),
      (l.isMMUserControlsEligible = _));
  },
  98,
);
