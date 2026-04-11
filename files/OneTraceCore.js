__d(
  "OneTraceCore",
  ["OneTraceSetup", "ResponsivenessTracker", "addAnnotations"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null,
      s = null,
      u = new Map(),
      c = {
        "trace-start": new Set(),
        "trace-end": new Set(),
        "trace-end-before-logging": new Set(),
        "trace-policy-set": new Set(),
      },
      d = 1;
    function m(e, t, n, o, a, i) {
      var l = d++,
        s = {
          traceID: e,
          tracePolicy: t,
          traceType: n,
          instanceKey: l,
          status: "START",
          startTime: o,
          endTime: null,
          annotations: {
            string: {},
            int: {},
            double: {},
            bool: {},
            string_array: {},
            int_array: {},
            double_array: {},
            bool_array: {},
          },
          markerPoints: {},
          qplEvent: a,
        };
      return (
        i != null && r("addAnnotations")(s.annotations, i),
        u.set(e, s),
        c["trace-start"].forEach(function (e) {
          return e(s);
        }),
        t != null && p(e, n, t),
        s
      );
    }
    function p(e, t, n) {
      var r;
      if (
        t === "INITIAL_LOAD" ||
        t === "NAVIGATION" ||
        (t === "INTERACTION" &&
          ((r = o("OneTraceSetup").getConfig()) == null
            ? void 0
            : r.includeInteractionTracePolicy) === !0)
      ) {
        s = n;
        var a = u.get(e);
        a != null &&
          ((a.tracePolicy = n),
          c["trace-policy-set"].forEach(function (e) {
            return e(a);
          }));
      }
    }
    function _(e, t, n) {
      var o = u.get(e);
      return (
        o &&
          (r("addAnnotations")(o.annotations, {
            string: { traceId: e, tracePolicy: o.tracePolicy },
          }),
          (o.endTime = t),
          (o.status = n),
          u.delete(e),
          c["trace-end-before-logging"].forEach(function (e) {
            return e(o);
          }),
          c["trace-end"].forEach(function (e) {
            return e(o);
          })),
        o
      );
    }
    function f(e, t) {
      return (
        c[e].add(t),
        function () {
          c[e].delete(t);
        }
      );
    }
    function g() {
      return s;
    }
    function h(t) {
      ((e = t),
        o("ResponsivenessTracker").annotateInteractionToResponsiveness(t));
    }
    function y() {
      return e;
    }
    var C = {
      annotateInteractionIndentifier: h,
      currentTraces: u,
      endTrace: _,
      subscribe: f,
      getCurrentTracePolicy: g,
      getRecentInteractionIndentifier: y,
      setTracePolicy: p,
      startTrace: m,
    };
    l.default = C;
  },
  98,
);
