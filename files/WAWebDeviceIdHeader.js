__d(
  "WAWebDeviceIdHeader",
  ["WAWebUserPrefsMeUser"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e,
        t =
          (e = o("WAWebUserPrefsMeUser").getMaybeMePnOrLidDevice()) == null
            ? void 0
            : e.getDeviceId();
      return t != null ? String(t) : null;
    }
    l.getDeviceIdHeaderValue = e;
  },
  98,
);
