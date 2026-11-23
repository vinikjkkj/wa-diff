__d(
  "WAPersistedJobManager",
  ["WAJobRequirement", "WALogger", "WAPromiseBackoffs", "WATimeUtils"],
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
      D,
      x,
      $,
      P,
      N,
      M,
      w = 1,
      A = (function () {
        function e(e) {
          this.feature = e;
        }
        var t = e.prototype;
        return (
          (t.toString = function () {
            return "RequiresPage: " + this.feature;
          }),
          e
        );
      })(),
      F = (function () {
        function e(e) {
          this.backoffOptions = e;
        }
        var t = e.prototype;
        return (
          (t.toString = function () {
            return "RetryOnBackoff";
          }),
          e
        );
      })(),
      O = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.toString = function () {
            return "NonRetryableError";
          }),
          t
        );
      })(babelHelpers.wrapNativeSuper(Error)),
      B = function (t) {
        this.result = t;
      },
      W = "$unstarted",
      q = "$finished",
      U = 5,
      V = (function () {
        function t(t) {
          var n = this,
            r,
            a = t.accessors,
            i = t.isRestartAfterCrash,
            l = t.unfinishedJobEntries,
            u = new Map(),
            c = l.then(function (t) {
              var r = [],
                l = [];
              return (
                t.forEach(function (e) {
                  e.stepHardStartCountAfterTimeout >= U ? r.push(e) : l.push(e);
                }),
                Promise.all(
                  r.map(function (t) {
                    return (
                      o("WALogger")
                        .ERROR(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              ": stuck on the step ",
                              ", aborting the job",
                            ])),
                          G(t),
                          t.step,
                        )
                        .sendLogs("job-stuck-" + t.type),
                      a.deletePersistedJob(t.jobId)
                    );
                  }),
                ).then(function () {
                  l.forEach(function (e) {
                    u.has(e.jobId) ||
                      (o("WALogger").LOG(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            ": restarting",
                          ])),
                        H(e),
                      ),
                      u.set(e.jobId, n.$1(e, i)));
                  });
                })
              );
            });
          ((this.implementationLoaders = new Map()),
            (this.implementations = new Map()),
            (this.stepBlockers = new WeakMap()),
            (this.accessors = a),
            (this.activeJobs = u),
            (this.initialJobsPromise = c),
            (this.listeners = t.listeners),
            (this.deprecatedJobs = t.deprecatedJobs),
            (this.executionScheduler = t.executionScheduler),
            (this.useExecutionScheduler =
              (r = t.useExecutionScheduler) != null
                ? r
                : function () {
                    return !1;
                  }));
        }
        var n = t.prototype;
        return (
          (n.loadAndRunJobFromId = function (t) {
            var e = this.activeJobs.get(t);
            if (e != null) return e;
            var n = this.$2(t);
            return (this.activeJobs.set(t, n), n);
          }),
          (n.$2 = async function (t) {
            var e = this.accessors,
              n = this.initialJobsPromise;
            await n;
            var r = await e.readPersistedJob(t);
            return r
              ? this.$1(r, !1)
              : (o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Persisted job missing for given ID",
                    ])),
                ),
                null);
          }),
          (n.$3 = function (t) {
            var e = this.implementationLoaders,
              n = this.implementations,
              r = n.get(t);
            if (r) return r;
            var o = e.get(t);
            if (!o) return null;
            var a = o();
            return (n.set(t, a), a);
          }),
          (n.$4 = function (t, n) {
            if (n == null || n.length === 0) return Promise.resolve();
            var e = this.stepBlockers,
              r = e.get(n);
            return (
              r == null &&
                ((r = o("WAJobRequirement").joinRequirements(
                  n.map(function (e) {
                    return e();
                  }),
                  j,
                )),
                e.set(n, r)),
              r(t)
            );
          }),
          (n.$5 = function (t, n, r, a) {
            var e = this;
            r === void 0 && (r = !1);
            var i = t.step,
              l = n.findIndex(function (e) {
                return e.stepName === i;
              }),
              s = n[l].info(t.current, t.original, K(t, r)),
              u = s.code,
              d = s.requirements,
              m = this.$4(t, d);
            return (
              a && (m = m.then(a)),
              m
                .then(function () {
                  return e.$6(t, function () {
                    return u(t.current, t.original, K(t, r));
                  });
                })
                .then(function (a) {
                  if (a instanceof B)
                    return (
                      o("WALogger").LOG(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            ": InterruptJob",
                          ])),
                        z(t),
                      ),
                      a.result
                    );
                  var i = l + 1;
                  if (i >= n.length) return a;
                  var s = n[i];
                  return (
                    (t.step = s.stepName),
                    (t.current = a),
                    (t.stepHardStartCountAfterTimeout = 0),
                    (t.stepFirstStartTime = o("WATimeUtils").unixTime()),
                    (t.stepUnexpectedErrorCount = 0),
                    (t.waitUntil = null),
                    (t.backedOffCount = 0),
                    e.accessors.updatePersistedJob(t).then(function () {
                      return e.$5(t, n, r);
                    })
                  );
                })
            );
          }),
          (n.$6 = function (t, n) {
            var e = function () {
                return Promise.resolve().then(function () {
                  return (
                    o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          ": running step",
                        ])),
                      z(t),
                    ),
                    n()
                  );
                });
              },
              r = this.executionScheduler;
            return r == null || !this.useExecutionScheduler()
              ? e()
              : r.run(e, { name: t.type + "." + t.step }).promise;
          }),
          (n.$1 = async function (t, n) {
            var e,
              r = this,
              a = this.accessors,
              i = this.activeJobs,
              l = this.deprecatedJobs,
              s = this.listeners,
              u = s.onJobFinished,
              c = s.onJobStarted,
              d = await this.$3(t.type),
              x = l[t.type];
            if (!d) {
              if (x) {
                if (x === "NOOP")
                  return (
                    o("WALogger").WARN(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "No implementation for deprecated ",
                          ", job deleted",
                        ])),
                      t.type,
                    ),
                    await a.deletePersistedJob(t.jobId),
                    null
                  );
              } else
                return (
                  o("WALogger")
                    .ERROR(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "No implementation for ",
                          ". Maybe it should have been put to the deprecated list?",
                        ])),
                      t.type,
                    )
                    .sendLogs("missing-job-implementation"),
                  await a.deletePersistedJob(t.jobId),
                  null
                );
              d = await x();
            }
            var $ = d;
            x &&
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "Running deprecated job ",
                    "",
                  ])),
                t.type,
              );
            var P =
              (e = t.stepFirstStartTime) != null
                ? e
                : o("WATimeUtils").unixTime();
            if (
              ((t.stepFirstStartTime = P),
              (t.stepUnexpectedErrorCount = t.stepUnexpectedErrorCount || 0),
              (t.backedOffCount = t.backedOffCount || 0),
              t.step === q)
            ) {
              var N = t.waitUntil,
                M = o("WATimeUtils").secondsUntil(P);
              return (
                N != null &&
                  o("WATimeUtils").isInFuture(N) &&
                  M > 0 &&
                  (o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        ": skew detected, adjusting accordingly",
                      ])),
                    H(t),
                  ),
                  (N = o("WATimeUtils").castToUnixTime(N - M)),
                  o("WATimeUtils").isInFuture(N) &&
                    ((t.stepFirstStartTime = o("WATimeUtils").castToUnixTime(
                      P - M,
                    )),
                    (t.waitUntil = N),
                    await this.accessors.updatePersistedJob(t))),
                (N == null || !o("WATimeUtils").isInFuture(N)) &&
                  (o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        ": removing completed, expired job from db",
                      ])),
                    H(t),
                  ),
                  await a.deletePersistedJob(t.jobId)),
                i.delete(t.jobId),
                t.current
              );
            }
            var O =
              t.step !== W
                ? d.find(function (e) {
                    return e.stepName === t.step;
                  })
                : d[0];
            if (!O)
              return (
                o("WALogger")
                  .ERROR(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "No implementation for ",
                        ".",
                        "",
                      ])),
                    t.type,
                    t.step,
                  )
                  .sendLogs("missing-job-step"),
                await a.deletePersistedJob(t.jobId),
                null
              );
            t.step = O.stepName;
            var B = function () {
                var e = t.waitUntil,
                  a = Promise.resolve();
                if (e != null) {
                  var i = o("WATimeUtils").futureUnixTime(
                    o("WATimeUtils").DAY_SECONDS,
                  );
                  e > i
                    ? (o("WALogger").LOG(
                        y ||
                          (y = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            ": trim wait from ",
                            " to ",
                            "",
                          ])),
                        z(t),
                        e,
                        i,
                      ),
                      (t.waitUntil = i),
                      (a = r.accessors.updatePersistedJob(t).then(function () {
                        return o("WATimeUtils").delayUntil(i);
                      })))
                    : (o("WALogger").LOG(
                        C ||
                          (C = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            ": delaying until ",
                            "",
                          ])),
                        z(t),
                        e,
                      ),
                      (a = o("WATimeUtils").delayUntil(e)));
                }
                return a.then(function () {
                  var e = function () {
                    return (
                      (t.waitUntil = null),
                      o("WATimeUtils").happenedWithin(
                        P,
                        o("WATimeUtils").DAY_SECONDS,
                      ) || t.stepHardStartCountAfterTimeout++,
                      r.accessors.updatePersistedJob(t)
                    );
                  };
                  return r.$5(t, $, n, e).catch(function (e) {
                    if (e instanceof A)
                      return (
                        o("WALogger").LOG(
                          b ||
                            (b = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              ": requires page",
                            ])),
                          z(t),
                        ),
                        t.stepHardStartCountAfterTimeout > 0 &&
                          (--t.stepHardStartCountAfterTimeout,
                          r.accessors.updatePersistedJob(t).catch(function (e) {
                            o("WALogger")
                              .ERROR(
                                v ||
                                  (v = babelHelpers.taggedTemplateLiteralLoose([
                                    "",
                                    ": failed to update job ",
                                    "",
                                  ])),
                                z(t),
                                e,
                              )
                              .sendLogs("job-update-failed");
                          })),
                        new Promise(function () {})
                      );
                    if (e instanceof F) {
                      o("WALogger").LOG(
                        S ||
                          (S = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            ": RetryOnBackoff",
                          ])),
                        z(t),
                      );
                      var n = o("WAPromiseBackoffs").getDelay(
                        ++t.backedOffCount,
                        e.backoffOptions,
                      );
                      return (
                        (t.waitUntil = o("WATimeUtils").futureUnixTime(
                          Math.ceil(n / 1e3),
                        )),
                        t.stepHardStartCountAfterTimeout > 0 &&
                          --t.stepHardStartCountAfterTimeout,
                        r.accessors.updatePersistedJob(t).then(B)
                      );
                    } else if (t.stepUnexpectedErrorCount < w)
                      return (
                        o("WALogger").WARN(
                          R ||
                            (R = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              ": Unhandled exception. Tried ",
                              " times",
                            ])),
                          z(t),
                          t.stepUnexpectedErrorCount,
                        ),
                        o("WALogger").WARN(
                          L ||
                            (L = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              ": Unhandled exception: ",
                              "",
                            ])),
                          z(t),
                          e,
                        ),
                        t.stepUnexpectedErrorCount++,
                        r.accessors.updatePersistedJob(t).then(B)
                      );
                    throw e;
                  });
                });
              },
              U = B(),
              V = U.then(
                async function (e) {
                  o("WALogger").LOG(
                    E ||
                      (E = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        ": finished job",
                      ])),
                    z(t),
                  );
                  var n = null;
                  try {
                    n = u(t.jobId, t.type, t.original, e);
                  } catch (e) {
                    o("WALogger")
                      .ERROR(
                        k ||
                          (k = babelHelpers.taggedTemplateLiteralLoose([
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
                      (t.step = q),
                      (t.current = e),
                      (t.stepFirstStartTime = o("WATimeUtils").unixTime()),
                      await r.accessors.updatePersistedJob(t))
                    : (await a.deletePersistedJob(t.jobId), i.delete(t.jobId));
                },
                async function (e) {
                  o("WALogger")
                    .ERROR(
                      I ||
                        (I = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " failed with error ",
                          "",
                        ])),
                      t.type,
                      e,
                    )
                    .sendLogs("job-threw-exception-" + t.type);
                  var r = $.find(function (e) {
                    return e.stepName === t.step;
                  });
                  if (!r)
                    o("WALogger").ERROR(
                      T ||
                        (T = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          ": ",
                          " step not found",
                        ])),
                      t.type,
                      t.step,
                    );
                  else {
                    var l = r.info(t.current, t.original, K(t, n));
                    l.stopRetryIf != null &&
                      (await l.stopRetryIf.onStopRetry(
                        t.current,
                        t.original,
                        K(t, n),
                      ));
                  }
                  (await a.deletePersistedJob(t.jobId), i.delete(t.jobId));
                },
              );
            try {
              c(t.jobId, t.type, t.original);
            } catch (e) {
              o("WALogger")
                .ERROR(
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
                      "onJobStarted for ",
                      " threw exception ",
                      "",
                    ])),
                  t.type,
                  e,
                )
                .sendLogs("onJobStarted-threw");
            }
            return V.then(function () {
              return U;
            });
          }),
          (n.addPersistedJobImplementation = function (t, n) {
            var e = this.deprecatedJobs,
              r = this.implementationLoaders;
            if (r.has(t)) {
              o("WALogger")
                .ERROR(
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose([
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
            this.accessors.maybeCreateJob(t).then(function (t) {
              var n = t.id;
              return e.loadAndRunJobFromId(n);
            });
          }),
          (n.waitUntilPersisted = function (t) {
            var e = this;
            return this.accessors.maybeCreateJob(t).then(function (t) {
              var n = t.id;
              e.loadAndRunJobFromId(n);
            });
          }),
          (n.waitUntilCompleted = function (t) {
            var e = this;
            return this.accessors.maybeCreateJob(t).then(function (t) {
              var n = t.id;
              return e.loadAndRunJobFromId(n);
            });
          }),
          (n.fireAndForgetNonPersisted = function (t) {
            o("WALogger").LOG(
              $ ||
                ($ = babelHelpers.taggedTemplateLiteralLoose([
                  "fireAndForgetNonPersisted not implemented in PersistedJobManager",
                ])),
            );
          }),
          (n.waitUntilCompletedNonPersisted = function (t) {
            return Promise.resolve(function () {
              return o("WALogger").LOG(
                P ||
                  (P = babelHelpers.taggedTemplateLiteralLoose([
                    "waitUntilCompletedNonPersisted not implemented in PersistedJobManager",
                  ])),
              );
            });
          }),
          t
        );
      })();
    function H(e) {
      return "Job[" + e.jobId + "] (" + e.type + ")";
    }
    function G(e) {
      return "[Job " + e.type + "] ";
    }
    function z(e) {
      return "Job[" + e.jobId + "] (" + e.type + "." + e.step + ")";
    }
    function j(e, t, n) {
      e === "unsatisfiable"
        ? o("WALogger").LOG(
            N ||
              (N = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " halting because of ",
                "",
              ])),
            z(n),
            t,
          )
        : e === "unsatisfied" &&
          o("WALogger").LOG(
            M ||
              (M = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " waiting on ",
                "",
              ])),
            z(n),
            t,
          );
    }
    function K(e, t) {
      return (
        t === void 0 && (t = !1),
        { jobStartTime: e.startTime, afterCrash: t, interruptJob: Q }
      );
    }
    function Q(e) {
      return new B(e);
    }
    ((l.RetryOnBackoff = F),
      (l.NonRetryableError = O),
      (l.InterruptJob = B),
      (l.UNSTARTED_JOB = W),
      (l.FINISHED_JOB = q),
      (l.MAX_STEP_HARD_START_COUNT_AFTER_TIMEOUT = U),
      (l.PersistedJobManager = V));
  },
  98,
);
