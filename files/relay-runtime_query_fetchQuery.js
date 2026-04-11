__d(
  "relay-runtime/query/fetchQuery",
  [
    "invariant",
    "relay-runtime/network/RelayObservable",
    "relay-runtime/query/GraphQLTag",
    "relay-runtime/query/fetchQueryInternal",
    "relay-runtime/store/RelayModernOperationDescriptor",
    "relay-runtime/util/handlePotentialSnapshotErrors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n(
        "relay-runtime/store/RelayModernOperationDescriptor",
      ).createOperationDescriptor,
      s = n(
        "relay-runtime/util/handlePotentialSnapshotErrors",
      ).handlePotentialSnapshotErrors,
      u = n("relay-runtime/query/GraphQLTag").getRequest;
    function c(t, r, o, a) {
      var i,
        c = u(r);
      c.params.operationKind === "query" || l(0, 13332);
      var m = babelHelpers.extends(
          { force: !0 },
          a == null ? void 0 : a.networkCacheConfig,
        ),
        p = e(c, o, m),
        _ =
          (i = a == null ? void 0 : a.fetchPolicy) != null ? i : "network-only";
      function f(e) {
        return (s(t, e.fieldErrors), e.data);
      }
      switch (_) {
        case "network-only":
          return d(t, p).map(f);
        case "store-or-network": {
          var g = t.check(p),
            h = g.status !== "available",
            y;
          return (
            h
              ? (y = d(t, p).map(f))
              : (y = n("relay-runtime/network/RelayObservable")
                  .from(t.lookup(p.fragment))
                  .map(f)),
            t.__log({
              name: "fetchquery.fetch",
              operation: p,
              fetchPolicy: _,
              queryAvailability: g,
              shouldFetch: h,
            }),
            y
          );
        }
        default:
          throw new Error("fetchQuery: Invalid fetchPolicy " + _);
      }
    }
    function d(e, t) {
      return n("relay-runtime/query/fetchQueryInternal")
        .fetchQuery(e, t)
        .map(function () {
          return e.lookup(t.fragment);
        });
    }
    a.exports = c;
  },
  null,
);
