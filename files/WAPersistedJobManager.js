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
      U = (function () {
        function t(t) {
          var r = this,
            a = t.accessors,
            i = t.isRestartAfterCrash,
            l = t.unfinishedJobEntries,
            u = new Map(),
            c = l.then(function (t) {
              var l = [],
                c = [];
              return (
                t.forEach(function (e) {
                  e.stepHardStartCountAfterTimeout >= 5 ? l.push(e) : c.push(e);
                }),
                (M || (M = n("Promise")))
                  .all(
                    l.map(function (t) {
                      return (
                        o("WALogger")
                          .ERROR(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                ": stuck on the step ",
                                ", aborting the job",
                              ])),
                            H(t),
                            t.step,
                          )
                          .sendLogs("job-stuck-" + t.type),
                        a.deletePersistedJob(t.jobId)
                      );
                    }),
                  )
                  .then(function () {
                    c.forEach(function (e) {
                      u.has(e.jobId) ||
                        (o("WALogger").LOG(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              ": restarting",
                            ])),
                          V(e),
                        ),
                        u.set(e.jobId, r.$1(e, i)));
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
            (this.deprecatedJobs = t.deprecatedJobs));
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
              return (M || (M = n("Promise"))).resolve();
            var e = this.stepBlockers,
              a = e.get(r);
            return (
              a == null &&
                ((a = o("WAJobRequirement").joinRequirements(
                  r.map(function (e) {
                    return e();
                  }),
                  z,
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
              s = n[l].info(t.current, t.original, j(t, r)),
              u = s.code,
              m = s.requirements,
              p = this.$4(t, m);
            return (
              a && (p = p.then(a)),
              p
                .then(function () {
                  return (
                    o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          ": running step",
                        ])),
                      G(t),
                    ),
                    u(t.current, t.original, j(t, r))
                  );
                })
                .then(function (a) {
                  if (a instanceof B)
                    return (
                      o("WALogger").LOG(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            ": InterruptJob",
                          ])),
                        G(t),
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
                  D = yield this.$3(e.type),
                  x = s[e.type];
                if (!D) {
                  if (x) {
                    if (x === "NOOP")
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
                  D = yield x();
                }
                var $ = D;
                x &&
                  o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "Running deprecated job ",
                        "",
                      ])),
                    e.type,
                  );
                var P =
                  (r = e.stepFirstStartTime) != null
                    ? r
                    : o("WATimeUtils").unixTime();
                if (
                  ((e.stepFirstStartTime = P),
                  (e.stepUnexpectedErrorCount =
                    e.stepUnexpectedErrorCount || 0),
                  (e.backedOffCount = e.backedOffCount || 0),
                  e.step === q)
                ) {
                  var N = e.waitUntil,
                    O = o("WATimeUtils").secondsUntil(P);
                  return (
                    N != null &&
                      o("WATimeUtils").isInFuture(N) &&
                      O > 0 &&
                      (o("WALogger").LOG(
                        f ||
                          (f = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            ": skew detected, adjusting accordingly",
                          ])),
                        V(e),
                      ),
                      (N = o("WATimeUtils").castToUnixTime(N - O)),
                      o("WATimeUtils").isInFuture(N) &&
                        ((e.stepFirstStartTime = o(
                          "WATimeUtils",
                        ).castToUnixTime(P - O)),
                        (e.waitUntil = N),
                        yield this.accessors.updatePersistedJob(e))),
                    (N == null || !o("WATimeUtils").isInFuture(N)) &&
                      (o("WALogger").LOG(
                        g ||
                          (g = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            ": removing completed, expired job from db",
                          ])),
                        V(e),
                      ),
                      yield i.deletePersistedJob(e.jobId)),
                    l.delete(e.jobId),
                    e.current
                  );
                }
                var B =
                  e.step !== W
                    ? D.find(function (t) {
                        return t.stepName === e.step;
                      })
                    : D[0];
                if (!B)
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
                e.step = B.stepName;
                var U = function () {
                    var r = e.waitUntil,
                      i = (M || (M = n("Promise"))).resolve();
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
                            G(e),
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
                            G(e),
                            r,
                          ),
                          (i = o("WATimeUtils").delayUntil(r)));
                    }
                    return i.then(function () {
                      var r = function () {
                        return (
                          (e.waitUntil = null),
                          o("WATimeUtils").happenedWithin(
                            P,
                            o("WATimeUtils").DAY_SECONDS,
                          ) || e.stepHardStartCountAfterTimeout++,
                          a.accessors.updatePersistedJob(e)
                        );
                      };
                      return a.$5(e, $, t, r).catch(function (t) {
                        if (t instanceof A)
                          return (
                            o("WALogger").LOG(
                              b ||
                                (b = babelHelpers.taggedTemplateLiteralLoose([
                                  "",
                                  ": requires page",
                                ])),
                              G(e),
                            ),
                            e.stepHardStartCountAfterTimeout > 0 &&
                              (--e.stepHardStartCountAfterTimeout,
                              a.accessors.updatePersistedJob(e)),
                            new (M || (M = n("Promise")))(function () {})
                          );
                        if (t instanceof F) {
                          o("WALogger").LOG(
                            v ||
                              (v = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                ": RetryOnBackoff",
                              ])),
                            G(e),
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
                            a.accessors.updatePersistedJob(e).then(U)
                          );
                        } else if (e.stepUnexpectedErrorCount < w)
                          return (
                            o("WALogger").WARN(
                              S ||
                                (S = babelHelpers.taggedTemplateLiteralLoose([
                                  "",
                                  ": Unhandled exception. Tried ",
                                  " times",
                                ])),
                              G(e),
                              e.stepUnexpectedErrorCount,
                            ),
                            o("WALogger").WARN(
                              R ||
                                (R = babelHelpers.taggedTemplateLiteralLoose([
                                  "",
                                  ": Unhandled exception: ",
                                  "",
                                ])),
                              G(e),
                              t,
                            ),
                            e.stepUnexpectedErrorCount++,
                            a.accessors.updatePersistedJob(e).then(U)
                          );
                        throw t;
                      });
                    });
                  },
                  H = U(),
                  z = H.then(
                    (function () {
                      var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (t) {
                          o("WALogger").LOG(
                            L ||
                              (L = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                ": finished job",
                              ])),
                            G(e),
                          );
                          var n = null;
                          try {
                            n = c(e.jobId, e.type, e.original, t);
                          } catch (t) {
                            o("WALogger")
                              .ERROR(
                                E ||
                                  (E = babelHelpers.taggedTemplateLiteralLoose([
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
                              (e.step = q),
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
                              k ||
                                (k = babelHelpers.taggedTemplateLiteralLoose([
                                  "",
                                  " failed with error ",
                                  "",
                                ])),
                              e.type,
                              n,
                            )
                            .sendLogs("job-threw-exception-" + e.type);
                          var r = $.find(function (t) {
                            return t.stepName === e.step;
                          });
                          if (!r)
                            o("WALogger").ERROR(
                              I ||
                                (I = babelHelpers.taggedTemplateLiteralLoose([
                                  "",
                                  ": ",
                                  " step not found",
                                ])),
                              e.type,
                              e.step,
                            );
                          else {
                            var a = r.info(e.current, e.original, j(e, t));
                            a.stopRetryIf != null &&
                              (yield a.stopRetryIf.onStopRetry(
                                e.current,
                                e.original,
                                j(e, t),
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
                      T ||
                        (T = babelHelpers.taggedTemplateLiteralLoose([
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
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
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
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "fireAndForgetNonPersisted not implemented in PersistedJobManager",
                ])),
            );
          }),
          (r.waitUntilCompletedNonPersisted = function (t) {
            return (M || (M = n("Promise"))).resolve(function () {
              return o("WALogger").LOG(
                $ ||
                  ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "waitUntilCompletedNonPersisted not implemented in PersistedJobManager",
                  ])),
              );
            });
          }),
          t
        );
      })();
    function V(e) {
      return "Job[" + e.jobId + "] (" + e.type + ")";
    }
    function H(e) {
      return "[Job " + e.type + "] ";
    }
    function G(e) {
      return "Job[" + e.jobId + "] (" + e.type + "." + e.step + ")";
    }
    function z(e, t, n) {
      e === "unsatisfiable"
        ? o("WALogger").LOG(
            P ||
              (P = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " halting because of ",
                "",
              ])),
            G(n),
            t,
          )
        : e === "unsatisfied" &&
          o("WALogger").LOG(
            N ||
              (N = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " waiting on ",
                "",
              ])),
            G(n),
            t,
          );
    }
    function j(e, t) {
      return (
        t === void 0 && (t = !1),
        { jobStartTime: e.startTime, afterCrash: t, interruptJob: K }
      );
    }
    function K(e) {
      return new B(e);
    }
    ((l.RetryOnBackoff = F),
      (l.NonRetryableError = O),
      (l.InterruptJob = B),
      (l.UNSTARTED_JOB = W),
      (l.FINISHED_JOB = q),
      (l.PersistedJobManager = U));
  },
  98,
);
