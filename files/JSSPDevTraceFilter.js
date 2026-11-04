__d(
  "JSSPDevTraceFilter",
  ["JSSPTraceBaseTransformer", "SiteData", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var o = t.prototype;
      return (
        (o.transform = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            return (
              e.frames.forEach(function (e) {
                e.resourceId != null &&
                  r("SiteData").push_phase === "dev" &&
                  (e.name = "");
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
