__d(
  "WAWebUnknownUserDisplayedLogger",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebCurrentUser",
    "WAWebLidMigrationUtils",
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
      d = 6 * o("WATimeUtils").HOUR_SECONDS;
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
    function _() {
      if (
        !o("WAWebUsernameGatingUtils").usernameUnknownUserLoggingEnabled() ||
        !o(
          "WAWebUsernameGatingUtils",
        ).usernameAdoptionAndEngagementMonitoringEnabled()
      )
        return !1;
      var e = o("WAWebABProps").getABPropConfigValue(
        "unknown_user_wam_max_events_per_window",
      );
      if (e <= 0) return !1;
      var t = o("WATimeUtils").unixTime(),
        n = m(),
        r,
        a;
      return (
        n != null && t - n.start < d
          ? ((r = n.start), (a = n.count))
          : ((r = t), (a = 0)),
        a >= e ? !1 : (p({ count: a + 1, start: r }), !0)
      );
    }
    function f(e) {
      return e.isBot()
        ? "bot"
        : e.isLid()
          ? "lid"
          : e.isGroup()
            ? "group"
            : "pn";
    }
    function g(e) {
      if (
        o("WAWebUsernameGatingUtils").unknownUserTargetRidLoggingEnabled() &&
        (e.isLid() || e.isRegularUserPn())
      ) {
        var t;
        return (t = o("WAWebLidMigrationUtils").toUserLid(e)) == null
          ? void 0
          : t.user;
      }
    }
    function h(e, t, n) {
      var r, a, i, l, s, d, m;
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
        new (o(
          "WAWebUsernameUnknownUserDisplayedWamEvent",
        ).UsernameUnknownUserDisplayedWamEvent)({
          unknownUserDisplayContext: e,
          clientTsMs: n.clientTsMs,
          jidType: f(t),
          unknownUserDisplayLid: (r = g(t)) != null ? r : void 0,
          isFirstDisplay: (a = n.isFirstDisplay) != null ? a : void 0,
          durationInSecs: (i = n.durationInSecs) != null ? i : void 0,
          hasUn: (l = n.hasUn) != null ? l : void 0,
          hasPn: (s = n.hasPn) != null ? s : void 0,
          hasPush: (d = n.hasPush) != null ? d : void 0,
          inDb: (m = n.inDb) != null ? m : void 0,
        }).commit());
    }
    ((l.WINDOW_SECONDS = d),
      (l.reserveUnknownUserEmission = _),
      (l.commitUnknownUserDisplayed = h));
  },
  98,
);
