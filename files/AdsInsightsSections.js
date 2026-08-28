__d(
  "AdsInsightsSections",
  [
    "invariant",
    "AdsInsightsPacingSection",
    "AdsInsightsPerformanceSection",
    "AdsInsightsPlacementSection",
    "AdsInsightsSection",
    "AdsInsightsSectionConfig",
    "filterObject",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return u("performance");
    }
    function u(e) {
      var t = c(e);
      return t.defaultSpec;
    }
    function c(e) {
      var t = o("AdsInsightsSectionConfig").buildConfigs(),
        n = t.configsByID,
        r = n[e];
      return (r || s(0, 1356, e), r);
    }
    function d() {
      var e = o("AdsInsightsSectionConfig").buildConfigs(),
        t = e.configs;
      return t;
    }
    function m(e) {
      return Object.values(r("AdsInsightsSection")).includes(e);
    }
    function p(e, t) {
      switch (e) {
        case "performance":
          return Object.values(r("AdsInsightsPerformanceSection")).includes(t);
        case "audience":
          return !1;
        case "placement":
          return Object.values(r("AdsInsightsPlacementSection")).includes(t);
        case "pacing":
          return Object.values(r("AdsInsightsPacingSection")).includes(t);
        default:
          s(0, 1356, e);
      }
    }
    function _(e) {
      var t = c(e.section),
        n = r("filterObject")(e, function (e) {
          return e != null;
        });
      return babelHelpers.extends({}, t.defaultState, n);
    }
    ((l.getDefault = e),
      (l.getDefaultForSection = u),
      (l.getConfig = c),
      (l.getConfigs = d),
      (l.isValid = m),
      (l.isValidSubsection = p),
      (l.withDefaultState = _));
  },
  98,
);
