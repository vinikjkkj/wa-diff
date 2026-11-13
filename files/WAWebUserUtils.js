__d(
  "WAWebUserUtils",
  [
    "WALogger",
    "WAWebBeyondPhoneNumberGatingUtils",
    "WAWebInternalAccount",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "err",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      var e = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1);
      if (e != null) return e.getDeviceId();
      var t = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
      return t != null ? t.getDeviceId() : null;
    }
    function u() {
      return r("nullthrows")(
        o("WAWebUserPrefsMeUser").getMaybeMeDisplayName(),
        "meDisplayName",
      );
    }
    function c() {
      var e = S();
      return o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
        e.user,
        e.server,
        0,
      );
    }
    function d() {
      return [S(), o("WAWebUserPrefsMeUser").getMaybeMeDevicePn()].filter(
        Boolean,
      );
    }
    function m(t) {
      if (t.isLid()) return v();
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
    function p() {
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).removePnDependenciesEnabled()
        ? v()
        : b();
    }
    function _() {
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).removePnDependenciesEnabled()
        ? S()
        : R();
    }
    function f() {
      var e;
      return (e = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) != null
        ? e
        : o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
    }
    function g() {
      return o("WAWebInternalAccount").isInternalAccount() ? v() : b();
    }
    function h() {
      return o("WAWebInternalAccount").isInternalAccount()
        ? o("WAWebUserPrefsMeUser").getMaybeMeLidUser()
        : o("WAWebUserPrefsMeUser").getMaybeMePnUser();
    }
    function y() {
      return o("WAWebInternalAccount").isInternalAccount()
        ? o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1)
        : o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
    }
    function C() {
      return o("WAWebInternalAccount").isInternalAccount() ? S() : R();
    }
    function b() {
      return o("WAWebWidFactory").asUserWidOrThrow(R());
    }
    function v() {
      return r("nullthrows")(
        o("WAWebUserPrefsMeUser").getMaybeMeLidUser(),
        "meLidUser",
      );
    }
    function S() {
      return r("nullthrows")(
        o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(),
        "meLid",
      );
    }
    function R() {
      return r("nullthrows")(
        o("WAWebUserPrefsMeUser").getMaybeMeDevicePn(),
        "me",
      );
    }
    function L(e) {
      return E(o("WAWebWidFactory").createWid(e));
    }
    function E(e) {
      return e == null || !o("WAWebUserPrefsMeUser").isWidInstance(e)
        ? !1
        : I(e) || k(e);
    }
    function k(e) {
      var t = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      return t != null && e.isSameAccountAndAddressingMode(t);
    }
    function I(e) {
      var t = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
      return t != null && e.isSameAccountAndAddressingMode(t);
    }
    ((l.getMaybeMeDeviceId = s),
      (l.getMeDisplayNameOrThrow = u),
      (l.getMyPrimaryForOutgoingPeerMessage = c),
      (l.getMeDeviceWids = d),
      (l.getMeUserMatchingAddressingModeOrThrow = m),
      (l.getMeUserOrThrow = p),
      (l.getMeDeviceOrThrow = _),
      (l.getStableMaybeMeUser = f),
      (l.getMePnLessOrFallback_DO_NOT_USE = g),
      (l.getMaybeMePnLessOrFallback_DO_NOT_USE = h),
      (l.getMaybeMeDevicePnLessOrFallback_DO_NOT_USE = y),
      (l.getMeDevicePnLessOrFallback_DO_NOT_USE = C),
      (l.getMePnUserOrThrow_DO_NOT_USE = b),
      (l.getMeLidUserOrThrow = v),
      (l.getMeDeviceLidOrThrow = S),
      (l.getMeDevicePnOrThrow_DO_NOT_USE = R),
      (l.isSerializedWidMe = L),
      (l.isMeAccount = E),
      (l.isMePnUser = k));
  },
  98,
);
