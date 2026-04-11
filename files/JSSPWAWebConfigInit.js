__d(
  "JSSPWAWebConfigInit",
  ["JSSPConfigInit", "JSSPWAWebSubplatformMarker", "JSSelfProfiler"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.registerTraceTransformers = function () {
          (e.prototype.registerTraceTransformers.call(this),
            r("JSSelfProfiler").registerTraceTransformer(
              new (r("JSSPWAWebSubplatformMarker"))(),
              "JSSPWAWebSubplatformMarker",
            ));
        }),
        t
      );
    })(r("JSSPConfigInit"));
    l.default = e;
  },
  98,
);
