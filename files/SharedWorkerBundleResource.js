__d(
  "SharedWorkerBundleResource",
  [
    "BootloaderPreloader",
    "Deferred",
    "FBLogger",
    "Promise",
    "SharedWorkerDevChangeManager",
    "SharedWorkerEventManager",
    "SharedWorkerLockManager",
    "SharedWorkerLoggingUtils",
    "SharedWorkerMigrationUtils",
    "SharedWorkerStorageManager",
    "SharedWorkerUptimeTracker",
    "SharedWorkerV2ResourceExperimental",
    "SiteData",
    "StaticSiteData",
    "WebWorkerV2DynamicData",
    "asyncToGeneratorRuntime",
    "buildSharedWorkerInitQPLLogger",
    "buildSharedWorkerTerminateQPLLogger",
    "createSharedWorkerV2BundleUrl",
    "createSharedWorkerV2BundleUrlExperimental",
    "err",
    "getErrorSafe",
    "gkx",
    "handleWorkerWriteError",
    "justknobx",
    "logSharedWorkerInitStep",
    "pageID",
    "promiseDone",
    "setTimeout",
    "supportsModuleWorker",
    "supportsNativeWebLock",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 5e3,
      u = "shared_worker_broadcast_channel",
      c = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this) || this),
            (n.name = "SelfTerminationError"),
            (n.message = "Worker self terminated with the reason: " + t),
            (n.reason = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    function d(e, t, n, a) {
      a == null || a.markEventStart("shared_worker_construct");
      var i = new SharedWorker(e, t);
      (a == null || a.markEventEnd("shared_worker_construct"),
        i.addEventListener("error", function (e) {
          o("SharedWorkerLoggingUtils").logSharedWorkerError(a, e, t);
        }));
      var l = new Set();
      o("SharedWorkerEventManager").registerWorkerSelfTerminationListener(
        i,
        function (e, n, r) {
          o("SharedWorkerLoggingUtils").logSelfTermination(t, e, n, r);
        },
        { once: !0 },
      );
      var s = 0;
      (o("SharedWorkerEventManager").registerConnectionAckListener(
        i,
        function (e, t) {
          if ((s++, l.has("worker_connection_established"))) {
            a == null || a.addAnnotations({ int: { connectionAckNum: s } });
            return;
          }
          (l.add("worker_connection_established"),
            a == null ||
              a.addAnnotations({ string: { connectedFrom: e, workerID: t } }),
            a == null || a.markPoint("worker_connection_established"));
        },
      ),
        o("SharedWorkerEventManager").registerWorkerInitPointsListener(
          i,
          function (e) {
            l.has(e) ||
              (l.add(e), a == null || a.markPoint("worker_init_point_" + e));
          },
        ),
        i.port.start(),
        o("SharedWorkerEventManager").registerExecuteWorkerImportsListener(
          i,
          a,
          function (e) {
            var t = e.attempts,
              n = e.err;
            (a == null ||
              a.addAnnotations({
                string: { importsError: n },
                int: { importAttempts: t },
              }),
              a == null ||
                a.markPoint(
                  n == null
                    ? "bundle_imports_success"
                    : "bundle_imports_failure",
                ));
          },
        ));
      var u = new (r("Deferred"))();
      return (
        o("SharedWorkerEventManager").registerExecuteWorkerAckListener(
          i,
          a,
          function (e) {
            var t = e.err,
              n = e.isFirstInit,
              i = e.workerRev,
              l = e.workerSpinMode,
              s = e.workerSpinTime;
            (o("SharedWorkerLoggingUtils").logExecuteAck(a, s, t, n, i, l),
              t != null || s == null || i == null
                ? u.reject(
                    r("err")(t != null ? t : "no worker rev or spin time"),
                  )
                : u.resolve({ rev: i, spinTime: s }));
          },
        ),
        a == null || a.markEventStart("execute_worker"),
        o("SharedWorkerEventManager").emitExecuteWorker(i, {
          jsModuleResource: n,
          isDev: !1,
        }),
        u.getPromise().then(function (e) {
          var t = e.rev,
            n = e.spinTime;
          return { worker: i, rev: t, spinTime: n };
        })
      );
    }
    function m(e, t, n) {
      n == null || n.markEventStart("worker_constructor");
      var o = e,
        a = r("supportsModuleWorker")(!0)
          ? new SharedWorker(o, { name: t, type: "module" })
          : new SharedWorker(o, t);
      return (
        n == null ||
          n.markEventEnd("worker_constructor", {
            string: { workerUrl: o.toString() },
          }),
        a
      );
    }
    function p(e, t, n) {
      var r = [],
        a = new Set();
      (r.push(
        o("SharedWorkerEventManager").registerWorkerInitPointsListener(
          e,
          function (e) {
            a.has(e) ||
              (a.add(e), n == null || n.markPoint("worker_init_point_" + e));
          },
        ),
      ),
        r.push(
          o("SharedWorkerEventManager").registerHrpInitListener(
            e,
            n,
            function () {},
          ),
        ));
      var i = function (r) {
        o("SharedWorkerLoggingUtils").logSharedWorkerError(n, r, t);
      };
      return (
        e.addEventListener("error", i),
        r.push(function () {
          return e.removeEventListener("error", i);
        }),
        r
      );
    }
    function _(e, t, n, a) {
      o("SharedWorkerMigrationUtils").shouldCheckForDynamicStringWorker(t) &&
        (a == null || a.markEventStart("dynamic_string_worker_check"),
        r("promiseDone")(
          o("SharedWorkerMigrationUtils").maybeTerminateDynamicStringWorker(t),
          function (e) {
            a == null ||
              a.markEventEnd("dynamic_string_worker_check", {
                bool: { didTerminateDynamicStringWorker: e },
              });
          },
        ));
      var i = m(e, t, a);
      o("SharedWorkerEventManager").registerConnectionAckListener(
        i,
        function (e, t, n) {
          (a == null ||
            a.addAnnotations({
              string: { connectedFrom: e, workerID: t, hrpStatus: n },
            }),
            a == null || a.markPoint("worker_connection_established"));
        },
      );
      var l = new (r("Deferred"))();
      return (
        o("SharedWorkerEventManager").registerWorkerSelfTerminationListener(
          i,
          function (e, n, r, i) {
            (a == null ||
              a.addAnnotations({ string: { selfTerminationError: i } }),
              o("SharedWorkerLoggingUtils").logSelfTermination(t, e, n, r),
              l.reject(new c(n)));
          },
          { once: !0 },
        ),
        p(i, t, a),
        i.port.start(),
        o("SharedWorkerEventManager").emitConnectionAckRequest(i),
        a == null || a.markPoint("read_dynamic_data"),
        r("promiseDone")(
          w(n, !1, a).then(
            function (e) {
              var t = e.hrp;
              (a == null || a.markEventStart("hrp_init"),
                o("SharedWorkerEventManager").emitHrpInit(
                  i,
                  { hrp: t.hrp, js_env: t.js_env, isDev: !1 },
                  a,
                ));
            },
            function (e) {
              var t = r("getErrorSafe")(e);
              a == null ||
                a.addAnnotations({ string: { hrpInitErr: t.toString() } });
            },
          ),
        ),
        o("SharedWorkerEventManager").registerExecuteWorkerAckListener(
          i,
          a,
          function (e) {
            var t = e.err,
              n = e.isFirstInit,
              i = e.workerRev,
              s = e.workerSpinMode,
              u = e.workerSpinTime;
            (o("SharedWorkerLoggingUtils").logExecuteAck(a, u, t, n, i, s),
              t != null || i == null || u == null
                ? l.reject(
                    r("err")(t != null ? t : "no worker rev or spin time"),
                  )
                : l.resolve({ rev: i, spinTime: u }));
          },
        ),
        a == null || a.markEventStart("execute_worker"),
        o("SharedWorkerEventManager").emitExecuteWorker(i),
        l.getPromise().then(function (e) {
          var t = e.rev,
            n = e.spinTime;
          return { worker: i, rev: t, spinTime: n };
        })
      );
    }
    function f(e, t, n, a, i, l) {
      var s = new (r("Deferred"))();
      return (
        o("SharedWorkerEventManager").registerGetWorkerRevListener(
          e,
          l,
          function (e) {
            var u = e.rev,
              c = e.spinTime;
            r("promiseDone")(
              o("SharedWorkerStorageManager")
                .saveSharedWorkerReference(
                  n,
                  {
                    url: t,
                    rev: u,
                    spin_time: c,
                    version: i.version,
                    rsrcBundleUrl: i.getJSModuleBundleResource().url,
                    sandboxOnlyChecksum: i.sandboxOnlyChecksum,
                  },
                  l,
                )
                .then(function () {
                  return o(
                    "SharedWorkerStorageManager",
                  ).getSharedWorkerReference(n, l);
                })
                .then(function (e) {
                  r("logSharedWorkerInitStep")(
                    n,
                    e,
                    i.resourceUrlForLogging,
                    "after_worker_reference_save",
                  );
                }),
              function () {
                (l.markEventEnd("get_worker_rev", {
                  bool: { successfullySavedWorkerRef: !0 },
                }),
                  s.resolve(),
                  a());
              },
              function (e) {
                (l.markEventEnd("get_worker_rev", {
                  bool: { successfullySavedWorkerRef: !1 },
                }),
                  s.reject(e),
                  r("handleWorkerWriteError")(e),
                  a());
              },
            );
          },
        ),
        l.markEventStart("get_worker_rev"),
        o("SharedWorkerEventManager").emitGetRev(e),
        s.getPromise()
      );
    }
    function g(e, t, n) {
      var a = [],
        i = function (r, i, l) {
          (a.forEach(function (e) {
            return e();
          }),
            t(r, i, l),
            o("SharedWorkerUptimeTracker").stopUptimeTracking(n));
        };
      (a.push(o("SharedWorkerEventManager").registerForwardListeners(e)),
        a.push(
          o("SharedWorkerEventManager").registerWorkerShutdownListener(
            e,
            function (e) {
              var t = e.reason,
                r = e.workerID;
              o("SharedWorkerLoggingUtils").logShutdown(n, null, t, r);
              var a =
                t === "dynamic_string_worker_rollback"
                  ? "requested-upgrade"
                  : t;
              i(a, r, "sw-shutdown");
            },
          ),
        ),
        a.push(
          o("SharedWorkerEventManager").registerWorkerSelfTerminationListener(
            e,
            function (e, t, n) {
              i(t, n, "self-terminate");
            },
          ),
        ),
        o("SharedWorkerDevChangeManager").trackCreatedWorker(n),
        o("SharedWorkerUptimeTracker").startUptimeTracking(e, n),
        r("logSharedWorkerInitStep")(n, null, null, "create_worker_end"));
    }
    function h(e, t, n, r, o, a) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l) {
            (l.addAnnotations({ string: { initFlow: "use_existing_ref" } }),
              r("logSharedWorkerInitStep")(
                e,
                null,
                null,
                "using_existing_worker_ref",
              ));
            var s = o("SharedWorkerMigrationUtils").isLegacyWorkerURL(t.url),
              u = yield t.version === 2
                ? s
                  ? _(t.url, e, n.getJSModuleBundleResource(), l)
                  : o("SharedWorkerV2ResourceExperimental").startV2Worker(
                      t.url,
                      e,
                      n.getJSModuleBundleResource(),
                      l,
                    )
                : d(t.url, e, n.getJSModuleBundleResource(), l),
              c = u.worker;
            return (
              a(),
              t.version === 2 && !s && f(c, t.url, e, a, n, l),
              g(c, i, e),
              c
            );
          },
        )),
        y.apply(this, arguments)
      );
    }
    function C(e, t, n, r) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            n.markPoint("terminate_on_upgrade");
            var i = new (r("Deferred"))(),
              l = o("SharedWorkerMigrationUtils").isStatusLockHeld(e);
            if (
              (yield o(
                "SharedWorkerMigrationUtils",
              ).isDynamicStringWorkerRunning(e)) &&
              r("supportsNativeWebLock")() &&
              a === !1
            )
              (i.resolve(),
                n.addAnnotations({
                  string: {
                    oldWorkerShutdown: "not_needed_for_dynamic_string",
                  },
                }));
            else if (self.BroadcastChannel != null) {
              var s = P(e);
              (s.postMessage({
                type: "terminate",
                reason: "requested-upgrade",
                pageID: r("pageID"),
              }),
                i.resolve(),
                n.addAnnotations({
                  string: { oldWorkerShutdown: "broadcast" },
                }));
            } else if (yield l) {
              var u;
              (t.version === 2 && r("supportsModuleWorker")(!0)
                ? (u = new SharedWorker(t.url, { name: e, type: "module" }))
                : (u = new SharedWorker(t.url, e)),
                o("SharedWorkerEventManager").registerWorkerShutdownListener(
                  u,
                  function (e) {
                    var t = e.isInitialized,
                      l = e.workerID;
                    (a
                      ? r("setTimeout")(function () {
                          (n.markEventEnd("old_worker_shutdown", {
                            string: { oldWorkerID: l },
                            bool: { oldWorkerWasInitialized: t },
                          }),
                            i.resolve());
                        }, o("SharedWorkerV2ResourceExperimental").DELAY_FOR_WORKER_SHUTDOWN_MS)
                      : (n.markEventEnd("old_worker_shutdown", {
                          string: { oldWorkerID: l },
                          bool: { oldWorkerWasInitialized: t },
                        }),
                        i.resolve()),
                      n.addAnnotations({
                        string: { oldWorkerShutdown: "success" },
                      }));
                  },
                  { once: !0 },
                ),
                n.markEventStart("old_worker_shutdown"),
                u.port.start(),
                o("SharedWorkerEventManager").emitWorkerShutdown(u, {
                  upgrade: !0,
                }));
            } else
              (i.resolve(),
                n.addAnnotations({
                  string: { oldWorkerShutdown: "not_needed" },
                }));
            a === !0 ? yield i.getPromise() : i.resolve();
          },
        )),
        b.apply(this, arguments)
      );
    }
    function v(e, t, n, r, o, a, i) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, o, a, i) {
            return (
              a.addAnnotations({ string: { initFlow: "upgrade_worker_ref" } }),
              yield C(e, t, a, i),
              L(e, n, r, o, a, "upgrading_worker_ref")
            );
          },
        )),
        S.apply(this, arguments)
      );
    }
    function R(e, t, n, r, o) {
      return (
        o.addAnnotations({ string: { initFlow: "new_worker_ref" } }),
        L(e, t, n, r, o, "new_worker_ref")
      );
    }
    function L(e, t, n, r, o, a) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l) {
            (r("logSharedWorkerInitStep")(e, null, null, l),
              (yield o("SharedWorkerMigrationUtils").isStatusLockHeld(e)) &&
                r("FBLogger")("worker").info(
                  "Trying to create a worker %s while old one is still running",
                  e,
                ));
            var s = yield t.createSharedWorker(),
              u = s[0],
              c = s[1].worker;
            return (
              l === "upgrading_worker_ref" &&
                (yield o(
                  "SharedWorkerStorageManager",
                ).removeSharedWorkerReference(e, i)),
              yield f(c, u, e, n, t, i),
              g(c, a, e),
              c
            );
          },
        )),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      var n = o("SharedWorkerDevChangeManager").shouldUseStorageWorkerForDev(
          e.name,
          { storageWorkerResource: t, tabResource: e },
        ),
        a = t.rev,
        i = t.spin_time,
        l = t.version;
      return (
        a >= r("SiteData").client_revision &&
        (e.version === l ||
          i >= r("SiteData")[r("StaticSiteData").spin_time_key]) &&
        n
      );
    }
    function I(e, t, n, r, o, a) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l) {
            a.markEventStart("create_worker");
            var s = e.name;
            (o("SharedWorkerUptimeTracker").stopUptimeTracking(s),
              a.addAnnotations({
                bool: {
                  workerAlreadyRunning: r("supportsNativeWebLock")()
                    ? yield o("SharedWorkerMigrationUtils").isStatusLockHeld(s)
                    : null,
                },
              }));
            var u = r("supportsNativeWebLock")()
              ? yield o("SharedWorkerMigrationUtils").isStatusLockHeld(s)
              : !0;
            if (!i && e.version === 2) return W(e, t, n, a, l);
            var c = yield o(
              "SharedWorkerStorageManager",
            ).getSharedWorkerReference(s, a);
            r("logSharedWorkerInitStep")(
              s,
              c,
              e.resourceUrlForLogging,
              "create_worker_start",
            );
            var d =
                c != null &&
                o("SharedWorkerMigrationUtils").isLegacyWorkerURL(
                  c == null ? void 0 : c.url,
                ),
              m = i && u === !1 && d;
            if (c == null || m) return R(s, e, t, n, a);
            var p = c.rev,
              _ = c.spin_time,
              f = c.version;
            return (
              a.addAnnotations({
                int: {
                  storageWorkerSpinTime: _,
                  storageWorkerVersion: f,
                  storageWorkerRev: p,
                },
              }),
              k(e, c) ? h(s, c, e, t, n, a) : v(s, c, e, t, n, a, i)
            );
          },
        )),
        T.apply(this, arguments)
      );
    }
    function D(t, a, i, l) {
      l === void 0 && (l = 0);
      var s = t.name,
        u = i != null ? i : {},
        d = u.onQPLEvent,
        m = u.reason,
        p = r("buildSharedWorkerInitQPLLogger")(d);
      (p.start({
        version: 2,
        workerName: s,
        callReason: m,
        experimental_init: i == null ? void 0 : i.useDynamicStringInit,
      }),
        p.addAnnotations({
          bool: { usingModuleWorker: r("supportsModuleWorker")(!0) },
        }));
      var f = new (r("Deferred"))(),
        g = function (u) {
          r("promiseDone")(
            I(
              {
                name: s,
                version: 2,
                getJSModuleBundleResource: function () {
                  return t;
                },
                sandboxOnlyChecksum: t.sandboxOnlyChecksum,
                createSharedWorker:
                  (i == null ? void 0 : i.useDynamicStringInit) === !0
                    ? n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* () {
                          var e = r(
                            "createSharedWorkerV2BundleUrlExperimental",
                          )(s);
                          return [
                            e,
                            yield o(
                              "SharedWorkerV2ResourceExperimental",
                            ).startV2Worker(e, s, t, p),
                          ];
                        },
                      )
                    : n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* () {
                          var e = o(
                            "createSharedWorkerV2BundleUrl",
                          ).createSharedWorkerV2BundleUrl();
                          return [e, yield _(e, s, t, p)];
                        },
                      ),
              },
              u,
              a,
              p,
              (i == null ? void 0 : i.useDynamicStringInit) === !0,
              l,
            ),
            function (e) {
              (p.markEventEnd("create_worker"), p.endSuccess(), f.resolve(e));
            },
            function (e) {
              var t = typeof e == "string" ? r("err")(e) : e;
              (f.reject(t), u());
            },
          );
        };
      return (
        o("SharedWorkerLockManager").withWorkerLock(g, {
          workerQPLLogger: p,
          onLockTimeout: function () {
            return f.reject(r("err")("Worker lock timeout"));
          },
          onLockFail: function (t) {
            f.reject(t);
          },
        }),
        f.getPromise().catch(function (o) {
          if (o instanceof c && l < 2)
            return (
              p.endCancel({
                string: { workerInitCancelReason: o.message },
                int: { workerInitRetry: l },
              }),
              new (e || (e = n("Promise")))(function (e, n) {
                r("setTimeout")(
                  function () {
                    r("promiseDone")(D(t, a, i, l + 1), e, n);
                  },
                  l === 0 ? 200 : 500,
                );
              })
            );
          throw (
            p.endFailure("worker_init_failure", {
              string: { workerInitFailureReason: o.message, errorName: o.name },
            }),
            o
          );
        })
      );
    }
    function x(e, t, n) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          var l = a != null ? a : t.name,
            u = new (r("Deferred"))(),
            c = r("buildSharedWorkerTerminateQPLLogger")();
          if (
            (c.start({ workerName: l }),
            r("promiseDone")(
              r("supportsNativeWebLock")()
                ? o("SharedWorkerMigrationUtils").isStatusLockHeld(l)
                : (e || (e = n("Promise"))).resolve(void 0),
              function (e) {
                return c.addAnnotations({ bool: { workerAlreadyRunning: e } });
              },
            ),
            c.addAnnotations({
              string: { reason: i, terminatingPageId: r("pageID") },
            }),
            self.BroadcastChannel != null)
          ) {
            var m = P(l);
            return (
              m.postMessage({
                type: "terminate",
                reason: i,
                pageID: r("pageID"),
              }),
              r("promiseDone")(
                o("SharedWorkerStorageManager")
                  .removeSharedWorkerReference(l, c)
                  .then(function () {
                    (c.endSuccess(), u.resolve());
                  }),
              ),
              u.getPromise()
            );
          }
          return (
            o("SharedWorkerLockManager").withWorkerLock(
              function (a) {
                r("promiseDone")(
                  o("SharedWorkerStorageManager")
                    .getSharedWorkerReference(l, c)
                    .then(function (r) {
                      if (
                        (c.markPoint("read_worker_reference", {
                          int: {
                            storageWorkerVersion:
                              r == null ? void 0 : r.version,
                          },
                          bool: { storageReferenceExists: r != null },
                        }),
                        r != null)
                      ) {
                        var a = o(
                          "SharedWorkerMigrationUtils",
                        ).isLegacyWorkerURL(r.url);
                        c.addAnnotations({ bool: { isLegacy: a } });
                        var i =
                            r.version === 2
                              ? a
                                ? _(r.url, l, t, void 0).then(function (e) {
                                    var t = e.worker;
                                    return t;
                                  })
                                : o("SharedWorkerV2ResourceExperimental")
                                    .startV2Worker(r.url, l, t, void 0)
                                    .then(function (e) {
                                      var t = e.worker;
                                      return t;
                                    })
                              : d(r.url, l, t).then(function (e) {
                                  var t = e.worker;
                                  return t;
                                }),
                          s = (e || (e = n("Promise"))).resolve(null);
                        return s.then(function () {
                          return i;
                        });
                      }
                      return (c.markPoint("storage_resource_empty"), null);
                    }),
                  function (e) {
                    try {
                      if (
                        (a(),
                        o("SharedWorkerUptimeTracker").stopUptimeTracking(l),
                        e == null)
                      ) {
                        (c.endSuccess(), u.resolve());
                        return;
                      }
                      (o(
                        "SharedWorkerEventManager",
                      ).registerWorkerShutdownListener(
                        e,
                        function (e) {
                          var t = e.isInitialized,
                            n = e.workerID;
                          c.markPoint("worker_shut_down", {
                            string: { workerID: n },
                            bool: { wasInitialized: t },
                          });
                          var a = o(
                            "SharedWorkerStorageManager",
                          ).removeSharedWorkerReference(l, c);
                          (r("promiseDone")(
                            a,
                            function () {
                              return c.endSuccess();
                            },
                            function (e) {
                              c.endFailure(
                                "failed_to_remove_worker_reference",
                                { string: { errorDescription: e.toString() } },
                              );
                            },
                          ),
                            u.resolve());
                        },
                        { once: !0 },
                      ),
                        o("SharedWorkerEventManager").emitWorkerShutdown(e, {
                          reason: i,
                        }));
                    } catch (e) {
                      (c.endFailure("terminate_worker_failure", {
                        string: { workerTerminateFailReason: e.message },
                      }),
                        u.reject(e.message));
                    }
                  },
                  function (e) {
                    (r("FBLogger")("worker")
                      .catching(r("getErrorSafe")(e))
                      .mustfix("Failed to terminate worker"),
                      c.endFailure("connect_to_worker_failure", {
                        string: { workerTerminateFailReason: e.message },
                      }),
                      u.reject(e.message),
                      a());
                  },
                );
              },
              { workerQPLLogger: c },
            ),
            r("setTimeout")(function () {
              return u.reject();
            }, s),
            u.getPromise()
          );
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return new self.BroadcastChannel(u + "_" + e);
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "SharedWorkerStorageManager",
          ).getSharedWorkerReference(e.name);
          return t != null;
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t, n) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a;
          n == null || n.markEventStart("load_hrp");
          var i = yield o("WebWorkerV2DynamicData").readDynamicDataForWorker(
              e,
              t,
            ),
            l = i.data,
            s = i.time;
          n == null || n.markEventEnd("load_hrp");
          try {
            var u,
              c = r("justknobx")._("1979");
            (n == null ||
              n.markEventStart("prefetch_worker_scripts", {
                bool: { prefetchWorkerScripts: c },
                int: {
                  resourcesCount:
                    (u = l.hrp.allResources) == null ? void 0 : u.length,
                },
              }),
              c && o("BootloaderPreloader").preloadWorkerJSFromHRP(l.hrp));
          } catch (t) {
            var d = r("getErrorSafe")(t);
            (n == null ||
              n.markPoint("prefetch_worker_scripts_fail", {
                string: { hrpInitErr: d.toString() },
              }),
              r("FBLogger")("worker")
                .catching(d)
                .warn("Failed to preload worker %s JS from HRP", e.name));
          }
          return (
            n == null || n.markEventEnd("prefetch_worker_scripts"),
            {
              hrp: l,
              time: s,
              rev:
                (a = l.hrp.hsrp) == null ||
                (a = a.hblp) == null ||
                (a = a.consistency) == null
                  ? void 0
                  : a.rev,
            }
          );
        })),
        A.apply(this, arguments)
      );
    }
    function F(e, t, n, a) {
      return o("SharedWorkerStorageManager").getOrUpdateWorkerReference(
        e.name,
        function (o) {
          if ((n.markPoint("worker_reference_retrieved"), o == null)) return t;
          var i = a != null && a > 0 && r("gkx")("6579");
          return !i && k(e, o) ? o : (C(e.name, o, n, !1), t);
        },
        n,
      );
    }
    function O(e, t) {
      if (self.BroadcastChannel != null) {
        var n = P(e),
          o = function (n) {
            var e = n.data;
            if (
              typeof e == "object" &&
              (e == null ? void 0 : e.type) === "terminate"
            ) {
              var o = typeof e.reason == "string" ? e.reason : "unknown",
                a = typeof e.pageID == "string" ? e.pageID : null;
              if (a != null && a === r("pageID") && o === "requested-upgrade")
                return;
              t(o);
            }
          };
        return (
          n.addEventListener("message", o),
          function () {
            return n.removeEventListener("message", o);
          }
        );
      }
      return function () {};
    }
    function B(e, t, n, a) {
      var i = new (r("Deferred"))();
      return (
        o("SharedWorkerStorageManager")
          .getOrUpdateWorkerReference(e, function (e) {
            return e == null || e.url !== t
              ? (i.resolve("url-was-changed"), e)
              : e.rev !== n || e.spin_time !== a
                ? babelHelpers.extends({}, e, { rev: n, spin_time: a })
                : e;
          })
          .then(function () {
            i.resolve("success");
          }),
        i.getPromise()
      );
    }
    function W(e, t, n, r, o) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, s) {
            if (t.version !== 2) throw r("err")("Worker version must be 2");
            var u = t.name,
              d = yield w(t.getJSModuleBundleResource(), !1, l),
              _ = d.rev;
            if (_ == null) throw r("err")("HRP rev or spin time is null");
            var f = {
                url: o(
                  "createSharedWorkerV2BundleUrl",
                ).createSharedWorkerV2BundleUrl(),
                rev: _,
                spin_time: d.time,
                version: t.version,
                rsrcBundleUrl: t.getJSModuleBundleResource().url,
                sandboxOnlyChecksum: t.sandboxOnlyChecksum,
              },
              h = new (r("Deferred"))(),
              y = new (r("Deferred"))(),
              C = [];
            try {
              var b = function (t) {
                (y.reject(t), h.reject(t));
              };
              (C.push(
                O(u, function (e) {
                  b(new c("broadcast-" + e));
                }),
              ),
                l == null || l.markEventStart("get_worker_reference"));
              var v = yield F(t, f, l, s);
              l == null || l.markEventEnd("get_worker_reference");
              var S = m(v.url, u, l);
              (C.push(
                o("SharedWorkerEventManager").registerConnectionAckListener(
                  S,
                  function (e, t, n) {
                    (l == null ||
                      l.addAnnotations({
                        string: { connectedFrom: e, workerID: t },
                      }),
                      h.resolve({
                        hrpStatus: n != null ? n : "no-hrp",
                        workerID: t,
                      }));
                  },
                ),
              ),
                C.push(
                  o(
                    "SharedWorkerEventManager",
                  ).registerWorkerSelfTerminationListener(
                    S,
                    function (e, t, n, r) {
                      (l == null ||
                        l.addAnnotations({
                          string: { selfTerminationError: r },
                        }),
                        o("SharedWorkerLoggingUtils").logSelfTermination(
                          u,
                          e,
                          t,
                          n,
                        ),
                        b(new c(t)));
                    },
                    { once: !0 },
                  ),
                ),
                C.push(
                  o("SharedWorkerEventManager").registerWorkerShutdownListener(
                    S,
                    function (e) {
                      var t = e.reason,
                        n = e.workerID;
                      (o("SharedWorkerLoggingUtils").logShutdown(u, null, t, n),
                        b(new c(t != null ? t : "sw-shutdown-unknown")));
                    },
                  ),
                ),
                C.push.apply(C, p(S, u, l)),
                l.markEventStart("worker_connection"),
                S.port.start(),
                o("SharedWorkerEventManager").emitConnectionAckRequest(S));
              var R = yield h.getPromise(),
                L = R.hrpStatus;
              if ((l.markEventEnd("worker_connection"), L === "no-hrp")) {
                l == null || l.markPoint("read_dynamic_data");
                var E = f.rev >= v.rev,
                  k = E
                    ? (e || (e = n("Promise"))).resolve(d)
                    : w(t.getJSModuleBundleResource(), !0, l);
                r("promiseDone")(
                  k.then(
                    function (e) {
                      (l == null || l.markEventStart("hrp_init"),
                        o("SharedWorkerEventManager").emitHrpInit(
                          S,
                          { hrp: e.hrp.hrp, js_env: e.hrp.js_env, isDev: !1 },
                          l,
                        ));
                    },
                    function (e) {
                      var t = r("getErrorSafe")(e);
                      (l == null ||
                        l.markPoint("hrp_init_fail", {
                          string: { hrpInitErr: t.toString() },
                        }),
                        b(t));
                    },
                  ),
                );
              }
              (C.push(
                o("SharedWorkerEventManager").registerExecuteWorkerAckListener(
                  S,
                  l,
                  function (e) {
                    var t = e.err,
                      n = e.isFirstInit,
                      a = e.workerRev,
                      i = e.workerSpinMode,
                      s = e.workerSpinTime;
                    (o("SharedWorkerLoggingUtils").logExecuteAck(
                      l,
                      s,
                      t,
                      n,
                      a,
                      i,
                    ),
                      t != null || s == null || a == null
                        ? y.reject(
                            r("err")(
                              t != null ? t : "no worker rev or spin time",
                            ),
                          )
                        : y.resolve({ workerRev: a, workerSpinTime: s }));
                  },
                ),
              ),
                l == null || l.markEventStart("execute_worker"),
                o("SharedWorkerEventManager").emitExecuteWorker(S));
              var I = yield y.getPromise(),
                T = I.workerRev,
                D = I.workerSpinTime;
              l == null || l.markEventStart("update_worker_ref");
              var x = yield B(u, v.url, T, D);
              if (
                (l == null ||
                  l.markEventEnd("update_worker_ref", {
                    string: { updateWorkerRef: x },
                  }),
                x === "url-was-changed")
              )
                throw (
                  o("SharedWorkerEventManager").emitWorkerShutdown(S, {
                    reason: "url-was-changed",
                  }),
                  new c("url-was-changed")
                );
              return (a(), g(S, i, u), S);
            } finally {
              C.forEach(function (e) {
                return e();
              });
            }
          },
        )),
        q.apply(this, arguments)
      );
    }
    ((l.SHARED_WORKER_BROADCAST_CHANNEL = u),
      (l.SelfTerminationError = c),
      (l.createPushSafeSharedWebWorkerV2Async = D),
      (l.terminateSharedWorker = x),
      (l.doesSharedWorkerReferenceExist = N));
  },
  98,
);
