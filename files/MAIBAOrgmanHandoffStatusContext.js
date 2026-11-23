__d(
  "MAIBAOrgmanHandoffStatusContext",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useContext,
      c = s.createContext(null),
      d = s.createContext(null);
    function m() {
      return u(c);
    }
    function p() {
      return u(d);
    }
    ((l.MAIBAOrgmanHandoffStatusContext = c),
      (l.MAIBAOrgmanHandoffHiddenCardsContext = d),
      (l.useOrgmanHandoffStatus = m),
      (l.useOrgmanHandoffHiddenCards = p));
  },
  98,
);
