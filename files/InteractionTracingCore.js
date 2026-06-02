__d(
  "InteractionTracingCore",
  [
    "HeroTracingDebugTracing",
    "InstrumentationAnalyzer",
    "InteractionCloning",
    "InteractionTracingLogger",
    "InteractionTracingUserTimingUtils",
    "JSScheduler",
    "MemoryUtils",
    "NetworkStatusTracker",
    "QPLEvent",
    "VisibilityState",
    "VisualCompletionAdapter",
    "WebAPIs",
    "addAnnotations",
    "clearTimeout",
    "hero-tracing",
    "hero-tracing-placeholder",
    "interaction-tracing-metrics",
    "one-trace",
    "performanceNow",
    "setTimeoutAcrossTransitions",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = "InteractionTracingLogging",
      d = new Map(),
      m,
      p = null,
      _ = 0,
      f = new Set(),
      g = 1;
    r("one-trace").subscribe("trace-end-before-logging", function (e) {
      if (
        e.traceType === "LONGTASK" ||
        e.traceType === "INP" ||
        e.traceType === "LONG_ANIMATION_FRAME"
      ) {
        var t = e.traceType;
        d.forEach(function (n) {
          var a = n.getTrace();
          if (a) {
            var i;
            if (
              (o(
                "interaction-tracing-metrics",
              ).InteractionTracingMetricsCore.addSubspan(
                n.getTraceId(),
                t,
                t,
                Math.max(e.startTime, a.start),
                (i = e.endTime) != null
                  ? i
                  : (u || (u = r("performanceNow")))(),
                {},
              ),
              a.type != null)
            ) {
              var l,
                s,
                c,
                d = a.type,
                m = (l = a.tracePolicy) != null ? l : "",
                p = n.getQPLEventMarkerId(),
                _ = d + "(" + p + ":" + m + ")",
                f =
                  (s =
                    (c = e.annotations.string_array) == null
                      ? void 0
                      : c.affectedInteractions) != null
                    ? s
                    : [];
              (r("addAnnotations")(e.annotations, {
                string_array: { affectedInteractions: f.concat([_]) },
              }),
                t === "INP" &&
                  e.startTime <= a.start &&
                  (r("addAnnotations")(e.annotations, {
                    string: { initiatedInteraction: _ },
                  }),
                  (e.markerPoints.interactionTraceStart = {
                    timeSinceStart: a.start,
                  })));
            }
          }
        });
      }
    });
    function h(e, t, n, r, a) {
      var i,
        l = o("VisibilityState").getHiddenSpans(t, n);
      (o(
        "interaction-tracing-metrics",
      ).InteractionTracingMetricsCore.addHiddenTiming(e, l),
        l.length > 0 &&
          o(
            "interaction-tracing-metrics",
          ).InteractionTracingMetricsCore.addMarkerPoint(
            e,
            "backgrounded",
            "AppTiming",
            l[0].start,
          ),
        ((i = r.annotations.int) == null ? void 0 : i.hidden) === void 0 &&
          a.addAnnotationInt(
            "hidden",
            Number(o("VisibilityState").wasHidden(t, n)),
          ));
    }
    function y(e, t) {
      var n,
        a = (n = t.completed) != null ? n : (u || (u = r("performanceNow")))(),
        i = t.markerPoints.visuallyComplete
          ? t.markerPoints.visuallyComplete.timestamp
          : a,
        l = [],
        s = null;
      (e.forEach(function (e) {
        !e.isOnline && s == null
          ? ((s = e.timestamp), s < i && (t.wasOffline = !0))
          : e.isOnline &&
            s != null &&
            (l.push({ end: e.timestamp, start: s }), (s = null));
      }),
        s != null && l.push({ end: a, start: s }),
        o(
          "interaction-tracing-metrics",
        ).InteractionTracingMetricsCore.addOfflineTiming(t.traceId, l));
    }
    function C(e, t, n) {
      var o;
      n.interactionClass &&
        t.addAnnotation("interactionClass", n.interactionClass);
      var a = n.start,
        i = (o = n.completed) != null ? o : (u || (u = r("performanceNow")))();
      if (
        (h(n.traceId, a, i, n, t),
        t.addAnnotationInt("navStartOffset", n.start),
        e.getMetadata)
      ) {
        var l = e.getMetadata();
        Object.keys(l).forEach(function (e) {
          var n = l[e];
          typeof n == "string"
            ? t.addAnnotation(e, n)
            : typeof n == "number" && t.addAnnotationInt(e, n);
        });
      }
      (e.pkgCohort != null && t.addAnnotation("pkg_cohort", e.pkgCohort),
        e.clientRevision != null &&
          t.addAnnotation("clientRevision", String(e.clientRevision)),
        e.serverRevision != null &&
          t.addAnnotation("serverRevision", String(e.serverRevision)),
        e.pushPhase != null && t.addAnnotation("pushPhase", e.pushPhase));
    }
    function b(e) {
      var t = o("hero-tracing-placeholder").HeroPendingPlaceholderTracker.dump(
        e.traceId,
      );
      (o(
        "interaction-tracing-metrics",
      ).InteractionTracingMetricsCore.addHeroPendingPlaceholders(e.traceId, t),
        t.forEach(function (t) {
          var n, a;
          (o(
            "interaction-tracing-metrics",
          ).InteractionTracingMetricsCore.addTag(
            e.traceId,
            "pendingPlaceholder",
            [t.pageletStack[t.pageletStack.length - 1], t.description]
              .filter(Boolean)
              .join(":"),
          ),
            o(
              "interaction-tracing-metrics",
            ).InteractionTracingMetricsCore.addSubspan(
              e.traceId,
              t.description,
              "HeroTracing",
              t.startTime,
              (n = e.completed) != null
                ? n
                : (u || (u = r("performanceNow")))(),
              {
                spanType: "IncompletePlaceholder",
                pageletStack: (a = t.pageletStack) != null ? a : [],
              },
            ));
        }));
    }
    function v(t, n) {
      t.onBeforeComplete(function (t) {
        if (t) {
          var a;
          if (((a = n.annotations.int) == null ? void 0 : a.revisit) != null) {
            var i;
            r("addAnnotations")(t.annotations, {
              int: {
                revisit: Number(
                  (i = n.annotations.int) == null ? void 0 : i.revisit,
                ),
              },
            });
          }
          n.qplEvent &&
            (t.qplMarkerId = (e || (e = o("QPLEvent"))).getMarkerId(
              n.qplEvent,
            ));
        }
      });
    }
    function S(e) {
      var t = e.replace(/\d{4,}/, "");
      return t;
    }
    var R = 0,
      L = new Map(),
      E = {
        checkRevisit: function (t) {
          return t == null ? !1 : f.has(t);
        },
        checkAndMarkRevisit: function (t) {
          var e = E.checkRevisit(t);
          return (t != null && f.add(t), e);
        },
        clone: function (t, n, o) {
          return r("InteractionCloning").clone(t, n, o, g++);
        },
        getNextInstanceKey: function () {
          return g++;
        },
        onStartInteraction: function (t) {
          var e = R++;
          return (
            L.set(e, t),
            function () {
              L.delete(e);
            }
          );
        },
        startInteraction: function (t, n) {
          n === void 0 && (n = function () {});
          var e = o(
            "hero-tracing",
          ).HeroLogger.genHeroInteractionUUIDAndMarkStart(t.interactionID);
          return E.trace(
            t.cfg,
            t.deps,
            t.qplEvent,
            n,
            t.interactionClass,
            t.traceType,
            t.tracePolicy,
            e,
            t.startTime,
            t.eventQueueTime,
            t.debugName,
            t.skipQPLStartMarker,
            t.qplInstanceKey,
            t.VCConfigOverride,
            t.instanceIdentifier,
            t.namespace,
          );
        },
        trace: (function (e) {
          function t(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g) {
            return e.apply(this, arguments);
          }
          return (
            (t.toString = function () {
              return e.toString();
            }),
            t
          );
        })(function (t, n, a, i, l, f, h, R, k, I, T, D, x, $, P, N) {
          (R === void 0 && (R = r("uuidv4")()), I === void 0 && (I = null));
          var M = [],
            w = p,
            A = x != null ? x : g++,
            F = h != null ? S(h) : null;
          (F != null &&
            n.QuickPerformanceLogger.markerAnnotate(
              a,
              { string: { tracePolicy: F } },
              { instanceKey: A },
            ),
            (f === "INITIAL_LOAD" || f === "NAVIGATION") && (p = F));
          var O = P,
            B = t.enableMemoryLogging
              ? o("MemoryUtils").getCurrentMemory().usedJSHeapSize
              : null;
          m ||
            (m = o("WebAPIs").onBeforeUnload(function () {
              (d.forEach(function (e) {
                var t;
                ((t = e.getTrace()) == null || (t = t.annotations.int) == null
                  ? void 0
                  : t.success_on_unload) === 1
                  ? e.forceCompleteTrace()
                  : e.cancelTrace("unload", !0);
              }),
                m && m.remove(),
                (m = null));
            }));
          async function W(e, t) {
            if (Q != null) {
              var r;
              (ae.length > 0 && (await Promise.all(ae)),
                (r = n.WebLoom) == null || r.endTraceForInteraction(e, t));
            }
          }
          var q = new Set([c]);
          function U(e) {
            e === void 0 && (e = !1);
            var t = o(
              "interaction-tracing-metrics",
            ).InteractionTracingMetricsCore.get(R);
            if (!(!t || !d.has(R))) {
              (t.completed == null &&
                (t.completed = (u || (u = r("performanceNow")))()),
                b(t));
              var n = [].concat(ee);
              ((ee.length = 0),
                n.forEach(function (e) {
                  e(t, !0);
                }),
                e
                  ? z(t, !0)
                  : (s || (s = r("JSScheduler"))).scheduleLoggingPriCallback(
                      function () {
                        z(t, !0);
                      },
                    ));
            }
          }
          var V = {
              addJoinId: function (t) {
                o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.addJoinId(R, t);
              },
              addGlobalMetadata: function (t, n) {
                o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.addGlobalMetadata(R, t, n);
              },
              addLoomTraceEndDependency: function (t) {
                ae.push(t);
              },
              addMarkerPoint: function (t, n, a, i) {
                (a === void 0 && (a = (u || (u = r("performanceNow")))()),
                  o(
                    "interaction-tracing-metrics",
                  ).InteractionTracingMetricsCore.addMarkerPoint(
                    R,
                    t,
                    n,
                    a,
                    i,
                  ));
              },
              addSubspan: function (t, n, r, a, i) {
                o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.addSubspan(
                  R,
                  t,
                  n,
                  r,
                  a,
                  i || {},
                );
              },
              addMetadata: function (t, n) {
                o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.addMetadata(R, t, n);
              },
              addAnnotation: function (t, n) {
                o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.addAnnotation(R, t, n);
              },
              addAnnotationInt: function (t, n) {
                o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.addAnnotationInt(R, t, n);
              },
              addAnnotationDouble: function (t, n) {
                o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.addAnnotationDouble(R, t, n);
              },
              addAnnotationBoolean: function (t, n) {
                o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.addAnnotationBoolean(R, t, n);
              },
              addAnnotationStringArray: function (t, n) {
                o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.addAnnotationStringArray(
                  R,
                  t,
                  n,
                );
              },
              addAnnotationIntArray: function (t, n) {
                o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.addAnnotationIntArray(R, t, n);
              },
              addAnnotationDoubleArray: function (t, n) {
                o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.addAnnotationDoubleArray(
                  R,
                  t,
                  n,
                );
              },
              addAnnotationBooleanArray: function (t, n) {
                o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.addAnnotationBooleanArray(
                  R,
                  t,
                  n,
                );
              },
              addTag: function (t, n) {
                o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.addTag(R, t, n);
              },
              lockInteractionLogging: function (t) {
                q.add(t);
              },
              unlockInteractionLogging: function (t) {
                q.has(t) && (q.delete(t), q.size === 0 && H());
              },
              cancelTrace: function (t, n) {
                V.addAnnotation("cancelType", t);
                var e = o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.get(R);
                !e || !d.has(R) || ((e.wasCanceled = !0), U(n));
              },
              forceCompleteTrace: function () {
                U(!0);
              },
              getConfigAndDependencies: function () {
                return { cfg: t, deps: n };
              },
              getTrace: function () {
                return o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.get(R);
              },
              getTraceId: function () {
                return R;
              },
              getQPLEventMarkerId: function () {
                return (e || (e = o("QPLEvent"))).getMarkerId(a);
              },
              markTraceAsSuccessOnUnload: function () {
                V.addAnnotationInt("success_on_unload", 1);
              },
              observeMutation: function (r) {
                n.VCTracker &&
                  t.enableVCTracker &&
                  o("VisualCompletionAdapter").observeMutation(R, r);
              },
              onComplete: function (t) {
                Z.push(t);
              },
              onCompleteSync: function (t) {
                ee.push(t);
              },
              onLog: function (t) {
                te.push(t);
              },
              onMeasurementAnalysis: function (t) {
                ne.push(t);
              },
              onBeforeLog: function (t) {
                re.push(t);
              },
              onVcMetricsComplete: function (t) {
                oe.push(t);
              },
              setTracePolicy: function (s) {
                if (s != null) {
                  var i = S(s);
                  if (
                    ((F = i),
                    (f === "INITIAL_LOAD" || f === "NAVIGATION") && (p = F),
                    V.addAnnotation("tracePolicy", F),
                    n.QuickPerformanceLogger.markerAnnotate(
                      a,
                      { string: { tracePolicy: F } },
                      { instanceKey: A },
                    ),
                    Q == null && t.disableLoomTrace !== !0)
                  ) {
                    var u,
                      c =
                        (u = n.WebLoom) == null
                          ? void 0
                          : u.maybeStartTraceForInteraction(R, l, a, F, k);
                    ((Q = c == null ? void 0 : c.traceReferenceId),
                      (X = c == null ? void 0 : c.loomProviders));
                  }
                  var d = o(
                    "interaction-tracing-metrics",
                  ).InteractionTracingMetricsCore.get(R);
                  (d &&
                    ((d.tracePolicy = F),
                    d.vcTracker && d.vcTracker.setTracePolicy(F)),
                    r("one-trace").setTracePolicy(R, f, i),
                    r("one-trace").annotateInteractionIndentifier(
                      f +
                        "(" +
                        (e || (e = o("QPLEvent"))).getMarkerId(a) +
                        ":" +
                        i +
                        ")",
                    ));
                }
              },
              setInstanceIdentifier: function (t) {
                O = t;
              },
              getInstanceKey: function () {
                return A;
              },
              failTrace: function (t, n) {
                (V.addMetadata("isError", 1),
                  V.addMetadata("errorComponent", t),
                  n && V.forceCompleteTrace());
              },
            },
            H = function () {
              if (d.has(R)) {
                var e = ce;
                (r("clearTimeout")(le), K.remove(), d.delete(R), y(M, e));
                var i = [].concat(re);
                ((re.length = 0),
                  i.forEach(function (t) {
                    t(e);
                  }));
                var l = o("InteractionTracingLogger").getTraceStatus(
                    e,
                    t.qplActionCancelOnNavigation,
                  ),
                  s = o("InteractionTracingLogger").logQPL(t, n, a, l, e, A);
                if (
                  ((e.qplAction = s),
                  (e.traceStatus = l),
                  (e.debugName = T),
                  t.heroBootloadStatsAfterQPL === !1)
                ) {
                  var u;
                  (u = n.HeroBootloadPerfStore) == null ||
                    u.addStaticResourcesStats(e);
                }
                var c = [].concat(te);
                if (
                  ((te.length = 0),
                  c.forEach(function (n) {
                    n(
                      e,
                      o("InteractionTracingLogger").getTraceStatus(
                        e,
                        t.qplActionCancelOnNavigation,
                      ),
                    );
                  }),
                  t.heroBootloadStatsAfterQPL === !0)
                ) {
                  var m;
                  (m = n.HeroBootloadPerfStore) == null ||
                    m.addStaticResourcesStats(e);
                }
                (delete e.vcTracker,
                  W(e, s),
                  o("InteractionTracingUserTimingUtils").markInteraction(
                    n,
                    e,
                    f,
                    t,
                    A,
                  ),
                  setTimeout(function () {
                    o(
                      "interaction-tracing-metrics",
                    ).InteractionTracingMetricsCore.delete(R);
                  }, t.cleanUpTraceTimeout));
              }
            };
          function G(e) {
            e
              ? q.forEach(function (e) {
                  V.unlockInteractionLogging(e);
                })
              : V.unlockInteractionLogging(c);
          }
          var z = function (r, a) {
            if (d.has(R)) {
              if (
                (V.addAnnotationInt("startTimestamp", k + t.qplBaseTimestamp),
                V.addAnnotation(
                  "tracePolicy",
                  F != null ? F : t.defaultTracePolicy,
                ),
                (f === "INITIAL_LOAD" || f === "NAVIGATION") &&
                  (V.addAnnotationInt(
                    "revisit",
                    Number(E.checkAndMarkRevisit(F)),
                  ),
                  O != null &&
                    V.addAnnotationInt(
                      "instance_revisit",
                      Number(E.checkAndMarkRevisit(O)),
                    )),
                w != null && V.addAnnotation("referrer", w),
                V.addAnnotation("interactionId", R),
                B != null)
              ) {
                var e = o("MemoryUtils").getCurrentMemory(),
                  i = e.deviceMemory,
                  l = e.jsHeapSizeLimit,
                  s = e.totalJSHeapSize,
                  u = e.usedJSHeapSize;
                (u != null &&
                  (V.addAnnotationInt("usedJSHeapSizeStart", B),
                  V.addAnnotationInt("usedJSHeapSizeEnd", u)),
                  s != null && V.addAnnotationInt("JSTotalHeapSize", s),
                  l != null && V.addAnnotationInt("JSHeapSizeLimit", l),
                  i != null && V.addAnnotationInt("JSDeviceMemory", i));
              }
              (C(t, V, r),
                n.VCTracker && t.enableVCTracker && ie != null && ie());
              var c = [].concat(Z);
              ((Z.length = 0),
                c.forEach(function (e) {
                  e(r, a);
                }),
                Q != null && V.addAnnotation("loomRefId", Q),
                X != null &&
                  X.forEach(function (e) {
                    return V.addTag("loomProviders", e);
                  }));
              var m = r.vcTracker;
              m && !r.hasVcReport
                ? (m.onComplete(function () {
                    G(a);
                  }),
                  a && m.forceMeasurement())
                : G(a);
            }
          };
          function j(e, t) {
            (t === void 0 && (t = (u || (u = r("performanceNow")))()),
              M.push({ isOnline: e, timestamp: t }));
          }
          var K = r("NetworkStatusTracker").onChange(function (e) {
            var t = e.online;
            j(t);
          });
          r("NetworkStatusTracker").isOnline() || j(!1);
          var Q, X;
          if (F != null && t.disableLoomTrace !== !0) {
            var Y,
              J =
                (Y = n.WebLoom) == null
                  ? void 0
                  : Y.maybeStartTraceForInteraction(R, l, a, F, k);
            ((Q = J == null ? void 0 : J.traceReferenceId),
              (X = J == null ? void 0 : J.loomProviders));
          }
          D !== !0 && o("InteractionTracingLogger").initQPL(t, n, a, k, A);
          var Z = [],
            ee = [],
            te = [],
            ne = [],
            re = [],
            oe = [],
            ae = [],
            ie = null;
          (n.VCTracker &&
            t.enableVCTracker &&
            (ie = o(
              "VisualCompletionAdapter",
            ).markOtherInteractionSubspanToNavigationVC(n.VCTracker, f, R, a)),
            r("one-trace").startTrace(R, F, f, k, a),
            F != null &&
              r("one-trace").annotateInteractionIndentifier(
                f +
                  "(" +
                  (e || (e = o("QPLEvent"))).getMarkerId(a) +
                  ":" +
                  (F != null ? F : "") +
                  ")",
              ),
            V.onLog(function (n, i) {
              var l;
              (r("one-trace").annotateInteractionIndentifier(
                f +
                  "(" +
                  (e || (e = o("QPLEvent"))).getMarkerId(a) +
                  ":" +
                  (F != null ? F : "") +
                  ")",
              ),
                r("one-trace").endTrace(
                  R,
                  (l = n.completed) != null
                    ? l
                    : (u || (u = r("performanceNow")))(),
                  o("InteractionTracingLogger").getTraceStatus(
                    n,
                    t.qplActionCancelOnNavigation,
                  ),
                ));
            }));
          var le = r("setTimeoutAcrossTransitions")(function () {
            V.cancelTrace("timeout", !1);
          }, t.timeout);
          if (t.cancelOnBackground === !0) {
            var se = o("VisibilityState").subscribe(function (e, t) {
              t && V.cancelTrace("background", !0);
            });
            V.onCompleteSync(function () {
              se();
            });
          }
          var ue = function (o, a) {
              var e, i;
              if ((a === void 0 && (a = !1), !!d.has(R))) {
                (n.VCTracker &&
                  t.enableVCTracker &&
                  ((e = o.vcTracker) == null ||
                    e.unlock(
                      n.VCTracker.VisualCompletionConstants
                        .INTERACTION_TRACING_HOLD,
                    )),
                  o.completed == null &&
                    (o.completed = (u || (u = r("performanceNow")))()));
                var l = [].concat(ee);
                if (
                  ((ee.length = 0),
                  l.forEach(function (e) {
                    e(o);
                  }),
                  o.type === "INITIAL_LOAD" &&
                    ((i = window) == null || (i = i.document) == null
                      ? void 0
                      : i.readyState) === "loading")
                ) {
                  var c,
                    m = function () {
                      var e;
                      ((s || (s = r("JSScheduler"))).scheduleLoggingPriCallback(
                        function () {
                          z(o, a);
                        },
                      ),
                        (e = window) == null ||
                          (e = e.document) == null ||
                          e.removeEventListener("DOMContentLoaded", m));
                    };
                  (c = window) == null ||
                    (c = c.document) == null ||
                    c.addEventListener("DOMContentLoaded", m);
                } else
                  (s || (s = r("JSScheduler"))).scheduleLoggingPriCallback(
                    function () {
                      z(o, a);
                    },
                  );
              }
            },
            ce = o(
              "interaction-tracing-metrics",
            ).InteractionTracingMetricsCore.addTracedInteraction(R, k, ue);
          switch (
            (o(
              "interaction-tracing-metrics",
            ).InteractionTracingMetricsCore.setInteractionType(R, l, f, a),
            ce && (ce.namespace = N != null ? N : "default"),
            f)
          ) {
            case "INITIAL_LOAD":
              if (
                (V.addAnnotationInt("navSequence", ++_),
                n.VCTracker && t.enableVCTracker)
              ) {
                var de = o("VisualCompletionAdapter").traceNavigationVC(
                  n.VCTracker,
                  R,
                  0,
                  "INITIAL_LOAD",
                  _,
                  $,
                  N,
                );
                (ce && (ce.vcTracker = de),
                  t.useDocumentBodyForVCRoot === !0 &&
                    window.document != null &&
                    (de.observeMutation(window.document.body),
                    de.registerNavigationMutationRoot(window.document.body)));
              }
              break;
            case "NAVIGATION":
              if (
                (V.addAnnotationInt("navSequence", ++_),
                d.forEach(function (e) {
                  var n = o(
                    "interaction-tracing-metrics",
                  ).InteractionTracingMetricsCore.get(e.getTraceId());
                  (!t.navigationCancelsInteractions &&
                    n &&
                    n.type === "INTERACTION") ||
                    (n != null &&
                      n.namespace != null &&
                      n.namespace !== (N != null ? N : "default")) ||
                    e.cancelTrace("navigation", !1);
                }),
                n.VCTracker && t.enableVCTracker)
              ) {
                var me = o("VisualCompletionAdapter").traceNavigationVC(
                  n.VCTracker,
                  R,
                  k,
                  f,
                  _,
                  $,
                  N,
                );
                (ce && (ce.vcTracker = me),
                  t.useDocumentBodyForVCRoot === !0 &&
                    window.document != null &&
                    (me.observeMutation(window.document.body),
                    me.registerNavigationMutationRoot(window.document.body)));
              }
              break;
            case "INTERACTION":
              if (n.VCTracker && t.enableVCTracker) {
                var pe = o("VisualCompletionAdapter").traceInteractionVC(
                  n.VCTracker,
                  R,
                  k,
                  f,
                  $,
                );
                ce && (ce.vcTracker = pe);
              }
              break;
          }
          if (
            (d.set(V.getTraceId(), V),
            o("HeroTracingDebugTracing").addHeroDebugging(V, t, function () {
              return Q != null;
            }),
            V.onCompleteSync(function (e) {
              var t;
              (o(
                "interaction-tracing-metrics",
              ).InteractionTracingMetricsCore.addMarkerPoint(
                e.traceId,
                "HeroTrace_end",
                "AppTiming",
                (t = e.completed) != null
                  ? t
                  : (u || (u = r("performanceNow")))(),
              ),
                o("hero-tracing").HeroLogger.cleanupHeroInteraction(e.traceId));
            }),
            F != null && V.setTracePolicy(F),
            ce && ce.vcTracker)
          ) {
            var _e = ce.vcTracker;
            (n.VCTracker &&
              t.enableVCTracker &&
              _e.lock(
                n.VCTracker.VisualCompletionConstants.INTERACTION_TRACING_HOLD,
              ),
              o("VisualCompletionAdapter").logFinalReactStackOnBeforeComplete(
                _e,
                ce,
              ),
              v(_e, ce),
              _e.onComplete(function (e) {
                var t = [].concat(oe);
                ((oe.length = 0),
                  e &&
                    t.forEach(function (t) {
                      t(ce, e);
                    }));
              }),
              o("VisualCompletionAdapter").copyVcMetricsOnComplete(t, ce, V),
              t.setupVcTracker && t.setupVcTracker(_e));
          }
          if (
            (i(V),
            L.forEach(function (e) {
              return e(V);
            }),
            I != null)
          ) {
            var fe = k;
            o(
              "interaction-tracing-metrics",
            ).InteractionTracingMetricsCore.addSubspan(
              R,
              "EventQueued",
              "DOMEventTiming",
              fe,
              fe + I,
              {},
            );
          }
          if (
            t.enableInstrumentationCorrectnessLogging &&
            t.instrumentationCorrectnessQPLEvent != null
          ) {
            var ge,
              he,
              ye,
              Ce,
              be = t.instrumentationCorrectnessQPLEvent,
              ve =
                (ge = (he = ce.vcTracker) == null ? void 0 : he.config) != null
                  ? ge
                  : {},
              Se = o(
                "InstrumentationAnalyzer",
              ).createInstrumentationAnalyzerInstance(
                R,
                f,
                (e || (e = o("QPLEvent"))).getMarkerId(a),
                be,
                n.QuickPerformanceLogger,
                t.qplBaseTimestamp,
                F,
                (ye = ve.getReactComponentStackFromDOMElement) != null
                  ? ye
                  : null,
                (Ce = ve.getWrapperComponentPropArrayFromDOMElement) != null
                  ? Ce
                  : null,
              );
            ((ce.measurementCorrectness = Se.getTraceMetadata()),
              V.onLog(function (e, t) {
                (Se.endInteraction(e, t),
                  ne.forEach(function (e) {
                    Se.onReport(e);
                  }),
                  (ne.length = 0));
              }));
          }
          return R;
        }),
        getPendingInteractions: function () {
          return new Set(d.values());
        },
        getPendingInteractionById: function (t) {
          return d.get(t);
        },
      },
      k = E;
    l.default = k;
  },
  98,
);
