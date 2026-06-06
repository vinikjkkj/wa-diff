__d(
  "WAWebMediaPermissionsUtils",
  ["WAWebVoipPerfOptimizations"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = { granted: !1, denied: !1 };
      if (
        !o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(
          o("WAWebVoipPerfOptimizations").PerfOptimizationFlag
            .PERMISSIONS_API_OPTIMIZATION,
        )
      )
        return n;
      try {
        var r = t != null ? t : navigator;
        if (!r.permissions) return n;
        var a = await r.permissions.query({ name: e });
        ((n.granted = a.state === "granted"),
          (n.denied = a.state === "denied"));
      } catch (e) {}
      return n;
    }
    async function s(t, n) {
      var r = await Promise.all(
        t.map(function (t) {
          return e(t, n);
        }),
      );
      return r.some(function (e) {
        return e.denied;
      });
    }
    function u(e, t) {
      return (function (e) {
        return ((typeof e == "object" && e !== null) ||
          typeof e == "function") &&
          e.micGranted === !0 &&
          e.camGranted === !1
          ? "camera"
          : ((typeof e == "object" && e !== null) || typeof e == "function") &&
              e.micGranted === !1 &&
              e.camGranted === !0
            ? "mic"
            : "camera_and_mic";
      })({ micGranted: e, camGranted: t });
    }
    ((l.checkMediaPermissionState = e),
      (l.isAnyMediaPermissionDenied = s),
      (l.getDeviceSpecificPermissionMessaging = u));
  },
  98,
);
