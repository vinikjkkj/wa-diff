__d(
  "WAWebAuraBenefitProviderInit",
  ["WAWebAuraGating", "WAWebFeatureFlagCollection"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      r("WAWebAuraGating").initFeatureFlagProvider(function (e) {
        var t,
          n = o("WAWebFeatureFlagCollection").FeatureFlagCollection.get(e);
        return n == null
          ? null
          : {
              enabled: n.enabled === !0,
              limit: (t = n.limit) != null ? t : null,
            };
      });
    }
    l.initAuraBenefitFeatureFlagProvider = e;
  },
  98,
);
