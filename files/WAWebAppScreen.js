__d(
  "WAWebAppScreen",
  [
    "WAWebAppMutex",
    "WAWebAppScreenTypes",
    "WAWebBuildConstants",
    "WAWebStreamModel",
    "cr:11133",
    "cr:12321",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        a = e.anotherSession,
        i = e.mainLoaded,
        l = e.mode,
        s = e.screenLocked;
      if ((t = e.temporaryBan) != null && t.banned)
        return o("WAWebAppScreenTypes").AppScreen.TEMP_BAN;
      if (e.serviceUnavailable === !0)
        return o("WAWebAppScreenTypes").AppScreen.SERVICE_UNAVAILABLE;
      if (e.startLogout) return o("WAWebAppScreenTypes").AppScreen.LOGOUT;
      if (r("WAWebAppMutex").hasShownCallTakeoverModal())
        return o("WAWebAppScreenTypes").AppScreen.CALL_TAKEOVER_PREVENTION;
      if (a) return o("WAWebAppScreenTypes").AppScreen.ANOTHER_SESSION;
      if (s)
        return i
          ? o("WAWebAppScreenTypes").AppScreen.SCREEN_LOCK
          : o("WAWebAppScreenTypes").AppScreen.STARTUP;
      switch (l) {
        case o("WAWebStreamModel").StreamMode.QR:
          return o("WAWebAppScreenTypes").AppScreen.QR;
        case o("WAWebStreamModel").StreamMode.SYNCING:
          return (n("cr:11133") == null ? void 0 : n("cr:11133")()) === !0 &&
            i &&
            (n("cr:12321") == null
              ? void 0
              : n("cr:12321").isMeUserRestored()) === !0
            ? o("WAWebAppScreenTypes").AppScreen.MAIN
            : o("WAWebAppScreenTypes").AppScreen.SYNCING;
        case o("WAWebStreamModel").StreamMode.OFFLINE:
          return i && o("WAWebBuildConstants").WINDOWS_OFFLINE
            ? o("WAWebAppScreenTypes").AppScreen.MAIN
            : o("WAWebAppScreenTypes").AppScreen.OFFLINE;
        case o("WAWebStreamModel").StreamMode.PROXYBLOCK:
          return o("WAWebAppScreenTypes").AppScreen.PROXYBLOCK;
        case o("WAWebStreamModel").StreamMode.CONFLICT:
          return o("WAWebAppScreenTypes").AppScreen.CONFLICT;
        case o("WAWebStreamModel").StreamMode.TOS_BLOCK:
          return o("WAWebAppScreenTypes").AppScreen.TOS_BLOCK;
        case o("WAWebStreamModel").StreamMode.SMB_TOS_BLOCK:
          return o("WAWebAppScreenTypes").AppScreen.SMB_TOS_BLOCK;
        case o("WAWebStreamModel").StreamMode.MAIN:
          return o("WAWebBuildConstants").WINDOWS_OFFLINE
            ? o("WAWebAppScreenTypes").AppScreen.MAIN
            : i
              ? e.stayInSync &&
                (n("cr:11133") == null ? void 0 : n("cr:11133")()) !== !0
                ? o("WAWebAppScreenTypes").AppScreen.SYNCING
                : o("WAWebAppScreenTypes").AppScreen.MAIN
              : o("WAWebAppScreenTypes").AppScreen.STARTUP;
      }
      throw r("err")("[app] render Error invalid StreamMode: " + l);
    }
    l.getScreen = e;
  },
  98,
);
