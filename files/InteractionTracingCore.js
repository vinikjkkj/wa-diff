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
    "Promise",
    "QPLEvent",
    "VisibilityState",
    "VisualCompletionAdapter",
    "WebAPIs",
    "addAnnotations",
    "asyncToGeneratorRuntime",
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
      c,
      d = "InteractionTracingLogging",
      m = new Map(),
      p,
      _ = null,
      f = 0,
      g = new Set(),
      h = 1;
    r("one-trace").subscribe("trace-end-before-logging", function (e) {
      if (
        e.traceType === "LONGTASK" ||
        e.traceType === "INP" ||
        e.traceType === "LONG_ANIMATION_FRAME"
      ) {
        var t = e.traceType;
        m.forEach(function (n) {
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
                  : (c || (c = r("performanceNow")))(),
                {},
              ),
              a.type != null)
            ) {
              var l,
                s,
                u,
                d = a.type,
                m = (l = a.tracePolicy) != null ? l : "",
                p = n.getQPLEventMarkerId(),
                _ = d + "(" + p + ":" + m + ")",
                f =
                  (s =
                    (u = e.annotations.string_array) == null
                      ? void 0
                      : u.affectedInteractions) != null
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
    function y(e, t, n, r, a) {
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
    function C(e, t) {
      var n,
        a = (n = t.completed) != null ? n : (c || (c = r("performanceNow")))(),
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
    function b(e, t, n) {
      var o;
      n.interactionClass &&
        t.addAnnotation("interactionClass", n.interactionClass);
      var a = n.start,
        i = (o = n.completed) != null ? o : (c || (c = r("performanceNow")))();
      if (
        (y(n.traceId, a, i, n, t),
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
    function v(e) {
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
                : (c || (c = r("performanceNow")))(),
              {
                spanType: "IncompletePlaceholder",
                pageletStack: (a = t.pageletStack) != null ? a : [],
              },
            ));
        }));
    }
    function S(e, t) {
      e.onBeforeComplete(function (e) {
        if (e) {
          var n;
          if (((n = t.annotations.int) == null ? void 0 : n.revisit) != null) {
            var a;
            r("addAnnotations")(e.annotations, {
              int: {
                revisit: Number(
                  (a = t.annotations.int) == null ? void 0 : a.revisit,
                ),
              },
            });
          }
          t.qplEvent &&
            (e.qplMarkerId = (u || (u = o("QPLEvent"))).getMarkerId(
              t.qplEvent,
            ));
        }
      });
    }
    function R(e) {
      var t = e.replace(/\d{4,}/, "");
      return t;
    }
    var L = 0,
      E = new Map(),
      k = {
        checkRevisit: function (t) {
          return t == null ? !1 : g.has(t);
        },
        checkAndMarkRevisit: function (t) {
          var e = k.checkRevisit(t);
          return (t != null && g.add(t), e);
        },
        clone: function (t, n, o) {
          return r("InteractionCloning").clone(t, n, o, h++);
        },
        getNextInstanceKey: function () {
          return h++;
        },
        onStartInteraction: function (t) {
          var e = L++;
          return (
            E.set(e, t),
            function () {
              E.delete(e);
            }
          );
        },
        startInteraction: function (t, n) {
          n === void 0 && (n = function () {});
          var e = o(
            "hero-tracing",
          ).HeroLogger.genHeroInteractionUUIDAndMarkStart(t.interactionID);
          return k.trace(
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
        })(function (t, a, i, l, g, y, L, I, T, D, x, $, P, N, M, w) {
          (I === void 0 && (I = r("uuidv4")()), D === void 0 && (D = null));
          var A = [],
            F = _,
            O = P != null ? P : h++,
            B = L != null ? R(L) : null;
          (B != null &&
            a.QuickPerformanceLogger.markerAnnotate(
              i,
              { string: { tracePolicy: B } },
              { instanceKey: O },
            ),
            (y === "INITIAL_LOAD" || y === "NAVIGATION") && (_ = B));
          var W = M,
            q = t.enableMemoryLogging
              ? o("MemoryUtils").getCurrentMemory().usedJSHeapSize
              : null;
          p ||
            (p = o("WebAPIs").onBeforeUnload(function () {
              (m.forEach(function (e) {
                var t;
                ((t = e.getTrace()) == null || (t = t.annotations.int) == null
                  ? void 0
                  : t.success_on_unload) === 1
                  ? e.forceCompleteTrace()
                  : e.cancelTrace("unload", !0);
              }),
                p && p.remove(),
                (p = null));
            }));
          function U(e, t) {
            return V.apply(this, arguments);
          }
          function V() {
            return (
              (V = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t, r) {
                  if (J != null) {
                    var o;
                    (se.length > 0 && (yield (e || (e = n("Promise"))).all(se)),
                      (o = a.WebLoom) == null ||
                        o.endTraceForInteraction(t, r));
                  }
                },
              )),
              V.apply(this, arguments)
            );
          }
          var H = new Set([d]);
          function G(e) {
            e === void 0 && (e = !1);
            var t = o(
              "interaction-tracing-metrics",
            ).InteractionTracingMetricsCore.get(I);
            if (!(!t || !m.has(I))) {
              (t.completed == null &&
                (t.completed = (c || (c = r("performanceNow")))()),
                v(t));
              var n = [].concat(re);
              ((re.length = 0),
                n.forEach(function (e) {
                  e(t, !0);
                }),
                e
                  ? Q(t, !0)
                  : (s || (s = r("JSScheduler"))).scheduleLoggingPriCallback(
                      function () {
                        Q(t, !0);
                      },
                    ));
            }
          }
          var z = {
              addJoinId: function (t) {
                o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.addJoinId(I, t);
              },
              addGlobalMetadata: function (t, n) {
                o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.addGlobalMetadata(I, t, n);
              },
              addLoomTraceEndDependency: function (t) {
                se.push(t);
              },
              addMarkerPoint: function (t, n, a, i) {
                (a === void 0 && (a = (c || (c = r("performanceNow")))()),
                  o(
                    "interaction-tracing-metrics",
                  ).InteractionTracingMetricsCore.addMarkerPoint(
                    I,
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
                  I,
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
                ).InteractionTracingMetricsCore.addMetadata(I, t, n);
              },
              addAnnotation: function (t, n) {
                o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.addAnnotation(I, t, n);
              },
              addAnnotationInt: function (t, n) {
                o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.addAnnotationInt(I, t, n);
              },
              addAnnotationDouble: function (t, n) {
                o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.addAnnotationDouble(I, t, n);
              },
              addAnnotationBoolean: function (t, n) {
                o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.addAnnotationBoolean(I, t, n);
              },
              addAnnotationStringArray: function (t, n) {
                o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.addAnnotationStringArray(
                  I,
                  t,
                  n,
                );
              },
              addAnnotationIntArray: function (t, n) {
                o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.addAnnotationIntArray(I, t, n);
              },
              addAnnotationDoubleArray: function (t, n) {
                o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.addAnnotationDoubleArray(
                  I,
                  t,
                  n,
                );
              },
              addAnnotationBooleanArray: function (t, n) {
                o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.addAnnotationBooleanArray(
                  I,
                  t,
                  n,
                );
              },
              addTag: function (t, n) {
                o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.addTag(I, t, n);
              },
              lockInteractionLogging: function (t) {
                H.add(t);
              },
              unlockInteractionLogging: function (t) {
                H.has(t) && (H.delete(t), H.size === 0 && j());
              },
              cancelTrace: function (t, n) {
                z.addAnnotation("cancelType", t);
                var e = o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.get(I);
                !e || !m.has(I) || ((e.wasCanceled = !0), G(n));
              },
              forceCompleteTrace: function () {
                G(!0);
              },
              getConfigAndDependencies: function () {
                return { cfg: t, deps: a };
              },
              getTrace: function () {
                return o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.get(I);
              },
              getTraceId: function () {
                return I;
              },
              getQPLEventMarkerId: function () {
                return (u || (u = o("QPLEvent"))).getMarkerId(i);
              },
              markTraceAsSuccessOnUnload: function () {
                z.addAnnotationInt("success_on_unload", 1);
              },
              observeMutation: function (n) {
                a.VCTracker &&
                  t.enableVCTracker &&
                  o("VisualCompletionAdapter").observeMutation(I, n);
              },
              onComplete: function (t) {
                ne.push(t);
              },
              onCompleteSync: function (t) {
                re.push(t);
              },
              onLog: function (t) {
                oe.push(t);
              },
              onMeasurementAnalysis: function (t) {
                ae.push(t);
              },
              onBeforeLog: function (t) {
                ie.push(t);
              },
              onVcMetricsComplete: function (t) {
                le.push(t);
              },
              setTracePolicy: function (n) {
                if (n != null) {
                  var e = R(n);
                  if (
                    ((B = e),
                    (y === "INITIAL_LOAD" || y === "NAVIGATION") && (_ = B),
                    z.addAnnotation("tracePolicy", B),
                    a.QuickPerformanceLogger.markerAnnotate(
                      i,
                      { string: { tracePolicy: B } },
                      { instanceKey: O },
                    ),
                    J == null && t.disableLoomTrace !== !0)
                  ) {
                    var l,
                      s =
                        (l = a.WebLoom) == null
                          ? void 0
                          : l.maybeStartTraceForInteraction(I, g, i, B, T);
                    ((J = s == null ? void 0 : s.traceReferenceId),
                      (Z = s == null ? void 0 : s.loomProviders));
                  }
                  var c = o(
                    "interaction-tracing-metrics",
                  ).InteractionTracingMetricsCore.get(I);
                  (c &&
                    ((c.tracePolicy = B),
                    c.vcTracker && c.vcTracker.setTracePolicy(B)),
                    r("one-trace").setTracePolicy(I, y, e),
                    r("one-trace").annotateInteractionIndentifier(
                      y +
                        "(" +
                        (u || (u = o("QPLEvent"))).getMarkerId(i) +
                        ":" +
                        e +
                        ")",
                    ));
                }
              },
              setInstanceIdentifier: function (t) {
                W = t;
              },
              getInstanceKey: function () {
                return O;
              },
              failTrace: function (t, n) {
                (z.addMetadata("isError", 1),
                  z.addMetadata("errorComponent", t),
                  n && z.forceCompleteTrace());
              },
            },
            j = function () {
              if (m.has(I)) {
                var e = pe;
                (r("clearTimeout")(ce), Y.remove(), m.delete(I), C(A, e));
                var n = [].concat(ie);
                ((ie.length = 0),
                  n.forEach(function (t) {
                    t(e);
                  }));
                var l = o("InteractionTracingLogger").getTraceStatus(
                    e,
                    t.qplActionCancelOnNavigation,
                  ),
                  s = o("InteractionTracingLogger").logQPL(t, a, i, l, e, O);
                if (
                  ((e.qplAction = s),
                  (e.traceStatus = l),
                  (e.debugName = x),
                  t.heroBootloadStatsAfterQPL === !1)
                ) {
                  var u;
                  (u = a.HeroBootloadPerfStore) == null ||
                    u.addStaticResourcesStats(e);
                }
                var c = [].concat(oe);
                if (
                  ((oe.length = 0),
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
                  var d;
                  (d = a.HeroBootloadPerfStore) == null ||
                    d.addStaticResourcesStats(e);
                }
                (delete e.vcTracker,
                  U(e, s),
                  o("InteractionTracingUserTimingUtils").markInteraction(
                    a,
                    e,
                    y,
                    t,
                    O,
                  ),
                  setTimeout(function () {
                    o(
                      "interaction-tracing-metrics",
                    ).InteractionTracingMetricsCore.delete(I);
                  }, t.cleanUpTraceTimeout));
              }
            };
          function K(e) {
            e
              ? H.forEach(function (e) {
                  z.unlockInteractionLogging(e);
                })
              : z.unlockInteractionLogging(d);
          }
          var Q = function (n, r) {
            if (m.has(I)) {
              if (
                (z.addAnnotationInt("startTimestamp", T + t.qplBaseTimestamp),
                z.addAnnotation(
                  "tracePolicy",
                  B != null ? B : t.defaultTracePolicy,
                ),
                (y === "INITIAL_LOAD" || y === "NAVIGATION") &&
                  (z.addAnnotationInt(
                    "revisit",
                    Number(k.checkAndMarkRevisit(B)),
                  ),
                  W != null &&
                    z.addAnnotationInt(
                      "instance_revisit",
                      Number(k.checkAndMarkRevisit(W)),
                    )),
                F != null && z.addAnnotation("referrer", F),
                z.addAnnotation("interactionId", I),
                q != null)
              ) {
                var e = o("MemoryUtils").getCurrentMemory(),
                  i = e.deviceMemory,
                  l = e.jsHeapSizeLimit,
                  s = e.totalJSHeapSize,
                  u = e.usedJSHeapSize;
                (u != null &&
                  (z.addAnnotationInt("usedJSHeapSizeStart", q),
                  z.addAnnotationInt("usedJSHeapSizeEnd", u)),
                  s != null && z.addAnnotationInt("JSTotalHeapSize", s),
                  l != null && z.addAnnotationInt("JSHeapSizeLimit", l),
                  i != null && z.addAnnotationInt("JSDeviceMemory", i));
              }
              (b(t, z, n),
                a.VCTracker && t.enableVCTracker && ue != null && ue());
              var c = [].concat(ne);
              ((ne.length = 0),
                c.forEach(function (e) {
                  e(n, r);
                }),
                J != null && z.addAnnotation("loomRefId", J),
                Z != null &&
                  Z.forEach(function (e) {
                    return z.addTag("loomProviders", e);
                  }));
              var d = n.vcTracker;
              d && !n.hasVcReport
                ? (d.onComplete(function () {
                    K(r);
                  }),
                  r && d.forceMeasurement())
                : K(r);
            }
          };
          function X(e, t) {
            (t === void 0 && (t = (c || (c = r("performanceNow")))()),
              A.push({ isOnline: e, timestamp: t }));
          }
          var Y = r("NetworkStatusTracker").onChange(function (e) {
            var t = e.online;
            X(t);
          });
          r("NetworkStatusTracker").isOnline() || X(!1);
          var J, Z;
          if (B != null && t.disableLoomTrace !== !0) {
            var ee,
              te =
                (ee = a.WebLoom) == null
                  ? void 0
                  : ee.maybeStartTraceForInteraction(I, g, i, B, T);
            ((J = te == null ? void 0 : te.traceReferenceId),
              (Z = te == null ? void 0 : te.loomProviders));
          }
          $ !== !0 && o("InteractionTracingLogger").initQPL(t, a, i, T, O);
          var ne = [],
            re = [],
            oe = [],
            ae = [],
            ie = [],
            le = [],
            se = [],
            ue = null;
          (a.VCTracker &&
            t.enableVCTracker &&
            (ue = o(
              "VisualCompletionAdapter",
            ).markOtherInteractionSubspanToNavigationVC(a.VCTracker, y, I, i)),
            r("one-trace").startTrace(I, B, y, T, i),
            B != null &&
              r("one-trace").annotateInteractionIndentifier(
                y +
                  "(" +
                  (u || (u = o("QPLEvent"))).getMarkerId(i) +
                  ":" +
                  (B != null ? B : "") +
                  ")",
              ),
            z.onLog(function (e, n) {
              var a;
              (r("one-trace").annotateInteractionIndentifier(
                y +
                  "(" +
                  (u || (u = o("QPLEvent"))).getMarkerId(i) +
                  ":" +
                  (B != null ? B : "") +
                  ")",
              ),
                r("one-trace").endTrace(
                  I,
                  (a = e.completed) != null
                    ? a
                    : (c || (c = r("performanceNow")))(),
                  o("InteractionTracingLogger").getTraceStatus(
                    e,
                    t.qplActionCancelOnNavigation,
                  ),
                ));
            }));
          var ce = r("setTimeoutAcrossTransitions")(function () {
            z.cancelTrace("timeout", !1);
          }, t.timeout);
          if (t.cancelOnBackground === !0) {
            var de = o("VisibilityState").subscribe(function (e, t) {
              t && z.cancelTrace("background", !0);
            });
            z.onCompleteSync(function () {
              de();
            });
          }
          var me = function (n, o) {
              var e, i;
              if ((o === void 0 && (o = !1), !!m.has(I))) {
                (a.VCTracker &&
                  t.enableVCTracker &&
                  ((e = n.vcTracker) == null ||
                    e.unlock(
                      a.VCTracker.VisualCompletionConstants
                        .INTERACTION_TRACING_HOLD,
                    )),
                  n.completed == null &&
                    (n.completed = (c || (c = r("performanceNow")))()));
                var l = [].concat(re);
                if (
                  ((re.length = 0),
                  l.forEach(function (e) {
                    e(n);
                  }),
                  n.type === "INITIAL_LOAD" &&
                    ((i = window) == null || (i = i.document) == null
                      ? void 0
                      : i.readyState) === "loading")
                ) {
                  var u,
                    d = function () {
                      var e;
                      ((s || (s = r("JSScheduler"))).scheduleLoggingPriCallback(
                        function () {
                          Q(n, o);
                        },
                      ),
                        (e = window) == null ||
                          (e = e.document) == null ||
                          e.removeEventListener("DOMContentLoaded", d));
                    };
                  (u = window) == null ||
                    (u = u.document) == null ||
                    u.addEventListener("DOMContentLoaded", d);
                } else
                  (s || (s = r("JSScheduler"))).scheduleLoggingPriCallback(
                    function () {
                      Q(n, o);
                    },
                  );
              }
            },
            pe = o(
              "interaction-tracing-metrics",
            ).InteractionTracingMetricsCore.addTracedInteraction(I, T, me);
          switch (
            (o(
              "interaction-tracing-metrics",
            ).InteractionTracingMetricsCore.setInteractionType(I, g, y, i),
            pe && (pe.namespace = w != null ? w : "default"),
            y)
          ) {
            case "INITIAL_LOAD":
              if (
                (z.addAnnotationInt("navSequence", ++f),
                a.VCTracker && t.enableVCTracker)
              ) {
                var _e = o("VisualCompletionAdapter").traceNavigationVC(
                  a.VCTracker,
                  I,
                  0,
                  "INITIAL_LOAD",
                  f,
                  N,
                  w,
                );
                (pe && (pe.vcTracker = _e),
                  t.useDocumentBodyForVCRoot === !0 &&
                    window.document != null &&
                    (_e.observeMutation(window.document.body),
                    _e.registerNavigationMutationRoot(window.document.body)));
              }
              break;
            case "NAVIGATION":
              if (
                (z.addAnnotationInt("navSequence", ++f),
                m.forEach(function (e) {
                  var n = o(
                    "interaction-tracing-metrics",
                  ).InteractionTracingMetricsCore.get(e.getTraceId());
                  (!t.navigationCancelsInteractions &&
                    n &&
                    n.type === "INTERACTION") ||
                    (n != null &&
                      n.namespace != null &&
                      n.namespace !== (w != null ? w : "default")) ||
                    e.cancelTrace("navigation", !1);
                }),
                a.VCTracker && t.enableVCTracker)
              ) {
                var fe = o("VisualCompletionAdapter").traceNavigationVC(
                  a.VCTracker,
                  I,
                  T,
                  y,
                  f,
                  N,
                  w,
                );
                (pe && (pe.vcTracker = fe),
                  t.useDocumentBodyForVCRoot === !0 &&
                    window.document != null &&
                    (fe.observeMutation(window.document.body),
                    fe.registerNavigationMutationRoot(window.document.body)));
              }
              break;
            case "INTERACTION":
              if (a.VCTracker && t.enableVCTracker) {
                var ge = o("VisualCompletionAdapter").traceInteractionVC(
                  a.VCTracker,
                  I,
                  T,
                  y,
                  N,
                );
                pe && (pe.vcTracker = ge);
              }
              break;
          }
          if (
            (m.set(z.getTraceId(), z),
            o("HeroTracingDebugTracing").addHeroDebugging(z, t, function () {
              return J != null;
            }),
            z.onCompleteSync(function (e) {
              var t;
              (o(
                "interaction-tracing-metrics",
              ).InteractionTracingMetricsCore.addMarkerPoint(
                e.traceId,
                "HeroTrace_end",
                "AppTiming",
                (t = e.completed) != null
                  ? t
                  : (c || (c = r("performanceNow")))(),
              ),
                o("hero-tracing").HeroLogger.cleanupHeroInteraction(e.traceId));
            }),
            B != null && z.setTracePolicy(B),
            pe && pe.vcTracker)
          ) {
            var he = pe.vcTracker;
            (a.VCTracker &&
              t.enableVCTracker &&
              he.lock(
                a.VCTracker.VisualCompletionConstants.INTERACTION_TRACING_HOLD,
              ),
              o("VisualCompletionAdapter").logFinalReactStackOnBeforeComplete(
                he,
                pe,
              ),
              S(he, pe),
              he.onComplete(function (e) {
                var t = [].concat(le);
                ((le.length = 0),
                  e &&
                    t.forEach(function (t) {
                      t(pe, e);
                    }));
              }),
              o("VisualCompletionAdapter").copyVcMetricsOnComplete(t, pe, z),
              t.setupVcTracker && t.setupVcTracker(he));
          }
          if (
            (l(z),
            E.forEach(function (e) {
              return e(z);
            }),
            D != null)
          ) {
            var ye = T;
            o(
              "interaction-tracing-metrics",
            ).InteractionTracingMetricsCore.addSubspan(
              I,
              "EventQueued",
              "DOMEventTiming",
              ye,
              ye + D,
              {},
            );
          }
          if (
            t.enableInstrumentationCorrectnessLogging &&
            t.instrumentationCorrectnessQPLEvent != null
          ) {
            var Ce,
              be,
              ve,
              Se,
              Re = t.instrumentationCorrectnessQPLEvent,
              Le =
                (Ce = (be = pe.vcTracker) == null ? void 0 : be.config) != null
                  ? Ce
                  : {},
              Ee = o(
                "InstrumentationAnalyzer",
              ).createInstrumentationAnalyzerInstance(
                I,
                y,
                (u || (u = o("QPLEvent"))).getMarkerId(i),
                Re,
                a.QuickPerformanceLogger,
                t.qplBaseTimestamp,
                B,
                (ve = Le.getReactComponentStackFromDOMElement) != null
                  ? ve
                  : null,
                (Se = Le.getWrapperComponentPropArrayFromDOMElement) != null
                  ? Se
                  : null,
              );
            ((pe.measurementCorrectness = Ee.getTraceMetadata()),
              z.onLog(function (e, t) {
                (Ee.endInteraction(e, t),
                  ae.forEach(function (e) {
                    Ee.onReport(e);
                  }),
                  (ae.length = 0));
              }));
          }
          return I;
        }),
        getPendingInteractions: function () {
          return new Set(m.values());
        },
        getPendingInteractionById: function (t) {
          return m.get(t);
        },
      },
      I = k;
    l.default = I;
  },
  98,
);
