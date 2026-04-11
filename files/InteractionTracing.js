__d(
  "InteractionTracing",
  [
    "Env",
    "InteractionTracingConfigDefault",
    "InteractionTracingDependencies",
    "InteractionTracingMetrics",
    "JSSelfProfilerTrackedInteractions",
    "WebSession",
    "cr:955714",
    "interaction-tracing",
    "performanceNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["cfg"],
      s,
      u;
    function c(t) {
      var a,
        i = t.cfg,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        c = (a = l.startTime) != null ? a : (s || (s = r("performanceNow")))();
      if (
        (u || (u = r("Env"))).jssp_header_sent &&
        (u || (u = r("Env"))).jssp_targeting_enabled
      ) {
        var d = r("JSSelfProfilerTrackedInteractions").interactions;
        if (d) {
          var m = !!d.find(function (e) {
            return (
              (e.tracePolicy === "*" || e.tracePolicy === t.tracePolicy) &&
              (e.action === "*" || e.action === t.traceType)
            );
          });
          if (m && n("cr:955714")) {
            var p;
            (p = r("InteractionTracingDependencies").WebLoom) == null ||
              p.addProvider(n("cr:955714"));
          }
        }
      }
      return babelHelpers.extends({ startTime: c }, l, {
        cfg: babelHelpers.extends(
          {},
          o("InteractionTracingConfigDefault").DEFAULT_TRACING_CONFIG,
          i,
        ),
        deps: r("InteractionTracingDependencies"),
      });
    }
    var d = babelHelpers.extends(
      {},
      r("interaction-tracing").InteractionTracingCore,
      {
        transformStartMetadata: c,
        startInteraction: function (t, n) {
          return r(
            "interaction-tracing",
          ).InteractionTracingCore.startInteraction(c(t), n);
        },
        trace: (function (e) {
          function t(t, n, r, o, a, i, l, s, u) {
            return e.apply(this, arguments);
          }
          return (
            (t.toString = function () {
              return e.toString();
            }),
            t
          );
        })(function (e, t, n, a, i, l, c, d, m) {
          c === void 0 && (c = (s || (s = r("performanceNow")))());
          var p = r("interaction-tracing").InteractionTracingCore.trace(
              babelHelpers.extends(
                {},
                o("InteractionTracingConfigDefault").DEFAULT_TRACING_CONFIG,
                m,
              ),
              r("InteractionTracingDependencies"),
              e,
              t,
              n,
              a,
              i,
              l,
              c,
              d,
            ),
            _ = o("WebSession").getSessionId();
          return (
            _ != null &&
              r("InteractionTracingMetrics").addMetadata(p, "websession_id", _),
            (u || (u = r("Env"))).brsid != null &&
              r("InteractionTracingMetrics").addAnnotation(
                p,
                "brsid",
                "" + (u || (u = r("Env"))).brsid,
              ),
            p
          );
        }),
        navigation: r("interaction-tracing").NavigationTracing,
        getTraceStatus: r("interaction-tracing").getTraceStatus,
      },
    );
    l.default = d;
  },
  98,
);
