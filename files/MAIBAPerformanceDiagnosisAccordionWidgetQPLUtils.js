__d(
  "MAIBAPerformanceDiagnosisAccordionWidgetQPLUtils",
  ["$InternalEnum", "QuickPerformanceLogger", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("qpl")._(956830892, "3530"),
      u = r("qpl")._(956840393, "3531"),
      c = n("$InternalEnum")({
        ATTEMPTED: "attempted",
        COMPLETED: "completed",
        FAILED: "failed",
      });
    function d(t, n) {
      return {
        annotate: function (a) {
          (e || (e = r("QuickPerformanceLogger"))).markerAnnotate(t, a, {
            instanceKey: n,
          });
        },
        endFail: function () {
          (e || (e = r("QuickPerformanceLogger"))).markerEnd(t, 3, n);
        },
        endSuccess: function () {
          (e || (e = r("QuickPerformanceLogger"))).markerEnd(t, 2, n);
        },
        point: function (a) {
          (e || (e = r("QuickPerformanceLogger"))).markerPoint(t, a, {
            instanceKey: n,
          });
        },
        start: function () {
          (e || (e = r("QuickPerformanceLogger"))).markerStart(t, n);
        },
      };
    }
    function m(e, t) {
      if (e.current !== 0) {
        var n = d(s, e.current);
        n.annotate({ string: { insight_source: t } });
      }
    }
    function p(e, t, n, r, o) {
      if (e.current !== 0) {
        var a = d(s, e.current);
        (a.point("query_resolved"),
          a.annotate({
            string: { insight_status: t, ad_object_level: n },
            int: { insights_count: r },
            bool: { required_regeneration: o },
          }));
      }
    }
    function _(e, t) {
      if (e.current !== 0) {
        var n = d(s, e.current);
        n.annotate({ int: { insights_count: t } });
      }
    }
    function f(e, t) {
      if (e.current !== 0) {
        var n = d(s, e.current);
        n.annotate({ string: { regen_status: t } });
      }
    }
    function g(e) {
      if (e.current !== 0) {
        var t = d(s, e.current);
        (t.point("insights_rendered"), t.endSuccess());
      }
    }
    function h(e) {
      if (e.current !== 0) {
        var t = d(s, e.current);
        t.endFail();
      }
    }
    function y(t, n) {
      if (t.current !== 0) {
        var o = d(s, t.current);
        (o.annotate({
          string: {
            end_reason: "ineligible",
            insight_status: n != null ? n : "UNKNOWN",
          },
        }),
          (e || (e = r("QuickPerformanceLogger"))).markerEnd(s, 4, t.current));
      }
    }
    function C(t, n) {
      if (t.current !== 0) {
        var o = d(s, t.current);
        (o.annotate({
          string: {
            end_reason: "no_insights",
            insight_status: n != null ? n : "UNKNOWN",
          },
        }),
          (e || (e = r("QuickPerformanceLogger"))).markerEnd(s, 4, t.current));
      }
    }
    ((l.performanceSummaryLoadQPLEvent = s),
      (l.performanceSummaryRegenerationQPLEvent = u),
      (l.PerformanceSummaryLoadRegenStatus = c),
      (l.createQPLMarkerHandle = d),
      (l.qplLoadAnnotateInsightSource = m),
      (l.qplLoadMarkQueryResolved = p),
      (l.qplLoadAnnotateFinalInsightsCount = _),
      (l.qplLoadAnnotateRegenStatus = f),
      (l.qplLoadMarkInsightsRendered = g),
      (l.qplLoadMarkFailed = h),
      (l.qplLoadMarkCancelIneligible = y),
      (l.qplLoadMarkCancelNoInsights = C));
  },
  98,
);
