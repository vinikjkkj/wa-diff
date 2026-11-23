__d(
  "JSSPTraceBaseDataCollector",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.onProfilerStarts = async function (t, n) {
          n === void 0 && (n = null);
        }),
        (t.onProfilerEnds = async function (t, n, o, a) {
          return (
            r("FBLogger")("JSSelfProfiler").warn(
              "JSSP base data collector onProfilerEnds should be overridden.",
            ),
            o
          );
        }),
        (t.onProfilerAborts = async function (t, n) {}),
        e
      );
    })();
    l.default = e;
  },
  98,
);
