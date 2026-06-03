__d(
  "JSSPTraceBaseDataCollector",
  ["FBLogger", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.onProfilerStarts = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              t === void 0 && (t = null);
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.onProfilerEnds = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, o) {
              return (
                r("FBLogger")("JSSelfProfiler").warn(
                  "JSSP base data collector onProfilerEnds should be overridden.",
                ),
                n
              );
            },
          );
          function t(t, n, r, o) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.onProfilerAborts = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {},
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        e
      );
    })();
    l.default = e;
  },
  98,
);
