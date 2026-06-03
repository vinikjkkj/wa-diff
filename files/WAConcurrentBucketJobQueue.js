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
    "WANullthrows",
    "WAPromiseTimeout",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 30,
      d = new Map([
        [o("WAJobOrchestratorTypes").JOB_PRIORITY.HIGH, 5],
        [o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW, 1],
      ]);
    function m(e) {
      var t = new Uint8Array(e);
      return (
        o("WACryptoDependencies").getCrypto().getRandomValues(t),
        o("WABase64").encodeB64(t)
      );
    }
    var p = (function () {
      function t() {
        ((this.$1 = !1),
          (this.$2 = 0),
          (this.$3 = 0),
          (this.$4 = 0),
          (this.$5 = new Map()),
          (this.$6 = new Map()),
          (this.$7 = new Map()),
          (this.$9 = 0));
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
              : c),
            (this.$2 = t.maxConcurrency),
            (this.$3 = t.maxConcurrency),
            (this.$8 = n),
            (this.$7 = this.$11(t == null ? void 0 : t.jobPrioritiesQuota)),
            (this.$6 = new Map(this.$7)),
            (this.$5 = new Map()),
            (this.$9 = Date.now()));
          var d = new (o("WAJobPriorityBucket").BaseJobBucket)({
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
          (this.$5.set(o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION, d),
            this.$5.set(o("WAJobOrchestratorTypes").JOB_PRIORITY.HIGH, d),
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
        (a.updateConfig = function (n) {
          ((this.$3 += n.maxConcurrency - this.$2),
            (this.$2 = n.maxConcurrency),
            this.$5.forEach(function (e) {
              var t;
              return e.updateConfig({
                jobMaxConcurrencyMap:
                  (t = n.maxConcurrencyPerJob) != null ? t : {},
              });
            }),
            (this.$7 = this.$11(n == null ? void 0 : n.jobPrioritiesQuota)),
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
            c = this;
          if (!this.$1)
            return (u || (u = n("Promise"))).reject(
              r("err")("WAConcurrentBucketJobQueue not initialized"),
            );
          var d,
            p,
            _ = new (u || (u = n("Promise")))(function (e, t) {
              ((d = e), (p = t));
            }),
            f = babelHelpers.extends(
              { priority: o("WAJobOrchestratorTypes").DEFAULT_JOB_PRIORITY },
              i,
            ),
            g = this.getJobBucketByType(f.priority);
          if (!g)
            return (u || (u = n("Promise"))).reject(
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
              ((s = i == null ? void 0 : i.jobId) != null ? s : m(8)),
            y = g.add(
              t,
              f,
              h,
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  c.$8.logJobStarted(h);
                  var e = yield c.$12(a(), i == null ? void 0 : i.maxTimeoutMs);
                  (c.$8.logJobCompleted(h), d(e));
                } catch (e) {
                  (e instanceof o("WACustomError").TimeoutError
                    ? c.$8.logJobTimeout(h)
                    : c.$8.logJobError(h),
                    p(e));
                }
              }),
            );
          return (
            this.$8.logJobCreated({
              jobId: h,
              jobName: t,
              jobPriority: f.priority,
              pendingJobsCount: g.count(),
            }),
            i &&
              i.priority ===
                o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION &&
              this.$13(y),
            this.$14(),
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
        (a.$11 = function (t) {
          var e;
          return (
            t ? (e = new Map(t)) : (e = new Map(d)),
            e.set(o("WAJobOrchestratorTypes").JOB_PRIORITY.BEST_EFFORT, 0),
            e
          );
        }),
        (a.$15 = function (t) {
          var e;
          return (e = this.$6.get(t)) != null ? e : 0;
        }),
        (a.$16 = function () {
          this.$6 = new Map(this.$7);
        }),
        (a.$17 = function (t) {
          var e = this;
          t === void 0 && (t = !0);
          var n = 0,
            r = null,
            a = 0;
          this.$5.forEach(function (t, o) {
            ((n += t == null ? void 0 : t.count()),
              (a += e.$15(o)),
              r == null && t.count() > 0 && e.$15(o) > 0 && (r = t));
          });
          var i = r == null || a === 0;
          return (
            i && this.$16(),
            this.$18(n, i)
              ? this.getJobBucketByType(
                  o("WAJobOrchestratorTypes").JOB_PRIORITY.BEST_EFFORT,
                )
              : r == null && t
                ? this.$17(!1)
                : r
          );
        }),
        (a.$18 = function (t, n) {
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
          if (u == null && a(this.$9, this.$4)) {
            if (this.$10 == null) {
              var c = i(this.$9, this.$4);
              this.$10 = setTimeout(function () {
                (r.$14(), (r.$10 = null));
              }, c);
            }
            return !1;
          }
          return s > 0 && u != null && a(u, this.$4) ? !1 : n;
        }),
        (a.$19 = function (t) {
          var e = this.$20(t);
          return r("WANullthrows")(this.$5.get(e));
        }),
        (a.$20 = function (t) {
          var e = t.split("-")[0],
            n = o("WAJobOrchestratorTypes").JOB_PRIORITY.cast(e);
          if (!n)
            throw r("err")(
              "ConcurrentBucketQueue cannot extract known job priority type from id: " +
                t,
            );
          return n;
        }),
        (a.$21 = function (t) {
          var e = this.$20(t);
          this.$15(e) > 0 ? this.$6.set(e, this.$15(e) - 1) : this.$6.set(e, 0);
        }),
        (a.$14 = function () {
          for (var e = this; this.$3 > 0; ) {
            var t = this.$17(),
              n = t == null ? void 0 : t.next();
            if (n == null) break;
            n.forEach(function (t) {
              (e.$21(t.jobId), e.$13(t));
            });
          }
        }),
        (a.$12 = function (t, n) {
          return n !== void 0 ? o("WAPromiseTimeout").promiseTimeout(t, n) : t;
        }),
        (a.$13 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = this,
              n = this.$19(e.jobId);
            (this.$3--, n.markJobTaskPending(e));
            var r = e.jobId,
              a = e.jobName,
              i = e.run;
            try {
              var l;
              yield this.$12(
                i(),
                ((l = e.jobInfo) == null ? void 0 : l.maxTimeoutMs) === void 0
                  ? o("WAJobOrchestratorTypes").DEFAULT_JOB_TIMEOUT_MS
                  : void 0,
              );
            } catch (e) {
              if (e instanceof o("WACustomError").TimeoutError)
                (this.$8.logJobTimeout(r),
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
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
                    return t.$14();
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
    l.WAConcurrentBucketJobQueue = p;
  },
  98,
);
