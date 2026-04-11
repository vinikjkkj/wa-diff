__d(
  "useEventHandler",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useLayoutEffect,
      d = s.useRef;
    function m(e) {
      var t = o("react-compiler-runtime").c(4),
        n = d(e),
        r,
        a;
      (t[0] !== e
        ? ((r = function () {
            n.current = e;
          }),
          (a = [e]),
          (t[0] = e),
          (t[1] = r),
          (t[2] = a))
        : ((r = t[1]), (a = t[2])),
        c(r, a));
      var i;
      return (
        t[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = function () {
              for (
                var e = arguments.length, t = new Array(e), r = 0;
                r < e;
                r++
              )
                t[r] = arguments[r];
              var o = t;
              n.current.apply(n, o);
            }),
            (t[3] = i))
          : (i = t[3]),
        i
      );
    }
    l.default = m;
  },
  98,
);
