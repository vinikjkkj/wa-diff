__d(
  "JSSPJestE2EMarker",
  ["JSSPTraceBaseTransformer", "JSSelfProfilerUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.transform = async function (t) {
          return (
            typeof window != "undefined" &&
              window.$JSSPJestE2EMarker1 != null &&
              t.samples.forEach(function (e) {
                return o("JSSelfProfilerUtils").addMarkerToSample(
                  e,
                  "jest-e2e",
                );
              }),
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
