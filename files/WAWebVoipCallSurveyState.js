__d(
  "WAWebVoipCallSurveyState",
  ["WALogger", "WAWebABProps", "WAWebUserPrefsVoip"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = null,
      p = !1;
    function _() {
      return (
        p || ((m = o("WAWebUserPrefsVoip").getLastCallRatingTime()), (p = !0)),
        m
      );
    }
    function f(t) {
      if (t < 0)
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: shouldShowSurveyBasedOnInterval: Survey disabled by VoIP stack (userRatingInterval=",
                ")",
              ])),
            t,
          ),
          !1
        );
      var n = o("WAWebABProps").getABPropConfigValue(
          "new_end_call_survey_pop_up_user_interval_s",
        ),
        r = n != null && n >= 0 ? n : t;
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "voip: shouldShowSurveyBasedOnInterval: abPropInterval=",
            ", userRatingInterval=",
            ", effectiveInterval=",
            "",
          ])),
        n,
        t,
        r,
      );
      var a = Math.floor(Date.now() / 1e3),
        i = _();
      if (i == null)
        return (
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: shouldShowSurveyBasedOnInterval: No previous survey, allowing (interval=",
                ")",
              ])),
            r,
          ),
          !0
        );
      var l = a - i,
        d = l >= r;
      return (
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "voip: shouldShowSurveyBasedOnInterval: lastRatingTime=",
              ", secondsSince=",
              ", interval=",
              ", shouldShow=",
              "",
            ])),
          i,
          l,
          r,
          d,
        ),
        d
      );
    }
    function g() {
      var e = Math.floor(Date.now() / 1e3);
      ((m = e),
        o("WAWebUserPrefsVoip").setLastCallRatingTime(e),
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "voip: recordSurveyShown: ",
              "",
            ])),
          e,
        ));
    }
    ((l.shouldShowSurveyBasedOnInterval = f), (l.recordSurveyShown = g));
  },
  98,
);
