__d(
  "MWInteractionTracing",
  [
    "FBLogger",
    "InteractionTracing",
    "InteractionTracingMetrics",
    "MWInteractionTracingKey",
    "MWInteractionTracingWithCallback",
    "Promise",
    "clearTimeout",
    "performanceNow",
    "qpl",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("FBLogger")("msgr_web").tags(["msgr_web_interaction_tracing"]),
      c = R(),
      d = new Map(),
      m = new Set(),
      p = new Map();
    function _(e, t, n) {
      var a,
        i = o("MWInteractionTracingKey").keyToId(e);
      if (d.has(i)) return i;
      var l = r("InteractionTracing").startInteraction({
        interactionClass: "contingent",
        qplEvent: r("qpl")._(25307709, "3616"),
        startTime: (s || (s = r("performanceNow")))(),
        tracePolicy: t,
        traceType:
          (a = n == null ? void 0 : n.traceType) != null ? a : "INTERACTION",
      });
      return (
        b(l, e),
        v(l),
        S(l, n == null ? void 0 : n.annotations),
        d.set(i, l),
        i
      );
    }
    function f(e, t, n, a) {
      if (e == null) return a();
      var i = o("MWInteractionTracingKey").keyToId(e),
        l = d.get(i);
      if (l == null)
        return (u.event("withSubspan").warn('missing trace: "%s"', i), a());
      var s = L({ ui_thread: !0 }, n == null ? void 0 : n.annotations);
      return r("MWInteractionTracingWithCallback")(
        "ui." + t,
        { annotations: s },
        a,
        function (e) {
          var t;
          r("InteractionTracingMetrics").addSubspan(
            l,
            e.name,
            e.kind,
            e.startTime,
            e.endTime,
            (t = e.annotations) != null ? t : {},
          );
        },
      );
    }
    function g(t, a) {
      var i = o("MWInteractionTracingKey").keyToId(t);
      return m.has(i)
        ? (e || (e = n("Promise"))).resolve()
        : new (e || (e = n("Promise")))(function (e) {
            var t = p.get(i);
            t == null && ((t = new Set()), p.set(i, t));
            var n = function () {
                var a;
                (r("clearTimeout")(o), (a = t) == null || a.delete(n), e());
              },
              o = r("setTimeout")(function () {
                return n();
              }, a);
            t.add(n);
          });
    }
    function h(e, t) {
      var n,
        a = o("MWInteractionTracingKey").keyToId(e),
        i = d.get(a);
      if (i == null) {
        u.event("applyRecordedSubspans").warn('missing trace: "%s"', a);
        return;
      }
      for (var l of t) {
        var s;
        r("InteractionTracingMetrics").addSubspan(
          i,
          l.name,
          l.kind,
          l.startTime + (l.timeOrigin - self.performance.timeOrigin),
          l.endTime + (l.timeOrigin - self.performance.timeOrigin),
          (s = l.annotations) != null ? s : {},
        );
      }
      m.add(a);
      var c = (n = p.get(a)) != null ? n : new Set();
      for (var _ of c) _();
    }
    function y(e, t) {
      (t === void 0 && (t = 3e4),
        e != null &&
          g(e, t).then(function () {
            return C(e);
          }));
    }
    function C(e, t) {
      if (e != null) {
        var n = o("MWInteractionTracingKey").keyToId(e),
          a = d.get(n);
        if (a == null) {
          u.event("complete").warn('missing trace: "%s"', n);
          return;
        }
        (S(a, t == null ? void 0 : t.annotations),
          r("setTimeout")(function () {
            var e = r("InteractionTracing").getPendingInteractionById(a);
            (e == null || e.forceCompleteTrace(),
              d.delete(n),
              m.delete(n),
              p.delete(n));
          }, 15e3));
      }
    }
    function b(e, t) {
      (r("InteractionTracingMetrics").addAnnotation(
        e,
        "key",
        o("MWInteractionTracingKey").keyToId(t),
      ),
        r("InteractionTracingMetrics").addAnnotation(e, "kind", t.kind),
        r("InteractionTracingMetrics").addAnnotation(
          e,
          "id",
          o("MWInteractionTracingKey").idAsString(t.id),
        ));
    }
    function v(e) {
      r("InteractionTracingMetrics").addAnnotationInt(
        e,
        "uptime_in_seconds",
        R() - c,
      );
    }
    function S(e, t) {
      if (t != null)
        for (var n of Object.entries(t)) {
          var o = n[0],
            a = n[1];
          Array.isArray(a)
            ? r("InteractionTracingMetrics").addAnnotationStringArray(e, o, a)
            : r("InteractionTracingMetrics").addMetadata(e, o, a);
        }
    }
    function R() {
      return Math.round((s || (s = r("performanceNow")))() / 1e3);
    }
    function L(e, t) {
      return babelHelpers.extends({}, t, e);
    }
    var E = {
      applyRecordedSubspans: h,
      complete: C,
      completeAfterWorkerCompletes: y,
      start: _,
      trace: f,
    };
    l.default = E;
  },
  98,
);
