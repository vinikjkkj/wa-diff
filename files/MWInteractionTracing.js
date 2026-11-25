__d(
  "MWInteractionTracing",
  [
    "FBLogger",
    "InteractionTracing",
    "InteractionTracingMetrics",
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
      c = L(),
      d = new Map(),
      m = new Set(),
      p = new Map();
    function _(e, t, n) {
      var o,
        a = e.id;
      if (d.has(a)) return a;
      var i = r("InteractionTracing").startInteraction({
        interactionClass: "contingent",
        qplEvent: r("qpl")._(25307709, "3616"),
        startTime: (s || (s = r("performanceNow")))(),
        tracePolicy: t,
        traceType:
          (o = n == null ? void 0 : n.traceType) != null ? o : "INTERACTION",
      });
      return (
        v(i, e),
        S(i),
        R(i, n == null ? void 0 : n.annotations),
        d.set(a, i),
        a
      );
    }
    function f(e, t, n, o) {
      if (e == null) return o();
      var a = e.id,
        i = d.get(a);
      if (i == null)
        return (u.event("withSubspan").warn('missing trace: "%s"', a), o());
      var l = E({ ui_thread: !0 }, n == null ? void 0 : n.annotations);
      return r("MWInteractionTracingWithCallback")(
        "ui." + t,
        { annotations: l, group: e.group },
        o,
        function (e) {
          var t;
          (r("InteractionTracingMetrics").addSubspan(
            i,
            e.name,
            e.kind,
            e.startTime,
            e.endTime,
            (t = e.annotations) != null ? t : {},
          ),
            g(i, e));
        },
      );
    }
    function g(e, t) {
      var n;
      if (t.isError) {
        var o = r("InteractionTracing").getPendingInteractionById(e);
        (o == null ||
        (n = o.getTrace()) == null ||
        (n = n.annotations.int) == null
          ? void 0
          : n.isError) !== 1 &&
          (o == null || o.failTrace(t.name, !1));
      }
    }
    function h(t, o) {
      var a = t.id;
      return m.has(a)
        ? (e || (e = n("Promise"))).resolve()
        : new (e || (e = n("Promise")))(function (e) {
            var t = p.get(a);
            t == null && ((t = new Set()), p.set(a, t));
            var n = function () {
                var o;
                (r("clearTimeout")(i), (o = t) == null || o.delete(n), e());
              },
              i = r("setTimeout")(function () {
                return n();
              }, o);
            t.add(n);
          });
    }
    function y(e, t) {
      var n,
        o = e.id,
        a = d.get(o);
      if (a == null) {
        u.event("applyRecordedSubspans").warn('missing trace: "%s"', o);
        return;
      }
      for (var i of t) {
        var l;
        (r("InteractionTracingMetrics").addSubspan(
          a,
          i.name,
          i.kind,
          i.startTime + (i.timeOrigin - self.performance.timeOrigin),
          i.endTime + (i.timeOrigin - self.performance.timeOrigin),
          (l = i.annotations) != null ? l : {},
        ),
          g(a, i));
      }
      m.add(o);
      var s = (n = p.get(o)) != null ? n : new Set();
      for (var c of s) c();
    }
    function C(e, t) {
      (t === void 0 && (t = 3e4),
        e != null &&
          h(e, t).then(function () {
            return b(e);
          }));
    }
    function b(e, t) {
      if (e != null) {
        var n = e.id,
          o = d.get(n);
        if (o == null) {
          u.event("complete").warn('missing trace: "%s"', n);
          return;
        }
        (R(o, t == null ? void 0 : t.annotations),
          r("setTimeout")(function () {
            var e = r("InteractionTracing").getPendingInteractionById(o);
            (e == null || e.forceCompleteTrace(),
              d.delete(n),
              m.delete(n),
              p.delete(n));
          }, 15e3));
      }
    }
    function v(e, t) {
      (r("InteractionTracingMetrics").addAnnotation(e, "id", t.id),
        r("InteractionTracingMetrics").addAnnotation(
          e,
          "dashboard_url",
          "https://msgr-web.internalmeta.com/tracing?id=" + t.id,
        ));
    }
    function S(e) {
      r("InteractionTracingMetrics").addAnnotationInt(
        e,
        "uptime_in_seconds",
        L() - c,
      );
    }
    function R(e, t) {
      if (t != null)
        for (var n of Object.entries(t)) {
          var o = n[0],
            a = n[1];
          Array.isArray(a)
            ? r("InteractionTracingMetrics").addAnnotationStringArray(e, o, a)
            : r("InteractionTracingMetrics").addMetadata(e, o, a);
        }
    }
    function L() {
      return Math.round((s || (s = r("performanceNow")))() / 1e3);
    }
    function E(e, t) {
      return babelHelpers.extends({}, t, e);
    }
    var k = {
      applyRecordedSubspans: y,
      complete: b,
      completeAfterWorkerCompletes: C,
      start: _,
      trace: f,
    };
    l.default = k;
  },
  98,
);
