__d(
  "JSSPEmptySampleFilter",
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
          return (
            (t.samples = t.samples.filter(function (e) {
              return e.stackId != null;
            })),
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
