__d(
  "PerformanceSummaryInsightsOverviewUtils",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 3,
      u = s._(/*BTDS*/ ""),
      c = s._(/*BTDS*/ ""),
      d = s._(/*BTDS*/ ""),
      m = s._(/*BTDS*/ ""),
      p = s._(/*BTDS*/ ""),
      _ = s._(/*BTDS*/ ""),
      f = function (n) {
        return s._(/*BTDS*/ "", [
          s._param("Number of selected metrics", n.length, [0, n.length]),
          s._param("Possible amount of metrics selectable", e, [0, e]),
        ]);
      },
      g = s._(/*BTDS*/ "", [s._param("amount", e, [0, e])]),
      h = s._(/*BTDS*/ ""),
      y = s._(/*BTDS*/ "");
    ((l.MAX_SELECTED = e),
      (l.label = u),
      (l.CUSTOMIZE_CHART_LABEL = c),
      (l.PEER_BENCHMARK_LABEL = d),
      (l.PEER_BENCHMARK_SUBTEXT = m),
      (l.SELF_BENCHMARK_LABEL = p),
      (l.SELF_BENCHMARK_SUBTEXT = _),
      (l.numOfSelectedMetrics = f),
      (l.dropdownHeader = g),
      (l.customizeButton = h),
      (l.customizeTooltipContent = y));
  },
  226,
);
