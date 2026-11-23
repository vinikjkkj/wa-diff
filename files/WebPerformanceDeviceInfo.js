__d(
  "WebPerformanceDeviceInfo",
  ["WebDevicePerfClassData", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("WebDevicePerfInfoLogging").__setRef(
        "WebPerformanceDeviceInfo",
      ),
      s = r("WebDevicePerfClassData").deviceLevel,
      u = null;
    async function c() {
      var t = await new Promise(function (t, n) {
          e.onReady(function (e) {
            t(e);
          });
        }),
        n = await t.doLogPromise();
      n && (s = n);
    }
    function d() {
      return s;
    }
    function m() {
      return r("WebDevicePerfClassData").yearClass;
    }
    function p() {
      e.onReady(function (e) {
        e.doLog();
      });
    }
    function _() {
      return (u == null && (u = c()), u);
    }
    ((l.getDeviceLevel = d),
      (l.getMobileYearClass = m),
      (l.initWebDevicePerfLoggingPassive = p),
      (l.initWebDevicePerfLoggingAndUpdateValue = _));
  },
  98,
);
