__d(
  "MAIBAA2UIHiddenResponseContext",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useContext,
      m = new Map(),
      p = c(m);
    function _(e) {
      var t = e.children,
        n = e.hiddenResponses;
      return s.jsx(p.Provider, { value: n, children: t });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t,
        n = d(p);
      return e == null ? null : (t = n.get(e)) != null ? t : null;
    }
    ((l.MAIBAA2UIHiddenResponseProvider = _),
      (l.useMAIBAA2UIHiddenResponseText = f));
  },
  98,
);
