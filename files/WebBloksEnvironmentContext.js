__d(
  "WebBloksEnvironmentContext",
  ["WebBloksUtils", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useContext,
      c = s.createContext(null);
    function d(e) {
      var t = e.children,
        n = e.environment;
      return s.jsx(c.Provider, { value: n, children: t });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m() {
      var e = u(c);
      return o("WebBloksUtils").nullthrows(e);
    }
    function p() {
      var e = m(),
        t = e.emitDataBloksName;
      return function (e) {
        return t ? { "data-bloks-name": e } : o("WebBloksUtils").EMPTY_OBJECT;
      };
    }
    ((l.WebBloksEnvironmentContext = c),
      (l.WebBloksEnvironmentProvider = d),
      (l.useWebBloksEnvironment = m),
      (l.useDataBloksName = p));
  },
  98,
);
