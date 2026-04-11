__d(
  "react-relay/isRelayEnvironment",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return (
        typeof e == "object" &&
        e !== null &&
        typeof e.check == "function" &&
        typeof e.lookup == "function" &&
        typeof e.retain == "function" &&
        typeof e.execute == "function" &&
        typeof e.subscribe == "function"
      );
    }
    a.exports = e;
  },
  null,
);
