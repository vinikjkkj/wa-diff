__d(
  "WAFlowsEntryPointControllerContext.react",
  ["invariant", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.createContext,
      m = c.useContext,
      p = d(null);
    function _(e) {
      var t = e.children,
        n = e.controller;
      return u.jsx(p.Provider, { value: n, children: t });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      var e = m(p);
      return (e != null || s(0, 76971), e);
    }
    ((l.WAFlowsEntryPointControllerContextProvider = _),
      (l.useWAFlowsEntryPointController = f));
  },
  98,
);
