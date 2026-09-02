__d(
  "WAWebUnknownUserDisplayedLogger",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebCurrentUser",
    "WAWebLidMigrationUtils",
    "WAWebPersistedPrefObject",
    "WAWebUserPrefsKeys",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameUnknownUserDisplayedWamEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 6 * o("WATimeUtils").HOUR_SECONDS;
    function c() {
      return o("WAWebPersistedPrefObject").readPersistedPrefObject(
        o("WAWebUserPrefsKeys").KEYS.UNKNOWN_USER_WAM_WINDOW,
        d,
        "unknown-user-wam-window-malformed",
      );
    }
    function d(e) {
      var t = e.count,
        n = e.start;
      return typeof t != "number" || typeof n != "number"
        ? null
        : { count: t, start: o("WATimeUtils").castToUnixTime(n) };
    }
    function m(e) {
      o("WAWebPersistedPrefObject").writePersistedPrefObject(
        o("WAWebUserPrefsKeys").KEYS.UNKNOWN_USER_WAM_WINDOW,
        e,
      );
    }
    function p() {
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
        n = c(),
        r,
        a;
      return (
        n != null && t - n.start < u
          ? ((r = n.start), (a = n.count))
          : ((r = t), (a = 0)),
        a >= e ? !1 : (m({ count: a + 1, start: r }), !0)
      );
    }
    function _(e) {
      return e.isBot()
        ? "bot"
        : e.isLid()
          ? "lid"
          : e.isGroup()
            ? "group"
            : "pn";
    }
    function f(e) {
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
    function g(t, n, r) {
      var a, i, l, u, c, d, m;
      (o("WAWebCurrentUser").isEmployee()
        ? o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[uname]: Unknown user placeholder shown on ",
                  ", wid=",
                  "",
                ])),
              t,
              n.toString(),
            )
            .sendLogs("unknown-user-displayed")
        : o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[uname]: Unknown user placeholder shown on ",
                "",
              ])),
            t,
          ),
        new (o(
          "WAWebUsernameUnknownUserDisplayedWamEvent",
        ).UsernameUnknownUserDisplayedWamEvent)({
          unknownUserDisplayContext: t,
          clientTsMs: r.clientTsMs,
          jidType: _(n),
          unknownUserDisplayLid: (a = f(n)) != null ? a : void 0,
          isFirstDisplay: (i = r.isFirstDisplay) != null ? i : void 0,
          durationInSecs: (l = r.durationInSecs) != null ? l : void 0,
          hasUn: (u = r.hasUn) != null ? u : void 0,
          hasPn: (c = r.hasPn) != null ? c : void 0,
          hasPush: (d = r.hasPush) != null ? d : void 0,
          inDb: (m = r.inDb) != null ? m : void 0,
        }).commit());
    }
    ((l.WINDOW_SECONDS = u),
      (l.reserveUnknownUserEmission = p),
      (l.commitUnknownUserDisplayed = g));
  },
  98,
);
