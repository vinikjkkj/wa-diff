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
      var e = C();
      return o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
        e.user,
        e.server,
        0,
      );
    }
    function d() {
      return [C(), o("WAWebUserPrefsMeUser").getMaybeMeDevicePn()].filter(
        Boolean,
      );
    }
    function m(t) {
      if (t.isLid()) return y();
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
        ? y()
        : h();
    }
    function _() {
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).removePnDependenciesEnabled()
        ? C()
        : b();
    }
    function f() {
      return o("WAWebInternalAccount").isInternalAccount() ? y() : h();
    }
    function g() {
      return o("WAWebInternalAccount").isInternalAccount() ? C() : b();
    }
    function h() {
      return o("WAWebWidFactory").asUserWidOrThrow(b());
    }
    function y() {
      return r("nullthrows")(
        o("WAWebUserPrefsMeUser").getMaybeMeLidUser(),
        "meLidUser",
      );
    }
    function C() {
      return r("nullthrows")(
        o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(),
        "meLid",
      );
    }
    function b() {
      return r("nullthrows")(
        o("WAWebUserPrefsMeUser").getMaybeMeDevicePn(),
        "me",
      );
    }
    function v(e) {
      return S(o("WAWebWidFactory").createWid(e));
    }
    function S(e) {
      return e == null || !o("WAWebUserPrefsMeUser").isWidInstance(e)
        ? !1
        : L(e) || R(e);
    }
    function R(e) {
      var t = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      return t != null && e.isSameAccountAndAddressingMode(t);
    }
    function L(e) {
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
      (l.getMePnLessOrFallback_DO_NOT_USE = f),
      (l.getMeDevicePnLessOrFallback_DO_NOT_USE = g),
      (l.getMePnUserOrThrow_DO_NOT_USE = h),
      (l.getMeLidUserOrThrow = y),
      (l.getMeDeviceLidOrThrow = C),
      (l.getMeDevicePnOrThrow_DO_NOT_USE = b),
      (l.isSerializedWidMe = v),
      (l.isMeAccount = S),
      (l.isMePnUser = R));
  },
  98,
);
