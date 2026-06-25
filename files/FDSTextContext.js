__d(
  "FDSTextContext",
  ["FDSTextContext_Old.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useContext,
      c = s.createContext(null);
    function d() {
      return u(c);
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.children,
        a = e.color,
        i = e.type;
      if (i == null) {
        var l;
        t[0] !== n
          ? ((l = typeof n == "function" ? n(null) : n), (t[0] = n), (t[1] = l))
          : (l = t[1]);
        var u;
        return (
          t[2] !== l
            ? ((u = s.jsx(c.Provider, { value: null, children: l })),
              (t[2] = l),
              (t[3] = u))
            : (u = t[3]),
          u
        );
      } else {
        var d = a != null ? a : "primary",
          m;
        return (
          t[4] !== n || t[5] !== d || t[6] !== i
            ? ((m = s.jsx(r("FDSTextContext_Old.react"), {
                children: n,
                color: d,
                type: i,
              })),
              (t[4] = n),
              (t[5] = d),
              (t[6] = i),
              (t[7] = m))
            : (m = t[7]),
          m
        );
      }
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = s.jsx(
              r("FDSTextContext_Old.react"),
              babelHelpers.extends({}, e),
            )),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    ((l.FDSTextContext = c),
      (l.useFDSTextContext = d),
      (l.FDSTextContextProvider = m),
      (l.FDSTextContextProviderNonNull = p));
  },
  98,
);
