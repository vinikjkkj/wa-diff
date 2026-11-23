__d(
  "MAIBAA2UIComponentRegistry",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useContext,
      m = c({});
    function p(e) {
      var t = e.children,
        n = e.components;
      return s.jsx(m.Provider, { value: n, children: t });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      return d(m);
    }
    ((l.MAIBAA2UIComponentRegistryProvider = p), (l.useComponentRegistry = _));
  },
  98,
);
