__d(
  "AdsTableDateSelectorChangeNavigationStateReducerPlugin",
  ["Laminar", "adsPEManageAdsSectionSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["CREATIVES"],
      s = {
        reduce: o("Laminar").withFluxSelectors(
          { adsPEManageAdsSection: r("adsPEManageAdsSectionSelector") },
          function (t, n, r) {
            var o = r.adsPEManageAdsSection;
            return o != null &&
              e.includes(o) &&
              ((t != null && t.comparisonTimeRange) ||
                (t != null && t.comparePreset))
              ? babelHelpers.extends({}, t, {
                  comparisonTimeRange: null,
                  comparePreset: null,
                })
              : t;
          },
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
