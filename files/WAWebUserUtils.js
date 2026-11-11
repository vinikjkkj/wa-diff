__d(
  "WAWebUserUtils",
  [
    "WALogger",
    "WAWebBeyondPhoneNumberGatingUtils",
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
      var e = h();
      return o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
        e.user,
        e.server,
        0,
      );
    }
    function d() {
      return [h(), o("WAWebUserPrefsMeUser").getMaybeMeDevicePn()].filter(
        Boolean,
      );
    }
    function m(t) {
      if (t.isLid()) return g();
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
        ? g()
        : f();
    }
    function _() {
      return o(
        "WAWebBeyondPhoneNumberGatingUtils",
      ).removePnDependenciesEnabled()
        ? h()
        : o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE();
    }
    function f() {
      return o("WAWebWidFactory").asUserWidOrThrow(
        o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
      );
    }
    function g() {
      return r("nullthrows")(
        o("WAWebUserPrefsMeUser").getMaybeMeLidUser(),
        "meLidUser",
      );
    }
    function h() {
      return r("nullthrows")(
        o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(),
        "meLid",
      );
    }
    ((l.getMaybeMeDeviceId = s),
      (l.getMeDisplayNameOrThrow = u),
      (l.getMyPrimaryForOutgoingPeerMessage = c),
      (l.getMeDeviceWids = d),
      (l.getMeUserMatchingAddressingModeOrThrow = m),
      (l.getMeUserOrThrow = p),
      (l.getMeDeviceOrThrow = _),
      (l.getMePnUserOrThrow_DO_NOT_USE = f),
      (l.getMeLidUserOrThrow = g),
      (l.getMeDeviceLidOrThrow = h));
  },
  98,
);
