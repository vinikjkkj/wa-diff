__d(
  "react-relay/relay-hooks/useMemoVariables",
  ["areEqual", "react"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l,
      s = e || (e = n("react")),
      u = s.useState;
    function c(e) {
      var t = u(e),
        r = t[0],
        o = t[1];
      return (l || (l = n("areEqual")))(e, r) ? r : (o(e), e);
    }
    a.exports = c;
  },
  null,
);
