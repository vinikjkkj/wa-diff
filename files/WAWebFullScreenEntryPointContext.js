__d(
  "WAWebFullScreenEntryPointContext",
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
    ((l.WAWebFullScreenEntryPointProvider = d),
      (l.useWAWebFullScreenEntryPoint = m));
  },
  98,
);
