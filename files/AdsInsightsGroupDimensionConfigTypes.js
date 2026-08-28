__d(
  "AdsInsightsGroupDimensionConfigTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
        "FILTER_BASED",
        "PARENT",
        "TIME_BUCKET",
      ]),
      l = [
        "budget_strategy",
        "buying_type",
        "funnel_stage",
        "bid_strategy",
        "attribution_setting",
        "objective",
        "performance_goal",
        "conversion_event",
        "conversion_location",
        "delivery_status",
        "special_ad_categories",
        "buy_with_integration_partner",
        "budget_scheduling",
        "attribution_count_type",
        "spending_limit_type",
        "start_time",
        "end_time",
        "recently_changed",
        "evergreen",
        "parent",
        "budget_pool",
      ],
      s = "None";
    function u(e) {
      if (e == null) return null;
      for (var t of l) if (t === e) return t;
      return null;
    }
    ((i.DimensionType = e),
      (i.GroupingDimensionTypeValues = l),
      (i.NONE_DIMENSION_VALUE = s),
      (i.coerceGroupingDimension = u));
  },
  66,
);
