__d(
  "AdsInsightsMetricNames",
  [
    "AdsInsightsMetricNamesGated",
    "AdsInsightsMetricNamesUngated",
    "AdsLandingPageViewsUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("AdsLandingPageViewsUtils").shouldUseLPVToVisitsRebranding()
        ? {
            "actions:omni_landing_page_view": "Visits",
            "actions:landing_page_view": "Website visits",
            "actions:app_site_visit": "App visits",
            "cost_per_action_type:omni_landing_page_view": "Cost per visit",
          }
        : {},
      s = babelHelpers.extends(
        {},
        r("AdsInsightsMetricNamesUngated"),
        r("AdsInsightsMetricNamesGated"),
        e,
      );
    l.default = s;
  },
  98,
);
