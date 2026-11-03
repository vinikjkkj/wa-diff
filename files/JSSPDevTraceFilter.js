__d(
  "JSSPDevTraceFilter",
  ["JSSPTraceBaseTransformer", "SiteData"],
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
            t.frames.forEach(function (e) {
              e.resourceId != null &&
                r("SiteData").push_phase === "dev" &&
                (e.name = "");
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
