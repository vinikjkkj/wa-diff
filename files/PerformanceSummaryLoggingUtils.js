__d(
  "PerformanceSummaryLoggingUtils",
  ["$InternalEnum", "AdsInterfacesLogger", "SYDActionTypesEnum"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
        "CallToAction",
        "ChangeActiveMetric",
        "ChangeSelectedMetrics",
        "Condense",
        "Customize",
        "Expand",
        "Navigate",
        "SeeAll",
        "Edit",
        "CopyPrompt",
      ]),
      s = n("$InternalEnum").Mirrored([
        "LineChart",
        "LineChartRenderGeo",
        "LineChartRenderVega",
        "MultipleObjectives",
        "NoData",
        "MultipleAttributions",
        "IsDraft",
        "HoverCard",
      ]);
    function u(e) {
      return e ? s.LineChart : s.NoData;
    }
    var c = n("$InternalEnum")({ Geo: "geo", Vega: "vega" });
    function d(e) {
      return e ? c.Vega : c.Geo;
    }
    function m() {
      r("AdsInterfacesLogger").log({
        eventCategory: "performance_summary",
        eventName: "performance_summary.page_impression",
      });
    }
    function p(e) {
      var t;
      r("AdsInterfacesLogger").log({
        eventCategory: "performance_summary",
        eventName: "performance_summary.flex_group_impression",
        data: ((t = {}), (t.flex_group = e), t),
      });
    }
    function _(e, t, n) {
      var o;
      r("AdsInterfacesLogger").log({
        eventCategory: "performance_summary",
        eventName: "performance_summary.impression",
        data: babelHelpers.extends(
          {},
          t,
          ((o = {}), (o.component_name = e), (o.object_ids = n), o),
        ),
      });
    }
    function f(e, t, n) {
      var o,
        a = e ? s.LineChartRenderVega : s.LineChartRenderGeo;
      r("AdsInterfacesLogger").log({
        eventCategory: "performance_summary",
        eventName: "performance_summary.impression",
        data:
          ((o = {}),
          (o.custom_event_type = a),
          (o.duration = Math.round(t)),
          (o.experiment_variant = d(e)),
          (o.message_id = n),
          o),
      });
    }
    function g(e, t) {
      var n;
      r("AdsInterfacesLogger").log({
        eventCategory: "performance_summary",
        eventName: "performance_summary.error",
        data:
          ((n = {}),
          (n.component_name = e),
          (n.message = t.message),
          (n.stack_trace = t.stack),
          n),
      });
    }
    function h(e, t, n, o, a) {
      var i;
      r("AdsInterfacesLogger").log({
        eventCategory: "performance_summary",
        eventName: "performance_summary.click",
        data: babelHelpers.extends(
          {},
          o,
          ((i = {}),
          (i.component_name = e),
          (i.custom_event_type = t),
          (i.action_type = n
            ? r("SYDActionTypesEnum").VALUABLE
            : r("SYDActionTypesEnum").NEUTRAL),
          (i.object_ids = a),
          i),
        ),
      });
    }
    ((l.PerformanceSummaryEventTypesEnum = e),
      (l.PerformanceSummaryInsightsImpressionEventTypesEnum = s),
      (l.getLineChartImpressionEventType = u),
      (l.PerformanceSummaryLineChartRendererVariantEnum = c),
      (l.getLineChartRendererVariant = d),
      (l.logPageImpression = m),
      (l.logFlexVerticalImpression = p),
      (l.logImpression = _),
      (l.logChartRenderTiming = f),
      (l.logError = g),
      (l.logClick = h));
  },
  98,
);
