__d(
  "JSSPMemoryMarker",
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
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              var r;
              e.metadata = (r = e.metadata) != null ? r : {};
              var o = n.memoryData,
                a = null,
                i = null;
              if (o != null) {
                var l, s;
                ((a = (l = o.start) == null ? void 0 : l.usedJSHeapSize),
                  (i = (s = o.end) == null ? void 0 : s.usedJSHeapSize));
              }
              return (
                a != null &&
                  i != null &&
                  ((e.metadata.usedJSHeapSizeWhenStart = a),
                  (e.metadata.usedJSHeapSizeWhenEnd = i)),
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
