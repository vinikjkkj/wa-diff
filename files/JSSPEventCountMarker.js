__d(
  "JSSPEventCountMarker",
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
          var o = r.totalEventCount;
          return (o != null && (t.metadata.totalEventCount = o), t);
        }),
        t
      );
    })(r("JSSPTraceBaseTransformer"));
    l.default = e;
  },
  98,
);
