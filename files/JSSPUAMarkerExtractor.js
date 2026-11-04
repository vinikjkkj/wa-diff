__d(
  "JSSPUAMarkerExtractor",
  ["JSSPTraceBaseTransformer", "asyncToGeneratorRuntime"],
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
              e.samples.forEach(function (e) {
                var t = e.marker;
                t == null ||
                  t === "" ||
                  ((e.uaMarker = t), (e.marker = void 0));
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
