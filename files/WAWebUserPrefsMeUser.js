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
      ).removePnDependenciesEnabled()
        ? p()
        : m();
    }
    function k() {
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).peerMessageLidMigrationOutgoingEnabled()
        ? p()
        : m();
    }
    function I() {
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).peerMessageLidMigrationOutgoingEnabled()
        ? S()
        : v();
    }
    function T() {
      return r("WANullthrows")(P(), "meDisplayName");
    }
    function D() {
      var e = d();
      return e == null ? [m()] : [m(), e];
    }
    function x(e) {
      (h(),
        o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
          o("WAWebUserPrefsKeys").KEYS.LAST_WID_MD,
          e == null ? null : e.toString(),
        ),
        o("WABaseGlobals").setMyJids(o("WAWebWidToJid").widToMyJids(e)));
    }
    function $(e) {
      (b(),
        o("WAWebRuntimeEnvironmentUtils").isWorker()
          ? o("WAWebGlobals").setMyLidDeviceJid(e.toString())
          : o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
              o("WAWebUserPrefsKeys").KEYS.LID,
              e.toString(),
            ));
    }
    function P() {
      o("WAWebRuntimeEnvironmentUtils").isWorker() &&
        o("WAWebGlobals").getMyDisplayName();
      var e = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
        o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME,
      );
      if (typeof e == "string") return e;
    }
    function N(e) {
      o("WAWebRuntimeEnvironmentUtils").isWorker()
        ? o("WAWebGlobals").setMyDisplayName(e)
        : o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
            o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME,
            e,
          );
    }
    function M(e) {
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
    function w(e) {
      return e == null || !M(e) ? !1 : F(e) || A(e);
    }
    function A(e) {
      var t = g();
      return t != null && e.isSameAccountAndAddressingMode(t);
    }
    function F(e) {
      var t = d();
      return t != null && e.isSameAccountAndAddressingMode(t);
    }
    function O(e) {
      if (e == null || !M(e)) return !1;
      var t = c();
      if (t != null && e.equals(t)) return !0;
      var n = d();
      return n != null && e.equals(n);
    }
    function B(e) {
      if (e == null || !M(e)) return !1;
      var t = C();
      if (t != null && e.equals(t)) return !0;
      var n = g();
      return n != null && e.equals(n);
    }
    function W(e) {
      return w(o("WAWebWidFactory").createWid(e));
    }
    function q() {
      var e = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
        o("WAWebUserPrefsKeys").KEYS.UNKNOWN_ID,
      );
      return (
        (typeof e != "string" || e === "") &&
          ((e = "unknown-" + Math.floor(Math.random() * 1e10)), U(e)),
        e
      );
    }
    function U(e) {
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
      (l.getMeDeviceForOutgoingPeerMessage = k),
      (l.getMeUserForOutgoingPeerMessage = I),
      (l.getMeDisplayNameOrThrow = T),
      (l.getMePNandLIDWids = D),
      (l.setMe = x),
      (l.setMeLid = $),
      (l.getMaybeMeDisplayName = P),
      (l.setMeDisplayName = N),
      (l.isMeAccount = w),
      (l.isMePnUser = A),
      (l.isMeDevice = O),
      (l.isMePrimary = B),
      (l.isSerializedWidMe = W),
      (l.getUnknownId = q),
      (l.setUnknownId = U));
  },
  98,
);
