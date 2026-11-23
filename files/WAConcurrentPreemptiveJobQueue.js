__d(
  "WAConcurrentPreemptiveJobQueue",
  [
    "WACustomError",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAPromiseTimeout",
    "WARandomHex",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = (function () {
        function t() {
          ((this.$1 = !1),
            (this.$2 = 0),
            (this.$3 = 0),
            (this.$4 = {}),
            (this.$5 = []),
            (this.$6 = []));
        }
        var n = t.prototype;
        return (
          (n.init = function (t, n) {
            var e;
            if (this.$1)
              throw r("err")(
                "ConcurrentPreemptiveJobQueue has already initialized",
              );
            ((this.$2 = t.maxConcurrency),
              (this.$3 = t.maxConcurrency),
              (this.$4 = (e = t.maxConcurrencyPerJob) != null ? e : {}),
              (this.$7 = n),
              (this.$1 = !0));
          }),
          (n.updateConfig = function (n) {
            var t;
            ((this.$3 += n.maxConcurrency - this.$2),
              (this.$2 = n.maxConcurrency),
              (this.$4 = (t = n.maxConcurrencyPerJob) != null ? t : {}),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[job-orchestator]: updated ConcurrentPreemptiveJobQueue config",
                  ])),
              ));
          }),
          (n.isInitialized = function () {
            return this.$1;
          }),
          (n.clearQueueByPriority = function (t) {
            if (!this.$1)
              throw r("err")("ConcurrentPreemptiveJobQueue not initialized");
            this.$5 = this.$5.filter(function (e) {
              var n;
              return ((n = e.jobInfo) == null ? void 0 : n.priority) !== t;
            });
          }),
          (n.clearQueue = function () {
            if (!this.$1)
              throw r("err")("ConcurrentPreemptiveJobQueue not initialized");
            ((this.$5 = []), (this.$6 = []));
          }),
          (n.enqueue = function (t, n, a) {
            var e,
              i = this;
            if (!this.$1)
              return Promise.reject(
                r("err")("ConcurrentPreemptiveJobQueue not initialized"),
              );
            var l,
              u,
              c = new Promise(function (e, t) {
                ((l = e), (u = t));
              }),
              d = babelHelpers.extends(
                { priority: o("WAJobOrchestratorTypes").DEFAULT_JOB_PRIORITY },
                a,
              ),
              m =
                (e = a == null ? void 0 : a.jobId) != null
                  ? e
                  : o("WARandomHex").randomHex(8).substr(0, 64),
              p = this.$8(t, d, m, async function () {
                try {
                  i.$7.logJobStarted(m);
                  var e = await i.$9(n(), a == null ? void 0 : a.maxTimeoutMs);
                  (i.$7.logJobCompleted(m), l(e));
                } catch (e) {
                  (e instanceof o("WACustomError").TimeoutError
                    ? i.$7.logJobTimeout(m)
                    : i.$7.logJobError(m),
                    u(e));
                }
              });
            return (
              a &&
                a.priority ===
                  o("WAJobOrchestratorTypes").JobPriority.UI_ACTION &&
                this.$10(p).catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[job-orchestator]: failed to run job task ",
                          ": ",
                          "",
                        ])),
                      t,
                      e,
                    )
                    .sendLogs("JobOrchestrator::enqueue");
                }),
              this.$11(),
              c
            );
          }),
          (n.getAvailableThreadsCount = function () {
            return this.$3;
          }),
          (n.getJobMaxConcurrency = function () {
            return this.$4;
          }),
          (n.getSnapshot = function (t) {}),
          (n.$11 = function () {
            for (; this.$3 > 0; ) {
              var e = this.$12();
              if (e == null) break;
              this.$10(e);
            }
          }),
          (n.$9 = function (t, n) {
            return n !== void 0
              ? o("WAPromiseTimeout").promiseTimeout(t, n)
              : t;
          }),
          (n.$10 = async function (t) {
            var e = this;
            (this.$3--, this.$13(t));
            var n = t.jobId,
              r = t.jobName,
              a = t.run;
            try {
              var i;
              await this.$9(
                a(),
                ((i = t.jobInfo) == null ? void 0 : i.maxTimeoutMs) === void 0
                  ? o("WAJobOrchestratorTypes").DEFAULT_JOB_TIMEOUT_MS
                  : void 0,
              );
            } catch (e) {
              if (e instanceof o("WACustomError").TimeoutError)
                (this.$7.logJobTimeout(n),
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[job-orchestator]: ",
                        " exceeding the timeout, release the thread.",
                      ])),
                    r,
                  ));
              else throw e;
            } finally {
              (this.$3++,
                this.$14(n),
                setTimeout(function () {
                  return e.$11();
                }, 0));
            }
          }),
          (n.$8 = function (t, n, r, o) {
            var e = { jobId: r, jobInfo: n, jobName: t, run: o };
            return (
              this.$7.logJobCreated({
                jobId: r,
                jobName: t,
                jobPriority: n.priority,
                pendingJobsCount: this.$5.length,
              }),
              this.$5.push(e),
              e
            );
          }),
          (n.$13 = function (t) {
            (this.$6.includes(function (e) {
              return e.jobId === t.jobId;
            }) &&
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "Assertion failed::markJobTaskPending found jobId: ",
                      " in pending tasks",
                    ])),
                  t.jobId,
                )
                .sendLogs("JobOrchestrator::markJobTaskPending"),
              this.$6.push(t),
              (this.$5 = this.$5.filter(function (e) {
                return e.jobId !== t.jobId;
              })));
          }),
          (n.$14 = function (t) {
            ((this.$6 = this.$6.filter(function (e) {
              return e.jobId !== t;
            })),
              this.$5.includes(function (e) {
                return e.jobId === t;
              }) &&
                o("WALogger")
                  .ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "Assertion failed::markJobTaskDone found jobId: ",
                        " in scheduled tasks",
                      ])),
                    t,
                  )
                  .sendLogs("JobOrchestrator::markJobTaskDone"));
          }),
          (n.$12 = function () {
            var e = this;
            if (this.$5.length === 0) return null;
            var t = this.$6.reduce(function (e, t) {
                var n,
                  r = (n = e.get(t.jobName)) != null ? n : 0;
                return (e.set(t.jobName, r + 1), e);
              }, new Map()),
              n = this.$5.filter(function (n) {
                var r, o;
                return (
                  ((r = t.get(n.jobName)) != null ? r : 0) <
                  ((o = e.$4[n.jobName]) != null ? o : 1)
                );
              });
            return n[0];
          }),
          t
        );
      })();
    l.WAConcurrentPreemptiveJobQueue = m;
  },
  98,
);
