__d(
  "relay-runtime/store/live-resolvers/resolverDataInjector",
  ["invariant", "relay-runtime/store/ResolverFragments"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("relay-runtime/store/ResolverFragments").readFragment;
    function s(t, n, r, o) {
      var a = n;
      return function (n, i, s) {
        var u = e(t, n);
        if (r != null) {
          if (u == null)
            if (o === !0) l(0, 73168, r, t.name);
            else return a(null, i, s);
          if (r in u)
            return (
              o === !0 && (u[r] != null || l(0, 73166, r, t.name)),
              a(u[r], i, s)
            );
          l(0, 73167, r, t.name);
        } else return a(null, i, s);
      };
    }
    a.exports = s;
  },
  null,
);
