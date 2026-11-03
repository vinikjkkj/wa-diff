__d(
  "JSSPTraceSizeOptimizer",
  ["JSSPTraceBaseTransformer"],
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
          var e = t;
          return (
            (e.resources = t.resources.map(function (e) {
              return e.startsWith("data:") ? "inline JavaScript" : e;
            })),
            e
          );
        }),
        t
      );
    })(r("JSSPTraceBaseTransformer"));
    l.default = e;
  },
  98,
);
