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
      var e;
      return (e = v()) != null ? e : S();
    }
    function L() {
      var e;
      return (e = p()) != null
        ? e
        : o("WAWebUserUtils").getMeDeviceLidOrThrow();
    }
    function E() {
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).removePnDependenciesEnabled()
        ? S()
        : o("WAWebUserUtils").getMePnUserOrThrow_DO_NOT_USE();
    }
    function k() {
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).removePnDependenciesEnabled()
        ? o("WAWebUserUtils").getMeDeviceLidOrThrow()
        : m();
    }
    function I(e) {
      (h(),
        o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
          o("WAWebUserPrefsKeys").KEYS.LAST_WID_MD,
          e == null ? null : e.toString(),
        ),
        o("WABaseGlobals").setMyJids(o("WAWebWidToJid").widToMyJids(e)));
    }
    function T(e) {
      (b(),
        o("WAWebRuntimeEnvironmentUtils").isWorker()
          ? o("WAWebGlobals").setMyLidDeviceJid(e.toString())
          : o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
              o("WAWebUserPrefsKeys").KEYS.LID,
              e.toString(),
            ));
    }
    function D() {
      o("WAWebRuntimeEnvironmentUtils").isWorker() &&
        o("WAWebGlobals").getMyDisplayName();
      var e = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
        o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME,
      );
      if (typeof e == "string") return e;
    }
    function x(e) {
      o("WAWebRuntimeEnvironmentUtils").isWorker()
        ? o("WAWebGlobals").setMyDisplayName(e)
        : o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
            o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME,
            e,
          );
    }
    function $(e) {
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
    function P(e) {
      return e == null || !$(e) ? !1 : M(e) || N(e);
    }
    function N(e) {
      var t = g();
      return t != null && e.isSameAccountAndAddressingMode(t);
    }
    function M(e) {
      var t = d();
      return t != null && e.isSameAccountAndAddressingMode(t);
    }
    function w(e) {
      if (e == null || !$(e)) return !1;
      var t = c();
      if (t != null && e.equals(t)) return !0;
      var n = d();
      return n != null && e.equals(n);
    }
    function A(e) {
      if (e == null || !$(e)) return !1;
      var t = C();
      if (t != null && e.equals(t)) return !0;
      var n = g();
      return n != null && e.equals(n);
    }
    function F(e) {
      return P(o("WAWebWidFactory").createWid(e));
    }
    function O() {
      var e = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
        o("WAWebUserPrefsKeys").KEYS.UNKNOWN_ID,
      );
      return (
        (typeof e != "string" || e === "") &&
          ((e = "unknown-" + Math.floor(Math.random() * 1e10)), B(e)),
        e
      );
    }
    function B(e) {
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
      (l.getMePnOrLidUserOrThrow = R),
      (l.getMePnOrLidDeviceOrThrow = L),
      (l.getMeUserOrThrow = E),
      (l.getMeDeviceOrThrow = k),
      (l.setMePn = I),
      (l.setMeLid = T),
      (l.getMaybeMeDisplayName = D),
      (l.setMeDisplayName = x),
      (l.isMeAccount = P),
      (l.isMePnUser = N),
      (l.isMeDevice = w),
      (l.isMePrimary = A),
      (l.isSerializedWidMe = F),
      (l.getUnknownId = O),
      (l.setUnknownId = B));
  },
  98,
);
