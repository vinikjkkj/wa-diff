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
      var e;
      return (e = c()) != null ? e : d(!1);
    }
    function p() {
      return m() != null;
    }
    var _ = o("WAWebMemoizeWithClearUtils").memoizeWithClear(function () {
        var e = c();
        if (e) return o("WAWebWidFactory").asUserWidOrThrow(e);
      }),
      f = _[0],
      g = _[1],
      h = o("WAWebMemoizeWithClearUtils").memoizeWithClear(function () {
        var e = d();
        return e == null ? null : o("WAWebWidFactory").asUserLidOrThrow(e);
      }),
      y = h[0],
      C = h[1];
    function b() {
      var e;
      return (e = f()) != null ? e : y();
    }
    function v() {
      return r("nullthrows")(y(), "meLidUser");
    }
    function S() {
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).removePnDependenciesEnabled()
        ? v()
        : o("WAWebUserUtils").getMePnUserOrThrow_DO_NOT_USE();
    }
    function R() {
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).removePnDependenciesEnabled()
        ? o("WAWebUserUtils").getMeDeviceLidOrThrow()
        : o("WAWebUserUtils").getMeDevicePnOrThrow_DO_NOT_USE();
    }
    function L(e) {
      (g(),
        o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
          o("WAWebUserPrefsKeys").KEYS.LAST_WID_MD,
          e == null ? null : e.toString(),
        ),
        o("WABaseGlobals").setMyJids(o("WAWebWidToJid").widToMyJids(e)));
    }
    function E(e) {
      (C(),
        o("WAWebRuntimeEnvironmentUtils").isWorker()
          ? o("WAWebGlobals").setMyLidDeviceJid(e.toString())
          : o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
              o("WAWebUserPrefsKeys").KEYS.LID,
              e.toString(),
            ));
    }
    function k() {
      o("WAWebRuntimeEnvironmentUtils").isWorker() &&
        o("WAWebGlobals").getMyDisplayName();
      var e = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
        o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME,
      );
      if (typeof e == "string") return e;
    }
    function I(e) {
      o("WAWebRuntimeEnvironmentUtils").isWorker()
        ? o("WAWebGlobals").setMyDisplayName(e)
        : o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
            o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME,
            e,
          );
    }
    function T(e) {
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
    function D(e) {
      if (e == null || !T(e)) return !1;
      var t = c();
      if (t != null && e.equals(t)) return !0;
      var n = d();
      return n != null && e.equals(n);
    }
    function x(e) {
      if (e == null || !T(e)) return !1;
      var t = y();
      if (t != null && e.equals(t)) return !0;
      var n = f();
      return n != null && e.equals(n);
    }
    function $() {
      var e = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
        o("WAWebUserPrefsKeys").KEYS.UNKNOWN_ID,
      );
      return (
        (typeof e != "string" || e === "") &&
          ((e = "unknown-" + Math.floor(Math.random() * 1e10)), P(e)),
        e
      );
    }
    function P(e) {
      return o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
        o("WAWebUserPrefsKeys").KEYS.UNKNOWN_ID,
        e,
      );
    }
    ((l.getMaybeMeDevicePn = c),
      (l.getMaybeMeDeviceLid = d),
      (l.getMeDevicePnOrThrow_DO_NOT_USE =
        o("WAWebUserUtils").getMeDevicePnOrThrow_DO_NOT_USE),
      (l.getMaybeMePnOrLidDevice = m),
      (l.hasLoggedIn = p),
      (l.getMaybeMePnUser = f),
      (l.clearGetMaybeMePnUserCache = g),
      (l.getMaybeMeLidUser = y),
      (l.clearGetMaybeMeLidUserCache = C),
      (l.getMaybeMePnOrLidUser = b),
      (l.getMeLidUserOrThrow = v),
      (l.getMeUserOrThrow = S),
      (l.getMeDeviceOrThrow = R),
      (l.setMePn = L),
      (l.setMeLid = E),
      (l.getMaybeMeDisplayName = k),
      (l.setMeDisplayName = I),
      (l.isWidInstance = T),
      (l.isMeDevice = D),
      (l.isMePrimary = x),
      (l.getUnknownId = $),
      (l.setUnknownId = P));
  },
  98,
);
