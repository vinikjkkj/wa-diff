__d(
  "VisualCompletionTracing",
  [
    "IteratableElementWeakMap",
    "IteratableElementWeakSet",
    "LCP",
    "LoadingStateTracker",
    "ResourceTimingAPI",
    "VisibilityAPI",
    "VisibilityState",
    "VisualCompletionLogger",
    "VisualCompletionTraceObserver",
    "VisualCompletionUtil",
    "VisualCompletionUtilCommon",
    "WebAPIs",
    "addAnnotations",
    "currentVCTraces",
    "foregroundRequestAnimationFrame",
    "performanceNow",
    "setTimeoutAcrossTransitions",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new (r("IteratableElementWeakSet"))(),
      u = !1;
    !u &&
      o("VisibilityAPI").canUseVisibilityAPI &&
      ((u = !0),
      o("VisibilityState").subscribe(function (e, t) {
        t &&
          o("currentVCTraces")
            .getCurrentVCTraces()
            .forEach(function (e) {
              (e.pendingMutations.forEach(function (t, n) {
                (e.addVisualElement(
                  t.mutationSeq,
                  n,
                  t.mutationType,
                  t.mutationTimestamp,
                  t.mutationTimestamp,
                  void 0,
                  void 0,
                  t.imgLoadStart,
                  t.imgLoadEnd,
                ),
                  e.intersectionObserver && e.intersectionObserver.unobserve(n),
                  e.unlock(t.lockId));
              }),
                e.pendingMutations.clear());
            });
      }));
    var c = (function (t) {
      function n(n, a, i, l, u, c) {
        var d;
        if (
          ((d = t.call(this, n, a, i, l, u) || this),
          (d.pendingLocks = new Map()),
          (d.pendingImages = new (r("IteratableElementWeakMap"))()),
          (d.$VisualCompletionTracing$p_1 = null),
          (d.$VisualCompletionTracing$p_2 = 0),
          (d.$VisualCompletionTracing$p_3 = 0),
          (d.$VisualCompletionTracing$p_5 = []),
          (d.$VisualCompletionTracing$p_6 = []),
          (d.mutationSeq = 0),
          (d.mutationObserver = null),
          (d.intersectionObserver = null),
          (d.pendingMutations = new Map()),
          (d.namespace = "default"),
          (d.loggingScheduled = !1),
          (d.$VisualCompletionTracing$p_7 = new (r(
            "IteratableElementWeakMap",
          ))()),
          (d.$VisualCompletionTracing$p_8 = null),
          (d.intersectionObserverCallback = function (e) {
            Array.prototype.forEach.call(e, function (e) {
              var t = d.pendingMutations.get(e.target);
              if (t) {
                var n = e.time;
                (e.time < t.mutationTimestamp &&
                  (d.addAnnotationBoolean("pastPaintTimeReported", !0),
                  (n = t.mutationTimestamp)),
                  d.addVisualElement(
                    t.mutationSeq,
                    e.target,
                    t.mutationType,
                    t.mutationTimestamp,
                    n,
                    o("WebAPIs").intersectionObserverEntryIsVisible(e),
                    o("VisualCompletionUtilCommon").castToRect(
                      e.boundingClientRect,
                    ),
                    t.imgLoadStart,
                    t.imgLoadEnd,
                  ),
                  o("WebAPIs").intersectionObserverEntryIsVisible(e) &&
                    (d.addFirstMarkerPoint("firstPaint", e.time, {
                      mutationType: t.mutationType,
                    }),
                    d.$VisualCompletionTracing$p_8 != null &&
                      d.$VisualCompletionTracing$p_8(
                        e.target,
                        !1,
                        o("VisualCompletionUtilCommon").castToRect(
                          e.boundingClientRect,
                        ),
                        t.mutationType,
                      )),
                  d.cleanupPendingMutation(e.target));
              }
            });
          }),
          (d.mutationRecordHandler = function (t) {
            d.mutationSeq++;
            var n = (e || (e = r("performanceNow")))(),
              a = o("VisualCompletionUtil").extractMutationElements(t, n, d);
            (d.trackElements(a, d.mutationSeq, n),
              (d.mutationProcessingOverhead += e() - n));
          }),
          (d.elementVisibilityCallback = function (e) {
            Array.from(e).forEach(function (e) {
              if (o("WebAPIs").intersectionObserverEntryIsVisible(e)) {
                var t = e.target,
                  n = d.$VisualCompletionTracing$p_7.get(t);
                n != null &&
                  (n.callback(),
                  n.executeOnce && d.$VisualCompletionTracing$p_7.delete(t));
              }
            });
          }),
          (d.namespace = c != null ? c : "default"),
          (d.$VisualCompletionTracing$p_4 = new (r("LoadingStateTracker"))(d)),
          o("WebAPIs").MutationObserver &&
            (d.mutationObserver = new (o("WebAPIs").MutationObserver)(
              d.mutationRecordHandler,
            )),
          o("WebAPIs").IntersectionObserver &&
            ((d.intersectionObserver = new (o("WebAPIs").IntersectionObserver)(
              d.intersectionObserverCallback,
            )),
            (d.$VisualCompletionTracing$p_1 = new (o(
              "WebAPIs",
            ).IntersectionObserver)(d.elementVisibilityCallback))),
          o("currentVCTraces").addVCTrace(i, d),
          u.enable_lcp_tracking === !0 && o("LCP").canUseLCP)
        ) {
          var m = d.lock("LCPCallback");
          o("LCP").catchFirstLcpCallback(function (t) {
            (t != null &&
              (d.addAnnotation("LCPCancellingEventType", t != null ? t : ""),
              d.addMarkerPoint(
                "LCPCancellingUserInput",
                (e || (e = r("performanceNow")))(),
                { event_type: t },
              )),
              m());
          });
        }
        return (
          l === "INTERACTION"
            ? (d.measureOriginalViewport = !1)
            : (o("currentVCTraces").setCurrentNavigationVCTrace(d, d.namespace),
              (d.measureOriginalViewport = !0),
              u.measureOriginalViewportOnNavigation != null &&
                (d.measureOriginalViewport =
                  u.measureOriginalViewportOnNavigation),
              s.forEach(function (e) {
                d.observeMutation(e);
              })),
          o("VisualCompletionUtil").setupScrollHandler(d),
          d.$VisualCompletionTracing$p_4.initBackgroundPolling(),
          d
        );
      }
      babelHelpers.inheritsLoose(n, t);
      var a = n.prototype;
      return (
        (a.addLateMutationIgnoreElement = function (t) {
          this.lateMutationIgnoreElements.add(t);
        }),
        (a.addMutationRoot = function (n) {
          return this.reported || this.checkDuplicatedMutationRoot(n)
            ? function () {}
            : (this.mutationSeq++,
              this.trackElements(
                [[n, "mutationRoot"]],
                this.mutationSeq,
                (e || (e = r("performanceNow")))(),
              ),
              this.observeMutation(n));
        }),
        (a.dumpLocks = function () {
          return [
            this.pendingLocks,
            this.$VisualCompletionTracing$p_4.pendingLoadingElements,
            this.pendingImages,
          ];
        }),
        (a.lock = function (n) {
          var t = this;
          return (
            this.pendingLocks.set(n, (e || (e = r("performanceNow")))()),
            function () {
              t.unlock(n);
            }
          );
        }),
        (a.imageDone = function (n) {
          var t = this.pendingImages.get(n);
          t != null &&
            (this.stateLog.set(
              "imgLoad_" + this.$VisualCompletionTracing$p_3++,
              [t, (e || (e = r("performanceNow")))()],
            ),
            this.pendingImages.delete(n),
            this.attemptMeasurement());
        }),
        (a.imageWait = function (n) {
          this.reported ||
            this.pendingImages.set(n, (e || (e = r("performanceNow")))());
        }),
        (a.cleanupPendingMutation = function (t, n) {
          var e = this.pendingMutations.get(t);
          e &&
            (this.intersectionObserver != null &&
              this.intersectionObserver.unobserve(t),
            this.unlock(e.lockId, n),
            this.pendingMutations.delete(t));
        }),
        (a.trackImage = function (t, n, r, a) {
          o("VisualCompletionUtil").trackImage(t, n, r, a, this);
        }),
        (a.waitLoadingState = function (t) {
          return this.$VisualCompletionTracing$p_4.waitLoadingState(t);
        }),
        (a.attemptMeasurementFromLoadingStateTracker = function () {
          this.attemptMeasurement();
        }),
        (a.getPendingLoadingElements = function () {
          return this.$VisualCompletionTracing$p_4.pendingLoadingElements;
        }),
        (a.unlock = function (n, o) {
          var t = this.pendingLocks.get(n);
          if (t != null) {
            this.pendingLocks.delete(n);
            var a = o != null ? o + "_" + n : n;
            (this.stateLog.set("Lock(" + a + ")", [
              t,
              (e || (e = r("performanceNow")))(),
            ]),
              this.attemptMeasurement());
          }
        }),
        (a.checkDuplicatedMutationRoot = function (t) {
          for (var e = t; e != null; ) {
            if (this.mutationRoots.has(e)) return !0;
            e = e.parentElement;
          }
          return !1;
        }),
        (a.observeMutation = function (t) {
          var e = this;
          return this.reported || this.checkDuplicatedMutationRoot(t)
            ? function () {}
            : (o("VisualCompletionUtil").isElementNode(t) &&
                this.mutationObserver &&
                this.mutationObserver.observe(
                  t,
                  o("VisualCompletionUtil").mutationObserverConfig,
                ),
              this.mutationRoots.add(t),
              function () {
                e.mutationRoots.delete(t);
              });
        }),
        (a.registerNavigationMutationRoot = function (t) {
          return this.reported || this.checkDuplicatedMutationRoot(t)
            ? function () {}
            : (s.add(t),
              function () {
                s.delete(t);
              });
        }),
        (a.scheduleIntersectionObserver = function (n, a, i, l, s, u) {
          var t = this;
          if (
            !(this.reported && this.$VisualCompletionTracing$p_8 == null) &&
            !this.$VisualCompletionTracing$p_4.hasLoadingStateUnmountCallback(
              a,
            ) &&
            !(this.config.bypass_detached_element && a.isConnected === !1)
          )
            if (
              (this.mutatedElementCount++,
              o("VisibilityAPI").canUseVisibilityAPI &&
                o("VisibilityAPI").isVisibilityHidden())
            )
              this.addVisualElement(n, a, i, l, l, void 0, void 0, s, u);
            else if (o("WebAPIs").IntersectionObserver) {
              this.cleanupPendingMutation(a);
              var c = i + "_paint_" + this.$VisualCompletionTracing$p_3++;
              (this.intersectionObserver &&
                this.intersectionObserver.observe(a),
                this.lock(c),
                this.pendingMutations.set(a, {
                  mutationTimestamp: l,
                  lockId: c,
                  mutationType: i,
                  mutationSeq: n,
                  imgLoadStart: s,
                  imgLoadEnd: u,
                }),
                this.config.intersection_observer_timeout != null &&
                  r("setTimeoutAcrossTransitions")(function () {
                    var o = t.pendingMutations.get(a);
                    o != null &&
                      o.lockId === c &&
                      (a.isConnected !== !1 &&
                        t.addVisualElement(
                          n,
                          a,
                          "mutationTimeout",
                          l,
                          (e || (e = r("performanceNow")))(),
                          void 0,
                          void 0,
                          s,
                          u,
                        ),
                      t.addAnnotationInt(
                        "intersection_observer_timeout_count",
                        ++t.$VisualCompletionTracing$p_2,
                      ),
                      t.cleanupPendingMutation(a, "timeout"));
                  }, this.config.intersection_observer_timeout));
            } else {
              var d = i + "_paint_" + this.$VisualCompletionTracing$p_3++;
              (this.lock(d),
                o(
                  "foregroundRequestAnimationFrame",
                ).foregroundRequestAnimationFrame(function () {
                  (t.addVisualElement(
                    n,
                    a,
                    i,
                    l,
                    (e || (e = r("performanceNow")))(),
                    void 0,
                    void 0,
                    s,
                    u,
                  ),
                    t.unlock(d));
                }));
            }
        }),
        (a.scheduleElementVisibleObserver = function (t, n, r) {
          var e = r.cleanAfterReport,
            a = e === void 0 ? !0 : e,
            i = r.executeOnce,
            l = i === void 0 ? !0 : i;
          if (!this.reported)
            if (o("WebAPIs").IntersectionObserver) {
              var s = this.$VisualCompletionTracing$p_7.get(t);
              (s &&
                this.$VisualCompletionTracing$p_1 &&
                this.$VisualCompletionTracing$p_1.unobserve(t),
                this.$VisualCompletionTracing$p_7.set(t, {
                  executeOnce: l,
                  callback: n,
                  cleanAfterReport: a,
                }),
                this.$VisualCompletionTracing$p_1 &&
                  this.$VisualCompletionTracing$p_1.observe(t));
            } else return;
        }),
        (a.trackElements = function (t, n, r) {
          var e = this;
          if (!(this.reported && this.$VisualCompletionTracing$p_8 == null)) {
            var a = [];
            (t.forEach(function (e) {
              var t = e[0];
              o("VisualCompletionUtil").isElementNode(t) &&
                !o("VisualCompletionUtil").isImageOrPicture(t) &&
                a.push(e);
            }),
              a.forEach(function (t) {
                var a = t[0],
                  i = t[1];
                (o("VisualCompletionUtil").checkLoadingStates(a, e),
                  e.scheduleIntersectionObserver(n, a, i, r));
              }),
              this.interactionType === "INTERACTION" &&
                this.config.allow_inclusion_in_navigation_vc !== !0 &&
                o("currentVCTraces").forEachNavigationVCTrace(function (e, n) {
                  e.reported ||
                    t.forEach(function (t) {
                      var n = t[0];
                      e.excludeElement(n);
                    });
                }));
          }
        }),
        (a.onBeforeComplete = function (t) {
          this.reported || this.$VisualCompletionTracing$p_5.push(t);
        }),
        (a.onComplete = function (t) {
          this.reported || this.$VisualCompletionTracing$p_6.push(t);
        }),
        (a.attemptMeasurement = function (t) {
          var e = this;
          if (
            (t === void 0 && (t = !1),
            !(
              !t &&
              (this.loggingScheduled ||
                this.reported ||
                this.pendingLocks.size > 0 ||
                this.$VisualCompletionTracing$p_4.pendingLoadingElements.size() >
                  0 ||
                this.pendingImages.size() > 0)
            ))
          ) {
            this.loggingScheduled = !0;
            var n = function () {
                (e.config.enableInstrumentationCorrectnessLogging ||
                  (e.mutationObserver && e.mutationObserver.disconnect(),
                  e.intersectionObserver &&
                    e.intersectionObserver.disconnect()),
                  e.$VisualCompletionTracing$p_4.forEachLoadingStateUnmountCallback(
                    function (e) {
                      e();
                    },
                  ),
                  e.$VisualCompletionTracing$p_4.disconnect(),
                  e.$VisualCompletionTracing$p_4.clearLoadingStateUnmountCallbacks(),
                  e.$VisualCompletionTracing$p_4.disconnectTailLoadLoadingStateObservers(),
                  o("currentVCTraces").removeVCTrace(e.traceID),
                  e.pendingMutations.clear(),
                  !t &&
                    o("ResourceTimingAPI").canUseResourceTimingAPI() &&
                    e.config.check_css_bg_elements &&
                    o("VisualCompletionUtil").scanCssBgElements(e));
                var n = e.calculate(t);
                (e.$VisualCompletionTracing$p_5.forEach(function (t) {
                  t(n, e.$VisualCompletionTracing$p_4.pendingLoadingElements);
                }),
                  (e.$VisualCompletionTracing$p_5 = []),
                  r("VisualCompletionTraceObserver").emit(n),
                  e.$VisualCompletionTracing$p_6.forEach(function (e) {
                    e(n);
                  }),
                  (e.$VisualCompletionTracing$p_6 = []),
                  e.$VisualCompletionTracing$p_1 &&
                    e.$VisualCompletionTracing$p_1.disconnect(),
                  e.$VisualCompletionTracing$p_7.clear(),
                  e.tearDown());
              },
              a = this.config.defer_expensive_calculation;
            a != null && !t ? a(n) : n();
          }
        }),
        (a.forceMeasurement = function () {
          var t = this;
          this.reported ||
            (this.pendingLocks.size > 0 &&
              (r("addAnnotations")(this.annotations, {
                int: { incompleteLockCount: this.pendingLocks.size },
              }),
              this.pendingLocks.forEach(function (n, o) {
                (t.addTag("incompleteLocks", o),
                  t.stateLog.set("incomplete_" + o, [
                    n,
                    (e || (e = r("performanceNow")))(),
                  ]));
              })),
            this.$VisualCompletionTracing$p_4.pendingLoadingElements.size() >
              0 &&
              r("addAnnotations")(this.annotations, {
                int: {
                  incompleteLoadingElementsCount:
                    this.$VisualCompletionTracing$p_4.pendingLoadingElements.size(),
                },
              }),
            this.stateLog.forEach(function (n, o) {
              n[1] === -1 &&
                (t.stateLog.delete(o),
                (n[1] = (e || (e = r("performanceNow")))()),
                t.stateLog.set("incomplete_" + o, n));
            }),
            this.pendingImages.size() > 0 &&
              (r("addAnnotations")(this.annotations, {
                int: { incompleteImageCount: this.pendingImages.size() },
              }),
              this.pendingImages.forEach(function (n) {
                t.stateLog.set(
                  "incomplete_imgLoad_" + t.$VisualCompletionTracing$p_3++,
                  [n, (e || (e = r("performanceNow")))()],
                );
              })),
            this.attemptMeasurement(!0));
        }),
        (a.tearDown = function () {
          t.prototype.tearDown.call(this);
          for (var e of this.$VisualCompletionTracing$p_7.entries()) {
            var n = e[0],
              r = e[1];
            r.cleanAfterReport && this.$VisualCompletionTracing$p_7.delete(n);
          }
          (this.pendingLocks.clear(),
            this.$VisualCompletionTracing$p_4.pendingLoadingElements.clear(),
            this.pendingImages.clear());
        }),
        (a.subscribeExtraMutation = function (t) {
          var e = this,
            n = [];
          o("VisualCompletionUtil").subscribeUserInputForExtraMutation(
            this,
            t,
            n,
          );
          var r = function () {
            (e.mutationObserver && e.mutationObserver.disconnect(),
              e.intersectionObserver && e.intersectionObserver.disconnect(),
              e.mutationRoots.clear(),
              n.forEach(function (e) {
                return e();
              }),
              (n = []),
              (e.$VisualCompletionTracing$p_8 = null));
          };
          return (
            (this.$VisualCompletionTracing$p_8 = function (e, n, r, o) {
              t(e, n, r, o);
            }),
            function () {
              r();
            }
          );
        }),
        n
      );
    })(r("VisualCompletionLogger"));
    l.default = c;
  },
  98,
);
