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
      u = "chat_list_";
    function c(e) {
      var t = e.age,
        n = e.isCtwa,
        r = e.lastMsg,
        o = e.origin,
        a = "" + u + o + "_" + r + "_" + t;
      return n ? a + "_ctwa" : a;
    }
    function d(e) {
      return e.startsWith(u);
    }
    var m = 6 * o("WATimeUtils").HOUR_SECONDS;
    function p() {
      return o("WAWebPersistedPrefObject").readPersistedPrefObject(
        o("WAWebUserPrefsKeys").KEYS.UNKNOWN_USER_WAM_WINDOW,
        _,
        "unknown-user-wam-window-malformed",
      );
    }
    function _(e) {
      var t = e.count,
        n = e.start;
      return typeof t != "number" || typeof n != "number"
        ? null
        : { count: t, start: o("WATimeUtils").castToUnixTime(n) };
    }
    function f(e) {
      o("WAWebPersistedPrefObject").writePersistedPrefObject(
        o("WAWebUserPrefsKeys").KEYS.UNKNOWN_USER_WAM_WINDOW,
        e,
      );
    }
    function g() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "username_unknown_user_logging_enabled",
        ) &&
        o(
          "WAWebUsernameGatingUtils",
        ).usernameAdoptionAndEngagementMonitoringEnabled()
      );
    }
    function h() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "unknown_user_wam_max_events_per_window",
      );
      if (e <= 0) return !1;
      var t = o("WATimeUtils").unixTime(),
        n = p(),
        r,
        a;
      return (
        n != null && t - n.start < m
          ? ((r = n.start), (a = n.count))
          : ((r = t), (a = 0)),
        a >= e ? !1 : (f({ count: a + 1, start: r }), !0)
      );
    }
    function y(e) {
      return e.isBot()
        ? "bot"
        : e.isLid()
          ? "lid"
          : e.isGroup()
            ? "group"
            : "pn";
    }
    function C(e) {
      if (
        o("WAWebABProps").getABPropConfigValue(
          "unknown_user_target_rid_logging",
        ) &&
        (e.isLid() || e.isRegularUserPn())
      ) {
        var t;
        return (t = o("WAWebLidMigrationUtils").toUserLid(e)) == null
          ? void 0
          : t.user;
      }
    }
    function b(t, n, r) {
      var a, i, l, u, c, d, m, p;
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
          jidType: y(n),
          unknownUserDisplayLid: (a = C(n)) != null ? a : void 0,
          isFirstDisplay: (i = r.isFirstDisplay) != null ? i : void 0,
          durationInSecs: (l = r.durationInSecs) != null ? l : void 0,
          hasUn: (u = r.hasUn) != null ? u : void 0,
          hasPn: (c = r.hasPn) != null ? c : void 0,
          hasPush: (d = r.hasPush) != null ? d : void 0,
          inDb: (m = r.inDb) != null ? m : void 0,
          unknownUserRecoveryPath:
            (p = r.unknownUserRecoveryPath) != null ? p : void 0,
        }).commit());
    }
    ((l.getChatListUnknownUserDisplayContext = c),
      (l.isChatListUnknownUserDisplayContext = d),
      (l.WINDOW_SECONDS = m),
      (l.unknownUserLoggingEnabled = g),
      (l.reserveUnknownUserEmission = h),
      (l.commitUnknownUserDisplayed = b));
  },
  98,
);
