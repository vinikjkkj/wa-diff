__d(
  "WebPerformanceDeviceInfo",
  [
    "Promise",
    "WebDevicePerfClassData",
    "asyncToGeneratorRuntime",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("requireDeferred")("WebDevicePerfInfoLogging").__setRef(
        "WebPerformanceDeviceInfo",
      ),
      u = r("WebDevicePerfClassData").deviceLevel,
      c = null;
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield new (e || (e = n("Promise")))(function (e, t) {
              s.onReady(function (t) {
                e(t);
              });
            }),
            r = yield t.doLogPromise();
          r && (u = r);
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return u;
    }
    function _() {
      return r("WebDevicePerfClassData").yearClass;
    }
    function f() {
      s.onReady(function (e) {
        e.doLog();
      });
    }
    function g() {
      return (c == null && (c = d()), c);
    }
    ((l.getDeviceLevel = p),
      (l.getMobileYearClass = _),
      (l.initWebDevicePerfLoggingPassive = f),
      (l.initWebDevicePerfLoggingAndUpdateValue = g));
  },
  98,
);
