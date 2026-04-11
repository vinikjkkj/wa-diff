__d(
  "useWAWebFocusOnMount",
  ["WAWebFocusTracer", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d() {
      var e = o("react-compiler-runtime").c(2),
        t = c(),
        n,
        a;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = function () {
              r("WAWebFocusTracer").focus(t.current);
            }),
            (a = []),
            (e[0] = n),
            (e[1] = a))
          : ((n = e[0]), (a = e[1])),
        u(n, a),
        t
      );
    }
    l.default = d;
  },
  98,
);
