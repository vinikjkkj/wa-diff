__d(
  "adsGetProductAudienceSpecsFromFlexibleSpecRecord",
  ["FBLogger", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e == null
        ? void 0
        : e
            .map(function (e) {
              var t = e.get("product_audience_specs");
              return t == null
                ? null
                : t instanceof r("immutable").List
                  ? t
                  : r("FBLogger")("dpa").mustfix(
                      "expected product_audience_specs in flexible spec to be Immutable.List",
                    );
            })
            .filter(Boolean)
            .first();
    }
    l.default = e;
  },
  98,
);
