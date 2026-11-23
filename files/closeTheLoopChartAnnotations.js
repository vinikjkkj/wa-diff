__d(
  "closeTheLoopChartAnnotations",
  ["AdsCloseTheLoopImpactUtils", "PerformanceSummaryImpactUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      var a = new Set();
      if (e != null) for (var i of e) a.add(i);
      for (var l of t) a.add(l.date);
      var s = [];
      for (var u of a) {
        var c,
          d =
            ((c = o("PerformanceSummaryImpactUtils").impactEntryForDate(
              n,
              u,
              r,
            )) == null
              ? void 0
              : c.source) ===
            o("AdsCloseTheLoopImpactUtils").SOURCE_OPPORTUNITY_SCORE;
        s.push(
          d
            ? { key: "os_edits_" + u, eventsList: [u], icon: "os", isDate: !0 }
            : {
                key: "edit_history_" + u,
                eventsList: [u],
                icon: "edit-history",
                isDate: !0,
              },
        );
      }
      return s;
    }
    l.getCloseTheLoopChartAnnotations = e;
  },
  98,
);
