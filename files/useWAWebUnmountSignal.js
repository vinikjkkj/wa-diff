__d(
  "useWAWebUnmountSignal",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d() {
      var e = o("react-compiler-runtime").c(3),
        t = c(m),
        n = t[0],
        r,
        a;
      return (
        e[0] !== n
          ? ((r = function () {
              return function () {
                return n.abort();
              };
            }),
            (a = [n]),
            (e[0] = n),
            (e[1] = r),
            (e[2] = a))
          : ((r = e[1]), (a = e[2])),
        u(r, a),
        n.signal
      );
    }
    function m() {
      return new AbortController();
    }
    l.default = d;
  },
  98,
);
