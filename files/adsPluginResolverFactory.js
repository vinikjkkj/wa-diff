__d(
  "adsPluginResolverFactory",
  ["invariant", "adsMemoizeWithArgs", "adsMultipleKeyResolverGenerator"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return function (t) {
        return e
          .map(function (e) {
            return t[e];
          })
          .join("|");
      };
    }
    function u(t, n) {
      var o = r("adsMultipleKeyResolverGenerator")(n);
      return {
        resolve: r("adsMemoizeWithArgs")(
          function (e) {
            var n = t(),
              r = n.reduce(o.bind(null, e), null);
            return (
              r == null && s(0, 11834, n[0] && n[0].type, JSON.stringify(e)),
              babelHelpers.extends({}, r, { pivots: e })
            );
          },
          e(n),
          i.id + ".resolve",
        ),
      };
    }
    l.default = u;
  },
  98,
);
