__d(
  "WAWebUserPrefsMeUser",
  [
    "WABaseGlobals",
    "WALogger",
    "WANullthrows",
    "WAWebBeyondPhoneNumberGatingUtils",
    "WAWebGlobals",
    "WAWebMemoizeWithClearUtils",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebUserPrefsBase",
    "WAWebUserPrefsKeys",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c() {
      if (o("WAWebRuntimeEnvironmentUtils").isWorker())
        return o("WAWebWidFactory").createWid(
          o("WAWebGlobals").getMyDeviceJid(),
        );
      var e = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
        o("WAWebUserPrefsKeys").KEYS.LAST_WID_MD,
      );
      if (typeof e == "string" && r("WAWebWid").isWid(e))
        return o("WAWebWidFactory").createWid(e);
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
      return r("WANullthrows")(c(), "me");
    }
    function p() {
      return r("WANullthrows")(d(), "meLid");
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
      return o("WAWebWidFactory").asUserWidOrThrow(m());
    }
    function v() {
      return r("WANullthrows")(y(), "meLidUser");
    }
    function S() {
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).removePnDependenciesEnabled()
        ? v()
        : b();
    }
    function R() {
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).removeDevicePnDependenciesEnabled()
        ? p()
        : m();
    }
    function L() {
      return r("WANullthrows")(T(), "meDisplayName");
    }
    function E() {
      var e = d();
      return e == null ? [m()] : [m(), e];
    }
    function k(e) {
      (g(),
        o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
          o("WAWebUserPrefsKeys").KEYS.LAST_WID_MD,
          e == null ? null : e.toString(),
        ),
        o("WABaseGlobals").setMyJids(o("WAWebWidToJid").widToMyJids(e)));
    }
    function I(e) {
      (C(),
        o("WAWebRuntimeEnvironmentUtils").isWorker()
          ? o("WAWebGlobals").setMyLidDeviceJid(e.toString())
          : o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
              o("WAWebUserPrefsKeys").KEYS.LID,
              e.toString(),
            ));
    }
    function T() {
      o("WAWebRuntimeEnvironmentUtils").isWorker() &&
        o("WAWebGlobals").getMyDisplayName();
      var e = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
        o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME,
      );
      if (typeof e == "string") return e;
    }
    function D(e) {
      o("WAWebRuntimeEnvironmentUtils").isWorker()
        ? o("WAWebGlobals").setMyDisplayName(e)
        : o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
            o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME,
            e,
          );
    }
    function x(e) {
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
              new Error().stack,
            )
            .sendLogs("WAWebUserPrefsMeUser-invalid-wid");
        }
      return t;
    }
    function $(e) {
      return e == null || !x(e) ? !1 : N(e) || M(e);
    }
    function P(e) {
      return e == null || !x(e) ? !1 : N(e);
    }
    function N(e) {
      var t = f();
      return t != null && e.isSameAccountAndAddressingMode(t);
    }
    function M(e) {
      var t = d();
      return t != null && e.isSameAccountAndAddressingMode(t);
    }
    function w(e) {
      if (e == null || !x(e)) return !1;
      if (e.equals(m())) return !0;
      var t = d();
      return t != null && e.equals(t);
    }
    function A(e) {
      if (e == null || !x(e)) return !1;
      if (e.equals(b())) return !0;
      var t = y();
      return t != null && e.equals(t);
    }
    function F(e) {
      return e == null || !x(e) ? !1 : !!e.equals(b());
    }
    function O(e) {
      return $(o("WAWebWidFactory").createWid(e));
    }
    function B() {
      var e = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
        o("WAWebUserPrefsKeys").KEYS.UNKNOWN_ID,
      );
      return (
        (typeof e != "string" || e === "") &&
          ((e = "unknown-" + Math.floor(Math.random() * 1e10)), W(e)),
        e
      );
    }
    function W(e) {
      return o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
        o("WAWebUserPrefsKeys").KEYS.UNKNOWN_ID,
        e,
      );
    }
    ((l.getMaybeMeDevicePn = c),
      (l.getMaybeMeDeviceLid = d),
      (l.getMeDevicePnOrThrow_DO_NOT_USE = m),
      (l.getMeDeviceLidOrThrow = p),
      (l.getMaybeMePnUser = f),
      (l.clearGetMaybeMePnUserCache = g),
      (l.getMaybeMeLidUser = y),
      (l.clearGetMaybeMeLidUserCache = C),
      (l.getMePnUserOrThrow_DO_NOT_USE = b),
      (l.getMeLidUserOrThrow = v),
      (l.getMeUser = S),
      (l.getMeDeviceOrThrow = R),
      (l.getMeDisplayNameOrThrow = L),
      (l.getMePNandLIDWids = E),
      (l.setMe = k),
      (l.setMeLid = I),
      (l.getMaybeMeDisplayName = T),
      (l.setMeDisplayName = D),
      (l.isMeAccount = $),
      (l.isMeAccountNonLid = P),
      (l.isMePnUser = N),
      (l.isMeDevice = w),
      (l.isMePrimary = A),
      (l.isMePrimaryNonLid = F),
      (l.isSerializedWidMe = O),
      (l.getUnknownId = B),
      (l.setUnknownId = W));
  },
  98,
);
