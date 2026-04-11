__d(
  "useWAWebCometInteractionTracing",
  [
    "CometInteractionTracingConfig",
    "WAWebEnvironment",
    "gkx",
    "qpl",
    "react",
    "react-compiler-runtime",
    "useCometInteractionTracing",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useRef,
      d = s.useState,
      m = 300;
    function p(e, t, n) {
      var a = o("react-compiler-runtime").c(16),
        i = t === void 0 ? !1 : t,
        l = n === void 0 ? 60 : n,
        s = i ? "contingent" : "responsive",
        u = i ? "NAVIGATION" : "INTERACTION",
        m;
      a[0] !== i
        ? ((m = i
            ? r("qpl")._(891424239, "2637")
            : r("qpl")._(891422695, "1369")),
          (a[0] = i),
          (a[1] = m))
        : (m = a[1]);
      var p = m,
        _;
      a[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = r("WAWebEnvironment").getEnvironment()), (a[2] = _))
        : (_ = a[2]);
      var f;
      a[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = {
            subplatform: r("WAWebEnvironment").isWindows ? "hybrid" : "web",
            environment: _,
            is_compiler_enabled: r("gkx")("7685"),
          }),
          (a[3] = f))
        : (f = a[3]);
      var g = r("useCometInteractionTracing")(p, s, u, e, f),
        h = d(null),
        y = h[0],
        C = h[1],
        b = d(!1),
        v = b[0],
        S = b[1],
        R = c(null),
        L;
      a[4] !== g || a[5] !== l
        ? ((L = function (t, n, r, a, i) {
            var e = babelHelpers.extends(
              {},
              o("CometInteractionTracingConfig").tracingConfig,
              { timeout: l * 1e3 },
            );
            (S(!0),
              g(
                function (e) {
                  (C(e.getTraceId()), (R.current = e), t == null || t(e));
                },
                n,
                r,
                a,
                i,
                e,
              ));
          }),
          (a[4] = g),
          (a[5] = l),
          (a[6] = L))
        : (L = a[6]);
      var E = L,
        k;
      a[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = function (t, n) {
            var e = t === void 0 ? !1 : t,
              r = n === void 0 ? !1 : n;
            if (e) {
              var o;
              (o = R.current) == null || o.forceCompleteTrace();
            }
            if (r) {
              var a;
              (a = R.current) == null ||
                a.cancelTrace("Removed attachment", !0);
            }
            S(!1);
          }),
          (a[7] = k))
        : (k = a[7]);
      var I = k,
        T;
      a[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = function (t) {
            var e,
              n,
              r,
              o = t.name;
            ((e = R.current) == null || e.addAnnotation("errorName", o),
              (n = R.current) == null ||
                n.failTrace((r = t.message) != null ? r : "Unknown error", !0),
              S(!1));
          }),
          (a[8] = T))
        : (T = a[8]);
      var D = T,
        x;
      a[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = function (t) {
            var e;
            (e = R.current) == null || e.addMarkerPoint(t, "AppTiming");
          }),
          (a[9] = x))
        : (x = a[9]);
      var $ = x,
        P;
      a[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = function (t) {
            Object.entries(t).forEach(function (e) {
              var t,
                n = e[0],
                r = e[1];
              (t = R.current) == null || t.addAnnotation(n, r);
            });
          }),
          (a[10] = P))
        : (P = a[10]);
      var N = P,
        M;
      a[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = function (t, n, r) {
            if (n) {
              var e,
                o = r ? t + ":test" : t + ":control";
              (e = R.current) == null ||
                e.addAnnotation("experimentExposure", o);
            }
          }),
          (a[11] = M))
        : (M = a[11]);
      var w = M,
        A;
      return (
        a[12] !== v || a[13] !== E || a[14] !== y
          ? ((A = {
              addAnnotation: N,
              addExperimentExposure: w,
              addMarkerPoint: $,
              completeInteraction: I,
              failInteraction: D,
              interactionIsInFlight: v,
              startInteraction: E,
              traceIdState: y,
            }),
            (a[12] = v),
            (a[13] = E),
            (a[14] = y),
            (a[15] = A))
          : (A = a[15]),
        A
      );
    }
    l.default = p;
  },
  98,
);
