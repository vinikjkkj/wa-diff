__d(
  "JSSPWAWebSubplatformMarker",
  ["JSSPTraceBaseTransformer", "JSSelfProfilerUtils", "WAWebEnvironment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.transform = async function (t, n, a) {
          var e = r("WAWebEnvironment").isWindows ? "hybrid" : "web";
          return (
            o("JSSelfProfilerUtils").addAnnotationToTrace(t, "subplatform", e),
            t
          );
        }),
        t
      );
    })(r("JSSPTraceBaseTransformer"));
    l.default = e;
  },
  98,
);
