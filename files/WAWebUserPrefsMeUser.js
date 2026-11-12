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
      return r("nullthrows")(c(), "me");
    }
    function p() {
      var e;
      return (e = c()) != null ? e : d(!1);
    }
    function _() {
      return p() != null;
    }
    var f = o("WAWebMemoizeWithClearUtils").memoizeWithClear(function () {
        var e = c();
        if (e) return o("WAWebWidFactory").asUserWidOrThrow(e);
      }),
      g = f[0],
      h = f[1],
      y = o("WAWebMemoizeWithClearUtils").memoizeWithClear(function () {
        var e = d();
        return e == null ? null : o("WAWebWidFactory").asUserLidOrThrow(e);
      }),
      C = y[0],
      b = y[1];
    function v() {
      var e;
      return (e = g()) != null ? e : C();
    }
    function S() {
      return r("nullthrows")(C(), "meLidUser");
    }
    function R() {
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).removePnDependenciesEnabled()
        ? S()
        : o("WAWebUserUtils").getMePnUserOrThrow_DO_NOT_USE();
    }
    function L() {
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).removePnDependenciesEnabled()
        ? o("WAWebUserUtils").getMeDeviceLidOrThrow()
        : m();
    }
    function E(e) {
      (h(),
        o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
          o("WAWebUserPrefsKeys").KEYS.LAST_WID_MD,
          e == null ? null : e.toString(),
        ),
        o("WABaseGlobals").setMyJids(o("WAWebWidToJid").widToMyJids(e)));
    }
    function k(e) {
      (b(),
        o("WAWebRuntimeEnvironmentUtils").isWorker()
          ? o("WAWebGlobals").setMyLidDeviceJid(e.toString())
          : o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
              o("WAWebUserPrefsKeys").KEYS.LID,
              e.toString(),
            ));
    }
    function I() {
      o("WAWebRuntimeEnvironmentUtils").isWorker() &&
        o("WAWebGlobals").getMyDisplayName();
      var e = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
        o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME,
      );
      if (typeof e == "string") return e;
    }
    function T(e) {
      o("WAWebRuntimeEnvironmentUtils").isWorker()
        ? o("WAWebGlobals").setMyDisplayName(e)
        : o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
            o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME,
            e,
          );
    }
    function D(e) {
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
    function x(e) {
      return e == null || !D(e) ? !1 : P(e) || $(e);
    }
    function $(e) {
      var t = g();
      return t != null && e.isSameAccountAndAddressingMode(t);
    }
    function P(e) {
      var t = d();
      return t != null && e.isSameAccountAndAddressingMode(t);
    }
    function N(e) {
      if (e == null || !D(e)) return !1;
      var t = c();
      if (t != null && e.equals(t)) return !0;
      var n = d();
      return n != null && e.equals(n);
    }
    function M(e) {
      if (e == null || !D(e)) return !1;
      var t = C();
      if (t != null && e.equals(t)) return !0;
      var n = g();
      return n != null && e.equals(n);
    }
    function w(e) {
      return x(o("WAWebWidFactory").createWid(e));
    }
    function A() {
      var e = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
        o("WAWebUserPrefsKeys").KEYS.UNKNOWN_ID,
      );
      return (
        (typeof e != "string" || e === "") &&
          ((e = "unknown-" + Math.floor(Math.random() * 1e10)), F(e)),
        e
      );
    }
    function F(e) {
      return o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
        o("WAWebUserPrefsKeys").KEYS.UNKNOWN_ID,
        e,
      );
    }
    ((l.getMaybeMeDevicePn = c),
      (l.getMaybeMeDeviceLid = d),
      (l.getMeDevicePnOrThrow_DO_NOT_USE = m),
      (l.getMaybeMePnOrLidDevice = p),
      (l.hasLoggedIn = _),
      (l.getMaybeMePnUser = g),
      (l.clearGetMaybeMePnUserCache = h),
      (l.getMaybeMeLidUser = C),
      (l.clearGetMaybeMeLidUserCache = b),
      (l.getMaybeMePnOrLidUser = v),
      (l.getMeLidUserOrThrow = S),
      (l.getMeUserOrThrow = R),
      (l.getMeDeviceOrThrow = L),
      (l.setMePn = E),
      (l.setMeLid = k),
      (l.getMaybeMeDisplayName = I),
      (l.setMeDisplayName = T),
      (l.isMeAccount = x),
      (l.isMePnUser = $),
      (l.isMeDevice = N),
      (l.isMePrimary = M),
      (l.isSerializedWidMe = w),
      (l.getUnknownId = A),
      (l.setUnknownId = F));
  },
  98,
);
