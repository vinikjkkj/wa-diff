__d(
  "AdsOptimalDeliveryGrowthOpportunitySpecUtils",
  [
    "AdObjectLevels",
    "AdsDeliveryGrowthOptimizationTypes",
    "AdsOptimizationConfidenceLevels",
    "TypeCoercionUtils",
    "getJSEnumKeySafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t, n, a, l;
      return {
        child_metadata:
          (t = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.child_metadata.map(function (t) {
              var n, a, l;
              return {
                key: o("TypeCoercionUtils").coerceNonMaybeValue(
                  t.key,
                  "optimal_delivery_growth_opportunities.child_metadata[].key",
                  i.id,
                ),
                value: {
                  ad_object_level: r("getJSEnumKeySafe")(
                    r("AdObjectLevels"),
                    t == null || (n = t.value) == null
                      ? void 0
                      : n.ad_object_level,
                  ),
                  confidence_level: r("getJSEnumKeySafe")(
                    r("AdsOptimizationConfidenceLevels"),
                    t == null || (a = t.value) == null
                      ? void 0
                      : a.confidence_level,
                  ),
                  recommended_tracking_pixel:
                    ((l = e.metadata) == null
                      ? void 0
                      : l.recommended_tracking_pixel) != null
                      ? { id: e.metadata.recommended_tracking_pixel }
                      : void 0,
                },
              };
            }),
          )) != null
            ? t
            : void 0,
        metadata: {
          ad_object_level: r("getJSEnumKeySafe")(
            r("AdObjectLevels"),
            (n = e.metadata) == null ? void 0 : n.ad_object_level,
          ),
          confidence_level: r("getJSEnumKeySafe")(
            r("AdsOptimizationConfidenceLevels"),
            (a = e.metadata) == null ? void 0 : a.confidence_level,
          ),
          recommended_tracking_pixel:
            ((l = e.metadata) == null
              ? void 0
              : l.recommended_tracking_pixel) != null
              ? { id: e.metadata.recommended_tracking_pixel }
              : void 0,
        },
        optimization_type: o("TypeCoercionUtils").coerceNonMaybeValue(
          r("getJSEnumKeySafe")(
            r("AdsDeliveryGrowthOptimizationTypes"),
            e.optimization_type,
          ),
          "optimal_delivery_growth_opportunities.optimization_type",
          i.id,
        ),
      };
    }
    l.coerceGraphQLSpecToGraphAPI = e;
  },
  98,
);
