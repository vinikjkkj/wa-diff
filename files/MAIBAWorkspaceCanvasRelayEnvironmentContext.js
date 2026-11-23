__d(
  "MAIBAWorkspaceCanvasRelayEnvironmentContext",
  ["RelayHooks", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useContext,
      m = c(null);
    function p(e) {
      var t = e.children,
        n = e.environment;
      return s.jsx(m.Provider, { value: n, children: t });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      var e = o("RelayHooks").useRelayEnvironment(),
        t = d(m);
      return t != null ? t : e;
    }
    function f() {
      return d(m);
    }
    ((l.MAIBAWorkspaceCanvasRelayEnvironmentProvider = p),
      (l.useMAIBAWorkspaceCanvasRelayEnvironment = _),
      (l.useMAIBAWorkspaceCanvasRelayEnvironmentOverride = f));
  },
  98,
);
