__d(
  "WAWebContentEntryPointContext",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useContext,
      c = s.createContext(null);
    function d(e) {
      var t = e.children,
        n = e.value;
      return s.jsx(c.Provider, { value: n, children: t });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m() {
      return u(c);
    }
    ((l.WAWebContentEntryPointProvider = d), (l.useWAWebContentEntryPoint = m));
  },
  98,
);
