__d(
  "AppliedInsightsRepeatReachUtils",
  [
    "fbt",
    "AdsRBCuratedGuidanceUtil",
    "AppliedInsightsRepeatReachUtils_highThreshold.graphql",
    "AppliedInsightsRepeatReachUtils_timeseriesPoint.graphql",
    "DateTime",
    "RelayHooks",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c =
        e !== void 0
          ? e
          : (e = n("AppliedInsightsRepeatReachUtils_highThreshold.graphql")),
      d =
        u !== void 0
          ? u
          : (u = n("AppliedInsightsRepeatReachUtils_timeseriesPoint.graphql")),
      m = [
        {
          key: "repeat_reach",
          label: s._(/*BTDS*/ ""),
          tooltip: s._(/*BTDS*/ ""),
        },
        { key: "reach", label: s._(/*BTDS*/ ""), tooltip: s._(/*BTDS*/ "") },
        {
          key: "cost_per_result",
          label: s._(/*BTDS*/ ""),
          tooltip: s._(/*BTDS*/ ""),
        },
      ],
      p = s._(/*BTDS*/ "");
    function _(e, t) {
      return e
        .filter(function (e) {
          return e.key != null;
        })
        .map(function (e) {
          var n, o;
          return [
            r("DateTime")
              .fromISOString((n = e.key) != null ? n : "", t)
              .format("M d"),
            (o = e.value) != null ? o : null,
          ];
        });
    }
    function f(e, t) {
      return e
        .map(function (e) {
          return o("RelayHooks").readInlineData(d, e);
        })
        .filter(function (e) {
          return e.timestamp != null;
        })
        .map(function (e) {
          var n, o;
          return [
            r("DateTime")
              .create((n = e.timestamp) != null ? n : 0, t)
              .format("M d"),
            (o = e.value) != null ? o : null,
          ];
        });
    }
    function g(e) {
      var t,
        n = m.find(function (t) {
          return t.key === e;
        });
      return (t = n == null ? void 0 : n.label) != null ? t : e;
    }
    function h(e, t, n) {
      return (
        n === void 0 && (n = "USD"),
        t == null
          ? p
          : e === "repeat_reach"
            ? Math.round(t * 100) + "%"
            : e === "reach"
              ? t.toLocaleString()
              : e === "cost_per_result"
                ? o("AdsRBCuratedGuidanceUtil").getFormattedCPRCurrency(n, t)
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })()
      );
    }
    function y(e) {
      var t;
      return e == null ||
        (t = e
          .map(function (e) {
            return o("RelayHooks").readInlineData(c, e);
          })
          .find(function (e) {
            return e.key === "high";
          })) == null
        ? void 0
        : t.value;
    }
    ((l.AUDIENCE_SATURATION_METRICS = m),
      (l.EMPTY_METRIC_VALUE = p),
      (l.historicalToChartData = _),
      (l.timeseriesToChartData = f),
      (l.getMetricLabel = g),
      (l.formatMetricValue = h),
      (l.getHighThreshold = y));
  },
  226,
);
