__d(
  "JSSPEventCountMarker",
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
              var o = n.totalEventCount;
              return (o != null && (e.metadata.totalEventCount = o), e);
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
