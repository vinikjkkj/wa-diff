__d(
  "JSSPFELabsMarker",
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
          var e,
            n,
            r =
              (e = ((n = window.__felab_context) != null ? n : {})
                .annotations) != null
                ? e
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
              .forEach(function (e) {
                var n = e[0],
                  r = e[1];
                return o("JSSelfProfilerUtils").addAnnotationToTrace(t, n, r);
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
