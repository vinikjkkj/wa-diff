__d(
  "AdsPerfInteractionsController",
  [
    "AMRelayRequestMetadataEvent",
    "AdsErrorSetup",
    "AdsInteractionTriggerEmitter",
    "AdsManagerErrorUtils",
    "AdsManagerInteractionQuickLogModule",
    "AdsMgmtQPLLogger",
    "AdsPerfFELabsRegressionInjectionConstants",
    "AdsPerfInteractionAddSpansUtil",
    "AdsPerfInteractionConstants",
    "AdsPerfInteractionLogDataUtil",
    "AdsPerfInteractionUtil",
    "AdsPerfInteractionVCHolder",
    "AdsWebLoomGlobalLogger",
    "ApiClient",
    "Arbiter",
    "DateConsts",
    "EventEmitter",
    "FBLogger",
    "InteractionTracing",
    "InteractionTracingMetrics",
    "NavigationTracing",
    "QPLEvent",
    "URI",
    "XControllerInteractionRecorder",
    "cr:90",
    "flipObject",
    "getAdsPerfInteractionConfigForInteraction",
    "gkx",
    "interaction-tracing-metrics",
    "performanceNow",
    "preloadedGraphAPI",
    "qex",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(e) {
      return [e.params.tool, e.params.section, e.params.tray]
        .filter(Boolean)
        .join(".")
        .toLowerCase();
    }
    var d = r("flipObject")(r("AdsManagerInteractionQuickLogModule"));
    function m(e) {
      var t = r("InteractionTracingMetrics").get(e);
      if ((t == null ? void 0 : t.wasCanceled) === !0)
        try {
          var n = (s || (s = r("URI"))).getNextURI().getPath(),
            o = new s(window.location.href).getPath();
          n != null &&
            o !== n &&
            r("InteractionTracingMetrics").addMetadata(e, "next_route", n);
        } catch (e) {}
    }
    function p(e, t, n, a) {
      var i = e.get(t),
        l = i == null ? void 0 : i.interactionID;
      if (
        l != null &&
        (r("InteractionTracingMetrics").addMetadata(
          l,
          "newInteractionSameHTRoot",
          o("AdsPerfInteractionUtil").getAdsManagerInteractionQPLName(n),
        ),
        !a)
      ) {
        var s;
        i == null ||
          (s = i.interactionTracingAPI) == null ||
          s.cancelTrace("aborted:New Interaction", !0);
      }
      e.forEach(function (e, a) {
        var i;
        if (a !== t) {
          var l = e.interactionID,
            s = o(
              "interaction-tracing-metrics",
            ).InteractionTracingMetricsCore.get(l),
            u = [
              o("AdsPerfInteractionUtil").getAdsManagerInteractionQPLName(n),
            ];
          if (
            (s == null ||
            (i = s.annotations) == null ||
            (i = i.string_array) == null
              ? void 0
              : i.newInteractionsDifferentHTRoot) != null
          ) {
            var c = s.annotations.string_array.newInteractionsDifferentHTRoot;
            u = u.concat(c);
          }
          r("InteractionTracingMetrics").addAnnotationStringArray(
            l,
            "newInteractionsDifferentHTRoot",
            u,
          );
        }
      });
    }
    var _ = (function () {
        function t() {
          var e = this;
          ((this.$1 = new Map()),
            (this.$2 = new Map()),
            (this.$3 = new Map()),
            (this.$4 = new Map()),
            (this.$5 = new Map()),
            (this.$6 = "default"),
            (this.$7 = new Map()),
            (this.$8 = 0),
            (this.$9 = new Set()),
            o("AdsWebLoomGlobalLogger").init(this),
            n("cr:90") && n("cr:90")(),
            r("AdsErrorSetup")(),
            r("ApiClient").subscribe("request.prepare", function (t, n) {
              e.$10(n);
            }),
            r("Arbiter").subscribe("AsyncRequest/send", function (t, n) {
              var r = n.request;
              o(
                "AdsPerfInteractionConstants",
              ).LOG_INTERACTIONS_METADATA_CONTROLLERS_ALLOWLIST.some(
                function (e) {
                  return r.getURI().includes(e);
                },
              ) && (e.$10(r.getData()), e.$11(r.getData()));
            }),
            o("AMRelayRequestMetadataEvent").listen(function (t) {
              return e.$10(t);
            }));
        }
        var a = t.prototype;
        return (
          (a.$11 = function (t) {
            ((t.__activeScenarioIDs = JSON.stringify(t.__activeScenarioIDs)),
              (t.__activeScenarios = JSON.stringify(t.__activeScenarios)),
              (t.__interactionsMetadata = JSON.stringify(
                t.__interactionsMetadata,
              )));
          }),
          (a.$10 = function (t) {
            var e = [],
              n = [],
              r = [];
            if (
              (this.getAllOngoingInteraction().forEach(function (t, a) {
                if (
                  o("AdsPerfInteractionUtil")
                    .getPerformanceInteractions()
                    .includes(t.interaction) ||
                  o(
                    "AdsPerfInteractionConstants",
                  ).ENABLE_BACKEND_DATA_FOR_INTERACTIONS.has(t.interaction)
                ) {
                  (e.push(t.interactionID), n.push(t.interaction));
                  var i = o(
                    "AdsPerfInteractionLogDataUtil",
                  ).getConvertedDataToBackend(t);
                  r.push(i);
                }
              }),
              t.__activeScenarioIDs != null)
            ) {
              var a;
              (a = t.__activeScenarioIDs).push.apply(a, e);
            } else t.__activeScenarioIDs = e;
            if (t.__activeScenarios != null) {
              var i;
              (i = t.__activeScenarios).push.apply(i, n);
            } else t.__activeScenarios = n;
            if (t.__interactionsMetadata != null) {
              var l;
              (l = t.__interactionsMetadata).push.apply(l, r);
            } else t.__interactionsMetadata = r;
          }),
          (a.$12 = function (t) {
            if (
              r("gkx")("21236") &&
              o("AdsPerfFELabsRegressionInjectionConstants")
                .SHOULD_INJECT_REGRESSION &&
              t ===
                o("AdsPerfFELabsRegressionInjectionConstants")
                  .DEFAULT_AFFECTED_QPL_EVENT
            )
              for (
                var e = (u || (u = r("performanceNow")))();
                (u || (u = r("performanceNow")))() - e <
                o("AdsPerfFELabsRegressionInjectionConstants")
                  .DEFAULT_REGRESSION_SIZE_MS;
              );
          }),
          (a.onRouteState = function (t) {
            var e = this,
              n = c(t);
            ((this.$6 = n),
              this.$5.forEach(function (t, r) {
                var a = e.getActiveInteractionTraceAPI(r);
                a &&
                  (a.setTracePolicy(n),
                  o("AdsInteractionTriggerEmitter").startRealInteraction(
                    babelHelpers.extends({}, t, {
                      interactionID: r,
                      tracePolicy: n,
                      triggerContext: null,
                    }),
                  ),
                  e.$5.delete(r));
              }));
          }),
          (a.getActiveInteractionTraceAPI = function (t) {
            return this.$4.get(t);
          }),
          (a.getActiveInteractionTraceAPIByInteractionComponent = function (t) {
            var e,
              n =
                (e = this.getAllOngoingInteraction().get(t)) == null
                  ? void 0
                  : e.interactionID;
            return n != null ? this.getActiveInteractionTraceAPI(n) : null;
          }),
          (a.getActiveInteraction = function (t) {
            var e;
            return (e = this.$2.get(t)) == null ? void 0 : e.interactionID;
          }),
          (a.getActiveInteractionConfig = function (t) {
            var e;
            return (e = this.$2.get(t)) == null ? void 0 : e.interactionConfig;
          }),
          (a.getAllActiveInteractions = function () {
            return this.$2;
          }),
          (a.getAllOngoingInteraction = function () {
            return this.$3;
          }),
          (a.getAllOngoingInteractionIds = function () {
            return Array.from(this.$3.values()).map(function (e) {
              return e.interactionID;
            });
          }),
          (a.incrementUserInteractionCount = function (t) {
            var e = this.$2.get(t);
            return e == null ? null : ++e.userInteractionCount;
          }),
          (a.interactionConfig = function (t) {
            return r("getAdsPerfInteractionConfigForInteraction")(t);
          }),
          (a.getInteractionTraceType = function (t) {
            var e;
            return (e = r("InteractionTracingMetrics").get(t)) == null
              ? void 0
              : e.type;
          }),
          (a.getInteractionStartCallsite = function (t) {
            var e;
            return (e = r("InteractionTracingMetrics").get(t)) == null ||
              (e = e.annotations) == null ||
              (e = e.string) == null
              ? void 0
              : e.start_callsite;
          }),
          (a.createInteraction = function (t, n, a) {
            return a === "NAVIGATION"
              ? o("NavigationTracing").traceNavigation(t, n)
              : a === "INITIAL_LOAD"
                ? o("NavigationTracing").traceInitialLoad(t, n)
                : r("InteractionTracing").startInteraction(t, n);
          }),
          (a.startInteraction = function (n, a, i) {
            var t,
              l,
              s,
              c,
              _,
              f,
              g,
              h = this,
              y,
              C,
              b;
            (t = this.$7.get(n)) == null ||
              t.emit("before_start", { interaction: n });
            var v = this.interactionConfig(n);
            if (v == null)
              return (
                r("FBLogger")("ads_logging").mustfix(
                  "No interaction config was found for the interaction named `%s`. Add a config for this interaction to `getAdsPerfInteractionConfigForInteraction`.",
                  n,
                ),
                ""
              );
            var S =
                n === "am.edit_ads.load_preview" && r("qex")._("972") === !0,
              R = v.crashResilient,
              L = v.interactionClass,
              E = v.qplEvent,
              k = v.shouldMergeParallelInteractions,
              I = v.shouldMergeParallelInteractionsForVC,
              T = v.traceType,
              D = S ? !0 : k,
              x = S
                ? !0
                : I != null
                  ? I
                  : o(
                      "AdsPerfInteractionUtil",
                    ).shouldApplyNewParallelMergeForVC(n),
              $ = v.isNavigation,
              P = (l = v.overrideComponent) != null ? l : {},
              N =
                (i == null ? void 0 : i.overrideTrackingSurface) != null &&
                P[i == null ? void 0 : i.overrideTrackingSurface] != null
                  ? P[i == null ? void 0 : i.overrideTrackingSurface]
                  : v.component,
              M =
                (s = (c = i == null ? void 0 : i.traceType) != null ? c : T) !=
                null
                  ? s
                  : "INTERACTION",
              w = M === "INITIAL_LOAD",
              A = w
                ? 0
                : (_ = i == null ? void 0 : i.startTime) != null
                  ? _
                  : (u || (u = r("performanceNow")))(),
              F =
                (f = i == null ? void 0 : i.tracePolicy) != null ? f : this.$6;
            w && F !== "default" && ($ = !1);
            var O =
                (g = i == null ? void 0 : i.isVeryLongInteraction) != null && g
                  ? o("AdsPerfInteractionConstants")
                      .ADS_VERY_LONG_INTERACTION_TRACING_CONFIG
                  : o("AdsPerfInteractionConstants").ADS_DEFAULT_TRACING_CONFIG,
              B = v.isUserFlow === !0,
              W = {
                interactionClass: L,
                startTime: A,
                tracePolicy: $ === !0 ? null : F,
                traceType: M,
                qplEvent: E,
                cfg: babelHelpers.extends({}, O, {
                  crashResilient: R,
                  qplMarkerType: B ? 2 : 1,
                  qplEnableE2ETracing: !0,
                }),
                debugName: d[(e || (e = o("QPLEvent"))).getMarkerId(E)],
              },
              q = this.$2.get(N),
              U = q == null ? void 0 : q.interactionID,
              V =
                D === !0 && (!S || (q == null ? void 0 : q.interaction) === n);
            if (
              U != null &&
              V &&
              !o("AdsPerfInteractionUtil").shouldStartNewInteraction(n, U, x)
            )
              return (
                o("AdsPerfInteractionUtil").setAndLogParallelInteraction(U, n),
                U
              );
            o("AdsPerfInteractionUtil").resetParallelInteractionCount(U);
            var H = this.getAllOngoingInteraction();
            p(H, N, n, V);
            var G = null;
            function z(e) {
              G = e;
            }
            var j = this.createInteraction(W, z, M);
            if (G) {
              var K, Q;
              this.$4.set(j, G);
              var X = null;
              ((X = r("XControllerInteractionRecorder").start()),
                (K = G) == null ||
                  K.onComplete(function () {
                    var e;
                    ((e = X) == null || e.stop(j),
                      h.$4.delete(j),
                      h.$5.delete(j));
                    var t = r("InteractionTracingMetrics").get(j);
                    if (w) {
                      var a;
                      ((a = o(
                        "AdsPerfInteractionAddSpansUtil",
                      )).addServerDataToTrace(j),
                        a.addPreloaderEventsToTrace(j),
                        a.addTotalSizesDownloadedDuringLoad(j),
                        a.addBootloaderPayloadHTMLBytesToTrace(j),
                        (n === "am.route.initial_load" ||
                          n === "am.syd.route_initial_load") &&
                          r("qex")._("985") === !0 &&
                          o(
                            "AdsPerfInteractionAddSpansUtil",
                          ).addJSResourceCacheOutcomesToTrace(j));
                    }
                    if (t && !t.wasCanceled && t.tracePolicy == null) {
                      var i, l;
                      r("FBLogger")("ads").warn(
                        "Interaction %s trace policy was never set in AdsPerfInteractionsController.js (loomRefId=%s) (traceId=%s)",
                        n,
                        (i =
                          (l = t.annotations.string) == null
                            ? void 0
                            : l.loomRefId) != null
                          ? i
                          : "[none]",
                        t.traceId,
                      );
                    }
                  }),
                (Q = G) == null ||
                  Q.onBeforeLog(function (e) {
                    m(e.traceId);
                  }));
            }
            ($ === !0 &&
              W.tracePolicy == null &&
              this.$5.set(j, { interaction: n, callsite: a }),
              this.$12(W.debugName),
              a != null &&
                r("InteractionTracingMetrics").addMetadata(
                  j,
                  "start_callsite",
                  a,
                ),
              D === !0 &&
                o("AdsPerfInteractionUtil").setAndLogParallelInteraction(j, n));
            var Y = this.$1.get(N);
            if (Y == null) {
              var J;
              (J = this.$3.get(N)) == null ||
                (J = J.interactionTracingAPI) == null ||
                J.cancelTrace(
                  "aborted:New Interaction Before Mount HT root",
                  !0,
                );
            }
            var Z = o(
              "AdsPerfInteractionUtil",
            ).getFlowInstanceIDFromInteraction(n, ++this.$8);
            Z == null &&
              r("FBLogger")("ads").warn(
                "Hero Tracing: Interaction %s failed to catch flow instance ID. Interaction ID: %s, interaction index: %s",
                n,
                j,
                this.$8,
              );
            var ee = {
              interaction: n,
              interactionID: j,
              interactionConfig: v,
              flowInstanceID: Z,
              interactionTracingAPI: G,
              userInteractionCount: 0,
            };
            return (
              this.$2.set(N, ee),
              this.$3.set(N, ee),
              o("AdsPerfInteractionLogDataUtil").addHeroTracingStartMetadata(
                j,
                F,
                this.$8,
                B,
              ),
              (y = G) == null ||
                y.onCompleteSync(function () {
                  var e;
                  (o("AdsPerfInteractionUtil").setRevisitInInteraction(n, h.$6),
                    o(
                      "AdsPerfInteractionLogDataUtil",
                    ).addHeroTracingBaseMetadata(n, N, j, h.$6),
                    (e = h.$7.get(n)) == null ||
                      e.emit("end", {
                        interaction: n,
                        interactionID: j,
                        interactionComponent: N,
                      }));
                }),
              (C = G) == null ||
                C.onLog(function (e, t) {
                  var i, l;
                  if (
                    (E ===
                      ((i = h.$3.get(N)) == null
                        ? void 0
                        : i.interactionConfig.qplEvent) && h.$3.delete(N),
                    v.wwwEvent != null)
                  ) {
                    var s,
                      u = v.wwwEvent;
                    o(
                      "AdsPerfInteractionLogDataUtil",
                    ).annotateHTInteractionBaseDataInWwwQPL(u, n, N, h.$6, {
                      start_callsite: a,
                      interactionId: j,
                      tracePolicy: h.$6,
                      interaction_index: h.$8,
                    });
                    var c = o("AdsMgmtQPLLogger").getMarkerStart(
                        u,
                        o("AdsMgmtQPLLogger").DEFAULT_INSTANCE_KEY,
                      ),
                      d = r("InteractionTracingMetrics").get(j),
                      m = d == null ? void 0 : d.vcTracker,
                      p =
                        m == null ||
                        (s = m.markerPoints.get("visuallyComplete")) == null
                          ? void 0
                          : s.timestamp,
                      _ =
                        p != null
                          ? o("AdsPerfInteractionConstants").WWW_QPL_END_ACTION[
                              t
                            ]
                          : 4158,
                      f =
                        p != null && c != null
                          ? c + (p / 1e3) * o("DateConsts").MS_PER_SEC
                          : void 0;
                    o("AdsMgmtQPLLogger").markerEnd(u, _, f);
                  }
                  ((n === "am.management.page_load" ||
                    n === "am.syd.route_initial_load") &&
                    (o(
                      "AdsPerfInteractionLogDataUtil",
                    ).annotateHTInteractionBaseDataInWwwQPL(
                      r("qpl")._(41484289, "3972"),
                      n,
                      N,
                      F,
                      {
                        mismatched_preloaders:
                          o("preloadedGraphAPI").getMismatchedPreloaders(),
                      },
                    ),
                    o("AdsMgmtQPLLogger").endStartupCompleteWithServer(
                      o("AdsPerfInteractionConstants").WWW_QPL_END_ACTION[t],
                    )),
                    (l = h.$7.get(n)) == null ||
                      l.emit("log", {
                        interaction: n,
                        interactionID: j,
                        interactionComponent: N,
                        traceStatus: t,
                      }));
                }),
              Y != null && G != null && Y(G, v),
              $ !== !0 &&
                o("AdsInteractionTriggerEmitter").startRealInteraction({
                  interaction: n,
                  interactionID: j,
                  tracePolicy: F,
                  callsite: a,
                  triggerContext: i == null ? void 0 : i.triggerContext,
                }),
              (b = this.$7.get(n)) == null ||
                b.emit("start", {
                  interaction: n,
                  interactionID: j,
                  interactionComponent: N,
                }),
              v.wwwEvent != null &&
                o("AdsMgmtQPLLogger").markerStart(v.wwwEvent),
              this.$9.has(N) &&
                this.annotateAndCancel(N, "aborted:Virtualized"),
              j
            );
          }),
          (a.startVCHolder = function (t, n, r) {
            var e = this.getActiveInteraction(t);
            e != null && o("AdsPerfInteractionVCHolder").startVCHolder(e, n, r);
          }),
          (a.endVCHolder = function (t, n, r) {
            var e = this.getActiveInteraction(t);
            e != null && o("AdsPerfInteractionVCHolder").endVCHolder(e, n, r);
          }),
          (a.$13 = function (t) {
            var e = this.$7.get(t);
            return (
              e || ((e = new (r("EventEmitter"))()), this.$7.set(t, e)),
              e
            );
          }),
          (a.addEventListener = function (t, n, r) {
            return this.$13(t).addListener(n, r);
          }),
          (a.registerListener = function (t, n) {
            if (!this.$1.has(t)) this.$1.set(t, n);
            else {
              var e,
                o = (e = this.getActiveInteraction(t)) != null ? e : "";
              r("FBLogger")("ads").warn(
                "Component %s registered multiple times in AdsPerfInteractionsController. Interaction ID: %s",
                t,
                o,
              );
            }
          }),
          (a.unregisterListener = function (t) {
            this.$1.has(t) && this.$1.delete(t);
          }),
          (a.addErrorMetadataToInteraction = function (t, n) {
            var e,
              a,
              i,
              l =
                (e = (a = n.errorContext) == null ? void 0 : a.errorCode) !=
                null
                  ? e
                  : o("AdsManagerErrorUtils").getErrorCode(n.error);
            l != null &&
              r("InteractionTracingMetrics").addMetadata(t, "error_code", l);
            var s = (i = n.error) == null ? void 0 : i.name;
            s != null &&
              r("InteractionTracingMetrics").addMetadata(t, "error_name", s);
            var u = o("AdsManagerErrorUtils").getErrorMessage(n.error);
            (u != null &&
              r("InteractionTracingMetrics").addMetadata(t, "error_message", u),
              o("AdsManagerErrorUtils").addCausalErrorMetadataToInteraction(
                t,
                n.error,
              ));
          }),
          (a.annotateFailure = function (t, n, o, a) {
            var e = this.getActiveInteraction(t);
            if (e != null) {
              if (
                (r("InteractionTracingMetrics").addMetadata(e, "isError", 1),
                r("InteractionTracingMetrics").addMetadata(
                  e,
                  "errorComponent",
                  n,
                ),
                a != null &&
                  r("InteractionTracingMetrics").addMetadata(
                    e,
                    "failureType",
                    a,
                  ),
                o == null)
              ) {
                r("FBLogger")("ads_error_logging").warn(
                  "No error data was passed in when annotating failure for component `%s` and source `%s`",
                  t,
                  n,
                );
                return;
              }
              this.addErrorMetadataToInteraction(e, o);
            }
          }),
          (a.annotateAndCancelWithApiError = function (t, n, o) {
            var e = this.getActiveInteraction(t);
            if (e != null) {
              (r("InteractionTracingMetrics").addMetadata(
                e,
                "isCancelWithApiError",
                1,
              ),
                n != null &&
                  r("InteractionTracingMetrics").addMetadata(
                    e,
                    "errorComponent",
                    n,
                  ),
                o != null && this.addErrorMetadataToInteraction(e, o));
              var a = this.$3.get(t);
              if (a != null) {
                var i;
                (i = a.interactionTracingAPI) == null ||
                  i.cancelTrace("aborted:Cancel with api error", !0);
                var l = a.interaction;
                this.$13(l).emit("end", {
                  interaction: l,
                  interactionID: e,
                  interactionComponent: t,
                });
              }
            }
          }),
          (a.annotateAndCancel = function (t, n) {
            n === void 0 && (n = "aborted:Cancel");
            var e = this.getActiveInteraction(t);
            if (e != null) {
              r("InteractionTracingMetrics").addMetadata(e, "isCancel", 1);
              var o = this.$3.get(t);
              if (o != null) {
                var a;
                (a = o.interactionTracingAPI) == null || a.cancelTrace(n, !0);
                var i = o.interaction;
                this.$13(i).emit("end", {
                  interaction: i,
                  interactionID: e,
                  interactionComponent: t,
                });
              }
            }
          }),
          (a.__annotateAndForceSuccess = function (t, n) {
            var e = this.getActiveInteraction(t);
            if (e != null) {
              n != null &&
                o(
                  "AdsPerfInteractionLogDataUtil",
                ).addHeroTracingInteractionCustomMetadata(e, n);
              var r = this.$3.get(t);
              if (r != null) {
                var a;
                (a = r.interactionTracingAPI) == null || a.forceCompleteTrace();
                var i = r.interaction;
                this.$13(i).emit("end", {
                  interaction: i,
                  interactionID: e,
                  interactionComponent: t,
                });
              }
            }
          }),
          (a.addCustomInteractionAnnotation = function (t, n, r) {
            var e = this.getActiveInteraction(t);
            e != null &&
              (o(
                "AdsPerfInteractionLogDataUtil",
              ).addHeroTracingInteractionCustomMetadata(e, n),
              r != null && this.addErrorMetadataToInteraction(e, { error: r }));
          }),
          (a.addCustomInteractionPoint = function (t, n, o, a, i) {
            a === void 0 && (a = (u || (u = r("performanceNow")))());
            var e = this.getActiveInteraction(t);
            e != null &&
              r("InteractionTracingMetrics").addMarkerPoint(e, n, o, a, i);
          }),
          (a.getInteractionsForGlobalLogging = function () {
            var e = [];
            return (
              this.$3.forEach(function (t, n) {
                e.push(
                  o("AdsPerfInteractionUtil").getAdsManagerInteractionQPLName(
                    t.interaction,
                  ),
                );
              }),
              e
            );
          }),
          (a.getInteractionIDsForGlobalLogging = function () {
            return this.getAllOngoingInteractionIds().filter(function (e) {
              return o("AdsPerfInteractionUtil").isInteractionOngoing(e);
            });
          }),
          (a.getFlowInstanceIDsForGlobalLogging = function () {
            var e = [];
            return (
              this.$3.forEach(function (t, n) {
                var r = t.flowInstanceID;
                r != null && e.push(r);
              }),
              e
            );
          }),
          (a.addToVirtualizedHeroTracingComponents = function (t) {
            this.$9.add(t);
          }),
          (a.removeFromVirtualizedHeroTracingComponents = function (t) {
            this.$9.delete(t);
          }),
          t
        );
      })(),
      f = new _();
    l.default = f;
  },
  98,
);
