__d(
  "relay-runtime/mutations/readUpdatableFragment",
  [
    "invariant",
    "relay-runtime/mutations/createUpdatableProxy",
    "relay-runtime/query/GraphQLTag",
    "relay-runtime/store/RelayModernSelector",
    "relay-runtime/store/RelayStoreUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("relay-runtime/query/GraphQLTag").getFragment,
      s = n("relay-runtime/store/RelayModernSelector").getVariablesFromFragment,
      u = n("relay-runtime/store/RelayStoreUtils").ID_KEY,
      c = n(
        "relay-runtime/mutations/createUpdatableProxy",
      ).createUpdatableProxy;
    function d(t, n, r, o) {
      var a = e(t),
        i = s(a, n),
        d = n[u],
        m = r.get(d);
      return (
        m != null || l(0, void 0),
        { updatableData: c(m, i, a.selections, r, o) }
      );
    }
    a.exports = { readUpdatableFragment: d };
  },
  null,
);
