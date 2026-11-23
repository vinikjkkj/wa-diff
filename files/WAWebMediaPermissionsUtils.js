__d(
  "WAWebMediaPermissionsUtils",
  [
    "WAWebPermissionStatusWatcher",
    "WAWebVoipLocalVideoPolicy",
    "WAWebVoipPerfOptimizations",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      if (
        !o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(
          o("WAWebVoipPerfOptimizations").PerfOptimizationFlag
            .PERMISSIONS_API_OPTIMIZATION,
        )
      )
        return { granted: !1, denied: !1 };
      var n = await s(e, t);
      return { granted: n === "granted", denied: n === "denied" };
    }
    async function s(e, t) {
      try {
        var n = t != null ? t : navigator;
        if (!n.permissions) return "unknown";
        var r = await n.permissions.query({ name: e });
        return r.state;
      } catch (e) {
        return "unknown";
      }
    }
    function u(e, t, n) {
      return o("WAWebPermissionStatusWatcher").subscribeToPermissionChange(
        e,
        t,
        n,
      );
    }
    function c(e, t, n) {
      return o("WAWebPermissionStatusWatcher").watchPermissionState(e, t, n);
    }
    function d(e, t) {
      return o("WAWebPermissionStatusWatcher").getKnownPermissionState(e, t);
    }
    function m(e) {
      (o("WAWebVoipLocalVideoPolicy").isLocalVideoAllowed() &&
        o("WAWebPermissionStatusWatcher").listenForPermissionChanges(
          "camera",
          e,
        ),
        o("WAWebPermissionStatusWatcher").listenForPermissionChanges(
          "microphone",
          e,
        ));
    }
    async function p(t, n) {
      var r = await Promise.all(
        t.map(function (t) {
          return e(t, n);
        }),
      );
      return r.some(function (e) {
        return e.denied;
      });
    }
    function _(e, t) {
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
      (l.queryMediaPermissionStateStrict = s),
      (l.subscribeToMediaPermissionChange = u),
      (l.watchMediaPermissionState = c),
      (l.getKnownMediaPermissionState = d),
      (l.listenForMediaPermissionChanges = m),
      (l.isAnyMediaPermissionDenied = p),
      (l.getDeviceSpecificPermissionMessaging = _));
  },
  98,
);
