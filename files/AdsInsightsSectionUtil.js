__d(
  "AdsInsightsSectionUtil",
  [
    "cssVar",
    "invariant",
    "AdsInsightsMetricsUtils",
    "AdsInsightsPerformanceMetricsUtils",
    "AdsInsightsSections",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = parseInt("990", 10),
      c = 12;
    function d(e, t) {
      if (
        e.section != null &&
        e.section != "" &&
        !o("AdsInsightsSections").isValid(e.section)
      )
        return {
          sectionSpec: t,
          errors: [{ message: "Invalid section", value: e.section }],
        };
      var n = [],
        r = e.section != null && e.section != "" ? e.section : t.section,
        a = t;
      r != t.section && (a = o("AdsInsightsSections").getDefaultForSection(r));
      var i;
      e.subsection != null &&
      e.subsection != "" &&
      o("AdsInsightsSections").isValidSubsection(r, e.subsection)
        ? (i = e.subsection)
        : (e.section != null &&
            e.section != "" &&
            n.push({ message: "Invalid subsection", value: e.subsection }),
          (i = a.subsection));
      var l = function (t) {
          return (
            t.length === 2 &&
            t.every(function (e) {
              return m(r, e);
            })
          );
        },
        s;
      e.metrics && l(e.metrics)
        ? (s = e.metrics)
        : (e.metrics &&
            n.push({ message: "Invalid metrics", value: e.metrics }),
          (s = a.metrics));
      var u = { metrics: s, section: r, subsection: i };
      return { sectionSpec: u, errors: n };
    }
    function m(e, t) {
      switch (e) {
        case "performance":
          return o("AdsInsightsPerformanceMetricsUtils").isValid(t);
        case "pacing":
        case "audience":
        case "placement":
          return o("AdsInsightsMetricsUtils").isValid(t);
        default:
          u(0, 1356, e);
      }
    }
    function p(e, t) {
      switch (e) {
        case "performance":
          return t === "custom";
        case "pacing":
        case "audience":
        case "placement":
          return !0;
        default:
          u(0, 1356, e);
      }
    }
    function _() {
      return e - 2 * c;
    }
    ((l.sanitizeSectionSpec = d), (l.hasMetrics = p), (l.getSectionWidth = _));
  },
  98,
);
