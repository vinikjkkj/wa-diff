__d(
  "MAIBACTAHandlersContext",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useContext,
      m = {},
      p = c(m);
    function _(e) {
      var t = e.children,
        n = e.value;
      return s.jsx(p.Provider, { value: n != null ? n : m, children: t });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      return d(p);
    }
    ((l.MAIBACTAHandlersContextProvider = _),
      (l.useMAIBACTAHandlersContext = f));
  },
  98,
);
