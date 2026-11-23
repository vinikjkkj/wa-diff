__d(
  "JSSPUAMarkerExtractor",
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
            t.samples.forEach(function (e) {
              var t = e.marker;
              t == null || t === "" || ((e.uaMarker = t), (e.marker = void 0));
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
