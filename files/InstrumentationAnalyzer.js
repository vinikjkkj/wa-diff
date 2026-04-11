__d(
  "InstrumentationAnalyzer",
  [
    "ReactStackUtils",
    "clearTimeout",
    "hero-tracing",
    "performanceNow",
    "setTimeoutAcrossTransitions",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 2e3,
      u = 0;
    function c() {
      return u++;
    }
    var d = Object.freeze({
        NONE: null,
        MISSING_TRACE_POLICY: "1",
        INCOMPLETE_HERO_TRACE: "2",
        MISSING_DOM_MUTATIONS: "3",
        UNKNOWN_CANCEL_REASON: "4",
        MISSING_CANCEL_DETAILS: "5",
        LATE_SIGNALS_AFTER_TRACE: "6",
        USER_INPUT_DETECTED: "10",
        TIMEOUT_BY_INCOMPLETE_LOADING_STATE: "11",
      }),
      m = (function () {
        function t(t, n, o, a, i, l, s, u, m) {
          ((this.$8 = []),
            (this.$4 = l),
            (this.$3 = c()),
            (this.$2 = i),
            (this.$5 = a),
            (this.$6 = u),
            (this.$7 = m),
            this.$2.markerStart(
              a,
              this.$3,
              (e || (e = r("performanceNow")))() + this.$4,
              { cancelOnUnload: !0, trackedForLoss: !0 },
            ),
            (this.$1 = {
              errorCode: d.NONE,
              status: "STARTED",
              string: {
                cancelType: "",
                loomRefId: null,
                traceStatus: "STARTED",
                tracePolicy: null,
                traceType: n,
                traceId: t,
                lastPendingStage: null,
                traceQPLEvent: String(o),
              },
              string_array: {},
              int: { heroEndToVCWithoutImage: null, hidden: 0 },
              bool: {
                heroTraceStarted: !1,
                heroTraceEnded: !1,
                hadMutationRoot: !1,
                hadDOMMutation: !1,
                hadPaintedElement: !1,
                hadLoadingStateElement: !1,
                hadSuspendedPlaceholder: !1,
                hadLatePlaceholder: !1,
                hadLateDOMMutation: !1,
                cancelWithoutPendingPlaceholder: !1,
                noSignalUntilTimeout: !1,
                userInputDetectedAfterTrace: !1,
              },
            }),
            s != null && this.setStringMetadata("tracePolicy", s),
            this.setStringMetadata("traceType", n),
            this.setStringMetadata("traceId", t),
            this.setStringMetadata("traceQPLEvent", String(o)));
        }
        var n = t.prototype;
        return (
          (n.endInteraction = function (n, a) {
            var t = this;
            this.$2.markerPoint(this.$5, "traceEnd", {
              timestamp: (e || (e = r("performanceNow")))() + this.$4,
              instanceKey: this.$3,
            });
            var i = n.vcTracker;
            if (a === "SUCCESS")
              var l =
                  i == null
                    ? void 0
                    : i.subscribeExtraMutation(function (i, s, d, m) {
                        if (
                          ((t.$1.bool.hadLateDOMMutation = i != null),
                          t.setBooleanMetadata(
                            "userInputDetectedAfterTrace",
                            s,
                          ),
                          d != null &&
                            (t.setIntMetadata("lateDOMMutationX", d.left),
                            t.setIntMetadata("lateDOMMutationY", d.top),
                            t.setIntMetadata(
                              "lateDOMMutationWidth",
                              d.right - d.left,
                            ),
                            t.setIntMetadata(
                              "lateDOMMutationHeight",
                              d.bottom - d.top,
                            )),
                          m != null &&
                            t.setStringMetadata("lateDOMMutationType", m),
                          i != null)
                        ) {
                          if (t.$6) {
                            var p = o("ReactStackUtils").getTrimmedReactStack(
                              i,
                              "HeroPagelet",
                              t.$6,
                            );
                            p != null &&
                              t.setStringArrayMetadata(
                                "lateDOMMutationReactStack",
                                p,
                              );
                          }
                          if (t.$7) {
                            var _ = t.$7(i, "HeroPagelet", "name");
                            _ != null &&
                              t.setStringArrayMetadata(
                                "lateDOMMutationPageletStack",
                                _,
                              );
                          }
                          t.$2.markerPoint(t.$5, "lateDOMMutation", {
                            timestamp:
                              (e || (e = r("performanceNow")))() + t.$4,
                            instanceKey: t.$3,
                          });
                        }
                        (l == null || l(),
                          (s ||
                            (t.$1.bool.hadLateDOMMutation &&
                              t.$1.bool.hadLatePlaceholder)) &&
                            (r("clearTimeout")(c),
                            u == null || u(),
                            t.finalizeReporting(n, a)));
                      }),
                u = o("hero-tracing").HeroLogger.subscribeToPlaceholders({
                  onStart: function (i) {
                    i.interactionID === n.traceId &&
                      i.contextualInteractionUUID === n.traceId &&
                      ((t.$1.bool.hadLatePlaceholder = !0),
                      t.$2.markerPoint(t.$5, "latePlaceholder", {
                        timestamp: (e || (e = r("performanceNow")))() + t.$4,
                        instanceKey: t.$3,
                      }),
                      i.description != null &&
                        t.setStringMetadata(
                          "latePlaceholderName",
                          i.description,
                        ),
                      u == null || u(),
                      t.$1.bool.hadLateDOMMutation &&
                        t.$1.bool.hadLatePlaceholder &&
                        (r("clearTimeout")(c),
                        l == null || l(),
                        t.finalizeReporting(n, a)));
                  },
                  onEnd: function () {},
                }),
                c = r("setTimeoutAcrossTransitions")(function () {
                  (t.setBooleanMetadata("noSignalUntilTimeout", !0),
                    l == null || l(),
                    u == null || u(),
                    t.finalizeReporting(n, a));
                }, s);
            else {
              if (n.tagSet.pendingPlaceholder == null) {
                var d, m, p;
                (this.setBooleanMetadata("cancelWithoutPendingPlaceholder", !0),
                  ((d = n.annotations.int) == null
                    ? void 0
                    : d.incompleteLoadingElementsCount) != null &&
                  n.annotations.int.incompleteLoadingElementsCount > 0
                    ? this.setStringMetadata(
                        "lastPendingStage",
                        "loadingStateElement",
                      )
                    : ((m = n.annotations.int) == null
                          ? void 0
                          : m.incompleteImageCount) != null &&
                        n.annotations.int.incompleteImageCount > 0
                      ? this.setStringMetadata("lastPendingStage", "imageLoad")
                      : ((p = n.annotations.int) == null
                          ? void 0
                          : p.incompleteLockCount) != null &&
                        n.annotations.int.incompleteLockCount > 0 &&
                        this.setStringMetadata(
                          "lastPendingStage",
                          "incompleteLocks",
                        ));
              } else this.setStringMetadata("lastPendingStage", "placeholder");
              this.finalizeReporting(n, a);
            }
          }),
          (n.getTraceMetadata = function () {
            return this.$1;
          }),
          (n.setBooleanMetadata = function (t, n) {
            var e;
            ((this.$1.bool[t] = n),
              this.$2.markerAnnotate(
                this.$5,
                { bool: ((e = {}), (e[t] = n), e) },
                { instanceKey: this.$3 },
              ));
          }),
          (n.setStringMetadata = function (t, n) {
            var e;
            ((this.$1.string[t] = n),
              this.$2.markerAnnotate(
                this.$5,
                { string: ((e = {}), (e[t] = n), e) },
                { instanceKey: this.$3 },
              ));
          }),
          (n.setStringArrayMetadata = function (t, n) {
            var e;
            ((this.$1.string_array[t] = n),
              this.$2.markerAnnotate(
                this.$5,
                { string_array: ((e = {}), (e[t] = n), e) },
                { instanceKey: this.$3 },
              ));
          }),
          (n.setIntMetadata = function (t, n) {
            var e;
            ((this.$1.int[t] = n),
              this.$2.markerAnnotate(
                this.$5,
                { int: ((e = {}), (e[t] = n), e) },
                { instanceKey: this.$3 },
              ));
          }),
          (n.evaluateTraceCorrectness = function () {
            var e = { SUCCESS: 2, FAIL: 3, UNKNOWN: 51, STARTED: 51 };
            return (
              (this.$1.status = "SUCCESS"),
              this.$1.string.tracePolicy == null &&
                ((this.$1.errorCode = d.MISSING_TRACE_POLICY),
                (this.$1.status = "FAIL")),
              (!this.$1.bool.heroTraceStarted ||
                !this.$1.bool.heroTraceEnded) &&
                ((this.$1.errorCode = d.INCOMPLETE_HERO_TRACE),
                (this.$1.status = "FAIL")),
              (!this.$1.bool.hadMutationRoot ||
                !this.$1.bool.hadPaintedElement ||
                !this.$1.bool.hadDOMMutation) &&
                ((this.$1.errorCode = d.MISSING_DOM_MUTATIONS),
                (this.$1.status = "FAIL")),
              (this.$1.string.traceStatus === "TIMEOUT" ||
                this.$1.string.traceStatus.startsWith("CANCEL")) &&
                !this.$1.string.cancelType &&
                ((this.$1.errorCode = d.UNKNOWN_CANCEL_REASON),
                (this.$1.status = "FAIL")),
              (this.$1.string.traceStatus === "TIMEOUT" ||
                this.$1.string.traceStatus.startsWith("CANCEL")) &&
                this.$1.string.lastPendingStage == null &&
                ((this.$1.errorCode = d.MISSING_CANCEL_DETAILS),
                (this.$1.status = "FAIL")),
              this.$1.string.traceStatus === "SUCCESS" &&
                this.$1.bool.noSignalUntilTimeout &&
                (this.$1.bool.hadLateDOMMutation ||
                  this.$1.bool.hadLatePlaceholder) &&
                ((this.$1.errorCode = d.LATE_SIGNALS_AFTER_TRACE),
                (this.$1.status = "FAIL")),
              this.$1.bool.userInputDetectedAfterTrace === !0 &&
                ((this.$1.errorCode = d.USER_INPUT_DETECTED),
                (this.$1.status = "UNKNOWN")),
              this.$1.string.traceStatus === "TIMEOUT" &&
                this.$1.string.lastPendingStage === "loadingStateElement" &&
                ((this.$1.errorCode = d.TIMEOUT_BY_INCOMPLETE_LOADING_STATE),
                (this.$1.status = "FAIL")),
              e[this.$1.status]
            );
          }),
          (n.onReport = function (t) {
            this.$8.push(t);
          }),
          (n.finalizeReporting = function (n, o) {
            var t, a, i, l, s, u, c, d;
            if (
              (this.setStringMetadata("traceStatus", o),
              ((t = n.annotations.string) == null ? void 0 : t.tracePolicy) !=
                null &&
                this.setStringMetadata(
                  "tracePolicy",
                  n.annotations.string.tracePolicy,
                ),
              this.setBooleanMetadata(
                "hadLatePlaceholder",
                this.$1.bool.hadLatePlaceholder,
              ),
              this.setIntMetadata(
                "hidden",
                (a = (i = n.annotations.int) == null ? void 0 : i.hidden) !=
                  null
                  ? a
                  : 0,
              ),
              ((l = n.annotations.string) == null ? void 0 : l.loomRefId) !=
                null &&
                this.setStringMetadata(
                  "loomRefId",
                  n.annotations.string.loomRefId,
                ),
              this.setBooleanMetadata(
                "hadLateDOMMutation",
                this.$1.bool.hadLateDOMMutation,
              ),
              this.setBooleanMetadata(
                "hadLoadingStateElement",
                n.markerPoints.loadingState_start != null,
              ),
              this.setBooleanMetadata(
                "heroTraceStarted",
                n.markerPoints.HeroTrace_start != null,
              ),
              this.setBooleanMetadata(
                "heroTraceEnded",
                n.markerPoints.HeroTrace_end != null,
              ),
              n.markerPoints.HeroTrace_end != null &&
                n.markerPoints.vcWithoutImage != null)
            ) {
              var m = n.markerPoints.HeroTrace_end.timestamp,
                p = n.markerPoints.vcWithoutImage.timestamp;
              this.setIntMetadata("heroEndToVCWithoutImage", Math.round(p - m));
            }
            (n.markerPoints.HeroTrace_end != null &&
              this.$2.markerPoint(this.$5, "HeroTrace_end", {
                timestamp: n.markerPoints.HeroTrace_end.timestamp + this.$4,
                instanceKey: this.$3,
              }),
              n.markerPoints.vcWithoutImage != null &&
                this.$2.markerPoint(this.$5, "vcWithoutImage", {
                  timestamp: n.markerPoints.vcWithoutImage.timestamp + this.$4,
                  instanceKey: this.$3,
                }),
              this.setBooleanMetadata(
                "hadMutationRoot",
                ((s = n.annotations.int) == null
                  ? void 0
                  : s.mutationRootCount) != null
                  ? n.annotations.int.mutationRootCount > 0
                  : !1,
              ),
              this.setBooleanMetadata(
                "hadPaintedElement",
                ((u = n.annotations.int) == null
                  ? void 0
                  : u.paintedElementCount) != null
                  ? n.annotations.int.paintedElementCount > 0
                  : !1,
              ),
              this.setBooleanMetadata(
                "hadDOMMutation",
                ((c = n.annotations.int) == null
                  ? void 0
                  : c.mutatedElementCount) != null
                  ? n.annotations.int.mutatedElementCount > 0
                  : !1,
              ),
              ((d = n.annotations.string) == null ? void 0 : d.cancelType) !=
                null &&
                this.setStringMetadata(
                  "cancelType",
                  n.annotations.string.cancelType,
                ));
            var _ = !1;
            for (var f in n.subSpans)
              f.startsWith("Placeholder Wait:") && (_ = !0);
            this.setBooleanMetadata("hadSuspendedPlaceholder", _);
            var g = this.evaluateTraceCorrectness();
            this.$2.markerEnd(
              this.$5,
              g,
              this.$3,
              (e || (e = r("performanceNow")))() + this.$4,
            );
            var h = [].concat(this.$8);
            ((this.$8 = []),
              h.forEach(function (e) {
                e(n);
              }));
          }),
          t
        );
      })();
    function p(e, t, n, r, o, a, i, l, s) {
      return new m(e, t, n, r, o, a, i, l, s);
    }
    ((l.MeasurementErrorCode = d),
      (l.InstrumentationAnalyzer = m),
      (l.createInstrumentationAnalyzerInstance = p));
  },
  98,
);
