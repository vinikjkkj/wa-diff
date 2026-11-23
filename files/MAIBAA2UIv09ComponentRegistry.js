__d(
  "MAIBAA2UIv09ComponentRegistry",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useContext,
      m = c({}),
      p = c(null);
    function _(e) {
      var t = e.children,
        n = e.components;
      return s.jsx(m.Provider, { value: n, children: t });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      return d(m);
    }
    function g(e) {
      var t = e.children,
        n = e.value;
      return s.jsx(p.Provider, { value: n, children: t });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      return d(p);
    }
    ((l.MAIBAA2UIv09ComponentRegistryProvider = _),
      (l.MAIBAA2UIv09ScorecardReportTabLoggingContextProvider = g),
      (l.useMAIBAA2UIv09ScorecardReportTabLoggingContext = h),
      (l.useV09ComponentRegistry = f));
  },
  98,
);
