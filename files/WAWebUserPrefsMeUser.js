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
      return r("WANullthrows")(d(), "me");
    }
    function _() {
      return r("WANullthrows")(m(), "meLid");
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
      return r("WANullthrows")(b(), "meLidUser");
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
        ? _()
        : p();
    }
    function k(e) {
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
    function I() {
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).peerMessageLidMigrationOutgoingEnabled()
        ? _()
        : p();
    }
    function T() {
      var e = I();
      return o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
        e.user,
        e.server,
        0,
      );
    }
    function D() {
      return r("WANullthrows")(N(), "meDisplayName");
    }
    function x() {
      return [_(), d()].filter(Boolean);
    }
    function $(e) {
      (y(),
        o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
          o("WAWebUserPrefsKeys").KEYS.LAST_WID_MD,
          e == null ? null : e.toString(),
        ),
        o("WABaseGlobals").setMyJids(o("WAWebWidToJid").widToMyJids(e)));
    }
    function P(e) {
      (v(),
        o("WAWebRuntimeEnvironmentUtils").isWorker()
          ? o("WAWebGlobals").setMyLidDeviceJid(e.toString())
          : o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
              o("WAWebUserPrefsKeys").KEYS.LID,
              e.toString(),
            ));
    }
    function N() {
      o("WAWebRuntimeEnvironmentUtils").isWorker() &&
        o("WAWebGlobals").getMyDisplayName();
      var e = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
        o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME,
      );
      if (typeof e == "string") return e;
    }
    function M(e) {
      o("WAWebRuntimeEnvironmentUtils").isWorker()
        ? o("WAWebGlobals").setMyDisplayName(e)
        : o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
            o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME,
            e,
          );
    }
    function w(e) {
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
    function A(e) {
      return e == null || !w(e) ? !1 : O(e) || F(e);
    }
    function F(e) {
      var t = h();
      return t != null && e.isSameAccountAndAddressingMode(t);
    }
    function O(e) {
      var t = m();
      return t != null && e.isSameAccountAndAddressingMode(t);
    }
    function B(e) {
      if (e == null || !w(e)) return !1;
      var t = d();
      if (t != null && e.equals(t)) return !0;
      var n = m();
      return n != null && e.equals(n);
    }
    function W(e) {
      if (e == null || !w(e)) return !1;
      var t = b();
      if (t != null && e.equals(t)) return !0;
      var n = h();
      return n != null && e.equals(n);
    }
    function q(e) {
      return A(o("WAWebWidFactory").createWid(e));
    }
    function U() {
      var e = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
        o("WAWebUserPrefsKeys").KEYS.UNKNOWN_ID,
      );
      return (
        (typeof e != "string" || e === "") &&
          ((e = "unknown-" + Math.floor(Math.random() * 1e10)), V(e)),
        e
      );
    }
    function V(e) {
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
      (l.getMeDeviceOrThrow = E),
      (l.getMeUserMatchingAddressingModeOrThrow = k),
      (l.getMeDeviceForOutgoingPeerMessage = I),
      (l.getMyPrimaryForOutgoingPeerMessage = T),
      (l.getMeDisplayNameOrThrow = D),
      (l.getMeDeviceWids = x),
      (l.setMe = $),
      (l.setMeLid = P),
      (l.getMaybeMeDisplayName = N),
      (l.setMeDisplayName = M),
      (l.isMeAccount = A),
      (l.isMePnUser = F),
      (l.isMeDevice = B),
      (l.isMePrimary = W),
      (l.isSerializedWidMe = q),
      (l.getUnknownId = U),
      (l.setUnknownId = V));
  },
  98,
);
