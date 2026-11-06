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
    var f = o("WAWebMemoizeWithClearUtils").memoizeWithClear(function () {
        var e = d();
        if (e) return o("WAWebWidFactory").asUserWidOrThrow(e);
      }),
      g = f[0],
      h = f[1],
      y = o("WAWebMemoizeWithClearUtils").memoizeWithClear(function () {
        var e = m();
        return e == null ? null : o("WAWebWidFactory").asUserLidOrThrow(e);
      }),
      C = y[0],
      b = y[1];
    function v() {
      return o("WAWebWidFactory").asUserWidOrThrow(p());
    }
    function S() {
      return r("nullthrows")(C(), "meLidUser");
    }
    function R() {
      var e;
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).removePnDependenciesEnabled()
        ? S()
        : (e = g()) != null
          ? e
          : S();
    }
    function L() {
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).removePnDependenciesEnabled()
        ? C() != null
        : g() != null || C() != null;
    }
    function E() {
      var e;
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).removePnDependenciesEnabled()
        ? _()
        : (e = d()) != null
          ? e
          : _();
    }
    function k(e) {
      if (e.isLid()) return S();
      var t = g();
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
    function I() {
      return [_(), d()].filter(Boolean);
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
    function N(e) {
      return e == null || !P(e) ? !1 : w(e) || M(e);
    }
    function M(e) {
      var t = g();
      return t != null && e.isSameAccountAndAddressingMode(t);
    }
    function w(e) {
      var t = m();
      return t != null && e.isSameAccountAndAddressingMode(t);
    }
    function A(e) {
      if (e == null || !P(e)) return !1;
      var t = d();
      if (t != null && e.equals(t)) return !0;
      var n = m();
      return n != null && e.equals(n);
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
    ((l.getMaybeMeDevicePn = d),
      (l.getMaybeMeDeviceLid = m),
      (l.getMeDevicePnOrThrow_DO_NOT_USE = p),
      (l.getMeDeviceLidOrThrow = _),
      (l.getMaybeMePnUser = g),
      (l.clearGetMaybeMePnUserCache = h),
      (l.getMaybeMeLidUser = C),
      (l.clearGetMaybeMeLidUserCache = b),
      (l.getMePnUserOrThrow_DO_NOT_USE = v),
      (l.getMeLidUserOrThrow = S),
      (l.getMeUserOrThrow = R),
      (l.isMeUserRestored = L),
      (l.getMeDeviceOrThrow = E),
      (l.getMeUserMatchingAddressingModeOrThrow = k),
      (l.getMeDeviceWids = I),
      (l.setMePn = T),
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
