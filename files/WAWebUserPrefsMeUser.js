__d(
  "WAWebUserPrefsMeUser",
  [
    "WABaseGlobals",
    "WALogger",
    "WAWebGlobals",
    "WAWebMemoizeWithClearUtils",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebUserPrefsBase",
    "WAWebUserPrefsKeys",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      if (o("WAWebRuntimeEnvironmentUtils").isWorker()) {
        var e = o("WAWebGlobals").getMaybeMyDeviceJid();
        return e == null ? null : o("WAWebWidFactory").createWid(e);
      }
      var t = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
        o("WAWebUserPrefsKeys").KEYS.LAST_WID_MD,
      );
      if (typeof t == "string" && r("WAWebWid").isWid(t))
        return o("WAWebWidFactory").createWid(t);
    }
    function u(e) {
      e === void 0 && (e = !0);
      var t = o("WAWebRuntimeEnvironmentUtils").isWorker()
          ? o("WAWebGlobals").getMyLidDeviceJid()
          : o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
              o("WAWebUserPrefsKeys").KEYS.LID,
            ),
        n = typeof t == "string" ? t : null,
        a = r("WAWebWid").isWid(n);
      return n == null || !a ? null : o("WAWebWidFactory").createWid(n);
    }
    function c() {
      return s() != null || u(!1) != null;
    }
    var d = o("WAWebMemoizeWithClearUtils").memoizeWithClear(function () {
        var e = s();
        if (e) return o("WAWebWidFactory").asUserWidOrThrow(e);
      }),
      m = d[0],
      p = d[1],
      _ = o("WAWebMemoizeWithClearUtils").memoizeWithClear(function () {
        var e = u();
        return e == null ? null : o("WAWebWidFactory").asUserLidOrThrow(e);
      }),
      f = _[0],
      g = _[1];
    function h(e) {
      (p(),
        o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
          o("WAWebUserPrefsKeys").KEYS.LAST_WID_MD,
          e == null ? null : e.toString(),
        ),
        o("WABaseGlobals").setMyJids(o("WAWebWidToJid").widToMyJids(e)));
    }
    function y(e) {
      (g(),
        o("WAWebRuntimeEnvironmentUtils").isWorker()
          ? o("WAWebGlobals").setMyLidDeviceJid(e.toString())
          : o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
              o("WAWebUserPrefsKeys").KEYS.LID,
              e.toString(),
            ));
    }
    function C() {
      o("WAWebRuntimeEnvironmentUtils").isWorker() &&
        o("WAWebGlobals").getMyDisplayName();
      var e = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
        o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME,
      );
      if (typeof e == "string") return e;
    }
    function b(e) {
      o("WAWebRuntimeEnvironmentUtils").isWorker()
        ? o("WAWebGlobals").setMyDisplayName(e)
        : o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
            o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME,
            e,
          );
    }
    function v() {
      var e = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
        o("WAWebUserPrefsKeys").KEYS.UNKNOWN_ID,
      );
      return (
        (typeof e != "string" || e === "") &&
          ((e = "unknown-" + Math.floor(Math.random() * 1e10)), S(e)),
        e
      );
    }
    function S(e) {
      return o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
        o("WAWebUserPrefsKeys").KEYS.UNKNOWN_ID,
        e,
      );
    }
    ((l.getMaybeMeDevicePn = s),
      (l.getMaybeMeDeviceLid = u),
      (l.hasLoggedIn = c),
      (l.getMaybeMePnUser = m),
      (l.clearGetMaybeMePnUserCache = p),
      (l.getMaybeMeLidUser = f),
      (l.clearGetMaybeMeLidUserCache = g),
      (l.setMePn = h),
      (l.setMeLid = y),
      (l.getMaybeMeDisplayName = C),
      (l.setMeDisplayName = b),
      (l.getUnknownId = v),
      (l.setUnknownId = S));
  },
  98,
);
