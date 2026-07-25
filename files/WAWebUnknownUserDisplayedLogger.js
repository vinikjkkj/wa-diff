__d(
  "WAWebUnknownUserDisplayedLogger",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameUnknownUserDisplayedWamEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 6 * o("WATimeUtils").HOUR_SECONDS,
      c = -1,
      d = new Set();
    function m() {
      var t = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.UNKNOWN_USER_WAM_WINDOW,
      );
      if (t == null) return null;
      if (typeof t != "object")
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "WAWebUnknownUserDisplayedLogger: persisted WAM window is not an object; resetting",
                ])),
            )
            .sendLogs("unknown-user-wam-window-malformed"),
          null
        );
      var n = t.count,
        a = t.start;
      return typeof n != "number" || typeof a != "number"
        ? (o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "WAWebUnknownUserDisplayedLogger: persisted WAM window missing numeric count/start; resetting",
                ])),
            )
            .sendLogs("unknown-user-wam-window-malformed"),
          null)
        : { count: n, start: o("WATimeUtils").castToUnixTime(a) };
    }
    function p(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.UNKNOWN_USER_WAM_WINDOW,
        e,
      );
    }
    function _(e, t) {
      if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
        var n = o("WAWebABProps").getABPropConfigValue(
          "unknown_user_wam_max_events_per_window",
        );
        if (!(n <= 0)) {
          var r = o("WATimeUtils").unixTime(),
            a = m(),
            i,
            l;
          (a != null && r - a.start < u
            ? ((i = a.start), (l = a.count))
            : ((i = r), (l = 0)),
            i !== c && ((c = i), d.clear()));
          var s = t + "_" + e;
          d.has(s) ||
            l >= n ||
            (d.add(s),
            p({ count: l + 1, start: i }),
            new (o(
              "WAWebUsernameUnknownUserDisplayedWamEvent",
            ).UsernameUnknownUserDisplayedWamEvent)({
              unknownUserDisplayContext: e,
            }).commit());
        }
      }
    }
    ((l.WINDOW_SECONDS = u), (l.logUnknownUserDisplayed = _));
  },
  98,
);
