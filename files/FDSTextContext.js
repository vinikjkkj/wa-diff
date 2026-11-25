__d(
  "FDSTextContext",
  ["FDSTextContext_Old.react", "react"],
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
      var t = e.children,
        n = e.color,
        o = e.type;
      return o == null
        ? s.jsx(c.Provider, {
            value: null,
            children: typeof t == "function" ? t(null) : t,
          })
        : s.jsx(r("FDSTextContext_Old.react"), {
            children: t,
            color: n != null ? n : "primary",
            type: o,
          });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      return s.jsx(r("FDSTextContext_Old.react"), babelHelpers.extends({}, e));
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.FDSTextContext = c),
      (l.useFDSTextContext = d),
      (l.FDSTextContextProvider = m),
      (l.FDSTextContextProviderNonNull = p));
  },
  98,
);
