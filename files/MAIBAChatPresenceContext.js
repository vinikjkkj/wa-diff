__d(
  "MAIBAChatPresenceContext",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useContext,
      m = c(null);
    function p(e) {
      var t = e.children;
      return s.jsx(m.Provider, { value: !0, children: t });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      var e = d(m);
      return e != null;
    }
    ((l.MAIBAChatPresenceProvider = p), (l.useIsWithinMAIBAChatContext = _));
  },
  98,
);
