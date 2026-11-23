__d(
  "MAIBALatestTurnBoundary",
  ["MAIBAMessageContext", "react"],
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
        n = e.userRowIndexFromBottom;
      return s.jsx(m.Provider, { value: n, children: t });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      var e = o("MAIBAMessageContext").useMAIBAMessageContext(),
        t = e.rowIndexFromBottom,
        n = d(m);
      return t == null || n == null ? !0 : t < n;
    }
    ((l.MAIBALatestTurnBoundaryProvider = p), (l.useIsInLatestTurn = _));
  },
  98,
);
