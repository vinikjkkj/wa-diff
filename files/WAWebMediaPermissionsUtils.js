__d(
  "WAWebMediaPermissionsUtils",
  [
    "Promise",
    "WALogger",
    "WAWebNoop",
    "WAWebVoipLocalVideoPolicy",
    "WAWebVoipPerfOptimizations",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = new WeakMap();
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            !o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(
              o("WAWebVoipPerfOptimizations").PerfOptimizationFlag
                .PERMISSIONS_API_OPTIMIZATION,
            )
          )
            return { granted: !1, denied: !1 };
          var n = yield p(e, t);
          return { granted: n === "granted", denied: n === "denied" };
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = t != null ? t : navigator;
            if (!n.permissions) return "unknown";
            var r = yield n.permissions.query({ name: e });
            return r.state;
          } catch (e) {
            return "unknown";
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n) {
      var o = (n != null ? n : navigator).permissions;
      if (o == null) return r("WAWebNoop");
      var a = v(o, e),
        i = a.listeners,
        l = function (n) {
          return t(n);
        };
      return (
        i.add(l),
        function () {
          i.delete(l);
        }
      );
    }
    function g(e, t, n) {
      var r = !0,
        o = function (n) {
          r && t(n);
        },
        a = (n != null ? n : navigator).permissions;
      if (a == null)
        return (
          queueMicrotask(function () {
            return o("unknown");
          }),
          function () {
            r = !1;
          }
        );
      var i = v(a, e),
        l = i.listeners,
        s = i.status;
      return (
        s.then(
          function (e) {
            r && (l.add(o), t(e.state));
          },
          function () {
            return o("unknown");
          },
        ),
        function () {
          ((r = !1), l.delete(o));
        }
      );
    }
    function h(e) {
      var t = e.permissions;
      t != null &&
        (o("WAWebVoipLocalVideoPolicy").isLocalVideoAllowed() && v(t, "camera"),
        v(t, "microphone"));
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = yield (u || (u = n("Promise"))).all(
            e.map(function (e) {
              return d(e, t);
            }),
          );
          return r.some(function (e) {
            return e.denied;
          });
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
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
    function v(t, n) {
      var a = S(t),
        i = a.get(n);
      if (i != null) return i;
      var l = new Set(),
        s = t.query({ name: n }).then(function (e) {
          return (
            e.addEventListener("change", function () {
              return R(l, e.state);
            }),
            e
          );
        }),
        u = { listeners: l, status: s };
      return (
        a.set(n, u),
        s.catch(function (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [MediaPermissions] could not watch the ",
                  " permission",
                ])),
              n,
            )
            .catching(r("getErrorSafe")(t));
        }),
        u
      );
    }
    function S(e) {
      var t = c.get(e);
      if (t != null) return t;
      var n = new Map();
      return (c.set(e, n), n);
    }
    function R(e, t) {
      for (var n of Array.from(e))
        if (e.has(n))
          try {
            n(t);
          } catch (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [MediaPermissions] permission change listener failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-media-permission-listener-failed");
          }
    }
    ((l.checkMediaPermissionState = d),
      (l.queryMediaPermissionStateStrict = p),
      (l.subscribeToMediaPermissionChange = f),
      (l.watchMediaPermissionState = g),
      (l.listenForMediaPermissionChanges = h),
      (l.isAnyMediaPermissionDenied = y),
      (l.getDeviceSpecificPermissionMessaging = b));
  },
  98,
);
