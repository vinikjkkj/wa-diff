__d(
  "WebBloksEnvironmentContext",
  ["WebBloksUtils", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useContext,
      c = s.createContext(null);
    function d(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        r = e.environment,
        a;
      return (
        t[0] !== n || t[1] !== r
          ? ((a = s.jsx(c.Provider, { value: r, children: n })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    function m() {
      var e = o("react-compiler-runtime").c(2),
        t = u(c),
        n;
      return (
        e[0] !== t
          ? ((n = o("WebBloksUtils").nullthrows(t)), (e[0] = t), (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    ((l.WebBloksEnvironmentContext = c),
      (l.WebBloksEnvironmentProvider = d),
      (l.useWebBloksEnvironment = m));
  },
  98,
);
