__d(
  "relay-runtime/store/readInlineData",
  [
    "invariant",
    "relay-runtime/query/GraphQLTag",
    "relay-runtime/store/RelayStoreUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("relay-runtime/query/GraphQLTag").getInlineDataFragment,
      s = n("relay-runtime/store/RelayStoreUtils").FRAGMENTS_KEY;
    function u(t, n) {
      var r,
        o = e(t);
      if (n == null) return n;
      typeof n == "object" || l(0, 17729, typeof n);
      var a = (r = n[s]) == null ? void 0 : r[o.name];
      return (a != null || l(0, 17728, o.name), a);
    }
    a.exports = u;
  },
  null,
);
