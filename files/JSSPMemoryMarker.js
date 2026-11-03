__d(
  "JSSPMemoryMarker",
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
        (n.transform = async function (t, n, r) {
          var e;
          t.metadata = (e = t.metadata) != null ? e : {};
          var o = r.memoryData,
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
              ((t.metadata.usedJSHeapSizeWhenStart = a),
              (t.metadata.usedJSHeapSizeWhenEnd = i)),
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
