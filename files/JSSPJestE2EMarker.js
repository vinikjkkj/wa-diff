__d(
  "JSSPJestE2EMarker",
  [
    "JSSPTraceBaseTransformer",
    "JSSelfProfilerUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var r = t.prototype;
      return (
        (r.transform = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            return (
              typeof window != "undefined" &&
                window.$JSSPJestE2EMarker1 != null &&
                e.samples.forEach(function (e) {
                  return o("JSSelfProfilerUtils").addMarkerToSample(
                    e,
                    "jest-e2e",
                  );
                }),
              e
            );
          });
          function t(t) {
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
