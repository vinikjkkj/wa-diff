__d(
  "useBoolean",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useState;
    function d(e) {
      var t = o("react-compiler-runtime").c(5),
        n = c(e),
        r = n[0],
        a = n[1],
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = function () {
            return a(m);
          }),
          (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = function () {
            return a(!0);
          }),
          (t[1] = l))
        : (l = t[1]);
      var s;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = function () {
            return a(!1);
          }),
          (t[2] = s))
        : (s = t[2]);
      var u;
      return (
        t[3] !== r
          ? ((u = { value: r, set: a, toggle: i, setTrue: l, setFalse: s }),
            (t[3] = r),
            (t[4] = u))
          : (u = t[4]),
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
