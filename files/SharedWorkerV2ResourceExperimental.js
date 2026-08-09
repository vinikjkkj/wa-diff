__d(
  "SharedWorkerV2ResourceExperimental",
  [
    "Deferred",
    "Promise",
    "SharedWorkerBundleResource",
    "SharedWorkerDevChangeManager",
    "SharedWorkerEventManager",
    "SharedWorkerLoggingUtils",
    "SharedWorkerMigrationUtils",
    "SharedWorkerUptimeTracker",
    "SiteData",
    "StaticSiteData",
    "asyncToGeneratorRuntime",
    "buildSharedWorkerInitQPLLogger",
    "buildSharedWorkerTerminateQPLLogger",
    "createSharedWorkerV2BundleUrlExperimental",
    "justknobx",
    "pageID",
    "promiseDone",
    "setTimeout",
    "supportsModuleWorker",
    "supportsNativeWebLock",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 50,
      u = 5e3,
      c = 2e3;
    function d(e, t, n, a) {
      return o(
        "SharedWorkerDevChangeManager",
      ).shouldUpgradeWorkerForDevExperimental(e) && !a
        ? !0
        : t < r("SiteData").client_revision &&
            n < r("SiteData")[r("StaticSiteData").spin_time_key];
    }
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          var l = t.name,
            u = r("buildSharedWorkerInitQPLLogger")(
              i == null ? void 0 : i.onQPLEvent,
            );
          (u.start({
            version: 2,
            workerName: l,
            experimental_init: !0,
            callReason: i == null ? void 0 : i.reason,
            migrationEnabled: !0,
          }),
            u.markEventStart("create_worker"),
            r("supportsNativeWebLock")() &&
              r("promiseDone")(
                o("SharedWorkerMigrationUtils")
                  .isStatusLockHeld(l)
                  .then(function (e) {
                    u.addAnnotations({ bool: { workerAlreadyRunning: e } });
                  }),
              ),
            (i == null ? void 0 : i.migratedWorker) === !0 &&
              (yield o(
                "SharedWorkerMigrationUtils",
              ).checkStorageAndTerminateLegacyWorker({ name: l, logger: u })));
          var c = yield _(t, u),
            d = c.needsUpgrade,
            m = c.worker;
          return new (e || (e = n("Promise")))(function (e, n) {
            var i = function (n) {
              return e(g(n, l, u, a));
            };
            d
              ? (o("SharedWorkerEventManager").registerWorkerShutdownListener(
                  m,
                  function (e) {
                    var n = e.isInitialized,
                      o = e.workerID;
                    (u.markEventEnd("old_worker_shutdown", {
                      string: { oldWorkerID: o },
                      bool: { oldWorkerWasInitialized: n },
                    }),
                      r("setTimeout")(function () {
                        return _(t, u).then(function (e) {
                          var t = e.worker;
                          return i(t);
                        });
                      }, s));
                  },
                  { once: !0 },
                ),
                u.markEventStart("old_worker_shutdown"),
                o("SharedWorkerEventManager").emitWorkerShutdown(m, {
                  upgrade: !0,
                }))
              : i(m);
          });
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      var n = e.name,
        a = r("createSharedWorkerV2BundleUrlExperimental")(n),
        i = a,
        l = r("supportsModuleWorker")(!0) ? "module" : "classic",
        s = new SharedWorker(i, { name: n, type: l }),
        u = new Set();
      o("SharedWorkerEventManager").registerWorkerInitPointsListener(
        s,
        function (e) {
          u.has(e) ||
            (u.add(e), t == null || t.markPoint("worker_init_point_" + e));
        },
      );
      var c = new (r("Deferred"))();
      return (
        o("SharedWorkerEventManager").registerGetWorkerRevListener(
          s,
          t,
          function (r) {
            var o = r.rev,
              a = r.spinTime,
              i = r.workerChecksum,
              l = d(n, o, a, e.sandboxOnlyChecksum === i);
            (c.resolve(l),
              l
                ? t.addAnnotations({
                    int: { oldWorkerRev: o, oldWorkerSpinTime: a },
                  })
                : t.addAnnotations({
                    int: { workerRev: o, workerSpinTime: a },
                  }));
          },
        ),
        f(s, n, t),
        s.port.start(),
        o("SharedWorkerEventManager").emitConnectionAckRequest(s),
        c.getPromise().then(function (e) {
          return { worker: s, needsUpgrade: e };
        })
      );
    }
    function f(e, t, n) {
      return (
        e.addEventListener("error", function (e) {
          o("SharedWorkerLoggingUtils").logSharedWorkerError(n, e, t);
        }),
        o("SharedWorkerEventManager").registerForwardListeners(e),
        o("SharedWorkerEventManager").registerWorkerSelfTerminationListener(
          e,
          function (e, t, r, o) {
            n.endFailure("worker_init_failure", {
              string: { selfTerminationError: o, selfTerminationReason: t },
            });
          },
          { once: !0 },
        ),
        o("SharedWorkerEventManager").registerConnectionAckListener(
          e,
          function (e, t) {
            (n == null ||
              n.addAnnotations({ string: { connectedFrom: e, workerID: t } }),
              n == null || n.markPoint("worker_connection_established"));
          },
          { once: !0 },
        ),
        e
      );
    }
    function g(e, t, n, a) {
      return (
        o("SharedWorkerEventManager").registerWorkerShutdownListener(
          e,
          function (e) {
            var n = e.reason,
              i = e.workerID;
            (o("SharedWorkerLoggingUtils").logShutdown(t, null, n, i),
              n === "requested-upgrade"
                ? r("setTimeout")(function () {
                    return a == null ? void 0 : a(n, i);
                  }, 1e3)
                : n === "dynamic_string_worker_rollback"
                  ? a == null || a("maw_request_refresh", i)
                  : a == null || a(n, i),
              o("SharedWorkerUptimeTracker").stopUptimeTracking(t));
          },
        ),
        n.markEventEnd("create_worker"),
        n.endSuccess(),
        o("SharedWorkerUptimeTracker").startUptimeTracking(e, t),
        o("SharedWorkerDevChangeManager").trackCreatedWorker(t),
        e
      );
    }
    function h(t, a, i, l, s) {
      s === void 0 && (s = 0);
      var u = i.name,
        d = t,
        m = r("supportsModuleWorker")(!0) ? "module" : "classic",
        p = new SharedWorker(d, { name: u, type: m });
      (l == null || l.markPoint("shared_worker_construct_done"),
        l == null || l.addAnnotations({ string: { workerUrl: d.toString() } }));
      var _ = new (r("Deferred"))(),
        f = [];
      (f.push(
        o("SharedWorkerEventManager").registerConnectionAckListener(
          p,
          function (e, t) {
            (l == null ||
              l.addAnnotations({ string: { connectedFrom: e, workerID: t } }),
              l == null || l.markPoint("worker_connection_established"),
              _.resolve());
          },
          { once: !0 },
        ),
      ),
        f.push(
          o("SharedWorkerEventManager").registerWorkerInitPointsListener(
            p,
            function (e) {
              l == null || l.markPoint("worker_init_point_" + e);
            },
          ),
        ),
        f.push(o("SharedWorkerEventManager").registerForwardListeners(p)),
        o("SharedWorkerEventManager").emitConnectionAckRequest(p),
        p.addEventListener("error", function (e) {
          o("SharedWorkerLoggingUtils").logSharedWorkerError(l, e, a);
        }));
      var g = new (r("Deferred"))();
      return (
        f.push(
          o("SharedWorkerEventManager").registerGetWorkerRevListener(
            p,
            l,
            function (e) {
              var t = e.rev,
                n = e.spinTime;
              (l == null ||
                l.addAnnotations({
                  int: { initialWorkerRev: t, initialSpinTime: n },
                }),
                g.resolve({ worker: p, rev: t, spinTime: n }));
            },
          ),
        ),
        f.push(
          o("SharedWorkerEventManager").registerWorkerSelfTerminationListener(
            p,
            function (e, t, n, r) {
              (l == null ||
                l.addAnnotations({ string: { selfTerminationError: r } }),
                o("SharedWorkerLoggingUtils").logSelfTermination(a, e, t, n),
                g.reject(
                  new (o("SharedWorkerBundleResource").SelfTerminationError)(t),
                ));
            },
            { once: !0 },
          ),
        ),
        f.push(
          o("SharedWorkerEventManager").registerWorkerShutdownListener(
            p,
            function (e) {
              var t = e.reason,
                n = e.workerID;
              (l == null || l.addAnnotations({ string: { shutdownReason: t } }),
                o("SharedWorkerLoggingUtils").logShutdown(a, null, t, n),
                g.reject(
                  new (o("SharedWorkerBundleResource").SelfTerminationError)(
                    t != null ? t : "unknownShutdown",
                  ),
                ));
            },
            { once: !0 },
          ),
        ),
        p.port.start(),
        s === 0 &&
          r("justknobx")._("1707") &&
          (e || (e = n("Promise")))
            .race([
              _.getPromise().then(function () {
                return "success";
              }),
              new e(function (e) {
                r("setTimeout")(function () {
                  e("timeout");
                }, c);
              }),
            ])
            .then(function (e) {
              if (e === "timeout") {
                var n = p,
                  r = h(t, a, i, l, s + 1);
                (r.then(function (e) {
                  return g.resolve(e);
                }),
                  f.forEach(function (e) {
                    return e();
                  }),
                  n.port.close());
              }
            }),
        g.getPromise()
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.name,
            a = new (r("Deferred"))(),
            i = yield o("SharedWorkerMigrationUtils").isStatusLockHeld(n),
            l = r("buildSharedWorkerTerminateQPLLogger")();
          if (!i) {
            (l.start({ workerName: n }),
              l.markPoint("no_worker_running"),
              l.endSuccess());
            return;
          }
          (l.start({ workerName: n }),
            l.addAnnotations({
              string: { reason: t, terminatingPageId: r("pageID") },
            }));
          var s = r("createSharedWorkerV2BundleUrlExperimental")(n),
            c = s,
            d = r("supportsModuleWorker")(!0) ? "module" : "classic",
            m = new SharedWorker(c, { workerName: n, type: d });
          return (
            l.markPoint("worker_created"),
            o("SharedWorkerEventManager").registerWorkerShutdownListener(
              m,
              function (e) {
                var t = e.workerID;
                (l.markPoint("worker_shut_down", { string: { workerID: t } }),
                  l.endSuccess(),
                  o("SharedWorkerUptimeTracker").stopUptimeTracking(n),
                  a.resolve());
              },
              { once: !0 },
            ),
            m.port.start(),
            o("SharedWorkerEventManager").emitWorkerShutdown(m, { reason: t }),
            r("setTimeout")(function () {
              return a.reject();
            }, u),
            a.getPromise()
          );
        })),
        C.apply(this, arguments)
      );
    }
    ((l.DELAY_FOR_WORKER_SHUTDOWN_MS = s),
      (l.createPushSafeSharedWebWorkerV2Async = m),
      (l.startV2Worker = h),
      (l.terminateSharedWorker = y));
  },
  98,
);
