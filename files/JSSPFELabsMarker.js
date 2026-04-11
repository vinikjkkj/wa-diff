__d(
  "JSSPFELabsMarker",
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
            var t,
              n,
              r =
                (t = ((n = window.__felab_context) != null ? n : {})
                  .annotations) != null
                  ? t
                  : {};
            return (
              Object.entries(r)
                .filter(function (e) {
                  var t = e[0],
                    n = e[1];
                  return !["object", "function"].includes(typeof n);
                })
                .map(function (e) {
                  var t = e[0],
                    n = e[1];
                  return [t, String(n)];
                })
                .forEach(function (t) {
                  var n = t[0],
                    r = t[1];
                  return o("JSSelfProfilerUtils").addAnnotationToTrace(e, n, r);
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
