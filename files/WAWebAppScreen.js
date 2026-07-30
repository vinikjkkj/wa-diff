__d(
  "WAWebAppScreen",
  [
    "$InternalEnum",
    "WAWebAppMutex",
    "WAWebBuildConstants",
    "WAWebStreamModel",
    "cr:11133",
    "cr:12321",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored([
      "ANOTHER_SESSION",
      "CALL_TAKEOVER_PREVENTION",
      "QR",
      "SYNCING",
      "OFFLINE",
      "PROXYBLOCK",
      "CONFLICT",
      "TOS_BLOCK",
      "SMB_TOS_BLOCK",
      "MAIN",
      "STARTUP",
      "TEMP_BAN",
      "LOGOUT",
      "SCREEN_LOCK",
      "SERVICE_UNAVAILABLE",
    ]);
    function s(t) {
      var a,
        i = t.anotherSession,
        l = t.mainLoaded,
        s = t.mode,
        u = t.screenLocked;
      if ((a = t.temporaryBan) != null && a.banned) return e.TEMP_BAN;
      if (t.serviceUnavailable === !0) return e.SERVICE_UNAVAILABLE;
      if (t.startLogout) return e.LOGOUT;
      if (r("WAWebAppMutex").hasShownCallTakeoverModal())
        return e.CALL_TAKEOVER_PREVENTION;
      if (i) return e.ANOTHER_SESSION;
      if (u) return l ? e.SCREEN_LOCK : e.STARTUP;
      switch (s) {
        case o("WAWebStreamModel").StreamMode.QR:
          return e.QR;
        case o("WAWebStreamModel").StreamMode.SYNCING:
          return (n("cr:11133") == null ? void 0 : n("cr:11133")()) === !0 &&
            l &&
            (n("cr:12321") == null
              ? void 0
              : n("cr:12321").isMeUserRestored()) === !0
            ? e.MAIN
            : e.SYNCING;
        case o("WAWebStreamModel").StreamMode.OFFLINE:
          return l && o("WAWebBuildConstants").WINDOWS_OFFLINE
            ? e.MAIN
            : e.OFFLINE;
        case o("WAWebStreamModel").StreamMode.PROXYBLOCK:
          return e.PROXYBLOCK;
        case o("WAWebStreamModel").StreamMode.CONFLICT:
          return e.CONFLICT;
        case o("WAWebStreamModel").StreamMode.TOS_BLOCK:
          return e.TOS_BLOCK;
        case o("WAWebStreamModel").StreamMode.SMB_TOS_BLOCK:
          return e.SMB_TOS_BLOCK;
        case o("WAWebStreamModel").StreamMode.MAIN:
          return o("WAWebBuildConstants").WINDOWS_OFFLINE
            ? e.MAIN
            : l
              ? t.stayInSync &&
                (n("cr:11133") == null ? void 0 : n("cr:11133")()) !== !0
                ? e.SYNCING
                : e.MAIN
              : e.STARTUP;
      }
      throw r("err")("[app] render Error invalid StreamMode: " + s);
    }
    ((l.AppScreen = e), (l.getScreen = s));
  },
  98,
);
