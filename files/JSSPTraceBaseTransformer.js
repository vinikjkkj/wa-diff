__d(
  "JSSPTraceBaseTransformer",
  ["FBLogger", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.transform = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              return (
                r("FBLogger")("JSSelfProfiler").warn(
                  "JSSP base transformer should be overridden.",
                ),
                e
              );
            },
          );
          function t(t, n, r) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.onProfilerAborts = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e) {},
          );
          function t(t) {
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
