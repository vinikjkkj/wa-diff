__d(
  "WAWebUnknownUserDisplayedLogger",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebCurrentUser",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameUnknownUserDisplayedWamEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 6 * o("WATimeUtils").HOUR_SECONDS,
      m = -1,
      p = new Set();
    function _() {
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
    function f(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.UNKNOWN_USER_WAM_WINDOW,
        e,
      );
    }
    function g(e, t) {
      if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
        var n = o("WAWebABProps").getABPropConfigValue(
          "unknown_user_wam_max_events_per_window",
        );
        if (!(n <= 0)) {
          var r = o("WATimeUtils").unixTime(),
            a = _(),
            i,
            l;
          (a != null && r - a.start < d
            ? ((i = a.start), (l = a.count))
            : ((i = r), (l = 0)),
            i !== m && ((m = i), p.clear()));
          var s = t.toString() + "_" + e;
          p.has(s) ||
            l >= n ||
            (o("WAWebCurrentUser").isEmployee()
              ? o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[uname]: Unknown user placeholder shown on ",
                        ", wid=",
                        "",
                      ])),
                    e,
                    t.toString(),
                  )
                  .sendLogs("unknown-user-displayed-employee")
              : o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[uname]: Unknown user placeholder shown on ",
                      "",
                    ])),
                  e,
                ),
            p.add(s),
            f({ count: l + 1, start: i }),
            new (o(
              "WAWebUsernameUnknownUserDisplayedWamEvent",
            ).UsernameUnknownUserDisplayedWamEvent)({
              unknownUserDisplayContext: e,
            }).commit());
        }
      }
    }
    ((l.WINDOW_SECONDS = d), (l.logUnknownUserDisplayed = g));
  },
  98,
);
