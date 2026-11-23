__d(
  "adsSplitTestReportingGetAdjustedKPIs",
  [
    "AdsApplicationUtils",
    "AdsSplitTestCommonSplitTestMetrics",
    "AdsTALSplitTestUtils",
    "adsExperimentsGetNonPrimaryKPIWithWinner",
    "filterNulls",
    "firstx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        a = e.initialSelectedKPI,
        i = e.isReportSurface,
        l = e.nonPrimaryKPIWinnerDataByKPI,
        s = e.primaryKeyMetric,
        u = e.study,
        c = i ? s : a,
        d = o("AdsTALSplitTestUtils").getPrimaryKeyMetricForSplitTest(u),
        m = [c].concat(
          (t =
            (n = u.objectives) == null
              ? void 0
              : n.data
                  .map(function (e) {
                    var t;
                    return (t = e.name) != null ? t : "";
                  })
                  .filter(Boolean)
                  .filter(function (e) {
                    return e !== c && e !== d;
                  })) != null
            ? t
            : [],
        ),
        p = l
          .filter(function (e) {
            var t,
              n = (t = e.winnerDataLoader) == null ? void 0 : t.getValue();
            return (n == null ? void 0 : n.has_insufficient_data) === !1;
          })
          .map(function (e) {
            return e.kpi;
          }),
        _ = r("adsExperimentsGetNonPrimaryKPIWithWinner")({
          primaryKPI: c,
          winnerDataByKPI: l,
          study: u,
          isMultiCellCreativeTesting:
            u.lightweight_type === "CREATIVE_MULTICELL_TESTING",
        }),
        f = c,
        g = o("AdsApplicationUtils").isPowerEditor() ? f : a,
        h = r("filterNulls")(
          p
            .concat(m)
            .concat(
              o("AdsSplitTestCommonSplitTestMetrics").COMMON_SPLIT_TEST_METRICS,
            ),
        );
      return {
        defaultKPI: c,
        safeInitialSelectedKPI: h.includes(g) ? g : r("firstx")(h),
        studyKPIs: m,
        nonPrimaryKPIWithWinner: _,
      };
    }
    l.default = e;
  },
  98,
);
