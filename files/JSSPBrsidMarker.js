__d(
  "JSSPBrsidMarker",
  ["Env", "JSSPTraceBaseTransformer", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function o() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(o, t);
        var a = o.prototype;
        return (
          (a.transform = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n,
                  o,
                  a = (n = (e || (e = r("Env"))).brsid) != null ? n : 0;
                return (
                  (t.metadata = (o = t.metadata) != null ? o : {}),
                  (t.metadata.brsid = "" + a),
                  t
                );
              },
            );
            function o(e) {
              return t.apply(this, arguments);
            }
            return o;
          })()),
          o
        );
      })(r("JSSPTraceBaseTransformer"));
    l.default = s;
  },
  98,
);
