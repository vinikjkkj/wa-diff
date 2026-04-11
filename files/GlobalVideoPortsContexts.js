__d(
  "GlobalVideoPortsContexts",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.createContext,
      c = s.useContext,
      d = u(null),
      m = u(null),
      p = u(null);
    function _() {
      return c(d);
    }
    function f() {
      return c(m);
    }
    function g() {
      return c(p);
    }
    var h = d.Provider,
      y = m.Provider,
      C = p.Provider;
    ((l.useGlobalVideoPortsLoader = _),
      (l.useGlobalVideoPortsManager = f),
      (l.useGlobalVideoPortsState = g),
      (l.GlobalVideoPortsLoaderContextProvider = h),
      (l.GlobalVideoPortsManagerContextProvider = y),
      (l.GlobalVideoPortsStateContextProvider = C));
  },
  98,
);
