__d(
  "WAWebUserUtils",
  ["WALogger", "WAWebUserPrefsMeUser", "WAWebWidFactory", "err", "nullthrows"],
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
      var e = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow();
      return o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
        e.user,
        e.server,
        0,
      );
    }
    function d() {
      return [
        o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(),
        o("WAWebUserPrefsMeUser").getMaybeMeDevicePn(),
      ].filter(Boolean);
    }
    function m(t) {
      if (t.isLid()) return o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
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
    ((l.getMaybeMeDeviceId = s),
      (l.getMeDisplayNameOrThrow = u),
      (l.getMyPrimaryForOutgoingPeerMessage = c),
      (l.getMeDeviceWids = d),
      (l.getMeUserMatchingAddressingModeOrThrow = m));
  },
  98,
);
