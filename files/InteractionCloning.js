__d(
  "InteractionCloning",
  ["InteractionTracingLogger", "interaction-tracing-metrics", "uuidv4"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = (t = e.annotations.string) == null ? void 0 : t.clonedInteractionId;
      return n != null
        ? o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(n)
        : null;
    }
    function s(t, n, r) {
      var a = e(t);
      (a != null &&
        (a.annotations === t.annotations &&
          (t.annotations = babelHelpers.extends({}, t.annotations)),
        a.annotations.string === t.annotations.string &&
          (t.annotations.string = babelHelpers.extends(
            {},
            t.annotations.string,
          ))),
        o(
          "interaction-tracing-metrics",
        ).InteractionTracingMetricsCore.addAnnotation(t.traceId, n, r));
    }
    function u(t, n, r) {
      var a = e(t);
      (a != null &&
        a.tagSet === t.tagSet &&
        (t.tagSet = babelHelpers.extends({}, t.tagSet)),
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addTag(
          t.traceId,
          n,
          r,
        ));
    }
    function c(t, n, r, a) {
      var i = e(t);
      (i != null &&
        i.markerPoints === t.markerPoints &&
        (t.markerPoints = babelHelpers.extends({}, t.markerPoints)),
        o(
          "interaction-tracing-metrics",
        ).InteractionTracingMetricsCore.addMarkerPoint(t.traceId, n, r, a));
    }
    function d(t, n, r, a, i, l) {
      var s = e(t);
      (s != null &&
        s.subSpans === t.subSpans &&
        (t.subSpans = babelHelpers.extends({}, t.subSpans)),
        o(
          "interaction-tracing-metrics",
        ).InteractionTracingMetricsCore.addSubspan(t.traceId, n, r, a, i, l));
    }
    function m(e, t, n, a, i, l) {
      var c,
        d,
        m = r("uuidv4")(),
        p = o(
          "interaction-tracing-metrics",
        ).InteractionTracingMetricsCore.addTracedInteraction(
          m,
          e.start,
          function () {},
        );
      ((p = Object.assign(p, e)),
        (p.traceId = m),
        (p.annotations = babelHelpers.extends({}, e.annotations)),
        (p.annotations.string = babelHelpers.extends({}, e.annotations.string)),
        o(
          "interaction-tracing-metrics",
        ).InteractionTracingMetricsCore.addAnnotation(
          m,
          "clonedInteractionId",
          e.traceId,
        ),
        s(p, "interactionId", m),
        u(p, "traceID", m),
        (p.qplEvent = t),
        (p.debugName = n),
        o("InteractionTracingLogger").initQPL(a, i, t, p.start, l));
      var _ = i.WebLoom
          ? i.WebLoom.startTraceManually(
              p.traceId,
              t,
              p.start,
              1,
              (c = p.tracePolicy) != null ? c : "unknown.cloned_interaction",
              (d = p.interactionClass) != null ? d : "contingent",
            )
          : null,
        f = _ == null ? void 0 : _.traceReferenceId;
      return (f != null && s(p, "loomRefId", f), p);
    }
    function p(e, t, n, r, a) {
      var i,
        l = o("InteractionTracingLogger").getTraceStatus(
          e,
          r.qplActionCancelOnNavigation,
        ),
        s = o("InteractionTracingLogger").logQPL(r, a, t, l, e, n);
      (i = a.WebLoom) == null || i.endTraceForInteraction(e, s);
    }
    var _ = {
        addMarkerPoint_cloneSafe: c,
        addSubspan_cloneSafe: d,
        clone: function (t, n, r, o) {
          var e = t.getTrace();
          if (e != null) {
            var a = t.getConfigAndDependencies(),
              i = a.cfg,
              l = a.deps,
              s = m(e, n, r, i, l, o);
            p(s, n, o, i, l);
          }
        },
        cloneAndStart: m,
        log: p,
      },
      f = _;
    l.default = f;
  },
  98,
);
