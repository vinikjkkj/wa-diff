__d(
  "WAWebUserUtils",
  ["WAWebUserPrefsMeUser", "WAWebWidFactory", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1);
      if (e != null) return e.getDeviceId();
      var t = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
      return t != null ? t.getDeviceId() : null;
    }
    function s() {
      return r("nullthrows")(
        o("WAWebUserPrefsMeUser").getMaybeMeDisplayName(),
        "meDisplayName",
      );
    }
    function u() {
      var e = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow();
      return o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
        e.user,
        e.server,
        0,
      );
    }
    ((l.getMaybeMeDeviceId = e),
      (l.getMeDisplayNameOrThrow = s),
      (l.getMyPrimaryForOutgoingPeerMessage = u));
  },
  98,
);
