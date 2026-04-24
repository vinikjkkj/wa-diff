__d(
  "WAWebMediaPermissionsUtils",
  ["Promise", "WAWebVoipPerfOptimizations", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            var a = yield r.permissions.query({ name: e });
            ((n.granted = a.state === "granted"),
              (n.denied = a.state === "denied"));
          } catch (e) {}
          return n;
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var o = yield (e || (e = n("Promise"))).all(
            t.map(function (e) {
              return s(e, r);
            }),
          );
          return o.some(function (e) {
            return e.denied;
          });
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
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
    ((l.checkMediaPermissionState = s),
      (l.isAnyMediaPermissionDenied = c),
      (l.getDeviceSpecificPermissionMessaging = m));
  },
  98,
);
