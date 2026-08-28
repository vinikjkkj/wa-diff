__d(
  "AdsOptimalDeliveryGrowthOpportunity-resolver",
  [
    "AdsOptimalDeliveryGrowthOpportunityResolver.graphql",
    "AdsOptimalDeliveryGrowthOpportunitySpecUtils",
    "RelayHooks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r = o("RelayHooks").readFragment(
        e !== void 0
          ? e
          : (e = n("AdsOptimalDeliveryGrowthOpportunityResolver.graphql")),
        t,
      );
      return o(
        "AdsOptimalDeliveryGrowthOpportunitySpecUtils",
      ).coerceGraphQLSpecToGraphAPI(r);
    }
    l.ads_optimal_delivery_growth_opportunity_spec = s;
  },
  98,
);
