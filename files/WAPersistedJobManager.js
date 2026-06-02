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
      M = 1,
      w = (function () {
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
      A = (function () {
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
      F = (function (e) {
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
      O = function (t) {
        this.result = t;
      },
      B = "$unstarted",
      W = "$finished",
      q = (function () {
        function t(t) {
          var n = this,
            r = t.accessors,
            a = t.isRestartAfterCrash,
            i = t.unfinishedJobEntries,
            l = new Map(),
            u = i.then(function (t) {
              var i = [],
                u = [];
              return (
                t.forEach(function (e) {
                  e.stepHardStartCountAfterTimeout >= 5 ? i.push(e) : u.push(e);
                }),
                Promise.all(
                  i.map(function (t) {
                    return (
                      o("WALogger")
                        .ERROR(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              ": stuck on the step ",
                              ", aborting the job",
                            ])),
                          V(t),
                          t.step,
                        )
                        .sendLogs("job-stuck-" + t.type),
                      r.deletePersistedJob(t.jobId)
                    );
                  }),
                ).then(function () {
                  u.forEach(function (e) {
                    l.has(e.jobId) ||
                      (o("WALogger").LOG(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            ": restarting",
                          ])),
                        U(e),
                      ),
                      l.set(e.jobId, n.$1(e, a)));
                  });
                })
              );
            });
          ((this.implementationLoaders = new Map()),
            (this.implementations = new Map()),
            (this.stepBlockers = new WeakMap()),
            (this.accessors = r),
            (this.activeJobs = l),
            (this.initialJobsPromise = u),
            (this.listeners = t.listeners),
            (this.deprecatedJobs = t.deprecatedJobs));
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
                  G,
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
              s = n[l].info(t.current, t.original, z(t, r)),
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
                      H(t),
                    ),
                    u(t.current, t.original, z(t, r))
                  );
                })
                .then(function (a) {
                  if (a instanceof O)
                    return (
                      o("WALogger").LOG(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            ": InterruptJob",
                          ])),
                        H(t),
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
              D = l[t.type];
            if (!d) {
              if (D) {
                if (D === "NOOP")
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
              d = await D();
            }
            var x = d;
            D &&
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "Running deprecated job ",
                    "",
                  ])),
                t.type,
              );
            var $ =
              (e = t.stepFirstStartTime) != null
                ? e
                : o("WATimeUtils").unixTime();
            if (
              ((t.stepFirstStartTime = $),
              (t.stepUnexpectedErrorCount = t.stepUnexpectedErrorCount || 0),
              (t.backedOffCount = t.backedOffCount || 0),
              t.step === W)
            ) {
              var P = t.waitUntil,
                N = o("WATimeUtils").secondsUntil($);
              return (
                P != null &&
                  o("WATimeUtils").isInFuture(P) &&
                  N > 0 &&
                  (o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        ": skew detected, adjusting accordingly",
                      ])),
                    U(t),
                  ),
                  (P = o("WATimeUtils").castToUnixTime(P - N)),
                  o("WATimeUtils").isInFuture(P) &&
                    ((t.stepFirstStartTime = o("WATimeUtils").castToUnixTime(
                      $ - N,
                    )),
                    (t.waitUntil = P),
                    await this.accessors.updatePersistedJob(t))),
                (P == null || !o("WATimeUtils").isInFuture(P)) &&
                  (o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        ": removing completed, expired job from db",
                      ])),
                    U(t),
                  ),
                  await a.deletePersistedJob(t.jobId)),
                i.delete(t.jobId),
                t.current
              );
            }
            var F =
              t.step !== B
                ? d.find(function (e) {
                    return e.stepName === t.step;
                  })
                : d[0];
            if (!F)
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
            t.step = F.stepName;
            var O = function () {
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
                        H(t),
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
                        H(t),
                        e,
                      ),
                      (a = o("WATimeUtils").delayUntil(e)));
                }
                return a.then(function () {
                  var e = function () {
                    return (
                      (t.waitUntil = null),
                      o("WATimeUtils").happenedWithin(
                        $,
                        o("WATimeUtils").DAY_SECONDS,
                      ) || t.stepHardStartCountAfterTimeout++,
                      r.accessors.updatePersistedJob(t)
                    );
                  };
                  return r.$5(t, x, n, e).catch(function (e) {
                    if (e instanceof w)
                      return (
                        o("WALogger").LOG(
                          b ||
                            (b = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              ": requires page",
                            ])),
                          H(t),
                        ),
                        t.stepHardStartCountAfterTimeout > 0 &&
                          (--t.stepHardStartCountAfterTimeout,
                          r.accessors.updatePersistedJob(t)),
                        new Promise(function () {})
                      );
                    if (e instanceof A) {
                      o("WALogger").LOG(
                        v ||
                          (v = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            ": RetryOnBackoff",
                          ])),
                        H(t),
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
                        r.accessors.updatePersistedJob(t).then(O)
                      );
                    } else if (t.stepUnexpectedErrorCount < M)
                      return (
                        o("WALogger").WARN(
                          S ||
                            (S = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              ": Unhandled exception. Tried ",
                              " times",
                            ])),
                          H(t),
                          t.stepUnexpectedErrorCount,
                        ),
                        o("WALogger").WARN(
                          R ||
                            (R = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              ": Unhandled exception: ",
                              "",
                            ])),
                          H(t),
                          e,
                        ),
                        t.stepUnexpectedErrorCount++,
                        r.accessors.updatePersistedJob(t).then(O)
                      );
                    throw e;
                  });
                });
              },
              q = O(),
              V = q.then(
                async function (e) {
                  o("WALogger").LOG(
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        ": finished job",
                      ])),
                    H(t),
                  );
                  var n = null;
                  try {
                    n = u(t.jobId, t.type, t.original, e);
                  } catch (e) {
                    o("WALogger")
                      .ERROR(
                        E ||
                          (E = babelHelpers.taggedTemplateLiteralLoose([
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
                      (t.step = W),
                      (t.current = e),
                      (t.stepFirstStartTime = o("WATimeUtils").unixTime()),
                      await r.accessors.updatePersistedJob(t))
                    : (await a.deletePersistedJob(t.jobId), i.delete(t.jobId));
                },
                async function (e) {
                  o("WALogger")
                    .ERROR(
                      k ||
                        (k = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " failed with error ",
                          "",
                        ])),
                      t.type,
                      e,
                    )
                    .sendLogs("job-threw-exception-" + t.type);
                  var r = x.find(function (e) {
                    return e.stepName === t.step;
                  });
                  if (!r)
                    o("WALogger").ERROR(
                      I ||
                        (I = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          ": ",
                          " step not found",
                        ])),
                      t.type,
                      t.step,
                    );
                  else {
                    var l = r.info(t.current, t.original, z(t, n));
                    l.stopRetryIf != null &&
                      (await l.stopRetryIf.onStopRetry(
                        t.current,
                        t.original,
                        z(t, n),
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
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
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
              return q;
            });
          }),
          (n.addPersistedJobImplementation = function (t, n) {
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
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "fireAndForgetNonPersisted not implemented in PersistedJobManager",
                ])),
            );
          }),
          (n.waitUntilCompletedNonPersisted = function (t) {
            return Promise.resolve(function () {
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
    function U(e) {
      return "Job[" + e.jobId + "] (" + e.type + ")";
    }
    function V(e) {
      return "[Job " + e.type + "] ";
    }
    function H(e) {
      return "Job[" + e.jobId + "] (" + e.type + "." + e.step + ")";
    }
    function G(e, t, n) {
      e === "unsatisfiable"
        ? o("WALogger").LOG(
            P ||
              (P = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " halting because of ",
                "",
              ])),
            H(n),
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
            H(n),
            t,
          );
    }
    function z(e, t) {
      return (
        t === void 0 && (t = !1),
        { jobStartTime: e.startTime, afterCrash: t, interruptJob: j }
      );
    }
    function j(e) {
      return new O(e);
    }
    ((l.RetryOnBackoff = A),
      (l.NonRetryableError = F),
      (l.InterruptJob = O),
      (l.UNSTARTED_JOB = B),
      (l.FINISHED_JOB = W),
      (l.PersistedJobManager = q));
  },
  98,
);
