__d(
  "WAWebVoipHardwareInfo",
  [
    "Promise",
    "WAPromiseDelays",
    "WAWebBackendApi",
    "WAWebBrowserApi",
    "WAWebNullFunc",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 3e3,
      u = {},
      c = null,
      d = [
        { keywords: ["intel"], name: "Intel" },
        {
          keywords: [
            "amd",
            "advanced micro devices",
            "ati technologies",
            "radeon",
          ],
          name: "AMD",
        },
        { keywords: ["nvidia"], name: "NVIDIA" },
        { keywords: ["qualcomm", "adreno"], name: "Qualcomm" },
        { keywords: ["apple"], name: "Apple" },
        { keywords: ["microsoft"], name: "Microsoft" },
        { keywords: ["mesa", "swiftshader"], name: "Software" },
      ];
    function m(e) {
      var t,
        n,
        r = (t = e == null ? void 0 : e.trim().toLowerCase()) != null ? t : "";
      if (r === "") return null;
      var o = d.find(function (e) {
        var t = e.keywords;
        return t.some(function (e) {
          return r.includes(e);
        });
      });
      return (n = o == null ? void 0 : o.name) != null ? n : null;
    }
    function p(e) {
      var t, n;
      return (t = (n = m(e)) != null ? n : e == null ? void 0 : e.trim()) !=
        null
        ? t
        : "";
    }
    function _(e, t) {
      var n, r;
      return (n = (r = m(t)) != null ? r : m(e)) != null ? n : p(t);
    }
    function f() {
      var t = {},
        r = function () {
          u = babelHelpers.extends({}, t);
        },
        a = o("WAWebBrowserApi")
          .getCpuArchitecture()
          .then(function (e) {
            e != null && e !== "" && ((t.cpuArch = e), r());
          }),
        i = o("WAPromiseDelays")
          .withTimeout(
            o("WAWebBackendApi")
              .frontendSendAndReceive("detectGpuInfo")
              .catch(o("WAWebNullFunc").returnNull),
            s,
            o("WAWebNullFunc").returnNull,
          )
          .then(function (e) {
            if (e != null) {
              e.gpuName !== "" && (t.gpuName = e.gpuName);
              var n = _(e.gpuName, e.gpuVendorRaw);
              (n !== "" && (t.gpuVendor = n), (t.gpuCount = 1), r());
            }
          });
      return (e || (e = n("Promise"))).all([a, i]).then(function () {});
    }
    function g() {
      if (c == null)
        try {
          c = f().catch(function (e) {});
        } catch (t) {
          c = (e || (e = n("Promise"))).resolve();
        }
    }
    function h() {
      return u;
    }
    function y() {
      ((u = {}), (c = null));
    }
    function C() {
      return c;
    }
    ((l.normalizeGpuVendor = p),
      (l.ensureHardwareInfoDetected = g),
      (l.getCachedHardwareInfo = h),
      (l.resetHardwareInfoForTest = y),
      (l.getDetectionPromiseForTest = C));
  },
  98,
);
