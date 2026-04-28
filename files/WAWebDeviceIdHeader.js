__d(
  "WAWebDeviceIdHeader",
  ["WAWebUserPrefsMeUser", "justknobx"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return r("justknobx")._("2641");
    }
    function s() {
      var e,
        t =
          (e = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn()) == null
            ? void 0
            : e.getDeviceId();
      return t != null ? String(t) : null;
    }
    ((l.isDeviceIdHeaderEnabled = e), (l.getDeviceIdHeaderValue = s));
  },
  98,
);
