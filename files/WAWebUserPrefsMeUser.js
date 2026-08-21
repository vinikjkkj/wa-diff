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
      var e = m(!1);
      if (e != null) return e.getDeviceId();
      var t = d();
      return t != null ? t.getDeviceId() : null;
    }
    var g = o("WAWebMemoizeWithClearUtils").memoizeWithClear(function () {
        var e = d();
        if (e) return o("WAWebWidFactory").asUserWidOrThrow(e);
      }),
      h = g[0],
      y = g[1],
      C = o("WAWebMemoizeWithClearUtils").memoizeWithClear(function () {
        var e = m();
        return e == null ? null : o("WAWebWidFactory").asUserLidOrThrow(e);
      }),
      b = C[0],
      v = C[1];
    function S() {
      return o("WAWebWidFactory").asUserWidOrThrow(p());
    }
    function R() {
      return r("nullthrows")(b(), "meLidUser");
    }
    function L() {
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).removePnDependenciesEnabled()
        ? R()
        : S();
    }
    function E() {
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).removePnDependenciesEnabled()
        ? b() != null
        : h() != null;
    }
    function k() {
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).removePnDependenciesEnabled()
        ? _()
        : p();
    }
    function I(e) {
      if (e.isLid()) return R();
      var t = h();
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
    function T() {
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).peerMessageLidMigrationOutgoingEnabled()
        ? _()
        : p();
    }
    function D() {
      var e = T();
      return o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
        e.user,
        e.server,
        0,
      );
    }
    function x() {
      return r("nullthrows")(w(), "meDisplayName");
    }
    function $() {
      return [_(), d()].filter(Boolean);
    }
    function P(e) {
      (y(),
        o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
          o("WAWebUserPrefsKeys").KEYS.LAST_WID_MD,
          e == null ? null : e.toString(),
        ),
        o("WABaseGlobals").setMyJids(o("WAWebWidToJid").widToMyJids(e)));
    }
    function N() {
      if (!o("WABaseGlobals").hasMyJids()) {
        var e = d();
        e != null &&
          (y(),
          o("WABaseGlobals").setMyJids(o("WAWebWidToJid").widToMyJids(e)));
      }
    }
    function M(e) {
      (v(),
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
      var t = h();
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
      var t = b();
      if (t != null && e.equals(t)) return !0;
      var n = h();
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
      (l.getMaybeMeDeviceId = f),
      (l.getMaybeMePnUser = h),
      (l.clearGetMaybeMePnUserCache = y),
      (l.getMaybeMeLidUser = b),
      (l.clearGetMaybeMeLidUserCache = v),
      (l.getMePnUserOrThrow_DO_NOT_USE = S),
      (l.getMeLidUserOrThrow = R),
      (l.getMeUserOrThrow = L),
      (l.isMeUserRestored = E),
      (l.getMeDeviceOrThrow = k),
      (l.getMeUserMatchingAddressingModeOrThrow = I),
      (l.getMeDeviceForOutgoingPeerMessage = T),
      (l.getMyPrimaryForOutgoingPeerMessage = D),
      (l.getMeDisplayNameOrThrow = x),
      (l.getMeDeviceWids = $),
      (l.setMe = P),
      (l.ensureMyJidsFromPrefs = N),
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
