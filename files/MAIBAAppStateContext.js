__d(
  "MAIBAAppStateContext",
  ["invariant", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useContext,
      d = u.createContext(null);
    function m() {
      return c(d);
    }
    function p() {
      var e = c(d);
      return (e != null || s(0, 167749), e);
    }
    ((l.MAIBAAppStateContext = d),
      (l.useMAIBAAppState = m),
      (l.useMAIBAAppStateRequired = p));
  },
  98,
);
