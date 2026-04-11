__d(
  "relay-runtime/store/live-resolvers/LiveResolverSuspenseSentinel",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = Object.freeze({ __LIVE_RESOLVER_SUSPENSE_SENTINEL: !0 });
    function l() {
      return e;
    }
    function s(t) {
      return t === e;
    }
    a.exports = { isSuspenseSentinel: s, suspenseSentinel: l };
  },
  null,
);
