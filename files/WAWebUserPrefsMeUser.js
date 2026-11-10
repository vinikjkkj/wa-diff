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
      return r("nullthrows")(d(), "meLid");
    }
    function _() {
      var e;
      return (e = c()) != null ? e : d(!1);
    }
    function f() {
      return _() != null;
    }
    var g = o("WAWebMemoizeWithClearUtils").memoizeWithClear(function () {
        var e = c();
        if (e) return o("WAWebWidFactory").asUserWidOrThrow(e);
      }),
      h = g[0],
      y = g[1],
      C = o("WAWebMemoizeWithClearUtils").memoizeWithClear(function () {
        var e = d();
        return e == null ? null : o("WAWebWidFactory").asUserLidOrThrow(e);
      }),
      b = C[0],
      v = C[1];
    function S() {
      var e;
      return (e = h()) != null ? e : b();
    }
    function R() {
      return o("WAWebWidFactory").asUserWidOrThrow(m());
    }
    function L() {
      return r("nullthrows")(b(), "meLidUser");
    }
    function E() {
      var e;
      return (e = S()) != null ? e : L();
    }
    function k() {
      var e;
      return (e = _()) != null ? e : p();
    }
    function I() {
      var e;
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).removePnDependenciesEnabled()
        ? L()
        : (e = S()) != null
          ? e
          : L();
    }
    function T() {
      var e;
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).removePnDependenciesEnabled()
        ? p()
        : (e = _()) != null
          ? e
          : p();
    }
    function D(e) {
      (y(),
        o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
          o("WAWebUserPrefsKeys").KEYS.LAST_WID_MD,
          e == null ? null : e.toString(),
        ),
        o("WABaseGlobals").setMyJids(o("WAWebWidToJid").widToMyJids(e)));
    }
    function x(e) {
      (v(),
        o("WAWebRuntimeEnvironmentUtils").isWorker()
          ? o("WAWebGlobals").setMyLidDeviceJid(e.toString())
          : o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
              o("WAWebUserPrefsKeys").KEYS.LID,
              e.toString(),
            ));
    }
    function $() {
      o("WAWebRuntimeEnvironmentUtils").isWorker() &&
        o("WAWebGlobals").getMyDisplayName();
      var e = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
        o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME,
      );
      if (typeof e == "string") return e;
    }
    function P(e) {
      o("WAWebRuntimeEnvironmentUtils").isWorker()
        ? o("WAWebGlobals").setMyDisplayName(e)
        : o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
            o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME,
            e,
          );
    }
    function N(e) {
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
    function M(e) {
      return e == null || !N(e) ? !1 : A(e) || w(e);
    }
    function w(e) {
      var t = h();
      return t != null && e.isSameAccountAndAddressingMode(t);
    }
    function A(e) {
      var t = d();
      return t != null && e.isSameAccountAndAddressingMode(t);
    }
    function F(e) {
      if (e == null || !N(e)) return !1;
      var t = c();
      if (t != null && e.equals(t)) return !0;
      var n = d();
      return n != null && e.equals(n);
    }
    function O(e) {
      if (e == null || !N(e)) return !1;
      var t = b();
      if (t != null && e.equals(t)) return !0;
      var n = h();
      return n != null && e.equals(n);
    }
    function B(e) {
      return M(o("WAWebWidFactory").createWid(e));
    }
    function W() {
      var e = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
        o("WAWebUserPrefsKeys").KEYS.UNKNOWN_ID,
      );
      return (
        (typeof e != "string" || e === "") &&
          ((e = "unknown-" + Math.floor(Math.random() * 1e10)), q(e)),
        e
      );
    }
    function q(e) {
      return o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
        o("WAWebUserPrefsKeys").KEYS.UNKNOWN_ID,
        e,
      );
    }
    ((l.getMaybeMeDevicePn = c),
      (l.getMaybeMeDeviceLid = d),
      (l.getMeDevicePnOrThrow_DO_NOT_USE = m),
      (l.getMeDeviceLidOrThrow = p),
      (l.getMaybeMePnOrLidDevice = _),
      (l.hasLoggedIn = f),
      (l.getMaybeMePnUser = h),
      (l.clearGetMaybeMePnUserCache = y),
      (l.getMaybeMeLidUser = b),
      (l.clearGetMaybeMeLidUserCache = v),
      (l.getMaybeMePnOrLidUser = S),
      (l.getMePnUserOrThrow_DO_NOT_USE = R),
      (l.getMeLidUserOrThrow = L),
      (l.getMePnOrLidUserOrThrow = E),
      (l.getMePnOrLidDeviceOrThrow = k),
      (l.getMeUserOrThrow = I),
      (l.getMeDeviceOrThrow = T),
      (l.setMePn = D),
      (l.setMeLid = x),
      (l.getMaybeMeDisplayName = $),
      (l.setMeDisplayName = P),
      (l.isMeAccount = M),
      (l.isMePnUser = w),
      (l.isMeDevice = F),
      (l.isMePrimary = O),
      (l.isSerializedWidMe = B),
      (l.getUnknownId = W),
      (l.setUnknownId = q));
  },
  98,
);
