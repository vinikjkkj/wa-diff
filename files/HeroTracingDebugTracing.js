__d(
  "HeroTracingDebugTracing",
  ["QPLEvent", "hero-tracing", "interaction-tracing-metrics", "performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 600,
      c = 150,
      d = 5;
    function m(e) {
      var t,
        n,
        r =
          e == null || (t = e.annotations.string) == null
            ? void 0
            : t.tracePolicy;
      return (
        ((n =
          e != null && e.qplEvent
            ? (s || (s = o("QPLEvent"))).getMarkerId(e.qplEvent)
            : null) != null
          ? n
          : "unknown") +
        ":" +
        (typeof r == "string" ? r : "unknown")
      );
    }
    function p(e, t, n, r, a) {
      var i, l, s, u;
      if (n.interactionID !== e.traceId) u = "OtherInteraction";
      else if (t.has(n.placeholderID)) u = "LatePlaceholder";
      else if (!r) u = "IncompletePlaceholder";
      else return;
      var c = {};
      if (
        ((c.type = u),
        r != null &&
          r.spanType &&
          (c.spanType = r == null ? void 0 : r.spanType),
        u === "OtherInteraction")
      ) {
        var d = o(
          "interaction-tracing-metrics",
        ).InteractionTracingMetricsCore.get(n.interactionID);
        c.interactionType = m(d);
      }
      var p = (i = r == null ? void 0 : r.endTime) != null ? i : a,
        _ =
          (l = (s = r == null ? void 0 : r.name) != null ? s : n.description) !=
          null
            ? l
            : "[No Description]";
      o("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(
        e.traceId,
        u === "OtherInteraction" ? "OtherInteraction: " + _ : _,
        u === "OtherInteraction" ? "HeroDebug" : "LatePlaceholder",
        n.startTime,
        Math.max(p, n.startTime),
        c,
      );
    }
    var _ = "LatePlaceholder";
    function f(t, n, a) {
      if (!(n.heroLatePlaceholderDetection || n.heroDebugTracing)) return;
      var i = t.getTraceId(),
        l = o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(
          i,
        );
      if (!l) return;
      var s = l,
        f = new Map(),
        g = new Map(),
        h = new Set(),
        y = 0,
        C = o("hero-tracing").HeroLogger.subscribeToPlaceholders({
          onStart: function (t) {
            (t.interactionID !== i && !n.heroDebugTracing) ||
              (t.interactionID === i &&
                s.completed != null &&
                h.add(t.placeholderID),
              f.set(t.placeholderID, t));
          },
          onEnd: function (t) {
            (t.interactionID !== i && !n.heroDebugTracing) ||
              g.set(t.placeholderID, t);
          },
        });
      function b() {
        (C(), t.unlockInteractionLogging(_));
      }
      function v() {
        var t = (e || (e = r("performanceNow")))(),
          a = new Set();
        (f.forEach(function (e) {
          var n = g.get(e.placeholderID);
          (e.interactionID !== i && a.add(e.interactionID), p(s, h, e, n, t));
        }),
          n.heroDebugTracing &&
            a.forEach(function (e) {
              var n = o(
                "interaction-tracing-metrics",
              ).InteractionTracingMetricsCore.get(e);
              if (n) {
                var r;
                o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.addSubspan(
                  i,
                  "OtherInteraction: " + m(n),
                  "HeroDebug",
                  Math.max(n.start, s.start),
                  Math.min((r = n.completed) != null ? r : t, t),
                  { otherInteractionID: e },
                );
              }
            }),
          b());
      }
      function S() {
        y === 0 ||
        (y <= d &&
          Array.from(h).some(function (e) {
            return !g.has(e);
          }))
          ? (setTimeout(S, y === 0 ? u : c), y++)
          : v();
      }
      (t.lockInteractionLogging(_),
        t.onCompleteSync(function () {
          if (!a()) {
            b();
            return;
          }
          n.heroLatePlaceholderDetection
            ? setTimeout(function () {
                S();
              })
            : v();
        }));
    }
    l.addHeroDebugging = f;
  },
  98,
);
