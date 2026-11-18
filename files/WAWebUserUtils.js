__d(
  "WAWebUserUtils",
  [
    "WALogger",
    "WAWebBeyondPhoneNumberGatingUtils",
    "WAWebInternalAccount",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory",
    "err",
    "gkx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m() {
      var e = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1);
      if (e != null) return e.getDeviceId();
      var t = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
      return t != null ? t.getDeviceId() : null;
    }
    var p = !1;
    function _() {
      var t = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn(),
        n = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1);
      return (
        n == null &&
          t != null &&
          !p &&
          ((p = !0),
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "hasLoggedIn: self lid is missing but pn is set",
                ])),
            )
            .sendLogs("self-lid-missing-with-pn")),
        t != null || n != null
      );
    }
    function f() {
      return r("nullthrows")(
        o("WAWebUserPrefsMeUser").getMaybeMeDisplayName(),
        "meDisplayName",
      );
    }
    function g() {
      var e = T();
      return o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
        e.user,
        e.server,
        0,
      );
    }
    function h() {
      return [T(), o("WAWebUserPrefsMeUser").getMaybeMeDevicePn()].filter(
        Boolean,
      );
    }
    function y(e) {
      if (e.isLid()) return I();
      var t = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
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
    function C() {
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).removePnDependenciesEnabled()
        ? I()
        : k();
    }
    function b() {
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).removePnDependenciesEnabled()
        ? T()
        : D();
    }
    function v() {
      var e;
      return (e = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) != null
        ? e
        : o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
    }
    function S() {
      return o("WAWebInternalAccount").isInternalAccount() ? I() : k();
    }
    function R() {
      return o("WAWebInternalAccount").isInternalAccount()
        ? o("WAWebUserPrefsMeUser").getMaybeMeLidUser()
        : o("WAWebUserPrefsMeUser").getMaybeMePnUser();
    }
    function L() {
      return o("WAWebInternalAccount").isInternalAccount()
        ? o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1)
        : o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
    }
    function E() {
      return o("WAWebInternalAccount").isInternalAccount() ? T() : D();
    }
    function k() {
      return o("WAWebWidFactory").asUserWidOrThrow(D());
    }
    function I() {
      return r("nullthrows")(
        o("WAWebUserPrefsMeUser").getMaybeMeLidUser(),
        "meLidUser",
      );
    }
    function T() {
      return r("nullthrows")(
        o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(),
        "meLid",
      );
    }
    function D() {
      return r("nullthrows")(
        o("WAWebUserPrefsMeUser").getMaybeMeDevicePn(),
        "me",
      );
    }
    function x(e) {
      return $(o("WAWebWidFactory").createWid(e));
    }
    function $(e) {
      return e == null || !A(e) ? !1 : N(e) || P(e);
    }
    function P(e) {
      var t = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      return t != null && e.isSameAccountAndAddressingMode(t);
    }
    function N(e) {
      var t = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
      return t != null && e.isSameAccountAndAddressingMode(t);
    }
    function M(e) {
      if (e == null || !A(e)) return !1;
      var t = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
      if (t != null && e.equals(t)) return !0;
      var n = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
      return n != null && e.equals(n);
    }
    function w(e) {
      if (e == null || !A(e)) return !1;
      var t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
      if (t != null && e.equals(t)) return !0;
      var n = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      return n != null && e.equals(n);
    }
    function A(e) {
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
    ((l.getMaybeMeDeviceLid = (d = o(
      "WAWebUserPrefsMeUser",
    )).getMaybeMeDeviceLid),
      (l.getMaybeMeDevicePn = d.getMaybeMeDevicePn),
      (l.getMaybeMeDisplayName = d.getMaybeMeDisplayName),
      (l.getMaybeMeLidUser = d.getMaybeMeLidUser),
      (l.getMaybeMePnUser = d.getMaybeMePnUser),
      (l.getMaybeMeDeviceId = m),
      (l.hasLoggedIn = _),
      (l.getMeDisplayNameOrThrow = f),
      (l.getMyPrimaryForOutgoingPeerMessage = g),
      (l.getMeDeviceWids = h),
      (l.getMeUserMatchingAddressingModeOrThrow = y),
      (l.getMeUserOrThrow = C),
      (l.getMeDeviceOrThrow = b),
      (l.getStableMaybeMeUser = v),
      (l.getMePnLessOrFallback_DO_NOT_USE = S),
      (l.getMaybeMePnLessOrFallback_DO_NOT_USE = R),
      (l.getMaybeMeDevicePnLessOrFallback_DO_NOT_USE = L),
      (l.getMeDevicePnLessOrFallback_DO_NOT_USE = E),
      (l.getMePnUserOrThrow_DO_NOT_USE = k),
      (l.getMeLidUserOrThrow = I),
      (l.getMeDeviceLidOrThrow = T),
      (l.getMeDevicePnOrThrow_DO_NOT_USE = D),
      (l.isSerializedWidMe = x),
      (l.isMeAccount = $),
      (l.isMePnUser = P),
      (l.isMeDevice = M),
      (l.isMePrimary = w));
  },
  98,
);
