__d(
  "WebDevicePerfInfoLogging",
  [
    "AsyncTypedRequest",
    "JSScheduler",
    "Promise",
    "WebDevicePerfInfoData",
    "WebPerfDeviceInfoLogFalcoEvent",
    "XDeviceClassRealtimeControllerRouteBuilder",
    "asyncToGeneratorRuntime",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      var t = document.createElement("canvas");
      ((t.width = 1), (t.height = 1));
      var n = null;
      try {
        if (
          ((n = t.getContext("webgl") || t.getContext("experimental-webgl")),
          !n)
        )
          return;
        var r = n.getExtension("WEBGL_debug_renderer_info");
        if (!r) return;
        var o = n.getParameter(r.UNMASKED_RENDERER_WEBGL),
          a = n.getParameter(r.UNMASKED_VENDOR_WEBGL);
        ((e.gpu_vendor = a), (e.gpu_renderer = o));
      } finally {
        var i;
        ((i = n) == null ||
          (i = i.getExtension("WEBGL_lose_context")) == null ||
          i.loseContext(),
          (n = null));
      }
    }
    function c() {
      var e = window.navigator,
        t = {};
      return (
        e &&
          e.hardwareConcurrency !== void 0 &&
          (t.cpu_cores = e.hardwareConcurrency),
        e && e.deviceMemory !== void 0 && (t.ram = e.deviceMemory),
        r("WebDevicePerfInfoData").needsFullUpdate && u(t),
        t
      );
    }
    function d(e, t, r) {
      var o = new (s || (s = n("Promise")))(function (e) {
        window.setTimeout(function () {
          return e(r);
        }, t);
      });
      return s.race([e(), o]).then(
        function (e) {
          return e;
        },
        function () {
          return r;
        },
      );
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t,
            r,
            o = {};
          try {
            o.display_hdr = matchMedia("(dynamic-range: high)").matches;
          } catch (e) {
            o.display_hdr = !1;
          }
          var a = (e = globalThis.navigator) == null ? void 0 : e.gpu,
            i = (t = globalThis.navigator) == null ? void 0 : t.ml,
            l =
              a == null
                ? (s || (s = n("Promise"))).resolve(null)
                : d(
                    function () {
                      return a.requestAdapter();
                    },
                    2e3,
                    null,
                  ),
            u =
              i == null
                ? (s || (s = n("Promise"))).resolve(!1)
                : d(
                    function () {
                      return i.createContext({ deviceType: "npu" }).then(
                        function () {
                          return !0;
                        },
                        function () {
                          return !1;
                        },
                      );
                    },
                    2e3,
                    !1,
                  ),
            c =
              i == null
                ? (s || (s = n("Promise"))).resolve(!1)
                : d(
                    function () {
                      return i.createContext({ deviceType: "gpu" }).then(
                        function () {
                          return !0;
                        },
                        function () {
                          return !1;
                        },
                      );
                    },
                    2e3,
                    !1,
                  ),
            m = yield (s || (s = n("Promise"))).all([l, u, c]),
            p = m[0],
            _ = m[1],
            f = m[2];
          return (
            (o.webgpu_available = p != null),
            (o.webgpu_shader_f16 =
              (p == null || (r = p.features) == null
                ? void 0
                : r.has("shader-f16")) === !0),
            (o.webnn_npu = _ === !0),
            (o.webnn_gpu = f === !0),
            o
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      r("WebPerfDeviceInfoLogFalcoEvent").log(function () {
        var t, n, r, o, a, i, l, s, u;
        return {
          cpu_cores: (t = e.cpu_cores) != null ? t : null,
          ram: (n = e.ram) != null ? n : null,
          gpu_renderer: (r = e.gpu_renderer) != null ? r : null,
          gpu_vendor: (o = e.gpu_vendor) != null ? o : null,
          webgpu_available: (a = e.webgpu_available) != null ? a : null,
          webgpu_shader_f16: (i = e.webgpu_shader_f16) != null ? i : null,
          webnn_npu: (l = e.webnn_npu) != null ? l : null,
          webnn_gpu: (s = e.webnn_gpu) != null ? s : null,
          display_hdr: (u = e.display_hdr) != null ? u : null,
        };
      });
    }
    function f() {
      var e = c();
      r("WebDevicePerfInfoData").needsFullUpdate && r("justknobx")._("6465")
        ? m()
            .then(function (t) {
              return _(babelHelpers.extends({}, e, t));
            })
            .catch(function () {
              return _(e);
            })
        : _(e);
    }
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = c(),
            t = yield new (r("AsyncTypedRequest"))(
              r("XDeviceClassRealtimeControllerRouteBuilder").buildURL({}),
            )
              .setData(e)
              .promisePayload();
          return t.devicePerfClassLevel;
        })),
        h.apply(this, arguments)
      );
    }
    function y() {
      (r("WebDevicePerfInfoData").needsFullUpdate ||
        r("WebDevicePerfInfoData").needsPartialUpdate) &&
        (e || (e = o("JSScheduler"))).scheduleSpeculativeCallback(f);
    }
    function C() {
      return new (s || (s = n("Promise")))(function (t, n) {
        r("WebDevicePerfInfoData").needsFullUpdate ||
        r("WebDevicePerfInfoData").needsPartialUpdate
          ? (e || (e = o("JSScheduler"))).scheduleSpeculativeCallback(
              function () {
                g().then(t).catch(n);
              },
            )
          : t();
      });
    }
    ((l.doLog = y), (l.doLogPromise = C));
  },
  98,
);
