__d(
  "useWAWebCometInteractionTracing",
  [
    "CometInteractionTracingConfig",
    "WAWebEnvironment",
    "gkx",
    "qpl",
    "react",
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
      (t === void 0 && (t = !1), n === void 0 && (n = 60));
      var a = t ? "contingent" : "responsive",
        i = t ? "NAVIGATION" : "INTERACTION",
        l = t ? r("qpl")._(891424239, "2637") : r("qpl")._(891422695, "1369"),
        s = r("useCometInteractionTracing")(l, a, i, e, {
          subplatform: r("WAWebEnvironment").isWindows ? "hybrid" : "web",
          environment: r("WAWebEnvironment").getEnvironment(),
          is_compiler_enabled: r("gkx")("7685"),
        }),
        m = d(null),
        p = m[0],
        _ = m[1],
        f = d(!1),
        g = f[0],
        h = f[1],
        y = c(null),
        C = u(
          function (e, t, r, a, i) {
            var l = babelHelpers.extends(
              {},
              o("CometInteractionTracingConfig").tracingConfig,
              { timeout: n * 1e3 },
            );
            (h(!0),
              s(
                function (t) {
                  (_(t.getTraceId()), (y.current = t), e == null || e(t));
                },
                t,
                r,
                a,
                i,
                l,
              ));
          },
          [s, n],
        ),
        b = u(function (e, t) {
          if ((e === void 0 && (e = !1), t === void 0 && (t = !1), e)) {
            var n;
            (n = y.current) == null || n.forceCompleteTrace();
          }
          if (t) {
            var r;
            (r = y.current) == null || r.cancelTrace("Removed attachment", !0);
          }
          h(!1);
        }, []),
        v = u(function (e) {
          var t,
            n,
            r,
            o = e.name;
          ((t = y.current) == null || t.addAnnotation("errorName", o),
            (n = y.current) == null ||
              n.failTrace((r = e.message) != null ? r : "Unknown error", !0),
            h(!1));
        }, []),
        S = u(function (e) {
          var t;
          (t = y.current) == null || t.addMarkerPoint(e, "AppTiming");
        }, []),
        R = u(function (e) {
          Object.entries(e).forEach(function (e) {
            var t,
              n = e[0],
              r = e[1];
            (t = y.current) == null || t.addAnnotation(n, r);
          });
        }, []),
        L = u(function (e, t, n) {
          if (t) {
            var r,
              o = n ? e + ":test" : e + ":control";
            (r = y.current) == null || r.addAnnotation("experimentExposure", o);
          }
        }, []);
      return {
        addAnnotation: R,
        addExperimentExposure: L,
        addMarkerPoint: S,
        completeInteraction: b,
        failInteraction: v,
        interactionIsInFlight: g,
        startInteraction: C,
        traceIdState: p,
      };
    }
    l.default = p;
  },
  98,
);
