__d(
  "WAParseFranking",
  ["WAFranking", "WAFrankingTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t, n;
      if (e == null) return null;
      var r =
          (t = e.maybeChild("franking_tag")) == null
            ? void 0
            : t.contentBytes(),
        a =
          (n = e.maybeChild("reporting_tag")) == null
            ? void 0
            : n.contentBytes();
      return {
        frankingKey: null,
        frankingTag:
          r != null ? o("WAFrankingTypes").castToFrankingTag(r) : null,
        reportingTag:
          a != null ? o("WAFrankingTypes").castToReportingTag(a) : null,
        frankingVersion: o("WAFranking").getFrankingVersion(),
        reportingContent: null,
      };
    }
    l.parseFrankingNode = e;
  },
  98,
);
