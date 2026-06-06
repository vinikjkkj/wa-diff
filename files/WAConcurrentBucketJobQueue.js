__d(
  "WAConcurrentBucketJobQueue",
  [
    "WABase64",
    "WACryptoDependencies",
    "WACustomError",
    "WAJobOrchestratorTypes",
    "WAJobPriorityBucket",
    "WALogger",
    "WAMetrics",
    "WANullthrows",
    "WAPromiseTimeout",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 30,
      c = new Map([
        [o("WAJobOrchestratorTypes").JOB_PRIORITY.HIGH, 5],
        [o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW, 1],
      ]);
    function d(e) {
      var t = new Uint8Array(e);
      return (
        o("WACryptoDependencies").getCrypto().getRandomValues(t),
        o("WABase64").encodeB64(t)
      );
    }
    var m = (function () {
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
      var n = t.prototype;
      return (
        (n.init = function (t, n) {
          var e, a, i, l, s, c;
          if (this.$1)
            throw r("err")(
              "WAConcurrentBucketJobQueue has already initialized",
            );
          ((this.$4 =
            (e = t == null ? void 0 : t.bestEffortWaitTimeoutSec) != null
              ? e
              : u),
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
                (c = t.maxConcurrencyPerJob) != null ? c : {},
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
        (n.updateConfig = function (n) {
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
        (n.isInitialized = function () {
          return this.$1;
        }),
        (n.clearQueue = function () {
          if (!this.$1)
            throw r("err")("WAConcurrentBucketJobQueue not initialized");
          this.$5.forEach(function (e) {
            return e.clear();
          });
        }),
        (n.clearQueueByPriority = function (t) {
          var e;
          if (!this.$1)
            throw r("err")("WAConcurrentBucketJobQueue not initialized");
          (e = this.$5.get(t)) == null || e.clearWaitingTasks();
        }),
        (n.getIntStats = function () {
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
        (n.getStringStats = function () {
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
        (n.enqueue = function (t, n, a, i) {
          var e,
            l,
            s = this;
          if (!this.$1)
            return Promise.reject(
              r("err")("WAConcurrentBucketJobQueue not initialized"),
            );
          var u,
            c,
            m = new Promise(function (e, t) {
              ((u = e), (c = t));
            }),
            p = babelHelpers.extends(
              { priority: o("WAJobOrchestratorTypes").DEFAULT_JOB_PRIORITY },
              a,
            ),
            _ = this.getJobBucketByType(p.priority);
          if (!_)
            return Promise.reject(
              r("err")(
                "WAConcurrentBucketJobQueue no bucket for job with name " +
                  t +
                  " was found.",
              ),
            );
          (o("WAMetrics")
            .getEventLoopDelay()
            .then(function (e) {
              i != null &&
                i.isActive() &&
                (i == null ||
                  i.addPoint("measure_event_loop_delay", {
                    int: { eventLoopDelay: e },
                  }));
            }),
            i == null ||
              i.addPoint("scheduling_job", {
                string: babelHelpers.extends({}, this.getStringStats(), {
                  priority: p.priority,
                }),
                int: babelHelpers.extends({}, this.getIntStats(), {
                  maxTimeoutMs:
                    (e = a == null ? void 0 : a.maxTimeoutMs) != null ? e : 0,
                }),
              }));
          var f =
              p.priority +
              "-" +
              t +
              "-" +
              ((l = a == null ? void 0 : a.jobId) != null ? l : d(8)),
            g = _.add(t, p, f, async function () {
              try {
                s.$8.logJobStarted(f);
                var e = await s.$12(n(), a == null ? void 0 : a.maxTimeoutMs);
                (s.$8.logJobCompleted(f), u(e));
              } catch (e) {
                (e instanceof o("WACustomError").TimeoutError
                  ? s.$8.logJobTimeout(f)
                  : s.$8.logJobError(f),
                  c(e));
              }
            });
          return (
            this.$8.logJobCreated({
              jobId: f,
              jobName: t,
              jobPriority: p.priority,
              pendingJobsCount: _.count(),
            }),
            a &&
              a.priority ===
                o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION &&
              this.$13(g),
            this.$14(),
            m
          );
        }),
        (n.getAvailableThreadsCount = function () {
          return this.$3;
        }),
        (n.getJobQuotaConfig = function () {
          return this.$7;
        }),
        (n.getRemainingJobCountMap = function () {
          return this.$6;
        }),
        (n.getJobBucketByType = function (t) {
          return this.$5.get(t);
        }),
        (n.getSnapshot = function (t) {
          var e = this.getJobBucketByType(t);
          return e ? e.getStats() : null;
        }),
        (n.$11 = function (t) {
          var e;
          return (
            t ? (e = new Map(t)) : (e = new Map(c)),
            e.set(o("WAJobOrchestratorTypes").JOB_PRIORITY.BEST_EFFORT, 0),
            e
          );
        }),
        (n.$15 = function (t) {
          var e;
          return (e = this.$6.get(t)) != null ? e : 0;
        }),
        (n.$16 = function () {
          this.$6 = new Map(this.$7);
        }),
        (n.$17 = function (t) {
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
        (n.$18 = function (t, n) {
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
        (n.$19 = function (t) {
          var e = this.$20(t);
          return r("WANullthrows")(this.$5.get(e));
        }),
        (n.$20 = function (t) {
          var e = t.split("-")[0],
            n = o("WAJobOrchestratorTypes").JOB_PRIORITY.cast(e);
          if (!n)
            throw r("err")(
              "ConcurrentBucketQueue cannot extract known job priority type from id: " +
                t,
            );
          return n;
        }),
        (n.$21 = function (t) {
          var e = this.$20(t);
          this.$15(e) > 0 ? this.$6.set(e, this.$15(e) - 1) : this.$6.set(e, 0);
        }),
        (n.$14 = function () {
          for (var e = this; this.$3 > 0; ) {
            var t = this.$17(),
              n = t == null ? void 0 : t.next();
            if (n == null) break;
            n.forEach(function (t) {
              (e.$21(t.jobId), e.$13(t));
            });
          }
        }),
        (n.$12 = function (t, n) {
          return n !== void 0 ? o("WAPromiseTimeout").promiseTimeout(t, n) : t;
        }),
        (n.$13 = async function (t) {
          var e = this,
            n = this.$19(t.jobId);
          (this.$3--, n.markJobTaskPending(t));
          var r = t.jobId,
            a = t.jobName,
            i = t.run;
          try {
            var l;
            await this.$12(
              i(),
              ((l = t.jobInfo) == null ? void 0 : l.maxTimeoutMs) === void 0
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
                  return e.$14();
                }, 0));
          }
        }),
        t
      );
    })();
    l.WAConcurrentBucketJobQueue = m;
  },
  98,
);
