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
    var e, s, u, c;
    function d() {
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
    function m(e) {
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
    function p() {
      return r("nullthrows")(d(), "me");
    }
    function _() {
      return r("nullthrows")(m(), "meLid");
    }
    function f() {
      var e;
      return (e = d()) != null ? e : m(!1);
    }
    function g() {
      return f() != null;
    }
    var h = o("WAWebMemoizeWithClearUtils").memoizeWithClear(function () {
        var e = d();
        if (e) return o("WAWebWidFactory").asUserWidOrThrow(e);
      }),
      y = h[0],
      C = h[1],
      b = o("WAWebMemoizeWithClearUtils").memoizeWithClear(function () {
        var e = m();
        return e == null ? null : o("WAWebWidFactory").asUserLidOrThrow(e);
      }),
      v = b[0],
      S = b[1];
    function R() {
      var e;
      return (e = y()) != null ? e : v();
    }
    function L() {
      return o("WAWebWidFactory").asUserWidOrThrow(p());
    }
    function E() {
      return r("nullthrows")(v(), "meLidUser");
    }
    function k() {
      var e;
      return (e = R()) != null ? e : E();
    }
    function I() {
      var e;
      return (e = f()) != null ? e : _();
    }
    function T() {
      var e;
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).removePnDependenciesEnabled()
        ? E()
        : (e = R()) != null
          ? e
          : E();
    }
    function D() {
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).removePnDependenciesEnabled()
        ? v() != null
        : R() != null;
    }
    function x() {
      var e;
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).removePnDependenciesEnabled()
        ? _()
        : (e = f()) != null
          ? e
          : _();
    }
    function $(e) {
      if (e.isLid()) return E();
      var t = y();
      if (t != null) return t;
      throw (
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[getMeUserMatchingAddressingModeOrThrow] no matching self PN for given PN wid",
              ])),
          )
          .sendLogs("no-matching-self-pn-for-given-pn-wid"),
        r("err")("no matching self PN for given PN wid")
      );
    }
    function P() {
      return [_(), d()].filter(Boolean);
    }
    function N(e) {
      (C(),
        o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
          o("WAWebUserPrefsKeys").KEYS.LAST_WID_MD,
          e == null ? null : e.toString(),
        ),
        o("WABaseGlobals").setMyJids(o("WAWebWidToJid").widToMyJids(e)));
    }
    function M(e) {
      (S(),
        o("WAWebRuntimeEnvironmentUtils").isWorker()
          ? o("WAWebGlobals").setMyLidDeviceJid(e.toString())
          : o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
              o("WAWebUserPrefsKeys").KEYS.LID,
              e.toString(),
            ));
    }
    function w() {
      o("WAWebRuntimeEnvironmentUtils").isWorker() &&
        o("WAWebGlobals").getMyDisplayName();
      var e = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
        o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME,
      );
      if (typeof e == "string") return e;
    }
    function A(e) {
      o("WAWebRuntimeEnvironmentUtils").isWorker()
        ? o("WAWebGlobals").setMyDisplayName(e)
        : o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
            o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME,
            e,
          );
    }
    function F(e) {
      var t = e instanceof r("WAWebWid");
      if (!t)
        if (r("gkx")("26258"))
          o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
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
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
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
    function O(e) {
      return e == null || !F(e) ? !1 : W(e) || B(e);
    }
    function B(e) {
      var t = y();
      return t != null && e.isSameAccountAndAddressingMode(t);
    }
    function W(e) {
      var t = m();
      return t != null && e.isSameAccountAndAddressingMode(t);
    }
    function q(e) {
      if (e == null || !F(e)) return !1;
      var t = d();
      if (t != null && e.equals(t)) return !0;
      var n = m();
      return n != null && e.equals(n);
    }
    function U(e) {
      if (e == null || !F(e)) return !1;
      var t = v();
      if (t != null && e.equals(t)) return !0;
      var n = y();
      return n != null && e.equals(n);
    }
    function V(e) {
      return O(o("WAWebWidFactory").createWid(e));
    }
    function H() {
      var e = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
        o("WAWebUserPrefsKeys").KEYS.UNKNOWN_ID,
      );
      return (
        (typeof e != "string" || e === "") &&
          ((e = "unknown-" + Math.floor(Math.random() * 1e10)), G(e)),
        e
      );
    }
    function G(e) {
      return o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
        o("WAWebUserPrefsKeys").KEYS.UNKNOWN_ID,
        e,
      );
    }
    ((l.getMaybeMeDevicePn = d),
      (l.getMaybeMeDeviceLid = m),
      (l.getMeDevicePnOrThrow_DO_NOT_USE = p),
      (l.getMeDeviceLidOrThrow = _),
      (l.getMaybeMePnOrLidDevice = f),
      (l.hasLoggedIn = g),
      (l.getMaybeMePnUser = y),
      (l.clearGetMaybeMePnUserCache = C),
      (l.getMaybeMeLidUser = v),
      (l.clearGetMaybeMeLidUserCache = S),
      (l.getMaybeMePnOrLidUser = R),
      (l.getMePnUserOrThrow_DO_NOT_USE = L),
      (l.getMeLidUserOrThrow = E),
      (l.getMePnOrLidUserOrThrow = k),
      (l.getMePnOrLidDeviceOrThrow = I),
      (l.getMeUserOrThrow = T),
      (l.isMeUserRestored = D),
      (l.getMeDeviceOrThrow = x),
      (l.getMeUserMatchingAddressingModeOrThrow = $),
      (l.getMeDeviceWids = P),
      (l.setMePn = N),
      (l.setMeLid = M),
      (l.getMaybeMeDisplayName = w),
      (l.setMeDisplayName = A),
      (l.isMeAccount = O),
      (l.isMePnUser = B),
      (l.isMeDevice = q),
      (l.isMePrimary = U),
      (l.isSerializedWidMe = V),
      (l.getUnknownId = H),
      (l.setUnknownId = G));
  },
  98,
);
