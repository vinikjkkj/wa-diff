__d(
  "HeroLogger",
  [
    "hero-tracing-placeholder",
    "interaction-tracing-metrics",
    "performanceNow",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {},
      u = 0,
      c = new Map();
    function d(e) {
      var t = u++;
      return (
        c.set(t, e),
        function () {
          c.delete(t);
        }
      );
    }
    function m(e) {
      var t = e != null ? e : r("uuidv4")();
      return (
        o(
          "hero-tracing-placeholder",
        ).HeroPendingPlaceholderTracker.isInteractionActive(t) ||
          o(
            "hero-tracing-placeholder",
          ).HeroPendingPlaceholderTracker.addInteraction(t),
        t
      );
    }
    function p(e) {
      o(
        "hero-tracing-placeholder",
      ).HeroPendingPlaceholderTracker.removeInteraction(e);
    }
    function _(e, t, n, r) {
      var a = o(
        "interaction-tracing-metrics",
      ).InteractionTracingMetricsCore.get(e);
      if (a != null) {
        var i;
        (n === "ABORT" &&
          (o(
            "interaction-tracing-metrics",
          ).InteractionTracingMetricsCore.addAnnotationInt(e, "aborted", 1),
          o(
            "interaction-tracing-metrics",
          ).InteractionTracingMetricsCore.addAnnotation(
            e,
            "cancelType",
            "aborted:" + (r != null ? r : "unknown"),
          )),
          C(
            e,
            t,
            "Interaction",
            "Interaction Done: " +
              ((i = a.tracePolicy) != null ? i : "unknown") +
              (" (" + n + ")"),
            a.start,
          ));
      }
      o("interaction-tracing-metrics").InteractionTracingMetricsCore.complete(
        e,
      );
    }
    function f(t, n, o) {
      var a = n + t;
      s[a] = o != null ? o : (e || (e = r("performanceNow")))();
    }
    function g(t, n, a, i, l, s) {
      var u = a != null ? a : (e || (e = r("performanceNow")))();
      if (
        (f(t, n, u),
        o(
          "hero-tracing-placeholder",
        ).HeroPendingPlaceholderTracker.addPlaceholder(
          t,
          n,
          l,
          u,
          i != null ? i : [],
        ),
        c.size)
      ) {
        var d = {
          placeholderID: n + t,
          interactionID: t,
          spanUUID: n,
          startTime: u,
          pageletStack: i,
          description: l,
          contextualInteractionUUID: s,
        };
        c.forEach(function (e) {
          e.onStart(d);
        });
      }
    }
    function h(t, n, a, i, l, u, d, m) {
      var p = l + t,
        _ = s[p];
      delete s[p];
      var f = d != null ? d : (e || (e = r("performanceNow")))();
      if ((_ != null && C(t, n, a, i, _, f, u, m), c.size)) {
        var g = {
          placeholderID: l + t,
          interactionID: t,
          pageletStack: n,
          spanType: a,
          name: i,
          spanUUID: l,
          data: u,
          endTime: f,
        };
        c.forEach(function (e) {
          e.onEnd(g);
        });
      }
      o(
        "hero-tracing-placeholder",
      ).HeroPendingPlaceholderTracker.removePlaceholder(t, l);
    }
    function y(e, t, n, r, a, i, l) {
      (h(e, t, n, r, a, i, l, "Placeholder"),
        o(
          "hero-tracing-placeholder",
        ).HeroPendingPlaceholderTracker.removePlaceholder(e, a));
    }
    function C(t, n, a, i, l, s, u, c) {
      (s === void 0 && (s = (e || (e = r("performanceNow")))()),
        o(
          "interaction-tracing-metrics",
        ).InteractionTracingMetricsCore.addSubspan(
          t,
          i,
          "HeroTracing",
          l,
          s != null ? s : (e || (e = r("performanceNow")))(),
          babelHelpers.extends({}, u, {
            pagelet: n[n.length - 1],
            pageletStack: n,
            spanType: a,
          }),
        ));
    }
    ((l.subscribeToPlaceholders = d),
      (l.genHeroInteractionUUIDAndMarkStart = m),
      (l.cleanupHeroInteraction = p),
      (l.endHeroInteraction = _),
      (l.markStart = f),
      (l.markStartPlaceholder = g),
      (l.markEnd = h),
      (l.markEndPlaceholder = y),
      (l.measure = C));
  },
  98,
);
