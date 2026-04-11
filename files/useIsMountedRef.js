__d(
  "useIsMountedRef",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useLayoutEffect,
      c = s.useRef;
    function d() {
      var e = o("react-compiler-runtime").c(2),
        t = c(!1),
        n,
        r;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = function () {
              return (
                (t.current = !0),
                function () {
                  t.current = !1;
                }
              );
            }),
            (r = []),
            (e[0] = n),
            (e[1] = r))
          : ((n = e[0]), (r = e[1])),
        u(n, r),
        t
      );
    }
    l.default = d;
  },
  98,
);
