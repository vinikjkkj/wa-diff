__d(
  "WAWebDeviceIdHeader",
  ["WAWebUserUtils"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e,
        t =
          (e =
            o(
              "WAWebUserUtils",
            ).getMaybeMeDevicePnLessOrFallback_DO_NOT_USE()) == null
            ? void 0
            : e.getDeviceId();
      return t != null ? String(t) : null;
    }
    l.getDeviceIdHeaderValue = e;
  },
  98,
);
