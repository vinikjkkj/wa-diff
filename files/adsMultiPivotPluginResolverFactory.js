__d(
  "adsMultiPivotPluginResolverFactory",
  ["AdsPluginProbes", "adsPluginResolverFactory"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return r("adsPluginResolverFactory")(function () {
        return e().flatMap(function (e) {
          return e.multiPivots.map(function (t) {
            return o("AdsPluginProbes").sharePluginProbe(
              e,
              babelHelpers.extends({}, e, { pivots: t }),
            );
          });
        });
      }, t);
    }
    l.default = e;
  },
  98,
);
