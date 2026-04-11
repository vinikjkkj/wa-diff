__d(
  "JSSPWAWebSubplatformMarker",
  [
    "JSSPTraceBaseTransformer",
    "JSSelfProfilerUtils",
    "WAWebEnvironment",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var a = t.prototype;
      return (
        (a.transform = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              var a = r("WAWebEnvironment").isWindows ? "hybrid" : "web";
              return (
                o("JSSelfProfilerUtils").addAnnotationToTrace(
                  e,
                  "subplatform",
                  a,
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
        t
      );
    })(r("JSSPTraceBaseTransformer"));
    l.default = e;
  },
  98,
);
