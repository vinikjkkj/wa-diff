__d(
  "AdsRBCuratedReportCTMAdCampaignOutcomesReducer",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        CHANGE_METRIC_TAB: "change_metric_tab",
        CHANGE_TILE: "change_tile",
        CHANGE_TIME_COMPARISON: "change_time_comparison",
      },
      l = function (t, n, r) {
        return t === "amount_spent" ? n : r[t];
      },
      s = function (n, r) {
        switch (r.type) {
          case e.CHANGE_METRIC_TAB:
            return babelHelpers.extends({}, n, {
              metricSelected: r.payload.newMetricSelected,
              tileSelected: "outcome_metric",
            });
          case e.CHANGE_TILE:
            return babelHelpers.extends({}, n, {
              tileSelected: r.payload.newTileSelected,
            });
          case e.CHANGE_TIME_COMPARISON:
            return babelHelpers.extends({}, n, {
              timeComparisonSelected: r.payload.newTimeComparisonSelected,
            });
        }
      };
    ((i.CAMPAIGN_TRENDS_ACTION_TYPE = e),
      (i.getSelectedMetricData = l),
      (i.AdsRBCuratedReportCTMAdCampaignOutcomesReducer = s));
  },
  66,
);
