__d(
  "useWAWebStableArrayModelState",
  ["react", "react-compiler-runtime", "useStable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useRef,
      d = s.useState,
      m = function (t) {
        return t.id.toString();
      };
    function p() {
      var e = o("react-compiler-runtime").c(4),
        t = r("useStable")(f),
        n = d(),
        a = n[0],
        i = n[1],
        l;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = new Map()), (e[0] = l))
        : (l = e[0]);
      var s = c(l),
        u;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = function (t) {
            var e = t.reduce(_, ""),
              n = s.current.get(e);
            n == null ? (s.current.set(e, t), i(t)) : i(n);
          }),
          (e[1] = u))
        : (u = e[1]);
      var m = u,
        p = a != null ? a : t,
        g;
      return (
        e[2] !== p ? ((g = [p, m]), (e[2] = p), (e[3] = g)) : (g = e[3]),
        g
      );
    }
    function _(e, t) {
      return e + m(t);
    }
    function f() {
      return [];
    }
    l.default = p;
  },
  98,
);
