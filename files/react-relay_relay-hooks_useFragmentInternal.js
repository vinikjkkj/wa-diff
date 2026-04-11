__d(
  "react-relay/relay-hooks/useFragmentInternal",
  [
    "react-relay/relay-hooks/useFragmentInternal_CURRENT",
    "react-relay/relay-hooks/useFragmentInternal_EXPERIMENTAL",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      return o("relay-runtime").RelayFeatureFlags.ENABLE_ACTIVITY_COMPATIBILITY
        ? r("react-relay/relay-hooks/useFragmentInternal_EXPERIMENTAL")(
            e,
            t,
            n,
            a,
          )
        : r("react-relay/relay-hooks/useFragmentInternal_CURRENT")(e, t, n, a);
    }
    i.exports = e;
  },
  34,
);
