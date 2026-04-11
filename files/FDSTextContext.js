__d(
  "FDSTextContext",
  ["cr:20414", "react", "react-compiler-runtime"],
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
        r = e.children,
        a = e.color,
        i = e.type;
      if (i == null) {
        var l;
        t[0] !== r
          ? ((l = typeof r == "function" ? r(null) : r), (t[0] = r), (t[1] = l))
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
          t[4] !== r || t[5] !== d || t[6] !== i
            ? ((m = s.jsx(n("cr:20414"), { children: r, color: d, type: i })),
              (t[4] = r),
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
        r;
      return (
        t[0] !== e
          ? ((r = s.jsx(n("cr:20414"), babelHelpers.extends({}, e))),
            (t[0] = e),
            (t[1] = r))
          : (r = t[1]),
        r
      );
    }
    ((l.FDSTextContext = c),
      (l.useFDSTextContext = d),
      (l.FDSTextContextProvider = m),
      (l.FDSTextContextProviderNonNull = p));
  },
  98,
);
