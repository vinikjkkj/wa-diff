__d(
  "relay-runtime/store/ResolverFragments",
  [
    "invariant",
    "relay-runtime/query/GraphQLTag",
    "relay-runtime/store/RelayModernSelector",
    "relay-runtime/util/handlePotentialSnapshotErrors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("relay-runtime/query/GraphQLTag").getFragment,
      s = n(
        "relay-runtime/util/handlePotentialSnapshotErrors",
      ).eventShouldThrow,
      u = n("relay-runtime/store/RelayModernSelector").getSelector,
      c = [];
    function d(e, t) {
      c.push(e);
      try {
        return t();
      } finally {
        c.pop();
      }
    }
    function m(t, n) {
      if (!c.length)
        throw new Error(
          "readFragment should be called only from within a Relay Resolver function.",
        );
      var r = c[c.length - 1],
        o = e(t),
        a = u(o, n);
      (a != null || l(0, void 0),
        a.kind === "SingularReaderSelector" || l(0, void 0));
      var i = r.getDataForResolverFragment(a, n),
        d = i.data,
        m = i.isMissingData,
        _ = i.fieldErrors;
      if (m || (_ != null && _.some(s))) throw p;
      return d;
    }
    var p = {};
    a.exports = {
      RESOLVER_FRAGMENT_ERRORED_SENTINEL: p,
      readFragment: m,
      withResolverContext: d,
    };
  },
  null,
);
