__d(
  "useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED",
  ["clearTimeout", "err", "react", "setTimeout"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d(e, t) {
      var n = c(null),
        o = c();
      u(function () {
        var t = n.current;
        return (
          t !== null
            ? (r("clearTimeout")(t), (n.current = null))
            : (o.current = e()),
          function () {
            function e() {
              n.current = null;
              var e = o.current;
              e && e();
            }
            n.current = r("setTimeout")(e, 0);
          }
        );
      }, []);
    }
    var m = u,
      p = m;
    l.default = p;
  },
  98,
);
