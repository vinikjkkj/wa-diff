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
    var e, s, u;
    function c() {
      var e = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1);
      if (e != null) return e.getDeviceId();
      var t = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
      return t != null ? t.getDeviceId() : null;
    }
    function d() {
      return r("nullthrows")(
        o("WAWebUserPrefsMeUser").getMaybeMeDisplayName(),
        "meDisplayName",
      );
    }
    function m() {
      var e = L();
      return o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
        e.user,
        e.server,
        0,
      );
    }
    function p() {
      return [L(), o("WAWebUserPrefsMeUser").getMaybeMeDevicePn()].filter(
        Boolean,
      );
    }
    function _(t) {
      if (t.isLid()) return R();
      var n = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      if (n != null) return n;
      throw (
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[getMeUserMatchingAddressingModeOrThrow] no matching self PN for given PN wid",
              ])),
          )
          .sendLogs("no-matching-self-pn-for-given-pn-wid"),
        r("err")("no matching self PN for given PN wid")
      );
    }
    function f() {
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).removePnDependenciesEnabled()
        ? R()
        : S();
    }
    function g() {
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).removePnDependenciesEnabled()
        ? L()
        : E();
    }
    function h() {
      var e;
      return (e = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) != null
        ? e
        : o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
    }
    function y() {
      return o("WAWebInternalAccount").isInternalAccount() ? R() : S();
    }
    function C() {
      return o("WAWebInternalAccount").isInternalAccount()
        ? o("WAWebUserPrefsMeUser").getMaybeMeLidUser()
        : o("WAWebUserPrefsMeUser").getMaybeMePnUser();
    }
    function b() {
      return o("WAWebInternalAccount").isInternalAccount()
        ? o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1)
        : o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
    }
    function v() {
      return o("WAWebInternalAccount").isInternalAccount() ? L() : E();
    }
    function S() {
      return o("WAWebWidFactory").asUserWidOrThrow(E());
    }
    function R() {
      return r("nullthrows")(
        o("WAWebUserPrefsMeUser").getMaybeMeLidUser(),
        "meLidUser",
      );
    }
    function L() {
      return r("nullthrows")(
        o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(),
        "meLid",
      );
    }
    function E() {
      return r("nullthrows")(
        o("WAWebUserPrefsMeUser").getMaybeMeDevicePn(),
        "me",
      );
    }
    function k(e) {
      return I(o("WAWebWidFactory").createWid(e));
    }
    function I(e) {
      return e == null || !P(e) ? !1 : D(e) || T(e);
    }
    function T(e) {
      var t = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      return t != null && e.isSameAccountAndAddressingMode(t);
    }
    function D(e) {
      var t = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
      return t != null && e.isSameAccountAndAddressingMode(t);
    }
    function x(e) {
      if (e == null || !P(e)) return !1;
      var t = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
      if (t != null && e.equals(t)) return !0;
      var n = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
      return n != null && e.equals(n);
    }
    function $(e) {
      if (e == null || !P(e)) return !1;
      var t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
      if (t != null && e.equals(t)) return !0;
      var n = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      return n != null && e.equals(n);
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
    ((l.getMaybeMeDeviceId = c),
      (l.getMeDisplayNameOrThrow = d),
      (l.getMyPrimaryForOutgoingPeerMessage = m),
      (l.getMeDeviceWids = p),
      (l.getMeUserMatchingAddressingModeOrThrow = _),
      (l.getMeUserOrThrow = f),
      (l.getMeDeviceOrThrow = g),
      (l.getStableMaybeMeUser = h),
      (l.getMePnLessOrFallback_DO_NOT_USE = y),
      (l.getMaybeMePnLessOrFallback_DO_NOT_USE = C),
      (l.getMaybeMeDevicePnLessOrFallback_DO_NOT_USE = b),
      (l.getMeDevicePnLessOrFallback_DO_NOT_USE = v),
      (l.getMePnUserOrThrow_DO_NOT_USE = S),
      (l.getMeLidUserOrThrow = R),
      (l.getMeDeviceLidOrThrow = L),
      (l.getMeDevicePnOrThrow_DO_NOT_USE = E),
      (l.isSerializedWidMe = k),
      (l.isMeAccount = I),
      (l.isMePnUser = T),
      (l.isMeDevice = x),
      (l.isMePrimary = $));
  },
  98,
);
