__d(
  "react-relay/RelayContext",
  ["invariant", "react-relay/isRelayEnvironment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (s(e) || l(0, 6172, e), e);
    }
    function s(e) {
      return (
        typeof e == "object" &&
        e !== null &&
        !Array.isArray(e) &&
        n("react-relay/isRelayEnvironment")(e.environment)
      );
    }
    a.exports = { assertRelayContext: e, isRelayContext: s };
  },
  null,
);
