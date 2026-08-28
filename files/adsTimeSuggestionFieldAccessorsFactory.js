__d(
  "adsTimeSuggestionFieldAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          is_enabled: o("AdsAdObjectsAccessorUtils").basicFieldAccessorFactory(
            e,
            t,
            "is_enabled",
          ),
          high_demand_periods: o(
            "AdsAdObjectsAccessorUtils",
          ).basicListFieldAccessorFactory(e, t, "high_demand_periods"),
        },
      );
    }
    l.default = e;
  },
  98,
);
