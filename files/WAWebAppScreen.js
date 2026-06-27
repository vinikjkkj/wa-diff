__d(
  "WAWebAppScreen",
  [
    "$InternalEnum",
    "WAWebAppMutex",
    "WAWebBuildConstants",
    "WAWebStreamModel",
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
      var n,
        a = t.anotherSession,
        i = t.mainLoaded,
        l = t.mode,
        s = t.screenLocked;
      if ((n = t.temporaryBan) != null && n.banned) return e.TEMP_BAN;
      if (t.serviceUnavailable === !0) return e.SERVICE_UNAVAILABLE;
      if (t.startLogout) return e.LOGOUT;
      if (r("WAWebAppMutex").hasShownCallTakeoverModal())
        return e.CALL_TAKEOVER_PREVENTION;
      if (a) return e.ANOTHER_SESSION;
      if (s) return i ? e.SCREEN_LOCK : e.STARTUP;
      switch (l) {
        case o("WAWebStreamModel").StreamMode.QR:
          return e.QR;
        case o("WAWebStreamModel").StreamMode.SYNCING:
          return e.SYNCING;
        case o("WAWebStreamModel").StreamMode.OFFLINE:
          return i && o("WAWebBuildConstants").WINDOWS_OFFLINE
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
            : i
              ? t.stayInSync
                ? e.SYNCING
                : e.MAIN
              : e.STARTUP;
      }
      throw r("err")("[app] render Error invalid StreamMode: " + l);
    }
    ((l.AppScreen = e), (l.getScreen = s));
  },
  98,
);
