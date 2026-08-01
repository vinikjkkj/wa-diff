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
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      var t = document.createElement("canvas"),
        n = t.getContext("webgl") || t.getContext("experimental-webgl");
      if (n) {
        var r = n.getExtension("WEBGL_debug_renderer_info");
        if (r) {
          var o = n.getParameter(r.UNMASKED_RENDERER_WEBGL),
            a = n.getParameter(r.UNMASKED_VENDOR_WEBGL);
          ((e.gpu_vendor = a), (e.gpu_renderer = o));
        }
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
    function d() {
      var e = c();
      r("WebPerfDeviceInfoLogFalcoEvent").log(function () {
        var t, n, r, o;
        return {
          cpu_cores: (t = e.cpu_cores) != null ? t : null,
          ram: (n = e.ram) != null ? n : null,
          gpu_renderer: (r = e.gpu_renderer) != null ? r : null,
          gpu_vendor: (o = e.gpu_vendor) != null ? o : null,
        };
      });
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = c(),
            t = yield new (r("AsyncTypedRequest"))(
              r("XDeviceClassRealtimeControllerRouteBuilder").buildURL({}),
            )
              .setData(e)
              .promisePayload();
          return t.devicePerfClassLevel;
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      (r("WebDevicePerfInfoData").needsFullUpdate ||
        r("WebDevicePerfInfoData").needsPartialUpdate) &&
        (s || (s = o("JSScheduler"))).scheduleSpeculativeCallback(d);
    }
    function f() {
      return new (e || (e = n("Promise")))(function (e, t) {
        r("WebDevicePerfInfoData").needsFullUpdate ||
        r("WebDevicePerfInfoData").needsPartialUpdate
          ? (s || (s = o("JSScheduler"))).scheduleSpeculativeCallback(
              function () {
                m().then(e).catch(t);
              },
            )
          : e();
      });
    }
    ((l.doLog = _), (l.doLogPromise = f));
  },
  98,
);
