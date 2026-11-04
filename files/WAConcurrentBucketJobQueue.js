__d(
  "WAConcurrentBucketJobQueue",
  [
    "Promise",
    "WABase64",
    "WACryptoDependencies",
    "WACustomError",
    "WAJobOrchestratorTypes",
    "WAJobPriorityBucket",
    "WALogger",
    "WAMetrics",
    "WAPromiseDelays",
    "WAPromiseTimeout",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 30,
      m = new Map([
        [o("WAJobOrchestratorTypes").JOB_PRIORITY.HIGH, 5],
        [o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW, 1],
      ]);
    function p(e) {
      var t = new Uint8Array(e);
      return (
        o("WACryptoDependencies").getCrypto().getRandomValues(t),
        o("WABase64").encodeB64(t)
      );
    }
    var _ = (function () {
      function t() {
        ((this.$1 = !1),
          (this.$2 = 0),
          (this.$3 = 0),
          (this.$4 = 0),
          (this.$5 = new Map()),
          (this.$6 = new Map()),
          (this.$7 = new Map()),
          (this.$8 = !1),
          (this.$10 = 0));
      }
      var a = t.prototype;
      return (
        (a.init = function (t, n) {
          var e, a, i, l, s, u;
          if (this.$1)
            throw r("err")(
              "WAConcurrentBucketJobQueue has already initialized",
            );
          ((this.$4 =
            (e = t == null ? void 0 : t.bestEffortWaitTimeoutSec) != null
              ? e
              : d),
            (this.$2 = t.maxConcurrency),
            (this.$3 = t.maxConcurrency),
            (this.$9 = n),
            (this.$7 = this.$12(t == null ? void 0 : t.jobPrioritiesQuota)),
            (this.$6 = new Map(this.$7)),
            (this.$5 = new Map()),
            (this.$10 = Date.now()));
          var c = new (o("WAJobPriorityBucket").BaseJobBucket)({
              jobMaxConcurrencyMap:
                (a = t.maxConcurrencyPerJob) != null ? a : {},
            }),
            m = new (o("WAJobPriorityBucket").LowJobBucket)({
              jobMaxConcurrencyMap:
                (i = t.maxConcurrencyPerJob) != null ? i : {},
            }),
            p = new (o("WAJobPriorityBucket").LowJobBucket)({
              jobMaxConcurrencyMap:
                (l = t.maxConcurrencyPerJob) != null ? l : {},
            }),
            _ = new (o("WAJobPriorityBucket").BaseJobBucket)({
              jobMaxConcurrencyMap:
                (s = t.maxConcurrencyPerJob) != null ? s : {},
            }),
            f = new (o("WAJobPriorityBucket").BaseJobBucket)({
              jobMaxConcurrencyMap:
                (u = t.maxConcurrencyPerJob) != null ? u : {},
            });
          (this.$5.set(o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION, c),
            this.$5.set(o("WAJobOrchestratorTypes").JOB_PRIORITY.HIGH, c),
            this.$5.set(o("WAJobOrchestratorTypes").JOB_PRIORITY.OFFLINE, _),
            this.$5.set(
              o("WAJobOrchestratorTypes").JOB_PRIORITY.HISTORY_SYNC,
              f,
            ),
            this.$5.set(o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW, m),
            this.$5.set(
              o("WAJobOrchestratorTypes").JOB_PRIORITY.BEST_EFFORT,
              p,
            ),
            (this.$1 = !0));
        }),
        (a.updateConfig = function (n, r) {
          ((this.$3 += n.maxConcurrency - this.$2),
            (this.$2 = n.maxConcurrency),
            this.$5.forEach(function (e) {
              var t;
              return e.updateConfig({
                jobMaxConcurrencyMap:
                  (t = n.maxConcurrencyPerJob) != null ? t : {},
              });
            }),
            (this.$7 = this.$12(n == null ? void 0 : n.jobPrioritiesQuota)),
            this.$13(r),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[job-orchestator]: updated WAConcurrentBucketJobQueue config",
                ])),
            ));
        }),
        (a.isInitialized = function () {
          return this.$1;
        }),
        (a.clearQueue = function () {
          if (!this.$1)
            throw r("err")("WAConcurrentBucketJobQueue not initialized");
          this.$5.forEach(function (e) {
            return e.clear();
          });
        }),
        (a.clearQueueByPriority = function (t) {
          var e;
          if (!this.$1)
            throw r("err")("WAConcurrentBucketJobQueue not initialized");
          (e = this.$5.get(t)) == null || e.clearWaitingTasks();
        }),
        (a.getIntStats = function () {
          var e = this,
            t = function (n) {
              var t,
                r,
                o = e.$5.get(n);
              return (
                ((t = o == null ? void 0 : o.count()) != null ? t : 0) +
                ((r = o == null ? void 0 : o.pendingCount()) != null ? r : 0)
              );
            };
          return {
            highPriorityBucketSize: t(
              o("WAJobOrchestratorTypes").JOB_PRIORITY.HIGH,
            ),
            lowPriorityBucketSize: t(
              o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW,
            ),
            bestEffortPriorityBucketSize: t(
              o("WAJobOrchestratorTypes").JOB_PRIORITY.BEST_EFFORT,
            ),
          };
        }),
        (a.getStringStats = function () {
          var e = this,
            t = function (n) {
              var t,
                r,
                o =
                  (t = (r = e.$5.get(n)) == null ? void 0 : r.getStats()) !=
                  null
                    ? t
                    : {},
                a = Object.keys(o).reduce(
                  function (e, t) {
                    var n = e[0],
                      r = e[1],
                      a = o[t];
                    return a > n ? [a, t] : [n, r];
                  },
                  [0, null],
                ),
                i = a[1];
              return i;
            };
          return {
            highPriorityMaxJob: t(
              o("WAJobOrchestratorTypes").JOB_PRIORITY.HIGH,
            ),
            lowPriorityMaxJob: t(o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW),
            bestEffortPriorityMaxJob: t(
              o("WAJobOrchestratorTypes").JOB_PRIORITY.BEST_EFFORT,
            ),
          };
        }),
        (a.enqueue = function (t, a, i, l) {
          var e,
            s,
            u = this;
          if (!this.$1)
            return (c || (c = n("Promise"))).reject(
              r("err")("WAConcurrentBucketJobQueue not initialized"),
            );
          var d,
            m,
            _ = new (c || (c = n("Promise")))(function (e, t) {
              ((d = e), (m = t));
            }),
            f = babelHelpers.extends(
              { priority: o("WAJobOrchestratorTypes").DEFAULT_JOB_PRIORITY },
              i,
            ),
            g = this.getJobBucketByType(f.priority);
          if (!g)
            return (c || (c = n("Promise"))).reject(
              r("err")(
                "WAConcurrentBucketJobQueue no bucket for job with name " +
                  t +
                  " was found.",
              ),
            );
          (o("WAMetrics")
            .getEventLoopDelay()
            .then(function (e) {
              l != null &&
                l.isActive() &&
                (l == null ||
                  l.addPoint("measure_event_loop_delay", {
                    int: { eventLoopDelay: e },
                  }));
            }),
            l == null ||
              l.addPoint("scheduling_job", {
                string: babelHelpers.extends({}, this.getStringStats(), {
                  priority: f.priority,
                }),
                int: babelHelpers.extends({}, this.getIntStats(), {
                  maxTimeoutMs:
                    (e = i == null ? void 0 : i.maxTimeoutMs) != null ? e : 0,
                }),
              }));
          var h =
              f.priority +
              "-" +
              t +
              "-" +
              ((s = i == null ? void 0 : i.jobId) != null ? s : p(8)),
            y = g.add(
              t,
              f,
              h,
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  u.$9.logJobStarted(h);
                  var e = yield u.$14(a(), i == null ? void 0 : i.maxTimeoutMs);
                  (u.$9.logJobCompleted(h), d(e));
                } catch (e) {
                  (e instanceof o("WACustomError").TimeoutError
                    ? u.$9.logJobTimeout(h)
                    : u.$9.logJobError(h),
                    m(e));
                }
              }),
            );
          return (
            this.$9.logJobCreated({
              jobId: h,
              jobName: t,
              jobPriority: f.priority,
              pendingJobsCount: g.count(),
            }),
            i &&
              i.priority ===
                o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION &&
              this.$15(y),
            this.$16(),
            _
          );
        }),
        (a.getAvailableThreadsCount = function () {
          return this.$3;
        }),
        (a.getJobQuotaConfig = function () {
          return this.$7;
        }),
        (a.getRemainingJobCountMap = function () {
          return this.$6;
        }),
        (a.getJobBucketByType = function (t) {
          return this.$5.get(t);
        }),
        (a.getSnapshot = function (t) {
          var e = this.getJobBucketByType(t);
          return e ? e.getStats() : null;
        }),
        (a.$12 = function (t) {
          var e;
          return (
            t ? (e = new Map(t)) : (e = new Map(m)),
            e.set(o("WAJobOrchestratorTypes").JOB_PRIORITY.BEST_EFFORT, 0),
            e
          );
        }),
        (a.$17 = function (t) {
          var e;
          return (e = this.$6.get(t)) != null ? e : 0;
        }),
        (a.$18 = function () {
          this.$6 = new Map(this.$7);
        }),
        (a.$19 = function (t) {
          var e = this;
          t === void 0 && (t = !0);
          var n = 0,
            r = null,
            a = 0;
          this.$5.forEach(function (t, o) {
            ((n += t == null ? void 0 : t.count()),
              (a += e.$17(o)),
              r == null && t.count() > 0 && e.$17(o) > 0 && (r = t));
          });
          var i = r == null || a === 0;
          return (
            i && this.$18(),
            this.$20(n, i)
              ? this.getJobBucketByType(
                  o("WAJobOrchestratorTypes").JOB_PRIORITY.BEST_EFFORT,
                )
              : r == null && t
                ? this.$19(!1)
                : r
          );
        }),
        (a.$20 = function (t, n) {
          var e,
            r = this;
          function a(e, t) {
            var n = Date.now();
            return e > n ? !1 : n - e < t * 1e3;
          }
          function i(e, t) {
            var n = Math.ceil(e - Date.now()) + t * 1e3;
            return n > 0 ? n : 0;
          }
          var l = this.getJobBucketByType(
              o("WAJobOrchestratorTypes").JOB_PRIORITY.BEST_EFFORT,
            ),
            s = t - ((e = l == null ? void 0 : l.count()) != null ? e : 0),
            u = l == null ? void 0 : l.getLastJobStartedTimestamp();
          if ((l == null ? void 0 : l.count()) === 0) return !1;
          if (u == null && a(this.$10, this.$4)) {
            if (this.$11 == null) {
              var c = i(this.$10, this.$4);
              this.$11 = setTimeout(function () {
                (r.$16(), (r.$11 = null));
              }, c);
            }
            return !1;
          }
          return s > 0 && u != null && a(u, this.$4) ? !1 : n;
        }),
        (a.$21 = function (t) {
          var e = this.$22(t);
          return r("nullthrows")(this.$5.get(e));
        }),
        (a.$22 = function (t) {
          var e = t.split("-")[0],
            n = o("WAJobOrchestratorTypes").JOB_PRIORITY.cast(e);
          if (!n)
            throw r("err")(
              "ConcurrentBucketQueue cannot extract known job priority type from id: " +
                t,
            );
          return n;
        }),
        (a.$23 = function (t) {
          var e = this.$22(t);
          this.$17(e) > 0 ? this.$6.set(e, this.$17(e) - 1) : this.$6.set(e, 0);
        }),
        (a.$16 = function () {
          for (var e = this; this.$3 > 0; ) {
            var t = this.$19(),
              n = t == null ? void 0 : t.next();
            if (n == null) break;
            n.forEach(function (t) {
              (e.$23(t.jobId), e.$15(t));
            });
          }
        }),
        (a.$13 = function (t) {
          var e = this;
          (t == null ? void 0 : t.applyNow) === !0 &&
            (this.$6.forEach(function (t, n) {
              var r;
              e.$6.set(n, Math.min(t, (r = e.$7.get(n)) != null ? r : 0));
            }),
            this.$24());
        }),
        (a.$24 = function () {
          var e = this;
          this.$8 ||
            ((this.$8 = !0),
            o("WAPromiseDelays")
              .delayMs(0)
              .then(function () {
                ((e.$8 = !1), e.$16());
              })
              .catch(function (t) {
                ((e.$8 = !1),
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[job-orchestator]: failed to redispatch after config update",
                        ])),
                    )
                    .catching(r("getErrorSafe")(t))
                    .sendLogs("job-orchestrator-config-redispatch-failed"));
              }));
        }),
        (a.$14 = function (t, n) {
          return n !== void 0 ? o("WAPromiseTimeout").promiseTimeout(t, n) : t;
        }),
        (a.$15 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = this,
              n = this.$21(e.jobId);
            (this.$3--, n.markJobTaskPending(e));
            var r = e.jobId,
              a = e.jobName,
              i = e.run;
            try {
              var l;
              yield this.$14(
                i(),
                ((l = e.jobInfo) == null ? void 0 : l.maxTimeoutMs) === void 0
                  ? o("WAJobOrchestratorTypes").DEFAULT_JOB_TIMEOUT_MS
                  : void 0,
              );
            } catch (e) {
              if (e instanceof o("WACustomError").TimeoutError)
                (this.$9.logJobTimeout(r),
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[job-orchestator]: ",
                        " exceeding the timeout, release the thread.",
                      ])),
                    a,
                  ));
              else throw e;
            } finally {
              (this.$3++,
                n.markJobTaskDone(r),
                this.$3 > 0 &&
                  setTimeout(function () {
                    return t.$16();
                  }, 0));
            }
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        t
      );
    })();
    l.WAConcurrentBucketJobQueue = _;
  },
  98,
);
