__d(
  "react-relay/relay-hooks/useRelayEnvironment",
  ["invariant", "react", "react-relay/ReactRelayContext"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = n("react")),
      u = s.useContext;
    function c() {
      var e = u(n("react-relay/ReactRelayContext"));
      return (e != null || l(0, 21945), e.environment);
    }
    a.exports = c;
  },
  null,
);
