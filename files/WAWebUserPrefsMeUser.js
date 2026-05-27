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
    "err",
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
    function _() {
      var e = d(!1);
      if (e != null) return e.getDeviceId();
      var t = c();
      return t != null ? t.getDeviceId() : null;
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
      return o("WAWebWidFactory").asUserWidOrThrow(m());
    }
    function S() {
      return r("WANullthrows")(C(), "meLidUser");
    }
    function R() {
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).removePnDependenciesEnabled()
        ? S()
        : v();
    }
    function L(e) {
      return e.isLid() ? S() : v();
    }
    function E() {
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).removeDevicePnDependenciesEnabled()
        ? p()
        : m();
    }
    function k() {
      return r("WANullthrows")(x(), "meDisplayName");
    }
    function I() {
      var e = d();
      return e == null ? [m()] : [m(), e];
    }
    function T(e) {
      (h(),
        o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
          o("WAWebUserPrefsKeys").KEYS.LAST_WID_MD,
          e == null ? null : e.toString(),
        ),
        o("WABaseGlobals").setMyJids(o("WAWebWidToJid").widToMyJids(e)));
    }
    function D(e) {
      (b(),
        o("WAWebRuntimeEnvironmentUtils").isWorker()
          ? o("WAWebGlobals").setMyLidDeviceJid(e.toString())
          : o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
              o("WAWebUserPrefsKeys").KEYS.LID,
              e.toString(),
            ));
    }
    function x() {
      o("WAWebRuntimeEnvironmentUtils").isWorker() &&
        o("WAWebGlobals").getMyDisplayName();
      var e = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
        o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME,
      );
      if (typeof e == "string") return e;
    }
    function $(e) {
      o("WAWebRuntimeEnvironmentUtils").isWorker()
        ? o("WAWebGlobals").setMyDisplayName(e)
        : o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
            o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME,
            e,
          );
    }
    function P(e) {
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
    function N(e) {
      return e == null || !P(e) ? !1 : w(e) || M(e);
    }
    function M(e) {
      var t = g();
      return t != null && e.isSameAccountAndAddressingMode(t);
    }
    function w(e) {
      var t = d();
      return t != null && e.isSameAccountAndAddressingMode(t);
    }
    function A(e) {
      if (e == null || !P(e)) return !1;
      if (e.equals(m())) return !0;
      var t = d();
      return t != null && e.equals(t);
    }
    function F(e) {
      if (e == null || !P(e)) return !1;
      var t = C();
      if (t != null && e.equals(t)) return !0;
      var n = g();
      return n != null && e.equals(n);
    }
    function O(e) {
      return N(o("WAWebWidFactory").createWid(e));
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
      (l.getMaybeMeDeviceId = _),
      (l.getMaybeMePnUser = g),
      (l.clearGetMaybeMePnUserCache = h),
      (l.getMaybeMeLidUser = C),
      (l.clearGetMaybeMeLidUserCache = b),
      (l.getMePnUserOrThrow_DO_NOT_USE = v),
      (l.getMeLidUserOrThrow = S),
      (l.getMeUser = R),
      (l.getMeUserMatchingAddressingMode = L),
      (l.getMeDeviceOrThrow = E),
      (l.getMeDisplayNameOrThrow = k),
      (l.getMePNandLIDWids = I),
      (l.setMe = T),
      (l.setMeLid = D),
      (l.getMaybeMeDisplayName = x),
      (l.setMeDisplayName = $),
      (l.isMeAccount = N),
      (l.isMePnUser = M),
      (l.isMeDevice = A),
      (l.isMePrimary = F),
      (l.isSerializedWidMe = O),
      (l.getUnknownId = B),
      (l.setUnknownId = W));
  },
  98,
);
