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
          if (
            !o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(
              o("WAWebVoipPerfOptimizations").PerfOptimizationFlag
                .PERMISSIONS_API_OPTIMIZATION,
            )
          )
            return { granted: !1, denied: !1 };
          var n = yield c(e, t);
          return { granted: n === "granted", denied: n === "denied" };
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = t != null ? t : navigator;
            if (!n.permissions) return "unknown";
            var r = yield n.permissions.query({ name: e });
            return r.state;
          } catch (e) {
            return "unknown";
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var o = yield (e || (e = n("Promise"))).all(
            t.map(function (e) {
              return s(e, r);
            }),
          );
          return o.some(function (e) {
            return e.denied;
          });
        })),
        p.apply(this, arguments)
      );
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
    ((l.checkMediaPermissionState = s),
      (l.queryMediaPermissionStateStrict = c),
      (l.isAnyMediaPermissionDenied = m),
      (l.getDeviceSpecificPermissionMessaging = _));
  },
  98,
);
