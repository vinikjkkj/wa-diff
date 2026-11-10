__d(
  "WAPersistedJobManager",
  [
    "Promise",
    "WAJobRequirement",
    "WALogger",
    "WAPromiseBackoffs",
    "WATimeUtils",
    "asyncToGeneratorRuntime",
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
      D,
      x,
      $,
      P,
      N,
      M,
      w,
      A = 1,
      F = (function () {
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
      O = (function () {
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
      B = (function (e) {
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
      W = function (t) {
        this.result = t;
      },
      q = "$unstarted",
      U = "$finished",
      V = 5,
      H = (function () {
        function t(t) {
          var r = this,
            a,
            i = t.accessors,
            l = t.isRestartAfterCrash,
            u = t.unfinishedJobEntries,
            c = new Map(),
            d = u.then(function (t) {
              var a = [],
                u = [];
              return (
                t.forEach(function (e) {
                  e.stepHardStartCountAfterTimeout >= V ? a.push(e) : u.push(e);
                }),
                (w || (w = n("Promise")))
                  .all(
                    a.map(function (t) {
                      return (
                        o("WALogger")
                          .ERROR(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                ": stuck on the step ",
                                ", aborting the job",
                              ])),
                            z(t),
                            t.step,
                          )
                          .sendLogs("job-stuck-" + t.type),
                        i.deletePersistedJob(t.jobId)
                      );
                    }),
                  )
                  .then(function () {
                    u.forEach(function (e) {
                      c.has(e.jobId) ||
                        (o("WALogger").LOG(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              ": restarting",
                            ])),
                          G(e),
                        ),
                        c.set(e.jobId, r.$1(e, l)));
                    });
                  })
              );
            });
          ((this.implementationLoaders = new Map()),
            (this.implementations = new Map()),
            (this.stepBlockers = new WeakMap()),
            (this.accessors = i),
            (this.activeJobs = c),
            (this.initialJobsPromise = d),
            (this.listeners = t.listeners),
            (this.deprecatedJobs = t.deprecatedJobs),
            (this.executionScheduler = t.executionScheduler),
            (this.useExecutionScheduler =
              (a = t.useExecutionScheduler) != null
                ? a
                : function () {
                    return !1;
                  }));
        }
        var r = t.prototype;
        return (
          (r.loadAndRunJobFromId = function (t) {
            var e = this.activeJobs.get(t);
            if (e != null) return e;
            var n = this.$2(t);
            return (this.activeJobs.set(t, n), n);
          }),
          (r.$2 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this.accessors,
                  n = this.initialJobsPromise;
                yield n;
                var r = yield t.readPersistedJob(e);
                return r
                  ? this.$1(r, !1)
                  : (o("WALogger").WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "Persisted job missing for given ID",
                        ])),
                    ),
                    null);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$3 = function (t) {
            var e = this.implementationLoaders,
              n = this.implementations,
              r = n.get(t);
            if (r) return r;
            var o = e.get(t);
            if (!o) return null;
            var a = o();
            return (n.set(t, a), a);
          }),
          (r.$4 = function (t, r) {
            if (r == null || r.length === 0)
              return (w || (w = n("Promise"))).resolve();
            var e = this.stepBlockers,
              a = e.get(r);
            return (
              a == null &&
                ((a = o("WAJobRequirement").joinRequirements(
                  r.map(function (e) {
                    return e();
                  }),
                  K,
                )),
                e.set(r, a)),
              a(t)
            );
          }),
          (r.$5 = function (t, n, r, a) {
            var e = this;
            r === void 0 && (r = !1);
            var i = t.step,
              l = n.findIndex(function (e) {
                return e.stepName === i;
              }),
              s = n[l].info(t.current, t.original, Q(t, r)),
              u = s.code,
              d = s.requirements,
              m = this.$4(t, d);
            return (
              a && (m = m.then(a)),
              m
                .then(function () {
                  return e.$6(t, function () {
                    return u(t.current, t.original, Q(t, r));
                  });
                })
                .then(function (a) {
                  if (a instanceof W)
                    return (
                      o("WALogger").LOG(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            ": InterruptJob",
                          ])),
                        j(t),
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
          (r.$6 = function (t, r) {
            var e = function () {
                return (w || (w = n("Promise"))).resolve().then(function () {
                  return (
                    o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          ": running step",
                        ])),
                      j(t),
                    ),
                    r()
                  );
                });
              },
              a = this.executionScheduler;
            return a == null || !this.useExecutionScheduler()
              ? e()
              : a.run(e, { name: t.type + "." + t.step }).promise;
          }),
          (r.$1 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var r,
                  a = this,
                  i = this.accessors,
                  l = this.activeJobs,
                  s = this.deprecatedJobs,
                  u = this.listeners,
                  c = u.onJobFinished,
                  d = u.onJobStarted,
                  x = yield this.$3(e.type),
                  $ = s[e.type];
                if (!x) {
                  if ($) {
                    if ($ === "NOOP")
                      return (
                        o("WALogger").WARN(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "No implementation for deprecated ",
                              ", job deleted",
                            ])),
                          e.type,
                        ),
                        yield i.deletePersistedJob(e.jobId),
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
                          e.type,
                        )
                        .sendLogs("missing-job-implementation"),
                      yield i.deletePersistedJob(e.jobId),
                      null
                    );
                  x = yield $();
                }
                var P = x;
                $ &&
                  o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "Running deprecated job ",
                        "",
                      ])),
                    e.type,
                  );
                var N =
                  (r = e.stepFirstStartTime) != null
                    ? r
                    : o("WATimeUtils").unixTime();
                if (
                  ((e.stepFirstStartTime = N),
                  (e.stepUnexpectedErrorCount =
                    e.stepUnexpectedErrorCount || 0),
                  (e.backedOffCount = e.backedOffCount || 0),
                  e.step === U)
                ) {
                  var M = e.waitUntil,
                    B = o("WATimeUtils").secondsUntil(N);
                  return (
                    M != null &&
                      o("WATimeUtils").isInFuture(M) &&
                      B > 0 &&
                      (o("WALogger").LOG(
                        f ||
                          (f = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            ": skew detected, adjusting accordingly",
                          ])),
                        G(e),
                      ),
                      (M = o("WATimeUtils").castToUnixTime(M - B)),
                      o("WATimeUtils").isInFuture(M) &&
                        ((e.stepFirstStartTime = o(
                          "WATimeUtils",
                        ).castToUnixTime(N - B)),
                        (e.waitUntil = M),
                        yield this.accessors.updatePersistedJob(e))),
                    (M == null || !o("WATimeUtils").isInFuture(M)) &&
                      (o("WALogger").LOG(
                        g ||
                          (g = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            ": removing completed, expired job from db",
                          ])),
                        G(e),
                      ),
                      yield i.deletePersistedJob(e.jobId)),
                    l.delete(e.jobId),
                    e.current
                  );
                }
                var W =
                  e.step !== q
                    ? x.find(function (t) {
                        return t.stepName === e.step;
                      })
                    : x[0];
                if (!W)
                  return (
                    o("WALogger")
                      .ERROR(
                        h ||
                          (h = babelHelpers.taggedTemplateLiteralLoose([
                            "No implementation for ",
                            ".",
                            "",
                          ])),
                        e.type,
                        e.step,
                      )
                      .sendLogs("missing-job-step"),
                    yield i.deletePersistedJob(e.jobId),
                    null
                  );
                e.step = W.stepName;
                var V = function () {
                    var r = e.waitUntil,
                      i = (w || (w = n("Promise"))).resolve();
                    if (r != null) {
                      var l = o("WATimeUtils").futureUnixTime(
                        o("WATimeUtils").DAY_SECONDS,
                      );
                      r > l
                        ? (o("WALogger").LOG(
                            y ||
                              (y = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                ": trim wait from ",
                                " to ",
                                "",
                              ])),
                            j(e),
                            r,
                            l,
                          ),
                          (e.waitUntil = l),
                          (i = a.accessors
                            .updatePersistedJob(e)
                            .then(function () {
                              return o("WATimeUtils").delayUntil(l);
                            })))
                        : (o("WALogger").LOG(
                            C ||
                              (C = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                ": delaying until ",
                                "",
                              ])),
                            j(e),
                            r,
                          ),
                          (i = o("WATimeUtils").delayUntil(r)));
                    }
                    return i.then(function () {
                      var r = function () {
                        return (
                          (e.waitUntil = null),
                          o("WATimeUtils").happenedWithin(
                            N,
                            o("WATimeUtils").DAY_SECONDS,
                          ) || e.stepHardStartCountAfterTimeout++,
                          a.accessors.updatePersistedJob(e)
                        );
                      };
                      return a.$5(e, P, t, r).catch(function (t) {
                        if (t instanceof F)
                          return (
                            o("WALogger").LOG(
                              b ||
                                (b = babelHelpers.taggedTemplateLiteralLoose([
                                  "",
                                  ": requires page",
                                ])),
                              j(e),
                            ),
                            e.stepHardStartCountAfterTimeout > 0 &&
                              (--e.stepHardStartCountAfterTimeout,
                              a.accessors
                                .updatePersistedJob(e)
                                .catch(function (t) {
                                  o("WALogger")
                                    .ERROR(
                                      v ||
                                        (v =
                                          babelHelpers.taggedTemplateLiteralLoose(
                                            ["", ": failed to update job ", ""],
                                          )),
                                      j(e),
                                      t,
                                    )
                                    .sendLogs("job-update-failed");
                                })),
                            new (w || (w = n("Promise")))(function () {})
                          );
                        if (t instanceof O) {
                          o("WALogger").LOG(
                            S ||
                              (S = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                ": RetryOnBackoff",
                              ])),
                            j(e),
                          );
                          var r = o("WAPromiseBackoffs").getDelay(
                            ++e.backedOffCount,
                            t.backoffOptions,
                          );
                          return (
                            (e.waitUntil = o("WATimeUtils").futureUnixTime(
                              Math.ceil(r / 1e3),
                            )),
                            e.stepHardStartCountAfterTimeout > 0 &&
                              --e.stepHardStartCountAfterTimeout,
                            a.accessors.updatePersistedJob(e).then(V)
                          );
                        } else if (e.stepUnexpectedErrorCount < A)
                          return (
                            o("WALogger").WARN(
                              R ||
                                (R = babelHelpers.taggedTemplateLiteralLoose([
                                  "",
                                  ": Unhandled exception. Tried ",
                                  " times",
                                ])),
                              j(e),
                              e.stepUnexpectedErrorCount,
                            ),
                            o("WALogger").WARN(
                              L ||
                                (L = babelHelpers.taggedTemplateLiteralLoose([
                                  "",
                                  ": Unhandled exception: ",
                                  "",
                                ])),
                              j(e),
                              t,
                            ),
                            e.stepUnexpectedErrorCount++,
                            a.accessors.updatePersistedJob(e).then(V)
                          );
                        throw t;
                      });
                    });
                  },
                  H = V(),
                  z = H.then(
                    (function () {
                      var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (t) {
                          o("WALogger").LOG(
                            E ||
                              (E = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                ": finished job",
                              ])),
                            j(e),
                          );
                          var n = null;
                          try {
                            n = c(e.jobId, e.type, e.original, t);
                          } catch (t) {
                            o("WALogger")
                              .ERROR(
                                k ||
                                  (k = babelHelpers.taggedTemplateLiteralLoose([
                                    "onJobFinished for ",
                                    " threw exception ",
                                    "",
                                  ])),
                                e.type,
                                t,
                              )
                              .sendLogs("onJobFinished-threw");
                          }
                          n != null && n > 0
                            ? ((e.waitUntil = o("WATimeUtils").futureUnixTime(
                                Math.ceil(n / 1e3),
                              )),
                              (e.step = U),
                              (e.current = t),
                              (e.stepFirstStartTime =
                                o("WATimeUtils").unixTime()),
                              yield a.accessors.updatePersistedJob(e))
                            : (yield i.deletePersistedJob(e.jobId),
                              l.delete(e.jobId));
                        },
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })(),
                    (function () {
                      var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (n) {
                          o("WALogger")
                            .ERROR(
                              I ||
                                (I = babelHelpers.taggedTemplateLiteralLoose([
                                  "",
                                  " failed with error ",
                                  "",
                                ])),
                              e.type,
                              n,
                            )
                            .sendLogs("job-threw-exception-" + e.type);
                          var r = P.find(function (t) {
                            return t.stepName === e.step;
                          });
                          if (!r)
                            o("WALogger").ERROR(
                              T ||
                                (T = babelHelpers.taggedTemplateLiteralLoose([
                                  "",
                                  ": ",
                                  " step not found",
                                ])),
                              e.type,
                              e.step,
                            );
                          else {
                            var a = r.info(e.current, e.original, Q(e, t));
                            a.stopRetryIf != null &&
                              (yield a.stopRetryIf.onStopRetry(
                                e.current,
                                e.original,
                                Q(e, t),
                              ));
                          }
                          (yield i.deletePersistedJob(e.jobId),
                            l.delete(e.jobId));
                        },
                      );
                      return function (e) {
                        return r.apply(this, arguments);
                      };
                    })(),
                  );
                try {
                  d(e.jobId, e.type, e.original);
                } catch (t) {
                  o("WALogger")
                    .ERROR(
                      D ||
                        (D = babelHelpers.taggedTemplateLiteralLoose([
                          "onJobStarted for ",
                          " threw exception ",
                          "",
                        ])),
                      e.type,
                      t,
                    )
                    .sendLogs("onJobStarted-threw");
                }
                return z.then(function () {
                  return H;
                });
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.addPersistedJobImplementation = function (t, n) {
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
          (r.fireAndForget = function (t) {
            var e = this;
            this.accessors.maybeCreateJob(t).then(function (t) {
              var n = t.id;
              return e.loadAndRunJobFromId(n);
            });
          }),
          (r.waitUntilPersisted = function (t) {
            var e = this;
            return this.accessors.maybeCreateJob(t).then(function (t) {
              var n = t.id;
              e.loadAndRunJobFromId(n);
            });
          }),
          (r.waitUntilCompleted = function (t) {
            var e = this;
            return this.accessors.maybeCreateJob(t).then(function (t) {
              var n = t.id;
              return e.loadAndRunJobFromId(n);
            });
          }),
          (r.fireAndForgetNonPersisted = function (t) {
            o("WALogger").LOG(
              $ ||
                ($ = babelHelpers.taggedTemplateLiteralLoose([
                  "fireAndForgetNonPersisted not implemented in PersistedJobManager",
                ])),
            );
          }),
          (r.waitUntilCompletedNonPersisted = function (t) {
            return (w || (w = n("Promise"))).resolve(function () {
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
    function G(e) {
      return "Job[" + e.jobId + "] (" + e.type + ")";
    }
    function z(e) {
      return "[Job " + e.type + "] ";
    }
    function j(e) {
      return "Job[" + e.jobId + "] (" + e.type + "." + e.step + ")";
    }
    function K(e, t, n) {
      e === "unsatisfiable"
        ? o("WALogger").LOG(
            N ||
              (N = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " halting because of ",
                "",
              ])),
            j(n),
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
            j(n),
            t,
          );
    }
    function Q(e, t) {
      return (
        t === void 0 && (t = !1),
        { jobStartTime: e.startTime, afterCrash: t, interruptJob: X }
      );
    }
    function X(e) {
      return new W(e);
    }
    ((l.RetryOnBackoff = O),
      (l.NonRetryableError = B),
      (l.InterruptJob = W),
      (l.UNSTARTED_JOB = q),
      (l.FINISHED_JOB = U),
      (l.MAX_STEP_HARD_START_COUNT_AFTER_TIMEOUT = V),
      (l.PersistedJobManager = H));
  },
  98,
);
