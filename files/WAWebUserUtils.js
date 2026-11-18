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
    var e, s, u, c;
    function d() {
      var e = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1);
      if (e != null) return e.getDeviceId();
      var t = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
      return t != null ? t.getDeviceId() : null;
    }
    function m() {
      return r("nullthrows")(
        o("WAWebUserPrefsMeUser").getMaybeMeDisplayName(),
        "meDisplayName",
      );
    }
    function p() {
      var e = E();
      return o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
        e.user,
        e.server,
        0,
      );
    }
    function _() {
      return [E(), o("WAWebUserPrefsMeUser").getMaybeMeDevicePn()].filter(
        Boolean,
      );
    }
    function f(t) {
      if (t.isLid()) return L();
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
    function g() {
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).removePnDependenciesEnabled()
        ? L()
        : R();
    }
    function h() {
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).removePnDependenciesEnabled()
        ? E()
        : k();
    }
    function y() {
      var e;
      return (e = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) != null
        ? e
        : o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
    }
    function C() {
      return o("WAWebInternalAccount").isInternalAccount() ? L() : R();
    }
    function b() {
      return o("WAWebInternalAccount").isInternalAccount()
        ? o("WAWebUserPrefsMeUser").getMaybeMeLidUser()
        : o("WAWebUserPrefsMeUser").getMaybeMePnUser();
    }
    function v() {
      return o("WAWebInternalAccount").isInternalAccount()
        ? o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1)
        : o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
    }
    function S() {
      return o("WAWebInternalAccount").isInternalAccount() ? E() : k();
    }
    function R() {
      return o("WAWebWidFactory").asUserWidOrThrow(k());
    }
    function L() {
      return r("nullthrows")(
        o("WAWebUserPrefsMeUser").getMaybeMeLidUser(),
        "meLidUser",
      );
    }
    function E() {
      return r("nullthrows")(
        o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(),
        "meLid",
      );
    }
    function k() {
      return r("nullthrows")(
        o("WAWebUserPrefsMeUser").getMaybeMeDevicePn(),
        "me",
      );
    }
    function I(e) {
      return T(o("WAWebWidFactory").createWid(e));
    }
    function T(e) {
      return e == null || !N(e) ? !1 : x(e) || D(e);
    }
    function D(e) {
      var t = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      return t != null && e.isSameAccountAndAddressingMode(t);
    }
    function x(e) {
      var t = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
      return t != null && e.isSameAccountAndAddressingMode(t);
    }
    function $(e) {
      if (e == null || !N(e)) return !1;
      var t = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
      if (t != null && e.equals(t)) return !0;
      var n = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
      return n != null && e.equals(n);
    }
    function P(e) {
      if (e == null || !N(e)) return !1;
      var t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
      if (t != null && e.equals(t)) return !0;
      var n = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      return n != null && e.equals(n);
    }
    function N(e) {
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
    ((l.getMaybeMeDeviceLid = (c = o(
      "WAWebUserPrefsMeUser",
    )).getMaybeMeDeviceLid),
      (l.getMaybeMeDevicePn = c.getMaybeMeDevicePn),
      (l.getMaybeMeDisplayName = c.getMaybeMeDisplayName),
      (l.getMaybeMeLidUser = c.getMaybeMeLidUser),
      (l.getMaybeMePnUser = c.getMaybeMePnUser),
      (l.getMaybeMeDeviceId = d),
      (l.getMeDisplayNameOrThrow = m),
      (l.getMyPrimaryForOutgoingPeerMessage = p),
      (l.getMeDeviceWids = _),
      (l.getMeUserMatchingAddressingModeOrThrow = f),
      (l.getMeUserOrThrow = g),
      (l.getMeDeviceOrThrow = h),
      (l.getStableMaybeMeUser = y),
      (l.getMePnLessOrFallback_DO_NOT_USE = C),
      (l.getMaybeMePnLessOrFallback_DO_NOT_USE = b),
      (l.getMaybeMeDevicePnLessOrFallback_DO_NOT_USE = v),
      (l.getMeDevicePnLessOrFallback_DO_NOT_USE = S),
      (l.getMePnUserOrThrow_DO_NOT_USE = R),
      (l.getMeLidUserOrThrow = L),
      (l.getMeDeviceLidOrThrow = E),
      (l.getMeDevicePnOrThrow_DO_NOT_USE = k),
      (l.isSerializedWidMe = I),
      (l.isMeAccount = T),
      (l.isMePnUser = D),
      (l.isMeDevice = $),
      (l.isMePrimary = P));
  },
  98,
);
