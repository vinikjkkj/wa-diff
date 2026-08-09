__d(
  "SharedWorkerMigrationUtils",
  [
    "ConstUriUtils",
    "Deferred",
    "FBLogger",
    "Promise",
    "SharedWorkerEventManager",
    "SharedWorkerStatusLock",
    "SharedWorkerStorageManager",
    "asyncToGeneratorRuntime",
    "clearTimeout",
    "createSharedWorkerV2BundleUrlExperimental",
    "err",
    "getErrorSafe",
    "setTimeout",
    "supportsModuleWorker",
    "supportsNativeWebLock",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!r("supportsNativeWebLock")()) return !0;
          var t = yield self.navigator.locks.query();
          return t.held.some(function (t) {
            return (
              t.name ===
              o("SharedWorkerStatusLock").getDynamicStringInitLockName(e)
            );
          });
        })),
        u.apply(this, arguments)
      );
    }
    function c() {
      return r("supportsNativeWebLock")();
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!r("supportsNativeWebLock")()) return !0;
          var t = yield self.navigator.locks.query();
          return t.held.some(function (t) {
            return t.name === o("SharedWorkerStatusLock").getStatusLockName(e);
          });
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!r("supportsNativeWebLock")()) return !0;
          var n = yield self.navigator.locks.query();
          return n.held.some(function (n) {
            return (
              n.name ===
              o("SharedWorkerStatusLock").getWorkerIdStatusLockName(e, t)
            );
          });
        })),
        _.apply(this, arguments)
      );
    }
    var f = { SharedWorkerBundle: !0, MAWMainWebWorkerV2Bundle: !0 };
    function g(e) {
      var t;
      return (t = f[e]) != null ? t : !1;
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!(yield s(e))) return !1;
          var t = new (r("Deferred"))(),
            n = r("createSharedWorkerV2BundleUrlExperimental")(e),
            a = n,
            i = r("supportsModuleWorker")(!0)
              ? new SharedWorker(a, { name: e, type: "module" })
              : new SharedWorker(a, e);
          return (
            o("SharedWorkerEventManager").registerWorkerShutdownListener(
              i,
              function (e) {
                t.resolve(!0);
              },
              { once: !0 },
            ),
            o("SharedWorkerEventManager").emitWorkerShutdown(i, {
              upgrade: !1,
              reason: "dynamic_string_worker_rollback",
            }),
            i.port.start(),
            t.getPromise()
          );
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      var t = o("ConstUriUtils").getUri(e);
      return t != null && t.getQueryParam("hash") != null;
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.logger,
            i = t.name;
          try {
            var l = yield (e || (e = n("Promise"))).all([d(i), s(i)]),
              u = l[0],
              c = l[1];
            if (!u || (r("supportsNativeWebLock")() && c)) {
              (a.markPoint("legacy_termination_skipped"),
                a.addAnnotations({
                  bool: {
                    dynamicStringWorkerAlreadyRunning: c,
                    workerAlreadyRunning: u,
                    native_locks: r("supportsNativeWebLock")(),
                  },
                }));
              return;
            }
            var m = yield o(
              "SharedWorkerStorageManager",
            ).getSharedWorkerReference(i);
            if (
              (a.markPoint("storage_read"),
              a.addAnnotations({ bool: { storageResourceSet: m != null } }),
              m == null)
            )
              return;
            try {
              (yield o(
                "SharedWorkerStorageManager",
              ).removeSharedWorkerReference(i),
                a.markPoint("storage_cleaned"));
            } catch (e) {
              (a.markPoint("storage_error"),
                a.addAnnotations({ string: { storageError: String(e) } }),
                r("FBLogger")("worker")
                  .catching(r("getErrorSafe")(e))
                  .mustfix("Failed to remove reference from storage."));
            }
            var p = C(m.url);
            if (
              (a.markPoint(
                p ? "legacy_termination_start" : "termination_skipped",
              ),
              p)
            ) {
              var _ = new (r("Deferred"))(),
                f = m.url,
                g = r("supportsModuleWorker")(!0)
                  ? new SharedWorker(f, { name: i, type: "module" })
                  : new SharedWorker(f, i),
                h = function () {
                  (a.markPoint("legacy_termination_end"), _.resolve(!0));
                };
              (o("SharedWorkerEventManager").registerWorkerShutdownListener(
                g,
                h,
                { once: !0 },
              ),
                o(
                  "SharedWorkerEventManager",
                ).registerWorkerSelfTerminationListener(g, h, { once: !0 }),
                g.port.start(),
                o("SharedWorkerEventManager").emitWorkerShutdown(g, {
                  upgrade: !1,
                  reason: "maw-request-refresh",
                }));
              var y = r("setTimeout")(function () {
                (a.markPoint("legacy_termination_timeout"),
                  _.reject(
                    r("err")(
                      "Failed to close Shared Web Worker properly. SelfTerminationTimeout was exceeded.",
                    ),
                  ));
              }, 1e3);
              (yield _.getPromise(), r("clearTimeout")(y));
            }
          } catch (e) {
            (a.markPoint("legacy_check_and_termination_error"),
              a.addAnnotations({ string: { legacyCheckError: String(e) } }),
              r("FBLogger")("worker")
                .catching(r("getErrorSafe")(e))
                .mustfix(
                  "Failed to check storage and possibly terminate legacy worker.",
                ));
          }
        })),
        v.apply(this, arguments)
      );
    }
    ((l.isDynamicStringWorkerRunning = s),
      (l.supportsNativeWebLocks = c),
      (l.isStatusLockHeld = d),
      (l.isWorkerIdStatusLockHeld = p),
      (l.shouldCheckForDynamicStringWorker = g),
      (l.maybeTerminateDynamicStringWorker = h),
      (l.isLegacyWorkerURL = C),
      (l.checkStorageAndTerminateLegacyWorker = b));
  },
  98,
);
