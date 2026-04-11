__d(
  "relay-runtime/store/ResolverCache",
  ["invariant", "relay-runtime/util/RelayConcreteNode"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("relay-runtime/util/RelayConcreteNode").RELAY_LIVE_RESOLVER,
      s = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.readFromCacheOrEvaluate = function (n, r, o, a, i) {
            r.kind !== e || l(0, 57615);
            var t = a(),
              s = t.resolverResult,
              u = t.snapshot,
              c = t.error;
            return [s, void 0, c, u, void 0, void 0];
          }),
          (n.invalidateDataIDs = function (t) {}),
          (n.ensureClientRecord = function (t, n) {
            l(0, 58014);
          }),
          (n.notifyUpdatedSubscribers = function (t) {}),
          t
        );
      })();
    a.exports = { NoopResolverCache: s };
  },
  null,
);
