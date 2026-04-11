__d(
  "useFBSubscription",
  [
    "RelayFBSubscription",
    "react-relay/relay-hooks/useSubscription",
    "relay-runtime/subscription/requestSubscription",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("RelayFBSubscription").addFBisms(
      n("relay-runtime/subscription/requestSubscription"),
    );
    function l(t) {
      return n("react-relay/relay-hooks/useSubscription")(t, e);
    }
    a.exports = l;
  },
  null,
);
