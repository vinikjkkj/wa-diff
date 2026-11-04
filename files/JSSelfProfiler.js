__d(
  "JSSelfProfiler",
  [
    "CurrentUser",
    "FBLogger",
    "JSSPConfigInit",
    "JSSPSetting",
    "JSSelfProfilerConfig.experimental",
    "JSSelfProfilerProbe",
    "JSSelfProfilerUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "justknobx",
    "requireDeferred",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("LogJsspStatsFalcoEvent").__setRef(
        "JSSelfProfiler",
      ),
      s = r("justknobx")._("4881"),
      u = (function () {
        function t(e, n, o) {
          ((this.$1 = e),
            (this.$8 = o != null ? o : r("uuidv4")()),
            (this.$5 = n),
            (this.$4 = !1),
            (this.$9 = []),
            t.defaultTransformerRegistered === !1 &&
              (r("JSSPConfigInit").run(),
              (t.defaultTransformerRegistered = !0)));
        }
        ((t.registerDataCollector = function (n, r, o) {
          o === void 0 && (o = !1);
          var e = r != null ? r : n.constructor.name;
          (!t.traceDataCollectors.has(e) || o) &&
            t.traceDataCollectors.set(e, n);
        }),
          (t.registerTraceTransformer = function (n, r, o) {
            o === void 0 && (o = !1);
            var e = r != null ? r : n.constructor.name;
            (!t.traceTransformers.has(e) || o) && t.traceTransformers.set(e, n);
          }),
          (t.shouldProfile = function (t) {
            if (!s) return !1;
            if (
              r("JSSelfProfilerConfig.experimental")
                .ENABLE_FELAB_INTERACTION_FILTERING &&
              t != null &&
              window.__felab_context
            ) {
              var e = window.__felab_context,
                n = e.qplMarkerIds || [];
              return Array.isArray(e.qplMarkerIds) && n.includes(t);
            }
            return !0;
          }),
          (t.startRecording = function (n, a, i) {
            var e;
            if ((i === void 0 && (i = null), !t.isSupported())) {
              var l = new Error("JS Self Profiling is not supported");
              throw (l.stack, l);
            }
            if (
              !t.shouldProfile(
                (e = i) == null || (e = e.triggerInfo) == null
                  ? void 0
                  : e.qpl_marker_id,
              ) ||
              t.instanceCount > o("JSSPSetting").maxConcurrentProfilerInstance
            )
              return null;
            var s = performance.now(),
              u = r("uuidv4")();
            return (
              this.traceDataCollectors.forEach(function (e) {
                var t;
                return e.onProfilerStarts(
                  u,
                  (t = i) == null ? void 0 : t.annotations,
                );
              }),
              this.createProfiler(s, n, a, u, i)
            );
          }),
          (t.createProfiler = function (n, o, a, i, l) {
            if (
              (l === void 0 && (l = null),
              !r("JSSelfProfilerProbe").isJSSPNative)
            )
              return null;
            try {
              var e,
                s = new Profiler({ sampleInterval: o, maxBufferSize: a }),
                u = performance.now() - n,
                c = new t(s, o, i);
              return (
                c.setStartUpTime(u),
                c.setTriggerInfo((e = l) == null ? void 0 : e.triggerInfo),
                ++t.instanceCount,
                c
              );
            } catch (e) {
              var d = r("getErrorSafe")(e);
              r("FBLogger")("JSSelfProfiler")
                .catching(d)
                .warn("Could not initialize profiler");
            }
            return null;
          }));
        var a = t.prototype;
        return (
          (a.abort = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this;
              if (!this.$4) {
                var n = performance.now();
                (yield this.$1.stop(),
                  (this.$3 = performance.now() - n),
                  (this.$6 = null),
                  (this.$4 = !0),
                  --t.instanceCount);
                var r = function* (n) {
                  yield yield o("JSSelfProfilerUtils").nextEventLoop(
                    function () {
                      return n.onProfilerAborts(e.$8, e);
                    },
                  );
                };
                for (var a of t.traceDataCollectors.values()) yield* r(a);
                var i = function* (n) {
                  yield yield o("JSSelfProfilerUtils").nextEventLoop(
                    function () {
                      return n.onProfilerAborts(e.$8);
                    },
                  );
                };
                for (var l of t.traceTransformers.values()) yield* i(l);
              }
            });
            function r() {
              return e.apply(this, arguments);
            }
            return r;
          })()),
          (a.stopRecording = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (this.$4) {
                var e = new Error(
                  "The profiling has stopped before stopRecording() is called",
                );
                throw (e.stack, e);
              }
              --t.instanceCount;
              var n = performance.now(),
                r = yield this.postProcessTrace(yield this.$1.stop());
              this.$3 = performance.now() - n;
              var o = {
                trace: r,
                stats: {
                  timeOrigin: performance.timeOrigin,
                  requestedSampleInterval: this.$5,
                  actualSampleInterval: this.$1.sampleInterval,
                },
              };
              return ((this.$6 = this.getTraceStats(r)), (this.$4 = !0), o);
            });
            function r() {
              return e.apply(this, arguments);
            }
            return r;
          })()),
          (a.postProcessTrace = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var n,
                  r = this,
                  a = e;
                if (
                  ((n = this.$7) == null ? void 0 : n.interaction_id) != null
                ) {
                  var i;
                  a.metadata = {
                    interactionId:
                      (i = this.$7) == null ? void 0 : i.interaction_id,
                  };
                }
                var l = {},
                  s = function* (t) {
                    l = yield yield o("JSSelfProfilerUtils").nextEventLoop(
                      function () {
                        return t.onProfilerEnds(r.$8, a, l, r);
                      },
                    );
                  };
                for (var u of t.traceDataCollectors.values()) yield* s(u);
                var c = function* (t) {
                  a = yield yield o("JSSelfProfilerUtils").nextEventLoop(
                    function () {
                      return t.transform(a, r.$8, l);
                    },
                  );
                };
                for (var d of t.traceTransformers.values()) yield* c(d);
                return a;
              },
            );
            function r(t) {
              return e.apply(this, arguments);
            }
            return r;
          })()),
          (a.setStartUpTime = function (t) {
            this.$2 = t;
          }),
          (a.setTriggerInfo = function (t) {
            this.$7 = t;
          }),
          (a.setAnnotations = function (t) {
            this.$9 = Array.from(new Set([].concat(this.$9, t)));
          }),
          (a.getAnnotations = function () {
            return [].concat(this.$9);
          }),
          (a.getProfilerID = function () {
            return this.$8;
          }),
          (a.getTraceStats = function (t) {
            var e,
              n,
              r,
              a = JSON.stringify(t).length,
              i = o("JSSelfProfilerUtils").getSampleIdToDepthsMap(t);
            return {
              trace_size: a,
              sample_size: (e = t.samples.length) != null ? e : 0,
              stack_size: (n = t.stacks.length) != null ? n : 0,
              frame_size: (r = t.frames.length) != null ? r : 0,
              max_stack_depth: Array.from(i.values()).reduce(function (e, t) {
                return Math.max(e, t);
              }),
            };
          }),
          (a.logStats = function () {
            var t = this;
            if (this.$2 == null) {
              r("FBLogger")("JSSelfProfiler").warn(
                "JSSP start up time is null/undefined",
              );
              return;
            }
            if (this.$3 == null) {
              r("FBLogger")("JSSelfProfiler").warn(
                "JSSP shut down time is null/undefined",
              );
              return;
            }
            var n = r("CurrentUser").getAppID();
            e.onReady(function (e) {
              e.log(function () {
                var e, r, o;
                return babelHelpers.extends(
                  {
                    app_id: n,
                    boot_up_time: t.$2,
                    shut_down_time: t.$3,
                    trace_policy: (e = t.$7) == null ? void 0 : e.trace_policy,
                    interaction_id:
                      (r = t.$7) == null ? void 0 : r.interaction_id,
                    qpl_marker_id:
                      (o = t.$7) == null ? void 0 : o.qpl_marker_id,
                  },
                  t.$6,
                );
              });
            });
          }),
          (t.isSupported = function () {
            return (
              r("JSSelfProfilerProbe").isJSSPAvailable &&
              r("JSSelfProfilerProbe").isLongtaskAvailable &&
              performance.timeOrigin != null
            );
          }),
          (t.setIsHeaderSent = function () {
            t.isHeaderSent = !0;
          }),
          t
        );
      })();
    ((u.isHeaderSent = !1),
      (u.defaultTransformerRegistered = !1),
      (u.instanceCount = 0),
      (u.traceDataCollectors = new Map()),
      (u.traceTransformers = new Map()),
      (l.default = u));
  },
  98,
);
