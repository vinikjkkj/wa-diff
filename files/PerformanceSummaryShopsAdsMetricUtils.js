__d(
  "PerformanceSummaryShopsAdsMetricUtils",
  ["fbt", "AdsInsightsTableFormatter", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = "actions:onsite_conversion.purchase",
      d = "shops_assisted_purchases",
      m = "shops_assisted_purchases_conversion_value",
      p = "cost_per_action_type:omni_purchase",
      _ = "purchase_roas:omni_purchase",
      f = "action_values:omni_purchase",
      g = "action_values:onsite_conversion.purchase",
      h = "action_values:offsite_conversion.fb_pixel_purchase",
      y = "action_values:app_custom_event.fb_mobile_purchase",
      C = "action_values:offline_conversion.purchase",
      b = [g, h, y, C],
      v = [_, f, p],
      S = [f].concat(b),
      R = "\u2013\u2013";
    function L(e, t, n) {
      var r = o("AdsInsightsTableFormatter").getFieldFormatter(e, n),
        a = t != null && t > 0 ? r(t) : R;
      return s._(/*BTDS*/ "", [s._param("number or currency", a)]);
    }
    ((L.displayName = L.name + " [from " + i.id + "]"),
      (l.ONSITE_PURCHASES_METRIC = c),
      (l.SHOPS_ASSISTED_PURCHASES_METRIC = d),
      (l.SHOPS_ASSISTED_PURCHASES_CONVERSION_VALUE_METRIC = m),
      (l.COST_PER_PURCHASE_METRIC = p),
      (l.TOTAL_ROAS_METRIC = _),
      (l.TOTAL_PCV_METRIC = f),
      (l.ONSITE_PCV_METRIC = g),
      (l.SHOPS_ADS_PERFORMANCE_SUMMARY_PCV_BREAKDOWN_METRICS = b),
      (l.KPI_METRICS = v),
      (l.TIMELINE_METRICS = S),
      (l.EMPTY_VALUE = R),
      (l.formatROASCardMetricContent = L));
  },
  226,
);
