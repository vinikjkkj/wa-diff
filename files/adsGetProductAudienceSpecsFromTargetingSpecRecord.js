__d(
  "adsGetProductAudienceSpecsFromTargetingSpecRecord",
  ["adsGetProductAudienceSpecsFromFlexibleSpecRecord"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        r("adsGetProductAudienceSpecsFromFlexibleSpecRecord")(
          e.flexible_spec,
        ) || e.product_audience_specs
      );
    }
    l.default = e;
  },
  98,
);
