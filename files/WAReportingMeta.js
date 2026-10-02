__d(
  "WAReportingMeta",
  ["WAFranking", "WAFrankingTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.frankingTag == null && e.reportingTag == null
        ? null
        : {
            frankingKey: null,
            frankingTag:
              e.frankingTag != null
                ? o("WAFrankingTypes").castToFrankingTag(e.frankingTag)
                : null,
            frankingVersion: o("WAFranking").getFrankingVersion(),
            reportingContent: null,
            reportingTag: e.reportingTag,
          };
    }
    l.getReportingMeta = e;
  },
  98,
);
