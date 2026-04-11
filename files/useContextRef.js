__d(
  "useContextRef",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useEffect;
    function m(e, t) {
      var n = o("react-compiler-runtime").c(4),
        r = c(t),
        a = r.current,
        i,
        l;
      (n[0] !== a || n[1] !== e
        ? ((i = function () {
            var t = a.get(e);
            return (
              t != null ? a.set(e, t + 1) : a.set(e, 1),
              function () {
                var t = a.get(e);
                t !== void 0 && (t === 1 ? a.delete(e) : a.set(e, t - 1));
              }
            );
          }),
          (l = [a, e]),
          (n[0] = a),
          (n[1] = e),
          (n[2] = i),
          (n[3] = l))
        : ((i = n[2]), (l = n[3])),
        d(i, l));
    }
    l.default = m;
  },
  98,
);
