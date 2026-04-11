__d(
  "useToggle",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useState;
    function d(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e === void 0 ? !1 : e,
        r = c(n),
        a = r[0],
        i = r[1],
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = function (t) {
            i(t == null ? m : t);
          }),
          (t[0] = l))
        : (l = t[0]);
      var s = l,
        u;
      return (
        t[1] !== a ? ((u = [a, s]), (t[1] = a), (t[2] = u)) : (u = t[2]),
        u
      );
    }
    function m(e) {
      return !e;
    }
    l.default = d;
  },
  98,
);
