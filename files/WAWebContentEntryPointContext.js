__d(
  "WAWebContentEntryPointContext",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useContext,
      c = s.createContext(null);
    function d(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        r = e.value,
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
      return u(c);
    }
    ((l.WAWebContentEntryPointProvider = d), (l.useWAWebContentEntryPoint = m));
  },
  98,
);
