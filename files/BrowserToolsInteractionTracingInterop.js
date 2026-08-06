__d(
  "BrowserToolsInteractionTracingInterop",
  [
    "BrowserToolsVisualCompletionData",
    "FBLogger",
    "hero-tracing-placeholder",
    "interaction-tracing",
    "interaction-tracing-metrics",
    "mapObject",
    "performanceNavigationStart",
    "performanceNow",
    "vc-tracker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["tagSet", "vcStateLog", "vcTracker"],
      s,
      u,
      c = new Map();
    r("vc-tracker").VisualCompletionTraceObserver.subscribe(function (e) {
      c.set(e.traceId, o("BrowserToolsVisualCompletionData").toSerializable(e));
    });
    function d(e) {
      var t,
        n,
        o,
        a,
        i =
          ((t = {}),
          (t[
            (a = r(
              "interaction-tracing",
            )).MeasurementErrorCode.MISSING_TRACE_POLICY
          ] = "trace policy is null"),
          (t[a.MeasurementErrorCode.INCOMPLETE_HERO_TRACE] =
            "hero tracing was not properly started and ended"),
          (t[a.MeasurementErrorCode.MISSING_DOM_MUTATIONS] =
            "vc tracker did not observe DOM mutations properly"),
          (t[a.MeasurementErrorCode.UNKNOWN_CANCEL_REASON] =
            "trace was cancelled but cancelType is missing"),
          (t[a.MeasurementErrorCode.MISSING_CANCEL_DETAILS] =
            "trace was cancelled but trace pending reason is missing"),
          (t[a.MeasurementErrorCode.LATE_SIGNALS_AFTER_TRACE] =
            "late DOM mutation or late placeholder after trace end"),
          (t[a.MeasurementErrorCode.USER_INPUT_DETECTED] =
            "user input detected after trace"),
          (t[a.MeasurementErrorCode.TIMEOUT_BY_INCOMPLETE_LOADING_STATE] =
            "trace timed out due to incomplete loading state elements"),
          t),
        l = (n = e.measurementCorrectness) == null ? void 0 : n.errorCode;
      return l == null ? null : (o = i[l]) != null ? o : null;
    }
    function m(t, n) {
      var o,
        a = t.tagSet,
        i = t.vcStateLog,
        l = t.vcTracker,
        u = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return babelHelpers.extends({}, u, {
        vcReport: n,
        vcStateLog: i ? Object.fromEntries(i.entries()) : null,
        tagSet: Object.fromEntries(
          Object.keys(a).map(function (e) {
            return [e, Array.from(a[e])];
          }),
        ),
        navigationStart: r("performanceNavigationStart")(),
        incompleteEndTime:
          (o = t.completed) != null ? o : (s || (s = r("performanceNow")))(),
        measurementCorrectnessErrorMessage: d(t),
      });
    }
    var p = new Set();
    function _(e) {
      (clearInterval(e), p.delete(e));
    }
    function f(e) {
      return {
        namespace: "interaction_tracing",
        onConnection: function (n) {
          n.onDisconnected(function () {
            p.forEach(function (e) {
              return _(e);
            });
          });
          function t(e) {
            var t;
            function a() {
              var t = o(
                "interaction-tracing-metrics",
              ).InteractionTracingMetricsCore.get(e.getTraceId());
              if (t == null) {
                r("FBLogger")("CDT: interaction_tracing").mustfix(
                  "all interactions should have a metrics object",
                );
                return;
              }
              n.postMessage(
                "interaction_updated",
                m(
                  babelHelpers.extends({}, t, {
                    pendingPlaceholders: o(
                      "hero-tracing-placeholder",
                    ).HeroPendingPlaceholderTracker.dump(t.traceId),
                  }),
                  c.get(t.traceId),
                ),
              );
            }
            a();
            var i = setInterval(function () {
              a();
            }, 1e3);
            p.add(i);
            var l = {
              action: "profile",
              kind: "start",
              namespace: "interaction_tracing",
              body: { interactionID: e.getTraceId() },
            };
            ((t = n.dispatcher.port) == null || t.postMessage(l),
              e.onMeasurementAnalysis(function (t) {
                n.postMessage(
                  "interaction_updated",
                  m(t, c.get(e.getTraceId())),
                );
              }),
              e.onLog(function (t) {
                (_(i),
                  n.postMessage(
                    "interaction_updated",
                    m(t, c.get(e.getTraceId())),
                  ));
                var r =
                  "InteractionTracingDevtoolSync=" +
                  JSON.stringify({
                    syncTime: performance.now(),
                    traceId: e.getTraceId(),
                  });
                (performance.mark(r),
                  performance.clearMarks(r),
                  setTimeout(function () {
                    var t,
                      r = {
                        action: "profile",
                        kind: "stop",
                        namespace: "interaction_tracing",
                        body: { interactionID: e.getTraceId() },
                      };
                    (t = n.dispatcher.port) == null || t.postMessage(r);
                  }, 300));
              }));
          }
          (e.InteractionTracingCore.onStartInteraction(t),
            e.InteractionTracingCore.getPendingInteractions().forEach(t),
            n.onMessage(function (e, t) {
              switch (e) {
                case "dump": {
                  n.postMessage(
                    "dump",
                    (u || (u = r("mapObject")))(
                      o(
                        "interaction-tracing-metrics",
                      ).InteractionTracingMetricsCore.dump(),
                      function (e) {
                        return m(e, c.get(e.traceId));
                      },
                    ),
                  );
                  break;
                }
                default:
                  r("FBLogger")("CDT: interaction_tracing").mustfix(
                    "Unknown message received by interop script",
                  );
                  break;
              }
            }));
        },
      };
    }
    l.create = f;
  },
  98,
);
