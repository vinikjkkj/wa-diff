__d(
  "WAPersistedJobManagerV2",
  [
    "QPLFlow",
    "WAJobOrchestratorTypes",
    "WAJobRequirement",
    "WALogger",
    "WAOrchestrator",
    "WAPersistedJobManager",
    "WAPromiseBackoffs",
    "WAResolvable",
    "WATimeUtils",
    "WaJobInMemoryAccessors",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D = 1;
    function x(e) {
      var t = e.code,
        n = e.annotations,
        r = n === void 0 ? {} : n,
        o = e.eventFlow,
        a = o === void 0 ? $(r) : o;
      return t(a)
        .then(function (e) {
          return (a.endSuccess(), e);
        })
        .catch(function (e) {
          throw (a.endFail("error", { string: { error: "" + String(e) } }), e);
        });
    }
    function $(e) {
      return (e === void 0 && (e = {}), o("QPLFlow").startNoopQPLFlow());
    }
    var P = (function () {
      function t(e) {
        var t = this,
          n = e.isRestartAfterCrash,
          r = e.readyPromise;
        ((this.getOrchestratorDelegate =
          o("WAOrchestrator").getInstanceDelegate()),
          (this.activeJobs = new Map()),
          (this.implementationLoaders = new Map()),
          (this.implementations = new Map()),
          (this.stepBlockers = new WeakMap()),
          (this.isRestartAfterCrash = n || !1),
          (this.listeners = e.listeners),
          (this.deprecatedJobs = e.deprecatedJobs),
          (this.inMemoryAccessors = o(
            "WaJobInMemoryAccessors",
          ).getJobInMemoryAccessors()),
          (this.offlineQueueMode = !0),
          e.offlineQueueCompletePromise != null
            ? e.offlineQueueCompletePromise.finally(function () {
                t.offlineQueueMode = !1;
              })
            : (this.offlineQueueMode = !1),
          (this.initialJobsPromise = r != null ? r : Promise.resolve()));
      }
      var n = t.prototype;
      return (
        (n.$1 = async function (n, a) {
          var t;
          a === void 0 && (a = {});
          var i = this.$2(n);
          if (
            ((t = a.eventFlow) == null ||
              t.addPoint("start_load_and_run", {
                bool: { skipped: i.alreadyActive },
              }),
            i.alreadyActive === !0)
          )
            return i.deferred;
          var l = await this.inMemoryAccessors.readPersistedJob(n);
          if (l == null)
            throw (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Persisted job missing for given ID",
                    ])),
                )
                .sendLogs("missing-job-entry"),
              r("err")("Persisted job missing for given ID " + n)
            );
          return (i.deferred.resolve(this.$3(l, a)), i.deferred.promise);
        }),
        (n.$3 = function (t, n) {
          var e, r;
          return (
            n === void 0 && (n = {}),
            (e = n.eventFlow) == null ||
              e.addPoint("enqueueing_job", { string: { name: t.type } }),
            this.getOrchestratorDelegate(
              ((r = t.scheduleConfig) == null ? void 0 : r.priority) ===
                o("WAJobOrchestratorTypes").JobPriority.SKIP,
              n.eventFlow,
            ).enqueue(t.type, this.$4(t, n), t.scheduleConfig, n.eventFlow)
          );
        }),
        (n.$5 = function (t, n) {
          return (
            n === void 0 && (n = {}),
            this.inMemoryAccessors.maybeCreateJob(t).then(function (e) {
              var t,
                r = e.id;
              return (
                (t = n.eventFlow) == null ||
                  t.addPoint("job_persisted", {
                    int: { jobId: r },
                    bool: { nonPersisted: !0 },
                  }),
                r
              );
            })
          );
        }),
        (n.$2 = function (t) {
          var e = this.activeJobs.get(t);
          if (e != null) return { alreadyActive: !0, deferred: e };
          var n = new (o("WAResolvable").Resolvable)();
          return (
            this.activeJobs.set(t, n.promise),
            { alreadyActive: !1, deferred: n }
          );
        }),
        (n.$4 = function (t, n) {
          var e = this;
          return function () {
            return e.$6(t, n);
          };
        }),
        (n.$7 = function (t) {
          var e = this.implementationLoaders,
            n = this.implementations,
            r = n.get(t);
          if (r) return r;
          var o = e.get(t);
          if (!o) return null;
          var a = o();
          return (n.set(t, a), a);
        }),
        (n.$8 = function (t, n) {
          if (n == null || n.length === 0) return Promise.resolve();
          var e = this.stepBlockers,
            r = e.get(n);
          return (
            r == null &&
              ((r = o("WAJobRequirement").joinRequirements(
                n.map(function (e) {
                  return e();
                }),
                w,
              )),
              e.set(n, r)),
            r(t)
          );
        }),
        (n.$9 = function (t, n, r, a) {
          var e,
            i = this;
          a === void 0 && (a = {});
          var l = t.step;
          (e = a.eventFlow) == null || e.addPoint("start_step");
          var c = n.findIndex(function (e) {
              return e.stepName === l;
            }),
            d = n[c].info(
              t.current,
              t.original,
              A(t, this.isRestartAfterCrash),
            ),
            m = d.code,
            p = d.requirements,
            _ = this.$8(t, p);
          return (
            r && (_ = _.then(r)),
            _.then(function () {
              var e;
              return (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      ": running step",
                    ])),
                  M(t),
                ),
                (e = a.eventFlow) == null || e.addPoint("run_step"),
                m(
                  t.current,
                  t.original,
                  A(t, i.isRestartAfterCrash, a.eventFlow),
                )
              );
            }).then(function (e) {
              var r;
              if (
                ((r = a.eventFlow) == null || r.addPoint("step_is_complete"),
                e instanceof o("WAPersistedJobManager").InterruptJob)
              )
                return (
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        ": InterruptJob",
                      ])),
                    M(t),
                  ),
                  e.result
                );
              var l = c + 1;
              if (l >= n.length) return e;
              var s = n[l];
              return (
                (t.step = s.stepName),
                (t.current = e),
                (t.stepHardStartCountAfterTimeout = 0),
                (t.stepFirstStartTime = o("WATimeUtils").unixTime()),
                (t.stepUnexpectedErrorCount = 0),
                (t.waitUntil = null),
                (t.backedOffCount = 0),
                i.inMemoryAccessors.updatePersistedJob(t).then(function () {
                  return i.$9(t, n, void 0, a);
                })
              );
            })
          );
        }),
        (n.$6 = async function (t, n) {
          var e,
            r,
            a = this;
          n === void 0 && (n = {});
          var i = this.activeJobs,
            l = this.deprecatedJobs,
            s = this.inMemoryAccessors,
            u = this.listeners,
            k = u.onJobFinished,
            I = u.onJobStarted;
          (e = n.eventFlow) == null || e.addPoint("run_job");
          var T = await this.$7(t.type),
            x = l[t.type];
          if (!T) {
            if (x) {
              if (x === "NOOP")
                return (
                  o("WALogger").WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "No implementation for deprecated ",
                        ", job deleted",
                      ])),
                    t.type,
                  ),
                  await s.deletePersistedJob(t.jobId),
                  null
                );
            } else
              return (
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "No implementation for ",
                        ". Maybe it should have been put to the deprecated list?",
                      ])),
                    t.type,
                  )
                  .sendLogs("missing-job-implementation"),
                await s.deletePersistedJob(t.jobId),
                null
              );
            T = await x();
          }
          var $ = T;
          x &&
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "Running deprecated job ",
                  "",
                ])),
              t.type,
            );
          var P =
            (r = t.stepFirstStartTime) != null
              ? r
              : o("WATimeUtils").unixTime();
          if (
            ((t.stepFirstStartTime = P),
            (t.stepUnexpectedErrorCount = t.stepUnexpectedErrorCount || 0),
            (t.backedOffCount = t.backedOffCount || 0),
            t.step === o("WAPersistedJobManager").FINISHED_JOB)
          ) {
            var w = t.waitUntil,
              F = o("WATimeUtils").secondsUntil(P);
            return (
              w != null &&
                o("WATimeUtils").isInFuture(w) &&
                F > 0 &&
                (o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      ": skew detected, adjusting accordingly",
                    ])),
                  N(t),
                ),
                (w = o("WATimeUtils").castToUnixTime(w - F)),
                o("WATimeUtils").isInFuture(w) &&
                  ((t.stepFirstStartTime = o("WATimeUtils").castToUnixTime(
                    P - F,
                  )),
                  (t.waitUntil = w),
                  await s.updatePersistedJob(t))),
              (w == null || !o("WATimeUtils").isInFuture(w)) &&
                (o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      ": removing completed, expired job from db",
                    ])),
                  N(t),
                ),
                await s.deletePersistedJob(t.jobId)),
              i.delete(t.jobId),
              t.current
            );
          }
          var O =
            t.step !== o("WAPersistedJobManager").UNSTARTED_JOB
              ? T.find(function (e) {
                  return e.stepName === t.step;
                })
              : T[0];
          if (!O)
            return (
              o("WALogger")
                .ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "No implementation for ",
                      ".",
                      "",
                    ])),
                  t.type,
                  t.step,
                )
                .sendLogs("missing-job-step"),
              await s.deletePersistedJob(t.jobId),
              null
            );
          t.step = O.stepName;
          var B = function () {
              var e = t.waitUntil,
                r = Promise.resolve();
              if (e != null) {
                var i = o("WATimeUtils").futureUnixTime(
                  o("WATimeUtils").DAY_SECONDS,
                );
                e > i
                  ? (o("WALogger").LOG(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          ": trim wait from ",
                          " to ",
                          "",
                        ])),
                      M(t),
                      e,
                      i,
                    ),
                    (t.waitUntil = i),
                    (r = s.updatePersistedJob(t).then(function () {
                      return o("WATimeUtils").delayUntil(i);
                    })))
                  : (o("WALogger").LOG(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          ": delaying until ",
                          "",
                        ])),
                      M(t),
                      e,
                    ),
                    (r = o("WATimeUtils").delayUntil(e)));
              }
              return r.then(function () {
                var e = function () {
                  return (
                    (t.waitUntil = null),
                    o("WATimeUtils").happenedWithin(
                      P,
                      o("WATimeUtils").DAY_SECONDS,
                    ) || t.stepHardStartCountAfterTimeout++,
                    s.updatePersistedJob(t)
                  );
                };
                return a.$9(t, $, e, n).catch(function (e) {
                  if (e instanceof o("WAPersistedJobManager").RetryOnBackoff) {
                    var r;
                    (o("WALogger").LOG(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          ": RetryOnBackoff",
                        ])),
                      M(t),
                    ),
                      (r = n.eventFlow) == null ||
                        r.addPoint("retry_on_backoff"));
                    var a = o("WAPromiseBackoffs").getDelay(
                      ++t.backedOffCount,
                      e.backoffOptions,
                    );
                    return (
                      (t.waitUntil = o("WATimeUtils").futureUnixTime(
                        Math.ceil(a / 1e3),
                      )),
                      t.stepHardStartCountAfterTimeout > 0 &&
                        --t.stepHardStartCountAfterTimeout,
                      s.updatePersistedJob(t).then(B)
                    );
                  } else {
                    if (
                      !(
                        e instanceof
                        o("WAPersistedJobManager").NonRetryableError
                      ) &&
                      t.stepUnexpectedErrorCount < D
                    ) {
                      var i;
                      return (
                        (i = n.eventFlow) == null ||
                          i.addPoint("retry_on_unexpected_error"),
                        o("WALogger").WARN(
                          C ||
                            (C = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              ": Unhandled exception. Tried ",
                              " times",
                            ])),
                          M(t),
                          t.stepUnexpectedErrorCount,
                        ),
                        o("WALogger").WARN(
                          b ||
                            (b = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              ": Unhandled exception: ",
                              "",
                            ])),
                          M(t),
                          e,
                        ),
                        t.stepUnexpectedErrorCount++,
                        s.updatePersistedJob(t).then(B)
                      );
                    }
                    throw e;
                  }
                });
              });
            },
            W = B(),
            q = W.then(
              async function (e) {
                o("WALogger").LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      ": finished job",
                    ])),
                  M(t),
                );
                var n = null;
                try {
                  n = k(t.jobId, t.type, t.original, e);
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
                          "onJobFinished for ",
                          " threw exception ",
                          "",
                        ])),
                      t.type,
                      e,
                    )
                    .sendLogs("onJobFinished-threw");
                }
                n != null && n > 0
                  ? ((t.waitUntil = o("WATimeUtils").futureUnixTime(
                      Math.ceil(n / 1e3),
                    )),
                    (t.step = o("WAPersistedJobManager").FINISHED_JOB),
                    (t.current = e),
                    (t.stepFirstStartTime = o("WATimeUtils").unixTime()),
                    await s.updatePersistedJob(t))
                  : (await s.deletePersistedJob(t.jobId), i.delete(t.jobId));
              },
              async function (e) {
                o("WALogger")
                  .ERROR(
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " failed with error ",
                        "",
                      ])),
                    t.type,
                    e,
                  )
                  .sendLogs("job-threw-exception-" + t.type);
                var n = $.find(function (e) {
                  return e.stepName === t.step;
                });
                if (!n)
                  o("WALogger").ERROR(
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        ": ",
                        " step not found",
                      ])),
                    t.type,
                    t.step,
                  );
                else {
                  var r = n.info(
                    t.current,
                    t.original,
                    A(t, a.isRestartAfterCrash),
                  );
                  r.stopRetryIf != null &&
                    (await r.stopRetryIf.onStopRetry(
                      t.current,
                      t.original,
                      A(t, a.isRestartAfterCrash),
                    ));
                }
                (await s.deletePersistedJob(t.jobId), i.delete(t.jobId));
              },
            );
          try {
            I(t.jobId, t.type, t.original);
          } catch (e) {
            o("WALogger")
              .ERROR(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "onJobStarted for ",
                    " threw exception ",
                    "",
                  ])),
                t.type,
                e,
              )
              .sendLogs("onJobStarted-threw");
          }
          return q.then(function () {
            return W;
          });
        }),
        (n.addPersistedJobImplementation = function (t, n) {
          var e = this.deprecatedJobs,
            r = this.implementationLoaders;
          if (r.has(t)) {
            o("WALogger")
              .ERROR(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "addPersistedJobImplementation called twice for ",
                    "",
                  ])),
                t,
              )
              .sendLogs("repeat-job-loader");
            return;
          }
          (e && e[t], r.set(t, n));
        }),
        (n.fireAndForget = function (t) {
          var e = this;
          x({
            code: async function (r) {
              var n = { eventFlow: r };
              return (
                await e.initialJobsPromise,
                r.addPoint("initial_jobs_promise_fulfilled"),
                e.$5(t, n).then(function (t) {
                  return e.$1(t, n);
                })
              );
            },
            annotations: {
              string: { name: t.type },
              bool: { offlineQueueMode: this.offlineQueueMode },
            },
          });
        }),
        (n.waitUntilCompleted = function (t) {
          var e = this;
          return x({
            code: async function (r) {
              var n = { eventFlow: r };
              return (
                await e.initialJobsPromise,
                r.addPoint("initial_jobs_promise_fulfilled"),
                e.$5(t, n).then(function (t) {
                  return e.$1(t, n);
                })
              );
            },
            annotations: {
              string: { name: t.type },
              bool: { offlineQueueMode: this.offlineQueueMode },
            },
          });
        }),
        t
      );
    })();
    function N(e) {
      return "Job[" + e.jobId + "] (" + e.type + ")";
    }
    function M(e) {
      return "Job[" + e.jobId + "] (" + e.type + "." + e.step + ")";
    }
    function w(e, t, n) {
      e === "unsatisfiable"
        ? o("WALogger").LOG(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " halting because of ",
                "",
              ])),
            M(n),
            t,
          )
        : e === "unsatisfied" &&
          o("WALogger").LOG(
            T ||
              (T = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " waiting on ",
                "",
              ])),
            M(n),
            t,
          );
    }
    function A(e, t, n) {
      return (
        t === void 0 && (t = !1),
        {
          jobStartTime: e.startTime,
          afterCrash: t,
          interruptJob: F,
          eventFlow: n,
        }
      );
    }
    function F(e) {
      return new (o("WAPersistedJobManager").InterruptJob)(e);
    }
    l.PersistedJobManager = P;
  },
  98,
);
