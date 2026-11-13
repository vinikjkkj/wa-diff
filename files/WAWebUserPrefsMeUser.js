__d(
  "WAWebUserPrefsMeUser",
  [
    "WABaseGlobals",
    "WALogger",
    "WAWebBeyondPhoneNumberGatingUtils",
    "WAWebGlobals",
    "WAWebMemoizeWithClearUtils",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebUserPrefsBase",
    "WAWebUserPrefsKeys",
    "WAWebUserUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "err",
    "gkx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c() {
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
    function d(e) {
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
    function m() {
      return c() != null || d(!1) != null;
    }
    var p = o("WAWebMemoizeWithClearUtils").memoizeWithClear(function () {
        var e = c();
        if (e) return o("WAWebWidFactory").asUserWidOrThrow(e);
      }),
      _ = p[0],
      f = p[1],
      g = o("WAWebMemoizeWithClearUtils").memoizeWithClear(function () {
        var e = d();
        return e == null ? null : o("WAWebWidFactory").asUserLidOrThrow(e);
      }),
      h = g[0],
      y = g[1];
    function C() {
      return r("nullthrows")(h(), "meLidUser");
    }
    function b() {
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).removePnDependenciesEnabled()
        ? C()
        : o("WAWebUserUtils").getMePnUserOrThrow_DO_NOT_USE();
    }
    function v() {
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).removePnDependenciesEnabled()
        ? o("WAWebUserUtils").getMeDeviceLidOrThrow()
        : o("WAWebUserUtils").getMeDevicePnOrThrow_DO_NOT_USE();
    }
    function S(e) {
      (f(),
        o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
          o("WAWebUserPrefsKeys").KEYS.LAST_WID_MD,
          e == null ? null : e.toString(),
        ),
        o("WABaseGlobals").setMyJids(o("WAWebWidToJid").widToMyJids(e)));
    }
    function R(e) {
      (y(),
        o("WAWebRuntimeEnvironmentUtils").isWorker()
          ? o("WAWebGlobals").setMyLidDeviceJid(e.toString())
          : o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
              o("WAWebUserPrefsKeys").KEYS.LID,
              e.toString(),
            ));
    }
    function L() {
      o("WAWebRuntimeEnvironmentUtils").isWorker() &&
        o("WAWebGlobals").getMyDisplayName();
      var e = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
        o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME,
      );
      if (typeof e == "string") return e;
    }
    function E(e) {
      o("WAWebRuntimeEnvironmentUtils").isWorker()
        ? o("WAWebGlobals").setMyDisplayName(e)
        : o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
            o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME,
            e,
          );
    }
    function k(e) {
      var t = e instanceof r("WAWebWid");
      if (!t)
        if (r("gkx")("26258"))
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "isWID: input exists but is not WID",
              ])),
          );
        else {
          var n = "";
          try {
            n = JSON.stringify(e);
          } catch (e) {}
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "isWID: input exists but is not WID: ",
                  ", ",
                  "",
                ])),
              n,
              r("err")("").stack,
            )
            .sendLogs("WAWebUserPrefsMeUser-invalid-wid");
        }
      return t;
    }
    function I(e) {
      if (e == null || !k(e)) return !1;
      var t = c();
      if (t != null && e.equals(t)) return !0;
      var n = d();
      return n != null && e.equals(n);
    }
    function T(e) {
      if (e == null || !k(e)) return !1;
      var t = h();
      if (t != null && e.equals(t)) return !0;
      var n = _();
      return n != null && e.equals(n);
    }
    function D() {
      var e = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
        o("WAWebUserPrefsKeys").KEYS.UNKNOWN_ID,
      );
      return (
        (typeof e != "string" || e === "") &&
          ((e = "unknown-" + Math.floor(Math.random() * 1e10)), x(e)),
        e
      );
    }
    function x(e) {
      return o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
        o("WAWebUserPrefsKeys").KEYS.UNKNOWN_ID,
        e,
      );
    }
    ((l.getMaybeMeDevicePn = c),
      (l.getMaybeMeDeviceLid = d),
      (l.getMeDevicePnOrThrow_DO_NOT_USE =
        o("WAWebUserUtils").getMeDevicePnOrThrow_DO_NOT_USE),
      (l.hasLoggedIn = m),
      (l.getMaybeMePnUser = _),
      (l.clearGetMaybeMePnUserCache = f),
      (l.getMaybeMeLidUser = h),
      (l.clearGetMaybeMeLidUserCache = y),
      (l.getMeLidUserOrThrow = C),
      (l.getMeUserOrThrow = b),
      (l.getMeDeviceOrThrow = v),
      (l.setMePn = S),
      (l.setMeLid = R),
      (l.getMaybeMeDisplayName = L),
      (l.setMeDisplayName = E),
      (l.isWidInstance = k),
      (l.isMeDevice = I),
      (l.isMePrimary = T),
      (l.getUnknownId = D),
      (l.setUnknownId = x));
  },
  98,
);
