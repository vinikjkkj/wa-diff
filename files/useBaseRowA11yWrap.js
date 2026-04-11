__d(
  "useBaseRowA11yWrap",
  ["react", "react-compiler-runtime", "useResizeObserver"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useState;
    function d(e) {
      var t = o("react-compiler-runtime").c(5),
        n = c(!1),
        a = n[0],
        i = n[1],
        l;
      t[0] !== e
        ? ((l = function (n, r) {
            if (e) {
              var t = r.children;
              if (!(t.length < 2)) {
                for (var o = null, a = !1, l = 0; l < t.length; l++) {
                  var s = t[l],
                    u = s.getBoundingClientRect();
                  if (
                    o != null &&
                    Math.abs(u.top - o.top) >= Math.min(u.height, o.height) - 5
                  ) {
                    a = !0;
                    break;
                  }
                  o = u;
                }
                i(a);
              }
            }
          }),
          (t[0] = e),
          (t[1] = l))
        : (l = t[1]);
      var s = l,
        u = r("useResizeObserver")(s),
        d;
      return (
        t[2] !== u || t[3] !== a
          ? ((d = [a, u]), (t[2] = u), (t[3] = a), (t[4] = d))
          : (d = t[4]),
        d
      );
    }
    l.default = d;
  },
  98,
);
