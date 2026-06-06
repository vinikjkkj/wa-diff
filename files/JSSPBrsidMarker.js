__d(
  "JSSPBrsidMarker",
  ["Env", "JSSPTraceBaseTransformer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.transform = async function (n) {
            var t,
              o,
              a = (t = (e || (e = r("Env"))).brsid) != null ? t : 0;
            return (
              (n.metadata = (o = n.metadata) != null ? o : {}),
              (n.metadata.brsid = "" + a),
              n
            );
          }),
          n
        );
      })(r("JSSPTraceBaseTransformer"));
    l.default = s;
  },
  98,
);
